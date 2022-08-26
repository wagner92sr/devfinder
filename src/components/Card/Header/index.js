import { useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import "./header.css";

import months from "./months";

export function CardHeader() {
  const { theme } = useTheme();
  const [date, setDate] = useState(new Date());

  return (
    <header className="card-header">
      <a
        href="#/"
        target="_blank"
        rel="noreferrer"
        className={`username ${theme}`}
      >
        <h2>Wagner Rodrigues</h2>
        <h3>@wagner92sr</h3>
      </a>

      <span>{`Joined ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`}</span>
    </header>
  );
}
