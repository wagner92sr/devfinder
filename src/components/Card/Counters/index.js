import "./counters.css";

export function Counters() {
  return (
    <section className="counters dark">
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
