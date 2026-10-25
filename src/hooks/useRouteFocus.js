import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

// Per-route page behavior for a client-rendered site. Call it once from App, inside the router.
//
// - meta ({ title, description }): keeps document.title and the description / Open Graph tags in step with the
//   route. Crawlers that do not run JavaScript only see the fallback tags in index.html.
// - New page: jump to the top and focus the page's <h1> (it needs tabIndex={-1}), so keyboard and screen-reader
//   users land on the new content. Revisiting the current page scrolls to the top, smoothly unless the visitor
//   prefers reduced motion. Nothing moves on first load.
// - URL with a hash: scroll to the target and focus it (a labelled <section> hands focus to its heading).
//   Deep links and arriving from another page jump instantly; a hash change on the same page uses the
//   document's scroll-behavior (see base.css). The [id] scroll-margin in layout.css keeps the target below
//   the sticky header.
function setMeta(selector, value) {
  const element = document.head.querySelector(selector);
  if (element && value) element.setAttribute("content", value);
}

function goToHash(hash, behavior) {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  // "instant" ignores CSS scroll-behavior; "auto" follows it (smooth, or not at all under reduced motion).
  target.scrollIntoView({ behavior });
  if (target.contains(document.activeElement)) return;

  // A labelled section hands focus to its heading; anything else takes focus itself.
  const labelledBy = target.tagName === "SECTION" ? target.getAttribute("aria-labelledby") : null;
  const focusTarget = (labelledBy && document.getElementById(labelledBy)) || target;

  // Headings and other non-interactive targets need tabindex="-1" to take focus.
  if (!focusTarget.matches("a[href], button, input, select, textarea, [tabindex]")) focusTarget.tabIndex = -1;
  focusTarget.focus({ preventScroll: true });
}

export function useRouteFocus(meta) {
  // `key` changes on every navigation, even to the same URL, so clicking the same "On this page" link a second
  // time (after scrolling away) still scrolls and focuses again.
  const { pathname, hash, key } = useLocation();
  const previousPathname = useRef(null);
  const previousKey = useRef(null);
  const title = meta?.title;
  const description = meta?.description;

  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', title);
    }
    if (description) {
      setMeta('meta[name="description"]', description);
      setMeta('meta[property="og:description"]', description);
    }
  }, [title, description]);

  useEffect(() => {
    const previous = previousPathname.current;
    const previousKeyValue = previousKey.current;
    previousPathname.current = pathname;
    previousKey.current = key;

    // A real navigation happened (not the first load, and not React re-running this effect in development).
    const navigated = previousKeyValue !== null && previousKeyValue !== key;
    const samePage = navigated && previous === pathname;

    if (hash) {
      goToHash(hash, samePage ? "auto" : "instant");
      return;
    }

    if (previous === null || !navigated) return; // first load, or nothing actually changed

    window.scrollTo({ top: 0, left: 0, behavior: samePage ? "auto" : "instant" });
    const target = document.querySelector("#main h1") ?? document.getElementById("main");
    target?.focus({ preventScroll: true });
  }, [pathname, hash, key]);

  // A hash can change without the router noticing (address bar edit, or a plain <a href="#id"> like the skip link).
  // The browser scrolls there but does not move focus, so do it here. Running twice for one hash is harmless.
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) goToHash(window.location.hash, "auto");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
}
