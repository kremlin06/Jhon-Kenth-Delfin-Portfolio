import { Link } from "react-router";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import Section from "../../components/Section/Section.jsx";
import SpecList from "../../components/SpecList/SpecList.jsx";
import { about } from "../../content/about.js";
import { resume } from "../../content/site.js";

export default function About() {
  return (
    <>
      <PageHeader title={about.title} lead={about.lead} />

      <Section id="story" heading="Who I am" split>
        <div className="stack">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="interests" heading={about.interestsHeading}>
        <SpecList rows={about.interests} />
      </Section>

      <Section id="more" heading={about.linksHeading} split>
        <ul className="link-row">
          {about.links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
          {/* Only rendered when a real resume file has been added (see src/content/site.js). */}
          {resume && (
            <li>
              <a href={resume.href} download>
                {resume.label}
              </a>
            </li>
          )}
        </ul>
      </Section>
    </>
  );
}
