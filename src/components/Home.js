import React, { useEffect } from "react";
import Card from "./Card";

export default function Home({ images, setImg, setLevelName }) {
  useEffect(() => {
    setLevelName(null);
  }, [setLevelName]);

  return (
    <div className="after-nav home">
      <ul className="cards">
        {images.map((img) => (
          <li key={img.id}>
            <Card img={img} setImg={setImg} setLevelName={setLevelName} />
          </li>
        ))}
      </ul>
    </div>
  );
}
