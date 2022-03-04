import React from 'react'

const Radios = () => {
  return (
    <div className='yearRadios'>
        <p>Building year:</p>
        <div>
        <input type='radio' id='<1950' name='year'></input>
        <label htmlFor='<1950'>&#60;1950</label>
        </div>

        <div>
        <input type='radio' id='1950-1977' name='year'></input>
        <label htmlFor='1950-1977'>1950-1977</label>
        </div>

        <div>
        <input type='radio' id='1977-1990' name='year'></input>
        <label htmlFor='1977-1990'>1977-1990</label>
        </div>

        <div>
        <input type='radio' id='>1990' name='year'></input>
        <label htmlFor='>1990'>&#62;1990</label>
        </div>

    </div>
  )
}

export default Radios