import { Link } from "react-router";
import JumpLinks from "../../components/JumpLinks/JumpLinks.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import Section from "../../components/Section/Section.jsx";
import Timeline from "../../components/Timeline/Timeline.jsx";
import { background } from "../../content/background.js";
import "./Background.css";

export default function Background() {
  const { education, certificates, experience } = background;

  return (
    <>
      <PageHeader title={background.title} lead={background.lead}>
        <JumpLinks links={[education, certificates, experience].map((part) => ({ id: part.id, label: part.heading }))} />
      </PageHeader>

      <Section id={education.id} heading={education.heading} split>
        {education.items.map((item) => (
          <div className="education stack" key={item.degree}>
            <h3>{item.degree}</h3>
            <p>
              {item.school}
              <span className="education__meta">
                {item.level}
                {item.expected && ` · ${item.expected}`}
              </span>
            </p>
            {item.coursework && (
              <div>
                <p className="education__label">Relevant coursework</p>
                <ul className="education__courses">
                  {item.coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.thesis && (
              <p>
                <Link to={item.thesis.to}>{item.thesis.label}</Link>
              </p>
            )}
          </div>
        ))}
      </Section>

      <Section id={certificates.id} heading={certificates.heading} split>
        <Timeline
          items={certificates.items.map((certificate) => ({
            title: certificate.name,
            meta: certificate.iso ? <time dateTime={certificate.iso}>{certificate.when}</time> : certificate.when,
            children: certificate.issuer ? <p>{certificate.issuer}</p> : null,
          }))}
        />
      </Section>

      <Section id={experience.id} heading={experience.heading} split>
        <div className="stack">
          <p>{experience.intro}</p>
          <Timeline
            items={experience.items.map((job) => ({
              title: job.org,
              children: (
                <ul className="roles">
                  {job.roles.map((role) => (
                    <li key={role.title}>
                      <p className="roles__title">
                        {role.title}
                        {role.unit && `, ${role.unit}`}
                      </p>
                      <p className="roles__period">{role.period}</p>
                      <p>{role.text}</p>
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </div>
      </Section>
    </>
  );
}
