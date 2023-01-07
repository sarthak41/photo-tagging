import "./App.css";
import "./styles/global.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import firestore from "./firebase/firebase";
// import { collection, getDocs } from "firebase/firestore/lite";
// import { useState, useEffect } from "react";
// import Click from "./components/Click";
import Home from "./components/Home";
import Image from "./components/Image";
import Nav from "./components/Nav";
import Info from "./components/Info";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";

function App() {
  const images = [
    {
      id: "img1",
      src: img1,
      alt: "Ski Mountain",
    },
    {
      id: "img2",
      src: img2,
      alt: "At the Beach",
    },
    {
      id: "img3",
      src: img3,
      alt: "Race Track",
    },
    {
      id: "img4",
      src: img4,
      alt: "In Hollywood",
    },
    {
      id: "img5",
      src: img5,
      alt: "The Moon",
    },
  ];

  const [img, setImg] = useState(images[0]);
  const [levelName, setLevelName] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Nav level={levelName} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                images={images}
                setImg={setImg}
                setLevelName={setLevelName}
              />
            }
          />
          <Route
            path="/image"
            element={<Image src={img.src} alt={img.alt} id={img.id} />}
          />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
