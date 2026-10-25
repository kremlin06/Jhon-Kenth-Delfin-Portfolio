import ExternalLink from "../../components/ExternalLink/ExternalLink.jsx";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import "../../components/SpecList/SpecList.css"; // this page reuses the spec-list row styles
import { contact } from "../../content/contact.js";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <PageHeader title={contact.title} lead={contact.lead} />

      <section className="section container" aria-label="Ways to reach me">
        <dl className="spec-list contact">
          {contact.channels.map((channel) => (
            <div className="spec-list__row" key={channel.id}>
              <dt className="spec-list__name">{channel.label}</dt>
              <dd className="spec-list__body">
                {channel.external ? (
                  <ExternalLink href={channel.href}>{channel.value}</ExternalLink>
                ) : (
                  <a href={channel.href}>{channel.value}</a>
                )}
              </dd>
            </div>
          ))}
          {contact.location && (
            <div className="spec-list__row">
              <dt className="spec-list__name">{contact.location.label}</dt>
              <dd className="spec-list__body">{contact.location.value}</dd>
            </div>
          )}
        </dl>
      </section>
    </>
  );
}
