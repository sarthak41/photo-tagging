import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/image">Image</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
}
