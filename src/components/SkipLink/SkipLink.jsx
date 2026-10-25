import { site } from "../../content/site.js";
import "./SkipLink.css";

// First focusable element on every page. The target is <main id="main" tabIndex={-1}> in App.
export default function SkipLink() {
  return (
    <a className="skip-link" href="#main">
      {site.skipLinkLabel}
    </a>
  );
}
