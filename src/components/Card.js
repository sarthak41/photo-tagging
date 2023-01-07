import React from "react";
import { Link } from "react-router-dom";

export default function Card({ img, setImg, setLevelName }) {
  return (
    <Link to="/image">
      <div
        className="card"
        onClick={() => {
          setImg(img);
          setLevelName(img.alt);
        }}
      >
        <img src={img.src} alt={img.alt} />
        <div>{img.alt}</div>
      </div>
    </Link>
  );
}
