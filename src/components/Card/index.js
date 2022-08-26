import "./card.css";
import { CardHeader } from "./Header";
import { Counters } from "./Counters";

export function Card() {
  return (
    <div className="card-container dark">
      <img alt="Imagem usuário" className="image" />

      <main className="card-body">
        <CardHeader />

        <p className="bio">bio</p>

        <Counters />

        <footer>footer</footer>
      </main>
    </div>
  );
}
