import { tagKinds } from "../../content/projects.js";
import "./StatusTag.css";

// A project's status: GitHub, Academic, In development, Hosted privately or Private project.
// Meaning is carried by the text and by the dot and border shape, never by color alone.
// kind: "github" | "academic" | "development" | "hosted" | "private"  (see tagKinds in src/content/projects.js)
export default function StatusTag({ kind }) {
  return (
    <span className={`status-tag status-tag--${kind}`}>
      <span className="visually-hidden">Status: </span>
      <span className="status-tag__dot" aria-hidden="true" />
      {tagKinds[kind].label}
    </span>
  );
}
