import React from "react";
import Card from "./Card";

export default function Home({ images, setImg }) {
  return (
    <div className="after-nav">
      <ul>
        {images.map((img) => (
          <li key={img.id}>
            <Card img={img} setImg={setImg} />
          </li>
        ))}
      </ul>
    </div>
  );
}
