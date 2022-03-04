import React from 'react'
import Checks from './Checks'
import Radios from './Radios'
const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello');
    }

  return (
      
    <form onSubmit={handleSubmit}>
        <label htmlFor='price'>Asking Price</label>
        <input type='text' id='price'></input>

        <div className="areaForm">
        <label htmlFor='area'>Area (m²)</label>
        <input type='text' id='area'></input>
        </div>

        <div className="metroDiv">
        <label htmlFor='metroDistance'>Distance to metro (m)</label>
        <input type='text' id='metroDistance'></input>
        </div>

        <Checks>
        </Checks>
        <Radios></Radios>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form