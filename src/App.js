import "./App.css";
import "./styles/global.css";
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
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/image"
            element={<Image src={img1} alt={"Skiing"} id="img1" />}
          />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
