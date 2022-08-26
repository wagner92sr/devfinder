import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

import "./index.css";

function App() {
  return (
    <div className="container dark">
      <main className="content">
        <Header />
        <Search />

        <Card />
      </main>
    </div>
  );
}

export default App;
