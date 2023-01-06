import React, { useState, useEffect } from "react";
import "../styles/other.css";

export default function Timer({
  startTime,
  allNotFound,
  minutes,
  seconds,
  setMinutes,
  setSeconds,
}) {
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
  });

  return (
    <div className="timer">
      {minutes}:{seconds}
    </div>
  );
}
