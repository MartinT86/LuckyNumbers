import React, { PropTypes } from 'react'

const MaxNumber = ({ max, onchange }) => (
    <div>
        <h2>Max Number</h2>
        <input type="number" name="quantity" onChange={
            e => {
                e.preventDefault()
                onchange(e.target.value)
            }
        }/>
        <h2>{max}</h2>
    </div>
    
)

MaxNumber.propTypes = {
      max: PropTypes.number,
}

export default MaxNumber