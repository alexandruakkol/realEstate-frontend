import React from 'react'
import TypeDropdown from './TypeDropdown';
import NeighbourhoodDropdown from './NeighbourhoodDropdown';
const App = () => {

    const [cur_data,setCur_data] = React.useState();
    
    const [apSale, setApSale] = React.useState({});
    const [apRent, setApRent] = React.useState({});
    const [stdSale, setStdSale] = React.useState({});
    const [stdRent, setStdRent] = React.useState({});

    const [mode, setMode] = React.useState('Choose property type');
 
    const url1 = 'https://real-estate-backend-21.herokuapp.com/apartments-for-rent';
    const url2= 'https://real-estate-backend-21.herokuapp.com/apartments-for-sale';
    const url3 = 'https://real-estate-backend-21.herokuapp.com/studios-for-rent';
    const url4 = 'https://real-estate-backend-21.herokuapp.com/studios-for-sale';
    React.useEffect( () =>{

    fetch(url1)
    .then(response1 => response1.json())
    .then(data1 => {setApRent(data1)})
    .catch((error) => console.log(error));
        
    fetch(url2)
    .then(response2 => response2.json())
    .then(data2 => setApSale(data2))
    .catch((error) => console.log(error));

    fetch(url3)
    .then(response3 => response3.json())
    .then(data3 => setStdRent(data3))
    .catch((error) => console.log(error));

    fetch(url4)
    .then(response4 => response4.json())
    .then(data4 => setStdSale(data4))
    .catch((error) => console.log(error));

    document.querySelector('#as').addEventListener('click', () =>{setMode('Apartments for sale')});
    document.querySelector('#ar').addEventListener('click', () =>{setMode('Apartments for rent')});
    document.querySelector('#ss').addEventListener('click', () =>{setMode('Studios for sale')});
    document.querySelector('#sr').addEventListener('click', () =>{setMode('Studios for rent')});

    document.querySelector('#dropdownMenuButtonType').addEventListener('click', () =>{setCur_data('reclick')});
    
},
    []
);

React.useEffect(() => {
    if(mode === 'Apartments for sale'){setCur_data(apSale)}
    if(mode === 'Apartments for rent'){setCur_data(apRent)}
    if(mode === 'Studios for sale'){setCur_data(stdSale)}
    if(mode === 'Studios for rent'){setCur_data(stdRent)}
},[mode]);
// add eventlisteners for dropdowns

  return (

    <React.Fragment>
        <TypeDropdown name={mode}>
        </TypeDropdown>

            <NeighbourhoodDropdown data={cur_data}>
            </NeighbourhoodDropdown>
    </React.Fragment>
  )
}



export default App