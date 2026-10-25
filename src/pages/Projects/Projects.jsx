import { TagLegend, EvidenceLegend } from "../../components/Legend/Legend.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import ProjectList from "../../components/ProjectCard/ProjectList.jsx";
import Section from "../../components/Section/Section.jsx";
import { projects, projectsPage } from "../../content/projects.js";

export default function Projects() {
  return (
    <>
      <PageHeader title={projectsPage.title} lead={projectsPage.lead} />

      {/* The header's bottom padding already separates it from the list. */}
      <div className="container">
        <ProjectList projects={projects} level={2} />
      </div>

      {/* id "tags" is a deep-link target (Home links to /projects#tags). */}
      <Section id="tags" heading={projectsPage.keyHeading} split>
        <div className="stack">
          <h3>{projectsPage.tagsHeading}</h3>
          <TagLegend />
          <h3>{projectsPage.labelsHeading}</h3>
          <EvidenceLegend />
        </div>
      </Section>
    </>
  );
}
