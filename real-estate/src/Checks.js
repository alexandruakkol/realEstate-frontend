import React from "react";

const Checks = () => {
  return (
    <div className="checks">
      <label htmlFor="heating">Central heating</label>
      <input type="checkbox" id="heating"></input>

      <label htmlFor="mixed">Mixed building</label>
      <input type="checkbox" id="mixed"></input>

      <label htmlFor="rehab">Thermal rehabilitation</label>
      <input type="checkbox" id="rehab"></input>
      
    </div>
  );
};

export default Checks;
