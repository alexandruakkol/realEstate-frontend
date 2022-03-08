import React from "react";

const Form = ({ transmitToApp, neighbourhood }) => {
  const [metro, setMetro] = React.useState("");
  const [area, setArea] = React.useState("");
  const [central, setCentral] = React.useState(false);
  const [mixed, setMixed] = React.useState(false);
  const [rehab, setRehab] = React.useState(false);
  const [year, setYear] = React.useState("");
  const [floor, setFloor] = React.useState("midFloor");
  const [condition, setCondition] = React.useState("finish");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //conditional return
  if (Object.keys(neighbourhood).length !== 0) {
    return (
      <form className="mainForm" onSubmit={handleSubmit}>
        {/* Text area */}
        <div className="areaForm">
          <label className="areaLabel required-field" htmlFor="area">
            Area (m²)
          </label>
          <input
            pattern="[0-9]+$"
            type="text"
            id="area"
            placeholder="52"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
            }}
            maxLength="3"
            required
          ></input>
        </div>

        <div className="metroDiv">
          <label className="metroLabel" htmlFor="metroDistance">
            Distance to metro (meters)
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
              type="checkbox"
              id="heating"
              onChange={() => {
                setCentral(!central);
              }}
              
            ></input>
            <label htmlFor="heating">Central heating</label>
          </div>
          <div>
            
            <input
              type="checkbox"
              id="mixed"
              onChange={() => {
                setMixed(!mixed);
              }}
            ></input>
            <label htmlFor="mixed">Mixed building</label>
          </div>
          <div>
            
            <input
              type="checkbox"
              id="rehab"
              onChange={() => {
                setRehab(!rehab);
              }}
            ></input>
            <label htmlFor="rehab">Thermal rehabilitation</label>
          </div>
        </div>
        <section className="radios">
          {/* Year built radios */}
          <div className="yearRadios">
            <p>Building year:</p>
            <div>
              <input
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
            <p>Floor:</p>
            <div>
              <input
                type="radio"
                id="midFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="midFloor">Mid Floor</label>
            </div>

            <div>
              <input
                type="radio"
                id="groundFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="groundFloor">Ground Floor</label>
            </div>

            <div>
              <input
                type="radio"
                id="lastFloor"
                name="floor"
                onChange={(e) => {
                  setFloor(e.target.id);
                }}
              ></input>
              <label htmlFor="lastFloor">Last floor</label>
            </div>
          </div>

          {/* Condition radios*/}
          <div className="conditionRadios">
            <p>Condition</p>
            <div>
              <input
                type="radio"
                id="shell"
                name="condition"
                onChange={(e) => {
                  setCondition(e.target.id);
                }}
              ></input>
              <label htmlFor="shell">Shell stage</label>
            </div>

            <div>
              <input
                type="radio"
                id="finish"
                name="condition"
                onChange={(e) => {
                  setCondition(e.target.id);
                }}
              ></input>
              <label htmlFor="finish">Finish stage</label>
            </div>

            <div>
              <input
                type="radio"
                id="turnkey"
                name="condition"
                onChange={(e) => {
                  setCondition(e.target.id);
                }}
              ></input>
              <label htmlFor="turnkey">Turnkey</label>
            </div>
          </div>
        </section>
        <button
          type="submit"
          className='btn btn-outline-success submit-btn'
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
          Submit
        </button>
      </form>
    );
  }
  return <React.Fragment></React.Fragment>;
};

export default Form;
