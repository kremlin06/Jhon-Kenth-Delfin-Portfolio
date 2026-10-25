import "./Callout.css";

// A short note about limits or status. One per section at most. Flat, no icon, no colored bar.
export default function Callout({ lead, children }) {
  return (
    <div className="callout" role="note">
      <p>
        <strong className="callout__lead">{lead}</strong> {children}
      </p>
    </div>
  );
}
