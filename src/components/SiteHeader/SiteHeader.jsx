import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { primaryNav, site } from "../../content/site.js";
import { CloseIcon, MenuIcon } from "../Icons/Icons.jsx";
import "./SiteHeader.css";

// Only Home needs `end`: every other item stays "current" on its sub-pages (Projects on /projects/phishguard).
const linkClass = ({ isActive }) =>
  isActive ? "site-nav__link site-nav__link--current" : "site-nav__link";

// Header pattern adapted from PhishGuard Web: sticky, glass, a disclosure menu below 48em.
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  // The menu panel closes on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The panel also closes when the layout switches to the inline nav (48em, same as SiteHeader.css),
  // so an open panel does not reappear after the window is shrunk again.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 48em)");
    const handleChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Esc closes the panel and returns focus to the Menu button.
  function handleKeyDown(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container site-header__inner">
        <NavLink to="/" end className="site-header__brand">
          {site.name}
        </NavLink>

        <button
          ref={buttonRef}
          type="button"
          className={open ? "site-header__menu-button site-header__menu-button--open" : "site-header__menu-button"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{site.menuLabel}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="site-menu" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label={site.primaryNavLabel}>
          <ul className="site-nav__list">
            {primaryNav.map((item) => (
              <li
                key={item.to}
                className={item.mobileOnly ? "site-nav__item site-nav__item--mobile-only" : "site-nav__item"}
              >
                <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
