import React from "react";

const Form = ({ transmitToApp,neighbourhood}) => {
  const [price, setPrice] = React.useState("");
  const [metro, setMetro] = React.useState("");
  const [area, setArea] = React.useState("");
  const [central, setCentral] = React.useState(false);
  const [mixed, setMixed] = React.useState(false);
  const [rehab, setRehab] = React.useState(false);
  const [year, setYear] = React.useState("");
  const [floor, setFloor] = React.useState("");
  const [condition, setCondition] = React.useState("finish");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //conditional return 
  if(Object.keys(neighbourhood).length !== 0){
  return (
    <form onSubmit={handleSubmit}>
      {/* Text area */}
      <label className="required-field" htmlFor="price">
        Price (€)
      </label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        minLength='5'
        required
      ></input>

      <div className="areaForm">
        <label className="required-field" htmlFor="area">
          Area (m²)
        </label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => {
            setArea(e.target.value);
          }}
          maxLength="3"
          required
        ></input>
      </div>

      <div className="metroDiv">
        <label htmlFor="metroDistance">Distance to metro (meters)</label>
        <input
          type="text"
          id="metroDistance"
          value={metro}
          onChange={(e) => {
            setMetro(e.target.value);
          }}
          maxLength='5'
        ></input>
      </div>
      {/* Checkbox area */}
      <div className="checks">
        <label htmlFor="heating">Central heating</label>
        <input
          type="checkbox"
          id="heating"
          onChange={() => {
            setCentral(!central);
          }}
        ></input>

        <label htmlFor="mixed">Mixed building</label>
        <input
          type="checkbox"
          id="mixed"
          onChange={() => {
            setMixed(!mixed);
          }}
        ></input>

        <label htmlFor="rehab">Thermal rehabilitation</label>
        <input
          type="checkbox"
          id="rehab"
          onChange={() => {
            setRehab(!rehab);
          }}
        ></input>
      </div>

      <section className="radios">
        {/* Year built radios */}
        <div className="yearRadios">
          <p className="required-field" >Building year:</p>
          <div>
            <input
              type="radio"
              id="<1950"
              name="year"
              onChange={(e) => {
                setYear(e.target.id);
              }}
              required
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
        onClick={() => {
          transmitToApp({
            price: price,
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
  );}
  return <React.Fragment></React.Fragment>
};

export default Form;
