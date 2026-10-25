// About page copy and the short About teaser on Home. Describes interests and stage of study, not experience.

export const about = {
  title: "About",
  lead: "I'm a fourth-year Computer Science student who wants to understand how software systems actually work, and to build ones people can rely on.",
  story: [
    "I'm Jhon Kenth Delfin, a 4th-year BS Computer Science student at STI College Balagtas. I build web applications, mobile apps and security-focused systems, and I'm working toward a career in software development.",
    "What pulls me in is understanding how things work rather than only using the tools. That has led me toward the backend side of web projects, toward security on mobile devices, and toward machine learning.",
    "I'm early in my career, and the projects on this site reflect that: some are academic, some are team efforts, and one is still being evaluated. I've tried to describe each one accurately, including what isn't proven yet.",
  ],
  interestsHeading: "What I'm interested in",
  interests: [
    { name: "Web development", text: "Building interfaces and the services behind them." },
    { name: "Backend development", text: "APIs, authentication and databases. Campus EMS is my most complete example." },
    { name: "Software engineering", text: "Structuring a project so a team can work on it and I can still read it later." },
    { name: "Cybersecurity and mobile security", text: "Smishing detection on Android is my thesis topic." },
    {
      name: "AI, data science and machine learning",
      text: "I'm learning through the PhishGuard thesis, using Python and scikit-learn.",
    },
    { name: "Technology and systems", text: "How the pieces of a system fit together, and why they behave the way they do." },
  ],
  linksHeading: "More",
  links: [
    { label: "Education, certificates and work experience", to: "/background" },
    { label: "Skills, grouped by how I've used them", to: "/skills" },
  ],
};

// Teaser block on the homepage.
export const homeAbout = {
  heading: "About me",
  body: [
    "I'm a fourth-year Computer Science student, and I like understanding how a system works rather than only using it. My projects tend to go below the surface: how a classifier reaches a decision, how a session is authenticated, how data moves between an app and its server.",
    "I'm still learning, and I try to say so plainly. On this site, what is built is kept separate from what is only a target.",
  ],
  link: { label: "More about me", to: "/about" },
};
