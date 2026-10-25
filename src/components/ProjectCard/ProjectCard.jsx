import { Link } from "react-router";
import Button from "../Button/Button.jsx";
import { ArrowIcon } from "../Icons/Icons.jsx";
import StatusTag from "../StatusTag/StatusTag.jsx";
import "./ProjectCard.css";

// A project as an object: name, short description, role, technologies, status and links.
//
// The whole card is clickable through ONE link on the title (the "stretched link" pattern: the link's
// ::after covers the card), so there is a single accessible name and no nested anchors. External links
// (for example GitHub) sit above that layer and keep their own click targets.
// level: the heading level of the title (3 under a section on Home, 2 on the Projects page).
export default function ProjectCard({ project, level = 3 }) {
  const Heading = `h${level}`;
  const hasLinks = project.links.length > 0;

  return (
    <article className="project-card">
      <div className="project-card__main">
        <Heading className="project-card__title">
          <Link className="project-card__link" to={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </Heading>
        <p className="project-card__subtitle">{project.subtitle}</p>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="tag-list" aria-label="Project status">
          {project.tags.map((kind) => (
            <li key={kind}>
              <StatusTag kind={kind} />
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__side">
        <dl className="project-card__facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>
              <ul className="project-card__stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {hasLinks ? (
          <div className="project-card__links">
            {project.links.map((link) => (
              <Button key={link.kind} href={link.href} variant="secondary" size="small" className="project-card__button">
                {link.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="project-card__note">{project.noLinkNote}</p>
        )}

        <span className="project-card__cta" aria-hidden="true">
          View project <ArrowIcon />
        </span>
      </div>
    </article>
  );
}
