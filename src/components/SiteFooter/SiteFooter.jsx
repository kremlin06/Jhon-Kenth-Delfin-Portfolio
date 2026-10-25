import { NavLink } from "react-router";
import { footerNav, footerText, site } from "../../content/site.js";
import Copyright from "../Copyright/Copyright.jsx";
import "./SiteFooter.css";

const linkClass = ({ isActive }) =>
  isActive ? "site-footer__link site-footer__link--current" : "site-footer__link";

// Quiet footer: hairline top, small secondary text, no icons, no social row.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <nav aria-label={site.footerNavLabel}>
          <ul className="site-footer__links">
            {footerNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__info">
          <p className="site-footer__name">{site.name}</p>
          <p>{footerText.line}</p>
          <p>{footerText.colophon}</p>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
