import { evidenceKinds, projects, tagKinds } from "../../content/projects.js";
import EvidenceLabel from "../EvidenceLabel/EvidenceLabel.jsx";
import StatusTag from "../StatusTag/StatusTag.jsx";
import "./Legend.css";

// A small key: a tag or label next to what it means. Real <dl>.
function Legend({ kinds, source, mark }) {
  const Mark = mark; // capitalized so JSX treats it as a component
  return (
    <dl className="legend">
      {kinds.map((kind) => (
        <div className="legend__row" key={kind}>
          <dt>
            <Mark kind={kind} />
          </dt>
          <dd>{source[kind].meaning}</dd>
        </div>
      ))}
    </dl>
  );
}

// Only the tags that a project actually uses, in the order they are defined, so the key never explains
// a status that no project has (for example "Live" while nothing is deployed).
const usedTagKinds = Object.keys(tagKinds).filter((kind) => projects.some((project) => project.tags.includes(kind)));

// kinds: which tags to explain (defaults to the ones in use).
export function TagLegend({ kinds = usedTagKinds }) {
  return <Legend kinds={kinds} source={tagKinds} mark={StatusTag} />;
}

// kinds: which labels to explain (a project page passes only the ones it uses).
export function EvidenceLegend({ kinds = Object.keys(evidenceKinds) }) {
  return <Legend kinds={kinds} source={evidenceKinds} mark={EvidenceLabel} />;
}
