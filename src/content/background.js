// Education, certificates and work experience.
// A null value renders nothing. Do not fill the nulls with guesses.

export const background = {
  title: "Background",
  lead: "Where I'm studying, what I've completed, and the work I've done alongside my studies.",

  education: {
    id: "education",
    heading: "Education",
    items: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "STI College Balagtas",
        level: "Currently in 4th year",
        // Taken from the resume. Delete this line to hide it. Never replace it with a guess.
        expected: "Expected graduation: June 2027",
        coursework: [
          "Data Structures & Algorithms",
          "Database Systems",
          "Web Development",
          "Mobile Application Development",
          "Machine Learning and Data Science",
        ],
        thesis: { label: "Thesis project: PhishGuard", to: "/projects/phishguard" },
      },
    ],
  },

  certificates: {
    id: "certificates",
    heading: "Certificates",
    // Newest first. `issuer` is null on purpose: no issuer, ID or verification URL is shown.
    items: [
      { name: "Certificate of Completion: HTML", when: "September 30, 2026", iso: "2026-09-30", issuer: null },
      { name: "Java Fundamentals", when: "School year 2023–2024, 2nd term", iso: null, issuer: null },
    ],
  },

  experience: {
    id: "experience",
    heading: "Work experience",
    intro:
      "Alongside my studies I've worked in sanitation and factory roles. They aren't software jobs and I don't present them as such. They're where I've practiced following procedures carefully, being accountable for quality, and showing up consistently.",
    items: [
      {
        org: "La Primera Pollo Inc.",
        roles: [
          {
            title: "In-Process Post Cleaner",
            unit: "Sanitation Department",
            period: "2023 – Present",
            text: "Post-production cleaning and sanitizing of machinery and work areas to meet quality and sanitation requirements.",
          },
        ],
      },
      {
        org: "Kim Toys Factory",
        roles: [
          {
            title: "Machine Operator, Plastic Molding",
            unit: null,
            period: "2022 – 2023",
            text: "Operated plastic molding machines and monitored the molding process to production requirements.",
          },
          {
            title: "Assembly Operator",
            unit: null,
            period: "2021 – 2022",
            text: "Assembled toy components into finished products to production specifications.",
          },
        ],
      },
    ],
  },
};
