import { evidenceKinds } from "../../content/projects.js";
import "./EvidenceLabel.css";

// Says whether a statement is implemented, the current design, or a design target.
// Same idea as PhishGuard Web's EvidenceLabel: it keeps the page from implying more certainty than exists.
// Meaning is carried by the text and by the dot and border shape, never by color alone.
// kind: "implemented" | "design" | "target"
export default function EvidenceLabel({ kind }) {
  return (
    <span className={`evidence-label evidence-label--${kind}`}>
      <span className="visually-hidden">Status: </span>
      <span className="evidence-label__dot" aria-hidden="true" />
      {evidenceKinds[kind].label}
    </span>
  );
}
