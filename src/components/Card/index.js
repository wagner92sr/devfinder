import "./card.css";
import { CardHeader } from "./Header";
import { Counters } from "./Counters";
import { Footer } from "./Footer";

export function Card() {
  return (
    <div className="card-container dark">
      <img alt="Imagem usuário" className="image" />

      <main className="card-body">
        <CardHeader />

        <p className="bio">bio</p>

        <Counters />

        <Footer />
      </main>
    </div>
  );
}
