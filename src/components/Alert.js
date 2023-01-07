import React from "react";
import { Link } from "react-router-dom";
import "../styles/other.css";

export default function Alert({ minutes, seconds }) {
  return seconds !== "00" || minutes !== "00" ? (
    <div className="alert">
      <h2>Congratulations!</h2>
      <div>
        You found all of the characters in{" "}
        <span style={{ fontFamily: "monospace" }}>
          {minutes}:{seconds}
        </span>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  ) : null;
}
