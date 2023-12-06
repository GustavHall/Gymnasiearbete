import * as React from "react";
import { updateForm } from "../formStore";

function IronForm() {
  const [question, setQuestion] = React.useState(0);
  const [selectedBrands, setselectedBrands] = React.useState([]);
  const [formData, setFormData] = React.useState({
    gender: "",
    swingspeed: "",
    hcp: "",
    irontype: "",
    hold: "",
    experienced: "",
    brand: [],
    range_controll: "",
  });

  const handleToggleBranchOptions = (e) => {
    const value = e.target.value;
    console.log(selectedBrands.includes(value));
    if (selectedBrands.includes(value)) {
      setselectedBrands((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
      event.target.checked = false;
    } else {
      setselectedBrands((prevSelected) => [...prevSelected, value]);
      event.target.checked = true;
    }
  };

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

  React.useEffect(() => {
    updateForm({ id: "form", formData });
  }, [formData]);

  React.useEffect(() => {
    console.log(selectedBrands);
    setFormData({ ...formData, brand: selectedBrands });
  }, [selectedBrands]);

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
            <label htmlFor="name">Fråga 3: Hur högt handikapp har du?</label>
            <div>
              <label htmlFor="high">Högt</label>
              <input
                type="radio"
                id="high"
                name="hcp"
                value="high"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="middle">Mellan</label>
              <input
                type="radio"
                id="middle"
                name="hcp"
                value="middle"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="low">Lågt</label>
              <input
                type="radio"
                id="low"
                name="hcp"
                value="low"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {question === 3 && (
          <div>
            <label htmlFor="name">
              Fråga 4: Föredrar du stål eller grafit?
            </label>
            <div>
              <label htmlFor="steel">Stål</label>
              <input
                type="radio"
                id="steel"
                name="golf_shaft_type"
                value="steel"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="graphite">Grafit</label>
              <input
                type="radio"
                id="graphite"
                name="golf_shaft_type"
                value="graphite"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="both">Båda</label>
              <input
                type="radio"
                id="both"
                name="golf_shaft_type"
                value="both"
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
            <label htmlFor="name">Fråga 7: Föredrar du något golfmärke?</label>
            <div>
              <label htmlFor="callaway">Callaway</label>
              <input
                type="radio"
                id="callaway"
                value="callaway"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="titleist">Titleist</label>
              <input
                type="radio"
                id="titleist"
                value="titleist"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="cobra">Cobra</label>
              <input
                type="radio"
                id="cobra"
                value="cobra"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="taylormade">TaylorMade</label>
              <input
                type="radio"
                id="taylormade"
                value="taylormade"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="mizuno">Mizuno</label>
              <input
                type="radio"
                id="mizuno"
                value="mizuno"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="srixon">Srixon</label>
              <input
                type="radio"
                id="srixon"
                value="srixon"
                onClick={handleToggleBranchOptions}
              />
            </div>
            <div>
              <label htmlFor="wilson">Wilson</label>
              <input
                type="radio"
                id="wilson"
                value="wilson"
                onClick={handleToggleBranchOptions}
              />
            </div>
          </div>
        )}
        {question === 7 && (
          <div>
            <label htmlFor="name">
              Fråga 8: Är det viktigare för dig att slå längre eller att ha mer
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
      {question < 7 ? (
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
export default IronForm;
