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
   setNeighbourhood(props.isEnglish ? "Choose neighbourhood":"Alege cartierul")
  }, [props.isEnglish]);

  React.useEffect(() => {

    if (neighbourhood !== "Choose neighbourhood" || neighbourhood !== "Alege cartierul") {
      props.transmitNeighbourhood({ neighbourhood: neighbourhood });
    }
  }, [neighbourhood]);

  var data = props.data;
  if (data) {
    data = Object.values(data);
  }

  if (data) {
    return (
      <div className="dropdown neighDropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButtonNeighbourhood"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {neighbourhood}
        </button>
        <ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton1">
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
