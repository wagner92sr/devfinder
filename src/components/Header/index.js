import { FaSun } from "react-icons/fa";
import "./header.css";

export function Header() {
  return (
    <header>
      <h1>Dev Finder</h1>

      <button>
        <span>Dark</span>

        <FaSun size={18} color="var(--gray" />
      </button>
    </header>
  );
}
