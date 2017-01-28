import React, { PropTypes } from 'react'
import '../css/NumberInput.css';

const NumberInput = ({ max, onchange, title }) => (
    <div>
        <h2 className="input-title">{title}</h2>
        <input className="numberInput" type="number" name="quantity" onChange={
            e => {
                e.preventDefault()
                onchange(e.target.value)
            }
        }/>
        <h2>{max}</h2>
    </div>
    
)

NumberInput.propTypes = {
      max: PropTypes.number,
      title: PropTypes.string.isRequired,
}

export default NumberInput