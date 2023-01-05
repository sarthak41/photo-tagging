import React, { useEffect, useState } from "react";
import firestore from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Click from "./Click";

export default function Image({ src, alt, id }) {
  const [locs, setLocs] = useState([]);
  const [allFound, setAllFound] = useState(false);

  const areAllFound = () => {
    try {
      const initial = locs[0].found;
      return locs.reduce((a, b) => a * b.found, initial);
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    console.log(allFound);
  }, 3000);

  useEffect(() => {
    console.log(allFound);
    setAllFound(areAllFound());
  });

  useEffect(() => {
    const fetchLoc = async () => {
      const locCol = collection(firestore, id);
      const locDocs = await getDocs(locCol);
      const locations = locDocs.docs.map((doc) => {
        return {
          character: doc.id,
          x: doc.data().x,
          y: doc.data().y,
          found: false,
        };
      });

      console.log(locations);
      setLocs(locations);
    };

    fetchLoc();
  }, []);

  const img = <img src={src} alt={alt} style={{ maxWidth: "100%" }} />;
  return (
    // <div>
    <Click
      child={img}
      id={id}
      locs={locs}
      setLocs={setLocs}
      allFound={allFound}
    />
    // </div>
  );
}
