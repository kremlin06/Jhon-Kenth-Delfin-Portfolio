# Jhon Kenth Delfin — Portfolio

Personal portfolio of Jhon Kenth Delfin, a 4th-year BS Computer Science student.
Built with React, Vite, plain CSS and React Router. No UI framework, animation library or icon library.

Live site: https://kremlin06.github.io/Jhon-Kenth-Delfin-Portfolio/

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

## Pages

| Route | Page |
|---|---|
| `/` | Home: hero, selected projects, short About, contact prompt |
| `/projects` | All projects, plus a key to the status tags and labels |
| `/projects/phishguard`, `/projects/campus-ems`, `/projects/francis-egg` | One case study per project |
| `/about` | About and interests |
| `/skills` | Skills grouped by how they were used (no percentages) |
| `/background` | Education, certificates, work experience |
| `/contact` | Email, Facebook, Threads |

## Editing content

All copy lives in `src/content/`; components only render it. A `null` value renders nothing.

| File | Holds |
|---|---|
| `site.js` | Name, role, navigation, page titles and descriptions, optional resume link |
| `projects.js` | The three projects: status tags, role, stack, highlights, evidence labels |
| `skills.js` | Skills, split into "used in projects" and "studied" |
| `background.js` | Education, certificates, work experience |
| `about.js`, `home.js` | About and Home copy |
| `contact.js` | Contact channels |

## Content rules

- Every highlight on a project page is labelled **Implemented** (present in the code), **Current design** (intended
  behavior, not yet proven end to end) or **Design target** (a goal, not a measured result).
- No accuracy, speed, user or revenue figures appear anywhere.
- No project links to a repository or demo. PhishGuard and Francis Egg are private, and Campus EMS is hosted privately.
  Add a link in `src/content/projects.js` only once one should be public.
- Skills have no levels. "Studied" means coursework or smaller exercises.

## Design

Warm off-white background, one blue accent, Inter (self-hosted in `public/fonts`, SIL OFL licence alongside), thin
borders instead of boxes. The design tokens are in `src/styles/tokens.css`; components use only those tokens.

Smooth scrolling is enabled only when the visitor has not asked for reduced motion. Route changes and deep links jump
instantly, "On this page" links scroll smoothly, and targets stop below the sticky header. The logic is in
`src/hooks/useRouteFocus.js`.

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` lints, builds and publishes on every push to `main`.

- `vite.config.js` reads `BASE_PATH` (the workflow sets it from the Pages settings) so the site works at
  `https://<user>.github.io/<repository>/`, at a user site root, or on a custom domain.
- Pages is static hosting, so after each build the config writes a copy of `index.html` into a folder for every route
  listed in `src/App.jsx`, plus `404.html` for unknown addresses. Direct visits and refreshes therefore work. **When you
  add a route, add it to the `pages` list in `src/App.jsx`.**
- The build also writes `sitemap.xml` and `robots.txt`, and gives each route its own canonical URL. The public address is
  `SITE_URL` in `vite.config.js`; update it if the repository is renamed or a custom domain is added.

One-time setup on GitHub: Settings > Pages > Build and deployment > Source: **GitHub Actions**.

To check a sub-path build locally (PowerShell): `$env:BASE_PATH='/my-repo/'; npm run build; npm run preview`, then open
`http://localhost:4173/my-repo/`. Clear it afterwards with `$env:BASE_PATH=$null`.

## Notes

- This is a client-rendered site. Each route sets its own title and description in the browser, but crawlers that do not
  run JavaScript only see the tags in `index.html`.
- There is no `og:image` yet; add an absolute image URL in `index.html` when one exists.
