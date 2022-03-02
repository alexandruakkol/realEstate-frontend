import React from 'react'

const App = () => {

    const [apSale, setApSale] = React.useState('');
    const [apRent, setApRent] = React.useState('');
    const [stdSale, setStdSale] = React.useState('');
    const [stdRent, setStdRent] = React.useState('');

    var headers = {}
    const url1 = 'https://real-estate-backend-21.herokuapp.com/apartments-for-rent';
    const url2= 'https://real-estate-backend-21.herokuapp.com/apartments-for-sale';
    const url3 = 'https://real-estate-backend-21.herokuapp.com/studios-for-rent';
    const url4 = 'https://real-estate-backend-21.herokuapp.com/studios-for-sale';
    React.useEffect( () =>{

    fetch(url1)
    .then(response1 => response1.json())
    .then(data1 => setApRent(data1))
    .catch((error) => console.log(error));
        
    fetch(url2)
    .then(response2 => response2.json())
    .then(data2 => console.log(data2))
    .catch((error) => console.log(error));

    fetch(url3)
    .then(response3 => response3.json())
    .then(data3 => console.log(data3))
    .catch((error) => console.log(error));

    fetch(url4)
    .then(response4 => response4.json())
    .then(data4 => console.log(data4))
    .catch((error) => console.log(error));
},
    []
)
  return (
    <React.Fragment>
            <NeighbourhoodDropdown>
            </NeighbourhoodDropdown>
    </React.Fragment>
  )
}

const NeighbourhoodDropdown = () =>{

    return(
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    )

}
export default App