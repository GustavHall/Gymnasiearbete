import { useState, useRef, useEffect } from "react";
import IronForm from "./ironform.jsx";
import HybridForm from "./hybridform.jsx";
import FairwaywoodForm from "./fairwaywoodform.jsx";
import DriverForm from "./driverform.jsx";

function Home() {
  const questionformref = useRef(null);
  const [viewType, setviewType] = useState(0);

  const changeViewType = (number) => {
    setviewType(number);
  };

  useEffect(() => {
    questionformref.current.scrollIntoView({ behavior: "smooth" });
  }, [viewType]);

  return (
    <div className="App">
      <div className="heroContainer">
        <h1 className="headerTitle">Golfvett</h1>
        <div className="buttonContainer">
          <button
            onClick={() => {
              changeViewType(1);
            }}
            className="heroButton"
          >
            Hitta ditt Järnset
          </button>
          <button
            onClick={() => {
              changeViewType(2);
            }}
            className="heroButton2"
          >
            Hitta din Hybrid
          </button>
          <button
            onClick={() => {
              changeViewType(3);
            }}
            className="heroButton3"
          >
            Hitta din Fairwaywood
          </button>
          <button
            onClick={() => {
              changeViewType(4);
            }}
            className="heroButton4"
          >
            Hitta din Driver
          </button>
        </div>
      </div>
      <div ref={questionformref}>
        {viewType === 1 && <IronForm />}
        {viewType === 2 && <HybridForm />}
        {viewType === 3 && <FairwaywoodForm />}
        {viewType === 4 && <DriverForm />}
      </div>
    </div>
  );
}

export default Home;
