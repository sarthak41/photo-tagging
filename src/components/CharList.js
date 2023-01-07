import React from "react";

export default function CharList({ locs }) {
  return (
    locs && (
      <div className="char-list">
        <ul>
          {locs.map((loc) => (
            <li key={loc.character}>
              <div className={loc.found ? "strikethrough" : null}>
                {loc.character}
              </div>
              <img src={`/${loc.character}.png`} alt={loc.character} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
