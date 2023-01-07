import React from "react";

export default function Info() {
  return (
    <div className="after-nav info">
      <h2 style={{ margin: 0 }}>How to Play</h2>
      <div style={{ width: "60%", textAlign: "center" }}>
        Find all the listed characters in the given image in as less time as
        possible!
      </div>
      <div className="icons">
        <div>
          <img src="/Waldo.png" alt="Waldo" />
        </div>
        <div>
          <img src="/Wenda.png" alt="Wenda" />
        </div>
        <div>
          <img src="/Odlaw.png" alt="Odlaw" />
        </div>
        <div>
          <img src="/Wizard.png" alt="Wizard" />
        </div>
      </div>
    </div>
  );
}
