// Inline SVG icons: 1.5 px stroke, currentColor, decorative (aria-hidden). No icon library.

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...common}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...common}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

// Up-right arrow: marks a link that leaves the site.
export function ExternalIcon() {
  return (
    <svg className="icon-external" width="14" height="14" viewBox="0 0 16 16" {...common}>
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}

// Right arrow: marks a link into another page of the site.
export function ArrowIcon() {
  return (
    <svg className="icon-arrow" width="16" height="16" viewBox="0 0 16 16" {...common}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
