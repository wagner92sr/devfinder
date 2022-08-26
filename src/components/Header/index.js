import { useTheme } from "../../contexts/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./header.css";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>Dev Finder</h1>

      <button onClick={toggleTheme}>
        <span>{theme === "dark" ? "light" : "dark"}</span>
        {theme === "dark" ? (
          <FaSun size={18} color="var(--gray" />
        ) : (
          <FaMoon size={18} color="var(--gray" />
        )}
      </button>
    </header>
  );
}
