import { Link } from "react-router";
import "./JumpLinks.css";

// "On this page": links to sections of the current page. They go through the router so the location,
// the focus move and the smooth (or, under reduced motion, instant) scroll are all handled in one place:
// src/hooks/useRouteFocus.js.
// links: [{ id, label }]
export default function JumpLinks({ links, label = "On this page" }) {
  return (
    <nav className="jump-links" aria-label={label}>
      <ul className="link-row">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={`#${link.id}`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
