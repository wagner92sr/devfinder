import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./search.css";

export function Search() {
  const [username, setUsername] = useState("");

  return (
    <form className="dark">
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
