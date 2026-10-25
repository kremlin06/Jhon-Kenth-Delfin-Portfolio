import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// A short fade-and-rise the first time a block scrolls into view. Used sparingly (project cards, a few
// home blocks). Safe by construction:
//  - content is visible by default; it is only hidden after JavaScript has run AND the block is below the fold
//  - anything already on screen at load is never hidden
//  - no effect for visitors who prefer reduced motion, or when IntersectionObserver is missing
export default function Reveal({ as = "div", className = "", children, ...rest }) {
  const Tag = as; // capitalized so JSX treats it as an element type
  const ref = useRef(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setPending(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPending(false);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", pending ? "reveal--pending" : "", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
