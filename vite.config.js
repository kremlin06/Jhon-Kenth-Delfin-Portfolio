import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import process from 'node:process' // imported explicitly because the ESLint config assumes browser globals
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { projects } from './src/content/projects.js'

const withTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`)

// Public address of the deployed site. Used for the canonical URL, og:url, sitemap.xml and robots.txt.
// Change it (or set SITE_URL when building) if the repository is renamed or a custom domain is added.
const SITE_URL = withTrailingSlash(process.env.SITE_URL ?? 'https://kremlin06.github.io/Jhon-Kenth-Delfin-Portfolio/')

// Path the site is served from: "/" locally and for user sites or custom domains, "/<repo>/" for a
// GitHub Pages project site. The deploy workflow sets BASE_PATH from the Pages settings.
function normalizeBase(value) {
  if (!value) return '/'
  return withTrailingSlash(value.startsWith('/') ? value : `/${value}`)
}

// Routes that get their own static page, read from the route list in src/App.jsx so the two cannot drift.
// "/projects/:slug" is expanded with the slugs from src/content/projects.js.
function routesFromApp(root) {
  const source = readFileSync(resolve(root, 'src/App.jsx'), 'utf8')
  const paths = [...source.matchAll(/^\s*\{\s*path:\s*"(\/[^"]*)"/gm)].map((match) => match[1])
  if (paths.length < 2) throw new Error('github-pages: could not read the route list from src/App.jsx')

  const routes = []
  for (const path of paths) {
    if (path === '/') continue // index.html is the home page
    if (path === '/projects/:slug') projects.forEach((project) => routes.push(`/projects/${project.slug}`))
    else if (path.includes(':')) console.warn(`github-pages: ${path} has a parameter, so it is served through 404.html`)
    else routes.push(path)
  }
  return routes
}

// GitHub Pages is static hosting and has no file for /projects/phishguard unless one is written. After the
// build this plugin:
//  - copies index.html into a folder for every known route, so Pages answers a direct visit or a refresh with a
//    real 200 (the site is client-rendered, so the copies are identical apart from their canonical URL);
//  - writes 404.html, which Pages shows for any other address: the app loads and draws its own "Page not found".
//    It is marked noindex and has no canonical URL;
//  - writes sitemap.xml and robots.txt from the same route list.
function githubPagesRoutes() {
  let root
  let outDir
  return {
    name: 'github-pages-routes',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const html = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      const withUrl = (url) =>
        html
          .replace(/(rel="canonical"\s+href=")[^"]*"/, `$1${url}"`)
          .replace(/(property="og:url"\s+content=")[^"]*"/, `$1${url}"`)

      const notFound = html
        .replace(/\s*<link rel="canonical"[^>]*>/, '')
        .replace(/\s*<meta property="og:url"[^>]*>/, '')
        .replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>')
      writeFileSync(resolve(outDir, '404.html'), notFound)

      const urls = [SITE_URL]
      for (const route of routesFromApp(root)) {
        const url = `${SITE_URL}${route.slice(1)}/`
        const target = resolve(outDir, `.${route}`, 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, withUrl(url))
        urls.push(url)
      }

      const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')
      writeFileSync(
        resolve(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
      )
      writeFileSync(resolve(outDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`)
    },
  }
}

// Replaces the __SITE_URL__ placeholders in index.html (canonical and og:url).
function siteUrlInHtml() {
  return { name: 'site-url-in-html', transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', SITE_URL) }
}

// https://vite.dev/config/
export default defineConfig({
  base: normalizeBase(process.env.BASE_PATH),
  plugins: [react(), siteUrlInHtml(), githubPagesRoutes()],
})
