import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../contexts/themeContext";

import "./search.css";

export function Search() {
  const { theme } = useTheme();
  const [username, setUsername] = useState("");

  return (
    <form className={theme}>
      <FaSearch size={28} color="var(--blue)" />
      <input
        type="text"
        placeholder="Search Github username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
