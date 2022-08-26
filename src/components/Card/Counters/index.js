import { useTheme } from "../../../contexts/themeContext";
import "./counters.css";

export function Counters() {
  const { theme } = useTheme();

  return (
    <section className={`counters ${theme}`}>
      <div className="counter-item">
        <span>Repos</span>
        <h2>10</h2>
      </div>

      <div className="counter-item">
        <span>Followers</span>
        <h2>30</h2>
      </div>

      <div className="counter-item">
        <span>Following</span>
        <h2>42</h2>
      </div>
    </section>
  );
}
