import "./Timeline.css";

// A vertical list with a thin rail and a small dot per entry. Used for certificates and work history.
// Children of each entry are free-form (so work history can nest roles).
// items: [{ key, title, meta, children }]
export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li className="timeline__item" key={item.key ?? item.title}>
          <h3 className="timeline__title">{item.title}</h3>
          {item.meta && <p className="timeline__meta">{item.meta}</p>}
          {item.children}
        </li>
      ))}
    </ol>
  );
}
