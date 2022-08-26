import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { useTheme } from "./contexts/themeContext";

import "./index.css";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <main className="content">
        <Header />
        <Search />

        <Card />
      </main>
    </div>
  );
}

export default App;
