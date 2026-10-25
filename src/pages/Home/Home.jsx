import { Link } from "react-router";
import Button from "../../components/Button/Button.jsx";
import ProjectList from "../../components/ProjectCard/ProjectList.jsx";
import Reveal from "../../components/Reveal/Reveal.jsx";
import Section from "../../components/Section/Section.jsx";
import { homeAbout } from "../../content/about.js";
import { home } from "../../content/home.js";
import { projects } from "../../content/projects.js";
import { resume, site } from "../../content/site.js";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <h1 id="hero-title" className="hero__title" tabIndex={-1}>
            {site.name}
          </h1>
          <p className="hero__role">{site.role}</p>
          <p className="hero__lead">{site.intro}</p>
          <div className="hero__actions">
            <Button to={home.actions.primary.to}>{home.actions.primary.label}</Button>
            <Button to={home.actions.secondary.to} variant="secondary">
              {home.actions.secondary.label}
            </Button>
            {/* Only rendered when a real resume file has been added (see src/content/site.js). */}
            {resume && (
              <a className="hero__resume" href={resume.href} download>
                {resume.label}
              </a>
            )}
          </div>
          <p className="hero__status">{site.standing}</p>
        </div>

        <section className="glance" aria-labelledby="glance-title">
          <h2 id="glance-title" className="glance__title">
            {home.glanceLabel}
          </h2>
          <dl className="glance__list">
            {home.glance.map((row) => (
              <div className="glance__row" key={row.name}>
                <dt>{row.name}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </section>

      <Section id={home.projects.id} heading={home.projects.heading} intro={home.projects.intro}>
        <ProjectList projects={projects} level={3} />
        <p className="home__after-list">
          <Link to={home.projects.link.to}>{home.projects.link.label}</Link>
        </p>
      </Section>

      <Section id="about-me" heading={homeAbout.heading} split>
        <Reveal className="stack">
          {homeAbout.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <Link to={homeAbout.link.to}>{homeAbout.link.label}</Link>
          </p>
        </Reveal>
      </Section>

      <Section id="get-in-touch" heading={home.contact.heading} split tight>
        <Reveal className="stack">
          <p>{home.contact.body}</p>
          <p>
            <Button to={home.contact.link.to} variant="secondary">
              {home.contact.link.label}
            </Button>
          </p>
        </Reveal>
      </Section>
    </>
  );
}
