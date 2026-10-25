import { Link } from "react-router";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import "../../components/SpecList/SpecList.css"; // this page reuses the spec-list row styles
import { getProject } from "../../content/projects.js";
import { skillGroups, skillsPage } from "../../content/skills.js";
import "./Skills.css";

// "Campus EMS, PhishGuard": links to the project pages where a skill was used.
function UsedIn({ slugs }) {
  const projects = slugs.map(getProject).filter(Boolean);
  return (
    <span className="skill__in">
      {projects.map((project, position) => (
        <span key={project.slug}>
          {position > 0 && ", "}
          <Link to={`/projects/${project.slug}`}>{project.shortName ?? project.name}</Link>
        </span>
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <>
      <PageHeader title={skillsPage.title} lead={skillsPage.lead} />

      <section className="section container" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="visually-hidden">
          Skills by category
        </h2>
        <p className="skills__note">{skillsPage.note}</p>

        <dl className="spec-list skills">
          {skillGroups.map((group) => (
            <div className="spec-list__row" key={group.id}>
              <dt className="spec-list__name">{group.name}</dt>
              <dd className="spec-list__body skill-group">
                <div>
                  <h3 className="skill-group__label">{skillsPage.usedLabel}</h3>
                  <ul className="skill-used">
                    {group.used.map((skill) => (
                      <li key={skill.name}>
                        <span className="skill__name">{skill.name}</span>
                        <UsedIn slugs={skill.in} />
                      </li>
                    ))}
                  </ul>
                </div>

                {group.studied.length > 0 && (
                  <div>
                    <h3 className="skill-group__label">{skillsPage.studiedLabel}</h3>
                    <ul className="skill-studied">
                      {group.studied.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
