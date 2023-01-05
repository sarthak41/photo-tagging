import React, { useEffect, useState } from "react";

export default function Click({ child, locs, setLocs, allFound }) {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const isInside = (hper, wper, x, y) => {
    if (Math.abs(hper - y) * 100 <= 3 && Math.abs(wper - x) * 100 <= 3)
      return true;
    return false;
  };

  const displayOptions = () => {
    return (
      <ul style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
        {locs.map((loc) =>
          !loc.found ? (
            <li
              onClick={(e) => {
                const character = e.target.textContent;
                const imgDiv =
                  e.target.parentNode.parentNode.parentNode.parentNode;

                const height = imgDiv.offsetHeight,
                  width = imgDiv.offsetWidth;

                const hper = y / height;
                const wper = x / width;

                const loc_ind = locs.findIndex(
                  (l) => l.character === character
                );

                if (
                  locs[loc_ind] &&
                  isInside(hper, wper, locs[loc_ind].x, locs[loc_ind].y)
                ) {
                  console.log("yes");
                  locs[loc_ind].found = true;
                  setLocs(locs);
                } else console.log("nope");
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
        const rect = e.target.getBoundingClientRect();
        setX(e.clientX - rect.left);
        setY(e.clientY - rect.top);
        setShow(true);
      }}
    >
      {child}
      {show && !allFound ? (
        <div>
          <div
            className="scanner"
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              border: "1px solid blue",
              height: "60px",
              width: "60px",
              position: "absolute",
              top: `${y}px`,
              left: `${x}px`,
              zIndex: "100",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShow(false);
            }}
            style={{
              backgroundColor: "var(--indigo)",
              width: "80px",
              maxHeight: "100%",
              position: "absolute",
              top: `${y}px`,
              left: `${x}px`,
              zIndex: "100",
              transform: "translate(50%, -50%)",
              color: "white",
              padding: "20px",
            }}
          >
            {displayOptions()}
          </div>
        </div>
      ) : null}
    </div>
  );
}
