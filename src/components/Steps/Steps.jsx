import "./Steps.css";

// An ordered list with numbered markers joined by a thin line. Vertical at every width.
// items: [{ title, text }]
export default function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map((item) => (
        <li className="steps__item" key={item.title}>
          <h3 className="steps__title">{item.title}</h3>
          <p className="steps__text">{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
