import "./PageHeader.css";

// The page's one h1 (tabIndex -1 so route changes can move focus to it) and an optional lead paragraph.
// Children render below the lead (tags, buttons).
export default function PageHeader({ title, lead, children }) {
  return (
    <header className="page-header container">
      <h1 tabIndex={-1}>{title}</h1>
      {lead && <p className="page-header__lead">{lead}</p>}
      {children}
    </header>
  );
}
