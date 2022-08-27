import { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { useUser } from "../../../contexts/userContext";
import "./header.css";

import months from "./months";

export function CardHeader() {
  const { theme } = useTheme();
  const { username, name, linkprofile, createdAt } = useUser();
  const [date, setDate] = useState(new Date());

  useEffect(() => setDate(new Date(createdAt)), [createdAt]);

  return (
    <header className="card-header">
      <a
        href={linkprofile}
        target="_blank"
        rel="noreferrer"
        className={`username ${theme}`}
      >
        <h2>{name}</h2>
        <h3>@{username}</h3>
      </a>

      <span>{`Joined ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`}</span>
    </header>
  );
}
