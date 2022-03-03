import React from 'react'

const NeighbourhoodDropdown = (props) =>{

    var [neighbourhood, setNeighbourhood] = React.useState('Choose neighbourhood');

    var data = props.data;
    if(data === 'reclick'){return <React.Fragment></React.Fragment>}
    if(data)
    {data = Object.values(data)}

if(data){
    return(
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonNeighbourhood" data-bs-toggle="dropdown" aria-expanded="false">
    {neighbourhood}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      {
      data[0].map((item) => {return (<li><a className="dropdown-item" onClick={() => {setNeighbourhood(Object.keys(item))}}>{Object.keys(item)}</a></li>)})
      }
  </ul>
</div>
    )}else {return <React.Fragment></React.Fragment>}

}

export default NeighbourhoodDropdown