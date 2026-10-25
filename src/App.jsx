import { matchPath, Route, Routes, useLocation } from "react-router";
import SiteFooter from "./components/SiteFooter/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import SkipLink from "./components/SkipLink/SkipLink.jsx";
import { getProject } from "./content/projects.js";
import { pageMeta, site } from "./content/site.js";
import { useRouteFocus } from "./hooks/useRouteFocus.js";
import About from "./pages/About/About.jsx";
import Background from "./pages/Background/Background.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Skills from "./pages/Skills/Skills.jsx";

// The routes. Anything else renders NotFound. Each page renders <h1 tabIndex={-1}> so useRouteFocus can
// focus it, and has an entry in pageMeta (src/content/site.js). Project pages build their meta from the
// project data instead (see metaFor).
const pages = [
  { path: "/", element: <Home /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:slug", element: <ProjectDetail /> },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/background", element: <Background /> },
  { path: "/contact", element: <Contact /> },
];

function metaFor(pathname) {
  const detail = matchPath({ path: "/projects/:slug", end: true }, pathname);
  if (detail) {
    const project = getProject(detail.params.slug);
    if (!project) return pageMeta.notFound;
    return { title: `${project.fullTitle} — ${site.name}`, description: project.summary };
  }

  const page = pages.find((item) => matchPath({ path: item.path, end: true }, pathname));
  return page ? pageMeta[page.path] : pageMeta.notFound;
}

export default function App() {
  const { pathname } = useLocation();
  useRouteFocus(metaFor(pathname));

  return (
    <div className="app">
      <SkipLink />
      <SiteHeader />
      <main id="main" className="app__main" tabIndex={-1}>
        {/* Keyed by path so each page gets the short fade-in (layout.css .page). */}
        <div className="page" key={pathname}>
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
