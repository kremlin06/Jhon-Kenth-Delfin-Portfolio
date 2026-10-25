// Homepage copy (the hero text itself lives in site.js).

export const home = {
  actions: {
    primary: { label: "View projects", to: "/projects" },
    secondary: { label: "Contact me", to: "/contact" },
  },

  // The "at a glance" list beside the hero. Plain facts, no statistics.
  glanceLabel: "At a glance",
  glance: [
    { name: "Studying", value: "BS Computer Science, 4th year" },
    { name: "Thesis", value: "PhishGuard, an offline SMS phishing detector for Android" },
    { name: "Based in", value: "Bulacan, Philippines" },
  ],

  projects: {
    id: "projects",
    heading: "Selected projects",
    intro:
      "Each project page says what I did, what's built, and what is still only a goal.",
    // Deep link to the key at the bottom of the Projects page (the page lands on it and focuses its heading).
    link: { label: "How to read the tags and labels", to: "/projects#tags" },
  },

  contact: {
    heading: "Get in touch",
    body: "If something here is interesting, I'd like to hear from you.",
    link: { label: "Contact me", to: "/contact" },
  },
};
