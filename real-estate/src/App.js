import React from "react";
import TypeDropdown from "./TypeDropdown";
import NeighbourhoodDropdown from "./NeighbourhoodDropdown";
import Form from "./Form";
import compute from "./Compute.js";

const App = () => {

  const [submitted, setSubmitted] = React.useState({});

  const [cur_data, setCur_data] = React.useState();
  const [neighbourhood, setNeighbourhood] = React.useState({});
  const [apSale, setApSale] = React.useState({});
  const [apRent, setApRent] = React.useState({});
  const [stdSale, setStdSale] = React.useState({});
  const [stdRent, setStdRent] = React.useState({});
  const [mode, setMode] = React.useState("Choose property type");
  const [results, setResults] = React.useState("");
  const url1 =
    "https://real-estate-backend-21.herokuapp.com/apartments-for-rent";
  const url2 =
    "https://real-estate-backend-21.herokuapp.com/apartments-for-sale";
  const url3 = "https://real-estate-backend-21.herokuapp.com/studios-for-rent";
  const url4 = "https://real-estate-backend-21.herokuapp.com/studios-for-sale";

  //run on start only
  React.useEffect(() => {
    fetch(url1)
      .then((response1) => response1.json())
      .then((data1) => {
        setApRent(data1);
      })
      .catch((error) => console.log(error));

    fetch(url2)
      .then((response2) => response2.json())
      .then((data2) => setApSale(data2))
      .catch((error) => console.log(error));

    fetch(url3)
      .then((response3) => response3.json())
      .then((data3) => setStdRent(data3))
      .catch((error) => console.log(error));

    fetch(url4)
      .then((response4) => response4.json())
      .then((data4) => setStdSale(data4))
      .catch((error) => console.log(error));

    document.querySelector("#as").addEventListener("click", () => {
      setMode("Apartment for sale");
    });
    document.querySelector("#ar").addEventListener("click", () => {
      setMode("Apartment for rent");
    });
    document.querySelector("#ss").addEventListener("click", () => {
      setMode("Studio for sale");
    });
    document.querySelector("#sr").addEventListener("click", () => {
      setMode("Studio for rent");
    });
    //Get Started button
    document.querySelector('.btn-success').addEventListener('click', () => {
        document.querySelector('#leftDiv2').scrollIntoView();
    })
  }, []);

  React.useEffect(() => {
    if (mode === "Apartment for sale") {
      setCur_data(apSale);
    }
    if (mode === "Apartment for rent") {
      setCur_data(apRent);
    }
    if (mode === "Studio for sale") {
      setCur_data(stdSale);
    }
    if (mode === "Studio for rent") {
      setCur_data(stdRent);
    }
  }, [mode]);

  const transmitNeighbourhood = (nb) => {
    setNeighbourhood(nb);
  };
  const transmitToApp = (data_from_form) => {
    if(!data_from_form.area){
        document.querySelector('#area').classList.add('error');
}
    let neighbourhoodPrice = Object.values(
      cur_data.data.find(
        (x) => Object.keys(x)[0] === neighbourhood.neighbourhood
      )
    )[0];
    setSubmitted({
      ...data_from_form,
      neighPrice: neighbourhoodPrice.price,
      mode: mode,
    });
  };
  React.useEffect(() => {
    setResults(compute(submitted));
  }, [submitted]);

  // add eventlisteners for dropdowns

  return (
    <React.Fragment>
      <TypeDropdown name={mode}></TypeDropdown>

      <NeighbourhoodDropdown
        data={cur_data}
        transmitNeighbourhood={transmitNeighbourhood}
      ></NeighbourhoodDropdown>
      <Form transmitToApp={transmitToApp} neighbourhood={neighbourhood}></Form>
      <div>{results || ""}</div>
    </React.Fragment>
  );
};

export default App;
