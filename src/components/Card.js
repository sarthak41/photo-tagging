import React from "react";
import { Link } from "react-router-dom";

export default function Card({ img, setImg }) {
  return (
    <div
      className="card"
      onClick={() => {
        setImg(img);
      }}
    >
      <Link to="/image">
        <img src={img.src} alt={img.alt} />
        <div>{img.alt}</div>
      </Link>
    </div>
  );
}
