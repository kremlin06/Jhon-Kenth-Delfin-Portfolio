import { Link, useParams } from "react-router";
import Button from "../../components/Button/Button.jsx";
import Callout from "../../components/Callout/Callout.jsx";
import { ArrowIcon } from "../../components/Icons/Icons.jsx";
import JumpLinks from "../../components/JumpLinks/JumpLinks.jsx";
import { EvidenceLegend } from "../../components/Legend/Legend.jsx";
import Section from "../../components/Section/Section.jsx";
import SpecList from "../../components/SpecList/SpecList.jsx";
import StatusTag from "../../components/StatusTag/StatusTag.jsx";
import Steps from "../../components/Steps/Steps.jsx";
import { getProject, projects } from "../../content/projects.js";
import NotFound from "../NotFound/NotFound.jsx";
import "./ProjectDetail.css";

// One project in full. Everything comes from src/content/projects.js.
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  // Which evidence labels this project actually uses, so the key explains only those.
  const usedLabels = [...new Set(project.highlights.items.map((item) => item.label))];

  const facts = [
    { name: "My role", text: project.roleDetail ?? project.role },
    { name: "Context", text: project.context },
    project.team && { name: "Team", text: project.team },
    { name: "Status", text: project.status },
  ].filter(Boolean);

  const technologies = project.stackGroups.map((group) => ({ name: group.name, text: group.items.join(", ") }));

  // "On this page" links, in page order. Only sections that exist for this project.
  const jumps = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: project.highlights.heading },
    project.steps && { id: "steps", label: project.steps.heading },
    { id: "technologies", label: "Technologies" },
  ].filter(Boolean);

  return (
    <>
      <header className="page-header container project-header">
        <p className="project-header__back">
          <Link to="/projects">All projects</Link>
        </p>
        <h1 tabIndex={-1}>{project.fullTitle}</h1>
        <p className="page-header__lead">{project.lead}</p>

        <ul className="tag-list" aria-label="Project status">
          {project.tags.map((kind) => (
            <li key={kind}>
              <StatusTag kind={kind} />
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="project-header__actions">
            {project.links.map((link, position) => (
              <Button key={link.kind} href={link.href} variant={position === 0 ? "primary" : "secondary"}>
                {link.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="project-header__note">{project.noLinkNote}</p>
        )}

        <JumpLinks links={jumps} />
      </header>

      <Section id="facts" heading="Project facts" split>
        <SpecList rows={facts} compact />
      </Section>

      <Section id="overview" heading="Overview" split>
        <div className="stack">
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="highlights" heading={project.highlights.heading}>
        <div className="stack">
          <EvidenceLegend kinds={usedLabels} />
          <SpecList rows={project.highlights.items} />
        </div>
      </Section>

      {project.steps && (
        <Section id="steps" heading={project.steps.heading} intro={project.steps.intro} split>
          <Steps items={project.steps.items} />
        </Section>
      )}

      <Section id="technologies" heading="Technologies" split>
        <SpecList rows={technologies} compact />
      </Section>

      {project.callout && (
        <section className="section container project-detail__callout" aria-label="Project status note">
          <Callout lead={project.callout.lead}>{project.callout.text}</Callout>
        </section>
      )}

      <nav className="section container project-nav" aria-label="More projects">
        <Link className="project-nav__link" to="/projects">
          All projects
        </Link>
        <Link className="project-nav__link project-nav__link--next" to={`/projects/${next.slug}`}>
          <span>Next: {next.shortName ?? next.name}</span>
          <ArrowIcon />
        </Link>
      </nav>
    </>
  );
}
