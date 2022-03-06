import React from "react";

const NeighbourhoodDropdown = (props) => {
  var [neighbourhood, setNeighbourhood] = React.useState(
    "Choose neighbourhood"
  );

  React.useEffect(() => {
    setNeighbourhood("Choose neighbourhood");
    if(document.querySelector('.mainForm')){document.querySelector('.mainForm').reset();}
    
  }, [props.data]);

  React.useEffect(() => {
    if (neighbourhood[0] !== "C") {
      props.transmitNeighbourhood({ neighbourhood: neighbourhood[0] });
    }
  }, [neighbourhood]);

  var data = props.data;
  if (data) {
    data = Object.values(data);
  }

  if (data) {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButtonNeighbourhood"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {neighbourhood}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {data[0].map((item) => {
            return (
              <div>
                <li
                  className="dropdown-item"
                  onClick={() => {
                    setNeighbourhood(Object.keys(item));
                  }}
                >
                  {Object.keys(item)}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default NeighbourhoodDropdown;
