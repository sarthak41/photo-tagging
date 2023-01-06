import React from "react";
import { Link } from "react-router-dom";
import "../styles/other.css";

export default function Alert({ minutes, seconds }) {
  console.log(minutes, seconds);
  return seconds !== "00" || minutes !== "00" ? (
    <div className="alert">
      <h2>Congratulations!</h2> You found all of the characters in {minutes}:
      {seconds}
    </div>
  ) : null;
}
