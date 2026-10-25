import { Link } from "react-router";
import { site } from "../../content/site.js";
import { ExternalIcon } from "../Icons/Icons.jsx";
import "./Button.css";

// A link styled as a button. Navigation is a link, so this renders <a>, never <button>.
//   to:   an internal route (React Router)
//   href: an external URL (opens in a new tab, with a screen-reader note and an arrow)
// variant: "primary" (one per view) or "secondary". size: "default" or "small".
export default function Button({ to, href, variant = "primary", size = "default", className = "", children }) {
  const classes = ["button", `button--${variant}`, size === "small" ? "button--small" : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <span className="visually-hidden"> {site.externalNote}</span>
        <ExternalIcon />
      </a>
    );
  }

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
