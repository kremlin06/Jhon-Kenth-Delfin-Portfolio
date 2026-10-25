import { useEffect, useRef, useState } from "react";
import { quietNote } from "../../content/quietNote.js";
import { site } from "../../content/site.js";
import "./Copyright.css";

// The footer's copyright line. The year is also the trigger for a small note (src/content/quietNote.js).
export default function Copyright() {
  const [shown, setShown] = useState(false);
  const count = useRef(0);
  const lastClick = useRef(0);
  const hideTimer = useRef(null);

  function handleClick() {
    const now = Date.now();
    count.current = now - lastClick.current <= quietNote.withinMs ? count.current + 1 : 1;
    lastClick.current = now;
    if (count.current < quietNote.clicks) return;

    count.current = 0;
    setShown(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShown(false), quietNote.visibleMs);
  }

  // Escape dismisses the note early.
  useEffect(() => {
    if (!shown) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setShown(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [shown]);

  useEffect(() => () => clearTimeout(hideTimer.current), []);

  return (
    <div className="copyright">
      <p>
        © <span className="copyright__year" onClick={handleClick}>{new Date().getFullYear()}</span> {site.name}
      </p>
      <p
        className={shown ? "copyright__note copyright__note--shown" : "copyright__note"}
        role="status"
        style={shown ? { "--note-duration": `${quietNote.visibleMs}ms` } : undefined}
      >
        {shown ? quietNote.text : null}
      </p>
    </div>
  );
}
