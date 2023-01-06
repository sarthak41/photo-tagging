import React, { useState, useEffect } from "react";
import "../styles/timer.css";

export default function Timer({ startTime, allNotFound }) {
  const [minutes, setMinutes] = useState("0".padStart(2, "0"));
  const [seconds, setSeconds] = useState("0".padStart(2, "0"));

  useEffect(() => {
    if (allNotFound) {
      const interval = setInterval(() => {
        const currTime = new Date().getTime();
        const newTime = Math.floor((currTime - startTime) / 1000);
        setMinutes(
          Math.floor(newTime / 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })
        );
        setSeconds(
          (newTime % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })
        );
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [minutes, seconds, startTime, allNotFound]);

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
}
