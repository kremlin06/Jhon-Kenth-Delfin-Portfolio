export const skillsPage = {
  title: "Skills",
  lead: "What I use, grouped by how I've used it. There are no skill bars: a percentage says nothing about what I can build.",
  usedLabel: "Used in projects",
  studiedLabel: "Studied",
  note: "“Studied” means coursework and smaller exercises. It doesn't mean I've shipped something with it.",
};

export const skillGroups = [
  {
    id: "languages",
    name: "Languages",
    used: [
      { name: "JavaScript", in: ["campus-ems", "francis-egg"] },
      { name: "Kotlin", in: ["phishguard"] },
      { name: "Python", in: ["phishguard"] },
    ],
    studied: ["Java", "C#", "PHP", "Assembly"],
  },
  {
    id: "frontend",
    name: "Frontend",
    used: [
      { name: "HTML", in: ["campus-ems"] },
      { name: "CSS", in: ["campus-ems"] },
      { name: "CSS-in-JS", in: ["campus-ems"] },
      { name: "React", in: ["campus-ems"] },
    ],
    studied: [],
  },
  {
    id: "backend",
    name: "Backend",
    used: [
      { name: "Node.js", in: ["campus-ems"] },
      { name: "Express.js", in: ["campus-ems"] },
      { name: "Sequelize", in: ["campus-ems"] },
      { name: "JWT authentication", in: ["campus-ems"] },
    ],
    studied: [],
  },
  {
    id: "databases",
    name: "Databases",
    used: [{ name: "PostgreSQL", in: ["campus-ems"] }],
    studied: ["MySQL", "SQLite"],
  },
  {
    id: "mobile",
    name: "Mobile",
    used: [
      { name: "React Native", in: ["francis-egg"] },
      { name: "Jetpack Compose", in: ["phishguard"] },
    ],
    studied: [],
  },
  {
    id: "data-ml",
    name: "Data and machine learning",
    used: [
      { name: "NumPy", in: ["phishguard"] },
      { name: "Pandas", in: ["phishguard"] },
      { name: "scikit-learn", in: ["phishguard"] },
      { name: "Matplotlib", in: ["phishguard"] },
    ],
    studied: [],
  },
  {
    id: "tools",
    name: "Tools and other",
    used: [
      { name: "Git and GitHub", in: ["phishguard", "campus-ems", "francis-egg"] },
      { name: "JSON", in: ["phishguard", "campus-ems", "francis-egg"] },
    ],
    studied: [],
  },
];
