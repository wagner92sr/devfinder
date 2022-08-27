import { CardHeader } from "./Header";
import { Counters } from "./Counters";
import { Footer } from "./Footer";
import { useTheme } from "../../contexts/themeContext";
import { useUser } from "../../contexts/userContext";

import "./card.css";

export function Card() {
  const { theme } = useTheme();
  const { bio, avatar } = useUser();

  return (
    <div className={`card-container ${theme}`}>
      <img src={avatar} alt="Imagem usuário" className="image" />

      <main className="card-body">
        <CardHeader />

        <p className="bio">{bio ? bio : "This profile has no bio"}</p>

        <Counters />

        <Footer />
      </main>
    </div>
  );
}
