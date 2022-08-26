import "./card.css";

export function Card() {
  return (
    <div className="card-container dark">
      <img alt="Imagem usuário" className="image" />

      <main className="card-body">
        <header>header</header>

        <p className="bio">bio</p>

        <div>counters</div>

        <footer>footer</footer>
      </main>
    </div>
  );
}
