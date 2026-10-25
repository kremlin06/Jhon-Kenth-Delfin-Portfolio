// Project data. One entry per project; the cards, the Projects page and the detail pages all read from here.
//
// Rules for this file:
//  - links: only real, checked URLs. A project without a public destination has an empty list and a noLinkNote.
//  - evidence label on every highlight:
//      "implemented"  exists in the project's code (checked by reading the code; not a measured result)
//      "design"       how the project is designed to work; not yet proven end to end
//      "target"       a goal; NOT a measured result
//  - never add accuracy, speed or user figures unless a documented measurement exists.

// Status tags. No project is publicly deployed, so there is no "Live" tag; add one (and a demo link) only after a
// public deployment has been checked. The "github" tag is unused until a repository link is added to a project.
export const tagKinds = {
  github: { label: "GitHub", meaning: "The source code is public on GitHub." },
  academic: { label: "Academic", meaning: "Built for a course or a thesis." },
  development: { label: "In development", meaning: "Still being built or evaluated." },
  hosted: { label: "Hosted privately", meaning: "The system exists in a private environment. It isn't deployed publicly." },
  private: { label: "Private project", meaning: "No public repository or demo." },
};

// Evidence labels for highlights on the detail pages.
export const evidenceKinds = {
  implemented: { label: "Implemented", meaning: "Present in the project's code." },
  design: { label: "Current design", meaning: "How it is designed to work. Not yet proven end to end." },
  target: { label: "Design target", meaning: "A goal. Not a measured result." },
};

export const projectsPage = {
  title: "Projects",
  lead: "Three projects, each shown with what it is, what I did, and how much of it is actually proven. Some are public, some are private or academic, and the labels say which.",
  keyHeading: "How to read the tags and labels",
  tagsHeading: "Status tags",
  labelsHeading: "Labels on a project page",
};

export const projects = [
  {
    slug: "phishguard",
    name: "PhishGuard",
    subtitle: "Lightweight Offline SMS Phishing Detector for Android",
    fullTitle: "PhishGuard: Lightweight Offline SMS Phishing Detector for Android",
    summary:
      "An Android security app that detects SMS phishing (smishing) with a hybrid of rule-based heuristics and a lightweight Naive Bayes classifier, designed to run entirely on the device.",
    lead: "An Android security app that detects SMS phishing (smishing) using a hybrid of rule-based heuristics and a lightweight Naive Bayes classifier. Detection is designed to run entirely on the phone.",
    role: "Thesis proponent, one of four researchers",
    context: "BS Computer Science thesis, STI College Balagtas",
    team: "A four-member thesis team",
    status: "In development. The detector is still being developed and evaluated.",
    tags: ["development", "academic", "private"],
    links: [],
    noLinkNote: "Private / academic project. There is no public repository or demo yet.",
    stack: ["Kotlin", "Jetpack Compose", "Python", "scikit-learn"],
    stackGroups: [
      { name: "Android app", items: ["Kotlin", "Jetpack Compose"] },
      { name: "Model training and evaluation", items: ["Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib"] },
      { name: "Method", items: ["Rule-based heuristics", "Complement Naive Bayes"] },
    ],
    overview: [
      "Smishing is phishing sent by text message. PhishGuard is a thesis project that asks how far a small, readable detector can go on a phone, including low-resource devices, without needing an internet connection.",
      "The app reads incoming SMS messages in order to analyze them. It doesn't delete, modify, or block any message; it warns the user and leaves the decision to them.",
    ],
    highlights: {
      heading: "What it is",
      items: [
        {
          name: "Native Android app",
          text: "Written in Kotlin with Jetpack Compose.",
          label: "implemented",
        },
        {
          name: "Read-only with SMS",
          text: "It reads messages to analyze them. Nothing in the app deletes, modifies or blocks an SMS.",
          label: "implemented",
        },
        {
          name: "Offline-first, on-device detection",
          text: "Detection is designed to run entirely on the phone, so it doesn't need a connection or a server.",
          label: "design",
        },
        {
          name: "Hybrid scoring",
          text: "26 rule-based heuristics and a Complement Naive Bayes classifier each score the message. The classifier carries 60% of the combined score and the heuristics 40%. A message that reaches 0.70 is flagged.",
          label: "design",
        },
        {
          name: "14-dimensional feature extraction",
          text: "Each message is summarized as 14 numeric features, such as link and phone-number presence, urgency wording and length, which feed the classifier alongside the text.",
          label: "design",
        },
        {
          name: "Built for older, low-resource phones",
          text: "The build targets Android API 23 and up. It hasn't been validated on a physical device yet.",
          label: "design",
        },
        {
          name: "Processing time",
          text: "Under 50 milliseconds per message. This is a goal for the lightweight design, not a measured result.",
          label: "target",
        },
      ],
    },
    steps: {
      heading: "How a message is checked",
      intro: "The current design, in order.",
      items: [
        {
          title: "A message arrives",
          text: "Android delivers an incoming SMS to the app, once the user has allowed SMS access.",
        },
        {
          title: "Preparation",
          text: "The text is cleaned up for the classifier, and the 14 numeric features are extracted.",
        },
        {
          title: "Two separate checks",
          text: "The 26 heuristic rules score the original text. The Naive Bayes classifier scores the prepared text and the features.",
        },
        {
          title: "Combine and decide",
          text: "The two scores are weighted (classifier 60%, heuristics 40%). If the result reaches 0.70, the message is treated as suspicious.",
        },
        {
          title: "Warn, don't act",
          text: "A flagged message produces a notification. The message itself is left alone.",
        },
      ],
    },
    callout: {
      lead: "Still being evaluated.",
      text: "PhishGuard is an academic project in development. Its evaluation isn't finished, so I'm not publishing accuracy or performance figures, and the API 23 target hasn't been confirmed on a device.",
    },
  },

  {
    slug: "campus-ems",
    name: "Campus Event Management System",
    shortName: "Campus EMS",
    subtitle: "Web-based event and attendance management for STI College Balagtas",
    fullTitle: "Campus Event Management System (Campus EMS)",
    summary:
      "A web-based system for centralizing event coordination and attendance management, with role-based access, QR-code check-in, reporting and analytics.",
    lead: "A web-based system, developed for STI College Balagtas, that centralizes event coordination and attendance management: events and sessions, QR-code check-in, attendance tracking, reporting and analytics.",
    role: "Project Lead / Lead Analyst",
    context: "Developed for STI College Balagtas",
    team: "With Angelo, Enrico and Miles",
    status: "Hosted privately. It isn't currently deployed publicly, so there is no public demo.",
    tags: ["academic", "hosted"],
    // No repository or demo link on purpose. To add one later: { kind: "github", label: "GitHub", href } here,
    // and "github" in tags.
    links: [],
    noLinkNote: "Hosted privately. Not currently deployed publicly, so there is no public demo.",
    stack: ["React", "Node.js", "Express.js", "PostgreSQL", "Sequelize"],
    stackGroups: [
      { name: "Front end", items: ["React", "Vite", "React Router", "styled-components", "Recharts"] },
      { name: "Back end", items: ["Node.js", "Express.js", "Sequelize", "JWT authentication"] },
      { name: "Database", items: ["PostgreSQL"] },
      { name: "Attendance and data", items: ["QR-code scanning", "CSV and Excel import", "Report export"] },
    ],
    overview: [
      "Campus EMS brings event setup, check-in and attendance records into one system. Organizers set up events and sessions, attendees get a personal QR code, staff scan it at check-in, and the attendance that results is tracked and reported.",
      "I led the project and the analysis work, and built it with three teammates. It runs as a React front end, an Express API, and a PostgreSQL database.",
    ],
    highlights: {
      heading: "What it does",
      items: [
        {
          name: "Role-based access control",
          text: "Four roles (Admin, Organizer, Staff and Attendee) with permission checks on both the routes and the API, and JWT-based sessions.",
          label: "implemented",
        },
        {
          name: "Event and session management",
          text: "Events and their sessions are created and managed from an admin dashboard.",
          label: "implemented",
        },
        {
          name: "QR-code attendance",
          text: "Attendees get a personal QR code for each event. Staff scan it at check-in, with a manual check-in as a fallback.",
          label: "implemented",
        },
        {
          name: "Attendance tracking",
          text: "Attendance is recorded per session as present, late or absent, and can be corrected manually. Attendees see their own history, and receive notifications.",
          label: "implemented",
        },
        {
          name: "Reporting and analytics",
          text: "Dashboards for participation and session-level attendance, plus report preview and export.",
          label: "implemented",
        },
        {
          name: "Bulk attendee import",
          text: "Attendee lists can be imported from CSV or Excel files, with server-side validation.",
          label: "implemented",
        },
        {
          name: "Bulk ingestion at scale",
          text: "Designed to ingest up to 10,000 attendee records in one import.",
          label: "target",
        },
        {
          name: "Fast session rosters",
          text: "Designed to return a session roster for 5,000+ students in under 2 seconds, with database indexes built for that query.",
          label: "target",
        },
      ],
    },
    callout: {
      lead: "About the scale figures.",
      text: "The 10,000-record and 2-second figures are targets from the project requirements. I haven't published benchmark results for either of them.",
    },
  },

  {
    slug: "francis-egg",
    name: "Francis Egg",
    subtitle: "Mobile app for egg inventory, orders and deliveries",
    fullTitle: "Francis Egg",
    summary:
      "A cross-platform mobile app for managing egg inventory, customer orders and deliveries, with separate experiences for admins, delivery staff and sorting staff.",
    lead: "A cross-platform mobile app, built by a student team, for managing egg inventory, customer orders and deliveries, with separate experiences for admins, delivery staff and sorting staff.",
    role: "Mobile developer on a student team",
    roleDetail:
      "Mobile developer on a student team. My work was mainly the Delivery Staff module, the onboarding, login and account-setup flow, and the profile screens.",
    context: "Third-year Computer Science project",
    team: "A student team",
    status: "A private project. The source code is in a private repository and there is no public demo.",
    tags: ["academic", "private"],
    links: [],
    noLinkNote: "Private project. The repository isn't public and there is no public demo.",
    stack: ["React Native", "Expo", "React Navigation", "JavaScript"],
    stackGroups: [
      { name: "Mobile app", items: ["React Native", "Expo", "React Navigation", "JavaScript"] },
      { name: "Libraries", items: ["AsyncStorage", "Expo Notifications", "react-native-svg"] },
      { name: "Data", items: ["Talks to a PHP/JSON HTTP API"] },
    ],
    overview: [
      "Francis Egg helps manage egg inventory, customer orders and deliveries: what is in stock, which orders are waiting, and which deliveries have gone out. After signing in, each person lands in the area that matches their job.",
      "The app gets its data from an HTTP API. Delivery status is verified manually: staff mark orders as delivered or undelivered.",
    ],
    highlights: {
      heading: "What it does",
      items: [
        {
          name: "Three role-based areas",
          text: "After login the app opens an admin, delivery-staff or sorting-staff experience, each with its own navigation.",
          label: "implemented",
        },
        {
          name: "Orders and deliveries",
          text: "Delivery staff browse pending orders, open the order and delivery details, and update delivery and payment status.",
          label: "implemented",
        },
        {
          name: "Inventory and damage reports",
          text: "Inventory and expired-egg views, plus damage reports with quantities and reasons.",
          label: "implemented",
        },
        {
          name: "Sorting workflow",
          text: "Sorting staff record unsorted egg batches and sort them into stock.",
          label: "implemented",
        },
        {
          name: "Admin management and statistics",
          text: "Admins manage customers, suppliers and staff, review an audit trail, and see dashboards for sales and stock.",
          label: "implemented",
        },
        {
          name: "Accounts and profiles",
          text: "An onboarding, login and account-setup flow, and profile screens where a user can change their password.",
          label: "implemented",
        },
      ],
    },
    callout: null,
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
