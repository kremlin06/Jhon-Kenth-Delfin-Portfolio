import Reveal from "../Reveal/Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./ProjectCard.css";

// The list of project cards, shared by Home and the Projects page.
// level: heading level for each card's title (3 under a section heading, 2 directly under the h1).
export default function ProjectList({ projects, level }) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.slug}>
          <Reveal>
            <ProjectCard project={project} level={level} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
