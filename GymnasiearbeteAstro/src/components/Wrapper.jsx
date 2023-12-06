import * as React from "react";
import IronForm from "./ironform";

const scrollHalfway = () => {
  window.scrollTo({
    top: document.body.scrollHeight / 2.5,
    behavior: "smooth",
  });
};

function Wrapper() {
  return (
    <div className="App">
      <div className="heroContainer">
        <h1 className="headerTitle">Golfvett</h1>
        <div className="buttonContainer">
          <button className="heroButton" onClick={scrollHalfway}>
            Hitta ditt Järnset
          </button>
        </div>
      </div>
      <IronForm />
    </div>
  );
}

export default Wrapper;
