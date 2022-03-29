import React, { useState } from "react";
import 'bootstrap/js/dist/tooltip.js'

const Form = ({ transmitToApp, neighbourhood, isEnglish }) => {
  const [metro, setMetro] = useState("");
  const [area, setArea] = useState("");
  const [central, setCentral] = useState(false);
  const [mixed, setMixed] = useState(false);
  const [rehab, setRehab] = useState(false);
  const [year, setYear] = useState("1950-1977");
  const [floor, setFloor] = useState("midFloor");
  const [condition, setCondition] = useState("finish");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //conditional return
  if (
    Object.values(neighbourhood)[0] !== "Choose neighbourhood" &&
    Object.values(neighbourhood)[0] !== "Alege cartierul"
  ) {
    return (
      <form className="mainForm" onSubmit={handleSubmit}>
        {/* Text area */}
        <div className="areaForm">
          <label className="areaLabel required-field title" htmlFor="area">
            {isEnglish ? "Useful area (m²):" : "m² utili:"}
          </label>
          <input
            pattern="[0-9]+$"
            type="text"
            id="area"
            placeholder="ex. 52"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
            maxLength="3"
            required
          ></input>
        </div>

        <div className="metroDiv">
          <label className="metroLabel title" htmlFor="metroDistance">
            {isEnglish
              ? "Distance to metro (meters):"
              : "Distanța până la metrou (metri):"}
          </label>
          <input
            pattern="[0-9]+$"
            type="text"
            placeholder="600"
            id="metroDistance"
            value={metro}
            onChange={(e) => {
              setMetro(e.target.value);
            }}
            maxLength="5"
          ></input>
        </div>

        {/* Checkbox area */}
        <div className="checks">
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="heating"
              onChange={() => {
                setCentral(!central);
              }}
            ></input>
            <label htmlFor="heating">
              {isEnglish ? "Central heating" : "Centrală termică"}
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="mixed"
              onChange={() => {
                setMixed(!mixed);
              }}
            ></input>
            <label htmlFor="mixed">
              {isEnglish ? "Mixed building" : "Bloc mixt"}
            </label>
          </div>
          <div>
            <input
              className="form-check-input"
              type="checkbox"
              id="rehab"
              onChange={() => {
                setRehab(!rehab);
              }}
            ></input>
            <label htmlFor="rehab">
              {isEnglish ? "Thermal rehabilitation" : "Bloc reabilitat"}
            </label>
          </div>
        </div>
        <section className="radios">
          {/* Year built radios */}
          <div className="yearRadios">
            <p className="title">
              {isEnglish ? "Building year:" : "An construcție:"}
            </p>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="<1950"
                name="year"
                onChange={(e) => {
                  setYear(e.target.id);
                }}
              ></input>
              <label htmlFor="<1950">&#60;1950</label>
            </div>

            <div>
              <input
                className="form-check-input"
                type="radio"
                id="1950-1977"
                name="year"
                onChange={(e) => {
                  setYear(e.target.id);
                }}
              ></input>
              <label htmlFor="1950-1977">1950-1977</label>
            </div>

            <div>
              <input
                className="form-check-input"
                type="radio"
                id="1977-1990"
                name="year"
                onChange={(e) => {
                  setYear(e.target.id);
                }}
              ></input>
              <label htmlFor="1977-1990">1977-1990</label>
            </div>

            <div>
              <input
                className="form-check-input"
                type="radio"
                id=">1990"
                name="year"
                onChange={(e) => {
                  setYear(e.target.id);
                }}
              ></input>
              <label htmlFor=">1990">&#62;1990</label>
            </div>
          </div>

          {/* Floor radios*/}

          <div className="floorRadios">
            <p className="title">{isEnglish ? "Floor:" : "Etaj:"}</p>
            <div>
              <input
                className="form-check-input"
                type="radio"
                id="midFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="midFloor">
                {isEnglish ? "Mid floor" : "Etaj intermediar"}
              </label>
            </div>

            <div>
              <input
                className="form-check-input"
                type="radio"
                id="groundFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="groundFloor">
                {isEnglish ? "Ground floor" : "Parter"}
              </label>
            </div>

            <div>
              <input
                className="form-check-input"
                type="radio"
                id="lastFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="lastFloor">
                {isEnglish ? "Last floor" : "Ultimul etaj"}
              </label>
            </div>
          </div>

          {/* Condition radios*/}
          <div className="conditionRadios">
            <p className="title">{isEnglish ? "Condition:" : "Condiție:"}</p>

            <div className="conditionContainer">
              <div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="shell"
                    name="condition"
                    onChange={(e) => {
                      setCondition(e.target.id);
                    }}
                  ></input>
                  <label className="conditionLabel" htmlFor="shell">
                    {isEnglish ? "Shell stage" : "Necesită renovări majore"}
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="finish"
                    name="condition"
                    onChange={(e) => {
                      setCondition(e.target.id);
                    }}
                  ></input>
                  <label className="conditionLabel" htmlFor="finish">
                    {isEnglish ? "Finish stage" : "Finisat, nemobilat"}
                  </label>
                </div>

                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="turnkey"
                    name="condition"
                    onChange={(e) => {
                      setCondition(e.target.id);
                    }}
                  ></input>
                  <label className="conditionLabel" htmlFor="turnkey">
                    {isEnglish ? "Turnkey" : "La gata"}
                  </label>
                </div>
              </div>

              <div>
                  <h6 className="toolTip" id="shell_tooltip" ><span data-toggle="tooltip" data-placement="left" title="Tooltip on right">?</span></h6>
                  <h6 className="toolTip" id="finish_tooltip"><span>?</span></h6>
                  <h6 className="toolTip" id="turnkey_tooltip"><span>?</span></h6>
              </div>

            </div>
          </div>
        </section>
        <button
          type="submit"
          className="btn btn-success submit-btn"
          onClick={() => {
            transmitToApp({
              metro: metro,
              area: area,
              central: central,
              mixed: mixed,
              rehab: rehab,
              year: year,
              floor: floor,
              condition: condition,
            });
          }}
        >
          {isEnglish ? "Submit" : "Evaluează"}
        </button>
      </form>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export default Form;
