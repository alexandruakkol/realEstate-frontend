import React, { useState } from "react";
import TypeDropdown from "./TypeDropdown";
import NeighbourhoodDropdown from "./NeighbourhoodDropdown";
import Form from "./Form";
import compute from "./compute.js";

const App = () => {
  const [submitted, setSubmitted] = useState({});
  const [isEnglish, setIsEnglish] = useState(true);
  const [cur_data, setCur_data] = useState();
  const [neighbourhood, setNeighbourhood] = useState({});
  const [apSale, setApSale] = useState({});
  const [apRent, setApRent] = useState({});
  const [stdSale, setStdSale] = useState({});
  const [stdRent, setStdRent] = useState({});
  const [mode, setMode] = useState("Choose property type");
  const [results, setResults] = useState("");
  const url1 =
    "https://real-estate-backend-21.herokuapp.com/apartments-for-rent";
  const url2 =
    "https://real-estate-backend-21.herokuapp.com/apartments-for-sale";
  const url3 = "https://real-estate-backend-21.herokuapp.com/studios-for-rent";
  const url4 = "https://real-estate-backend-21.herokuapp.com/studios-for-sale";

  //run on start only
  React.useEffect(() => {
    //API calls
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

    //Scroll-into-view listeners
    document.querySelector(".mainButton").addEventListener("click", () => {
      document.querySelector(".appStart").scrollIntoView();
    });
    document.querySelector("#dataButton").addEventListener("click", () => {
      document.querySelector(".sources").scrollIntoView();
    });

    //Language event listeners
    document.querySelector(".english").addEventListener("click", () => {
      setIsEnglish(true);
      window.lang = "en";
    });
    document.querySelector(".romanian").addEventListener("click", () => {
      setIsEnglish(false);
      window.lang = "ro";
    });
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
  //liaison function btwn Form.js and App.js
  const transmitToApp = (data_from_form) => {
    if (!data_from_form.area) {
      document.querySelector("#area").classList.add("error");
    }

    //process raw data from Form.js
    let neighbourhoodPrice = Object.values(
      cur_data.data.find(
        (x) => Object.keys(x)[0] === neighbourhood.neighbourhood[0]
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

  // hook for tracking neighbourhood changes
  React.useEffect(() => {
    setResults(undefined);
  }, [neighbourhood])


  return (
    <React.Fragment>
      <section className="section1">
        <div id="h1Cont">
          <h1>
            {isEnglish ? "REAL ESTATE" : "PREȚURI"}
            <br />
            {isEnglish ? "PRICES IN BUCHAREST" : "IMOBILIARE ÎN BUCUREȘTI"}
          </h1>
        </div>
        <div className="buttonCont">
          <button
            type="button"
            className="d-grid gap-2 col-6 btn btn-success mainButton"
          >
            {isEnglish ? "Get started" : "Începe"}
          </button>
        </div>
        <div className="buttonCont">
          <button
            type="button"
            id="dataButton"
            className="mx-auto btn btn-success mainButton"
          >
            {isEnglish
              ? "Data source & calculation"
              : "Surse și modul de calcul"}
          </button>
        </div>
      </section>
      <section className="section2">
        <TypeDropdown name={mode} isEnglish={isEnglish}></TypeDropdown>

        <NeighbourhoodDropdown
          isEnglish={isEnglish}
          data={cur_data}
          transmitNeighbourhood={transmitNeighbourhood}
        ></NeighbourhoodDropdown>
        <Form
          transmitToApp={transmitToApp}
          neighbourhood={neighbourhood}
          isEnglish={isEnglish}
        ></Form>
        <React.Fragment>
          {results ? (
            <div className="result">
              {isEnglish ? "Estimate: " : "Estimat: "}€{results}
            </div>
          ) : (
            ""
          )}
        </React.Fragment>
      </section>

      <section className="section3">
        <p className="sources">
          {isEnglish ? "Base data source: " : "Sursă date de bază: "}
          <a href="https://compariimobiliare.ro/pret-imobil">
            compariimobiliare.ro
          </a>
        </p>
        <p className="sources">
          {isEnglish
            ? "The valuation does have its inaccuracies. It is a proof-of-concept and should be treated as such."
            : "Evaluarea este un proces foarte complex. Valoarea dată este aproximativă și trebuie tratată ca atare."}
        </p>
      </section>
    </React.Fragment>
  );
};

export default App;
