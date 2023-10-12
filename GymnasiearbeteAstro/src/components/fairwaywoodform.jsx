import { useState } from "react";

function FairwaywoodForm() {
  const [question, setQuestion] = useState(0);
  const [formData, setFormData] = useState({
    gender: "",
    swingspeed: "",
    hcp: "",
    irontype: "",
    hold: "",
    experienced: "",
    brand: "",
    range_controll: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleNext = () => {
    setQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className="mainWrapper">
      <form onSubmit={handleSubmit}>
        {question === 0 && (
          <div>
            <label htmlFor="name">Fråga 1: Är du Man eller Kvinna?</label>
            <div>
              <label htmlFor="man">Man</label>
              <input
                type="radio"
                id="man"
                name="gender"
                value="man"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="woman">Kvinna</label>
              <input
                type="radio"
                id="woman"
                name="gender"
                value="woman"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 1 && (
          <div>
            <label htmlFor="name">Fråga 2: Hur snabbt swingar du?</label>
            <div>
              <label htmlFor="slow">Långsamt</label>
              <input
                type="radio"
                id="slow"
                name="swingspeed"
                value="slow"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="medium">Mellan</label>
              <input
                type="radio"
                id="medium"
                name="swingspeed"
                value="medium"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="fast">Snabbt</label>
              <input
                type="radio"
                id="fast"
                name="swingspeed"
                value="fast"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 2 && (
          <div>
            <label htmlFor="name">Fråga 3: Vilket handikapp har du?</label>
            <div>
              <label htmlFor="hcp">Hcp:</label>
              <input
                type="hcp"
                id="hcp"
                name="hcp"
                value={formData.hcp}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 3 && (
          <div>
            <label htmlFor="name">Fråga 4: Föredrar du något golfmärke?</label>
            <div>
              <label htmlFor="callaway">Callaway</label>
              <input
                type="radio"
                id="callaway"
                name="brand"
                value="callaway"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="titleist">Titleist</label>
              <input
                type="radio"
                id="titleist"
                name="brand"
                value="titleist"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="cobra">Cobra</label>
              <input
                type="radio"
                id="cobra"
                name="brand"
                value="cobra"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="taylormade">TaylorMade</label>
              <input
                type="radio"
                id="taylormade"
                name="brand"
                value="taylormade"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mizuno">Mizuno</label>
              <input
                type="radio"
                id="mizuno"
                name="brand"
                value="mizuno"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="srixon">Srixon</label>
              <input
                type="radio"
                id="srixon"
                name="brand"
                value="srixon"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="wilson">Wilson</label>
              <input
                type="radio"
                id="wilson"
                name="brand"
                value="wilson"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="cleveland">Cleveland</label>
              <input
                type="radio"
                id="cleveland"
                name="brand"
                value="cleveland"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="scotty cameron">Scotty Cameron</label>
              <input
                type="radio"
                id="scotty cameron"
                name="brand"
                value="scotty cameron"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 4 && (
          <div>
            <label htmlFor="name">Fråga 5: Åt vilket håll slår du?</label>
            <div>
              <label htmlFor="right">Höger</label>
              <input
                type="radio"
                id="right"
                name="hold"
                value="right"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="left">Vänster</label>
              <input
                type="radio"
                id="left"
                name="hold"
                value="left"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 5 && (
          <div>
            <label htmlFor="name">Fråga 6: Hur länge har du spelat golf?</label>
            <div>
              <label htmlFor="experienced">År/Månader/Veckor:</label>
              <input
                type="experienced"
                id="experienced"
                name="experienced"
                value={formData.experienced}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 6 && (
          <div>
            <label htmlFor="name">
              Fråga 7: Är det viktigare för dig att slå längre eller att ha mer
              kontroll?
            </label>
            <div>
              <label htmlFor="range">Längd</label>
              <input
                type="radio"
                id="range"
                name="range_controll"
                value="range"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="controll">Kontroll</label>
              <input
                type="radio"
                id="controll"
                name="range_controll"
                value="controll"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </form>
      {question < 6 ? (
        <>
          {formData[question] !== "" ? (
            <button onClick={handleNext} className="buttonNästa">
              Nästa
            </button>
          ) : (
            <button onClick={handleNext} disabled>
              Nästa
            </button>
          )}
        </>
      ) : (
        <button onClick={handleSubmit} className="buttonVisaResultat">
          Visa resultat
        </button>
      )}
      <button
        onClick={handlePrevious}
        disabled={question === 0}
        className="buttonFörgående"
      >
        Förgående
      </button>
    </div>
  );
}

export default FairwaywoodForm;
