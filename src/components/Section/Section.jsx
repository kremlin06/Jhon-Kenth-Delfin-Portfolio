import "./Section.css";

// <section aria-labelledby> with an h2. split: heading on the left third, content on the right two thirds
// from 48em (stacked below). The id is also the in-page anchor.
// tight: a smaller gap above the section, for a short block that closes a page.
export default function Section({ id, heading, intro, split = false, tight = false, children }) {
  const headingId = `${id}-heading`;
  const classes = ["section", split ? "section--split" : "", tight ? "section--tight" : "", "container"]
    .filter(Boolean)
    .join(" ");
  return (
    <section id={id} className={classes} aria-labelledby={headingId}>
      <div className="section__head">
        <h2 id={headingId}>{heading}</h2>
        {intro && <p className="section__intro">{intro}</p>}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
