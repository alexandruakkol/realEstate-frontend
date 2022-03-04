import React from "react";

const Radios = () => {
  return (
    <section className="radios">
      {/* Year built */}
      <div className="yearRadios">
        <p>Building year:</p>
        <div>
          <input type="radio" id="<1950" name="year"></input>
          <label htmlFor="<1950">&#60;1950</label>
        </div>

        <div>
          <input type="radio" id="1950-1977" name="year"></input>
          <label htmlFor="1950-1977">1950-1977</label>
        </div>

        <div>
          <input type="radio" id="1977-1990" name="year"></input>
          <label htmlFor="1977-1990">1977-1990</label>
        </div>

        <div>
          <input type="radio" id=">1990" name="year"></input>
          <label htmlFor=">1990">&#62;1990</label>
        </div>
      </div>

      {/* Floor */}
      <div className="floorRadios">
        <p>Floor:</p>
        <div>
          <input type="radio" id='groundFloor' name="floor"></input>
          <label htmlFor="groundFloor">Ground Floor</label>
        </div>

        <div>
          <input type="radio" id="lastFloor" name="floor"></input>
          <label htmlFor="lastFloor">Last floor</label>
        </div>
      </div>

      {/* Condition */}
      <div className="conditionRadios">
        <p>Condition</p>
        <div>
          <input type="radio" id='shell' name="condition"></input>
          <label htmlFor="shell">Shell stage</label>
        </div>

        <div>
          <input type="radio" id="finish" name="condition"></input>
          <label htmlFor="finish">Finish stage</label>
        </div>

        <div>
          <input type="radio" id="turnkey" name="condition"></input>
          <label htmlFor="turnkey">Turnkey</label>
        </div>
      </div>

    </section>
  );
};

export default Radios;
