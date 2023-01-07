import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav({ level }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li style={{ fontSize: "2rem" }}>{level}</li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
}
