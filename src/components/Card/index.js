import "./card.css";
import { CardHeader } from "./Header";

export function Card() {
  return (
    <div className="card-container dark">
      <img alt="Imagem usuário" className="image" />

      <main className="card-body">
        <CardHeader />

        <p className="bio">bio</p>

        <div>counters</div>

        <footer>footer</footer>
      </main>
    </div>
  );
}
