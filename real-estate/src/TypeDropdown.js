const TypeDropdown = (props) => {
  return (
    <div className="dropdown typeDropdown">
      <button
        className="btn btn-secondary dropdown-toggle appStart"
        type="button"
        id="dropdownMenuButtonType"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.isEnglish ? props.name : "Alege tipul proprietății"}
      </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" id="as">
          {props.isEnglish ? "Apartment for sale" : "Apartament de vânzare"}
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="ar">
          {props.isEnglish ? "Apartment for rent" : "Apartament de închiriat"}
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="ss">
          {props.isEnglish ? "Studio for sale" : "Garsonieră de vânzare"}
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="sr">
          {props.isEnglish ? "Studio for rent" : "Garsonieră de închiriat"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TypeDropdown;
