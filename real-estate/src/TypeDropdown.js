
const TypeDropdown = (props) =>{
    return(
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonType" data-bs-toggle="dropdown" aria-expanded="false">
    {props.name}
  </button>
  
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" id='as'>Apartments for sale</a></li>
    <li><a className="dropdown-item" id='ar'>Apartments for rent</a></li>
    <li><a className="dropdown-item" id='ss'>Studios for sale</a></li>
    <li><a className="dropdown-item" id='sr'>Studios for rent</a></li>
  </ul>
</div>

    )
}

export default TypeDropdown;