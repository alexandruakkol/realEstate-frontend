const TypeDropdown = (props) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButtonType"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.name}
      </button>
      <div id='getStarted'>Get started</div>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" id="as">
            Apartment for sale
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="ar">
            Apartment for rent
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="ss">
            Studio for sale
          </a>
        </li>
        <li>
          <a className="dropdown-item" id="sr">
            Studio for rent
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TypeDropdown;
