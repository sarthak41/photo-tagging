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

function App() {
  const images = [
    {
      id: "img1",
      src: img1,
      alt: "Skiing",
    },
  ];
  const [img, setImg] = useState(images[0]);
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            element={<Image src={img1} alt="Skiing" id="img1" />}
            path="/image"
          />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
