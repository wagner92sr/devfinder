import "./card.css";
import { CardHeader } from "./Header";
import { Counters } from "./Counters";
import { Footer } from "./Footer";
import { useTheme } from "../../contexts/themeContext";

export function Card() {
  const { theme } = useTheme();

  return (
    <div className={`card-container ${theme}`}>
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
