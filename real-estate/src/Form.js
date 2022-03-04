import React from 'react'
import Checks from './Checks'
import Radios from './Radios'
const Form = () => {

    const [price,setPrice] = React.useState('');
    const [metro,setMetro] = React.useState('');
    const [area,setArea] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(price, area, metro);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='price'>Price</label>
        <input type='text' id='price' value={price} onChange={(e) => {setPrice(e.target.value)}}></input>

        <div className="areaForm">
        <label htmlFor='area'>Area (m²)</label>
        <input type='text' id='area' value={area} onChange={(e) => {setArea(e.target.value)}}></input>
        </div>

        <div className="metroDiv">
        <label htmlFor='metroDistance'>Distance to metro (m)</label>
        <input type='text' id='metroDistance' value={metro} onChange={(e) => {setMetro(e.target.value)}}></input>
        </div>

        <Checks>
        </Checks>
        <Radios></Radios>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form