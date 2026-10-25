import { site } from "../../content/site.js";
import { ExternalIcon } from "../Icons/Icons.jsx";
import "./ExternalLink.css";

// A text link to another site. New tab, noopener, a screen-reader note, and an arrow so sighted users know too.
export default function ExternalLink({ href, className = "", children }) {
  return (
    <a className={`external-link ${className}`.trim()} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> {site.externalNote}</span>
      <ExternalIcon />
    </a>
  );
}
