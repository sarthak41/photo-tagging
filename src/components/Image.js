import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import Click from "./Click";
import Timer from "./Timer";
import Alert from "./Alert";
import CharList from "./CharList";

export default function Image({ src, alt, id }) {
  const [locs, setLocs] = useState([]);
  const [foundCount, setFoundCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [startTime, setStartTime] = useState();

  const [minutes, setMinutes] = useState("0".padStart(2, "0"));
  const [seconds, setSeconds] = useState("0".padStart(2, "0"));

  const incrFound = () => {
    setFoundCount(foundCount + 1);
  };

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
    if (!loaded) {
      setStartTime(new Date().getTime() + 1);
    }
    setLoaded(true);
  }, [loaded, id]);

  const img = <img src={src} alt={alt} style={{ width: "100%" }} />;
  return (
    // <div>
    <>
      <Click
        child={img}
        id={id}
        locs={locs}
        setLocs={setLocs}
        allNotFound={foundCount < locs.length}
        incrFound={incrFound}
      />
      <Timer
        startTime={startTime}
        allNotFound={foundCount < locs.length}
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      {foundCount >= locs.length && (
        <Alert minutes={minutes} seconds={seconds} />
      )}
      <CharList locs={locs} />
    </>
    // </div>
  );
}
