import EvidenceLabel from "../EvidenceLabel/EvidenceLabel.jsx";
import "./SpecList.css";

// Name and description rows, separated by hairlines, instead of a grid of boxes. A real <dl>.
// rows: [{ name, text, label? }]  (label is an evidence kind; see EvidenceLabel)
// compact: for a list that already sits in the right two thirds of a split section; a narrower name column.
export default function SpecList({ rows, compact = false }) {
  return (
    <dl className={compact ? "spec-list spec-list--compact" : "spec-list"}>
      {rows.map((row) => (
        <div className="spec-list__row" key={row.name}>
          <dt className="spec-list__name">{row.name}</dt>
          <dd className="spec-list__body">
            <p>{row.text}</p>
            {row.label && <EvidenceLabel kind={row.label} />}
          </dd>
        </div>
      ))}
    </dl>
  );
}
