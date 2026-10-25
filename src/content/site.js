export const site = {
  name: "Jhon Kenth Delfin",
  role: "Computer Science Student & Aspiring Software Developer",
  intro:
    "I build software, web applications, and security-focused systems, and I'm continuing to develop my skills in software engineering and machine learning.",
  // Short status line under the hero buttons.
  standing: "4th-year BS Computer Science · STI College Balagtas",
  skipLinkLabel: "Skip to main content",
  menuLabel: "Menu",
  primaryNavLabel: "Primary",
  footerNavLabel: "Footer",
  externalNote: "(opens in a new tab)",
};

export const resume = null;

export const primaryNav = [
  { label: "Home", to: "/", mobileOnly: true },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Background", to: "/background" },
  { label: "Contact", to: "/contact" },
];

export const footerNav = primaryNav.map(({ label, to }) => ({ label, to }));

export const footerText = {
  line: "Computer Science student, STI College Balagtas.",
  colophon: "Built with React and Vite. Set in Inter.",
};

// document.title and meta description per route. Project pages build theirs from the project data.
export const pageMeta = {
  "/": {
    title: "Jhon Kenth Delfin — Computer Science Student & Aspiring Software Developer",
    description:
      "Portfolio of Jhon Kenth Delfin, a 4th-year BS Computer Science student building web applications, mobile apps and security-focused systems.",
  },
  "/projects": {
    title: "Projects — Jhon Kenth Delfin",
    description:
      "PhishGuard, Campus EMS and Francis Egg: an Android SMS phishing detector, a campus event system and a mobile inventory app, each with an honest status.",
  },
  "/about": {
    title: "About — Jhon Kenth Delfin",
    description:
      "About Jhon Kenth Delfin: a 4th-year Computer Science student interested in web and backend development, security, and machine learning.",
  },
  "/skills": {
    title: "Skills — Jhon Kenth Delfin",
    description:
      "Technologies grouped by how I have used them: in the projects on this site, or through coursework and smaller exercises.",
  },
  "/background": {
    title: "Background — Jhon Kenth Delfin",
    description: "Education, certificates and work experience of Jhon Kenth Delfin.",
  },
  "/contact": {
    title: "Contact — Jhon Kenth Delfin",
    description: "How to get in touch with Jhon Kenth Delfin.",
  },
  notFound: {
    title: "Page not found — Jhon Kenth Delfin",
    description: "This page does not exist.",
  },
};

export const notFound = {
  heading: "Page not found",
  body: "The page you're looking for isn't here. It may have moved, or the address may have a typo.",
};
