import React, { useEffect, useState } from "react";
import "../styles/image.css";

export default function Click({
  child,
  locs,
  setLocs,
  allNotFound,
  incrFound,
}) {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const isInside = (hper, wper, x, y) => {
    if (Math.abs(hper - y) * 100 <= 3 && Math.abs(wper - x) * 100 <= 3)
      return true;
    return false;
  };

  const setScannerLocation = (e) => {
    const rect = e.target.getBoundingClientRect();
    setX(e.clientX - rect.left);
    setY(e.clientY - rect.top);
    setShow(true);
  };

  const checkSelection = (e) => {
    const character = e.target.textContent;
    const imgDiv = e.target.parentNode.parentNode.parentNode.parentNode;

    const height = imgDiv.offsetHeight,
      width = imgDiv.offsetWidth;

    const hper = y / height;
    const wper = x / width;

    const loc_ind = locs.findIndex((l) => l.character === character);

    if (
      locs[loc_ind] &&
      isInside(hper, wper, locs[loc_ind].x, locs[loc_ind].y)
    ) {
      locs[loc_ind].found = true;
      setLocs(locs);
      incrFound();
    }
  };

  const displayOptions = () => {
    return (
      <ul style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        {locs.map((loc) =>
          !loc.found ? (
            <li
              className="option"
              onClick={(e) => {
                checkSelection(e);
              }}
            >
              {loc.character}
            </li>
          ) : null
        )}
      </ul>
    );
  };

  useEffect(() => {
    console.log("X: ", x, "Y: ", y);
  }, [x, y]);

  return (
    <div
      className="img after-nav"
      onClick={(e) => {
        setScannerLocation(e);
      }}
    >
      {child}
      {show && allNotFound ? (
        <div>
          <div
            className="scanner"
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            style={{
              top: `${y}px`,
              left: `${x}px`,
            }}
          ></div>
          <div
            className="options"
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            style={{
              top: `${y}px`,
              left: `${x}px`,
            }}
          >
            {displayOptions()}
          </div>
        </div>
      ) : null}
    </div>
  );
}
