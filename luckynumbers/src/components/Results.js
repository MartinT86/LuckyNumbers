import React, { PropTypes } from 'react'

const Results = ({ Results, onClick }) => (
    <div>
        <h2>numbers</h2>
        <h2>{Results}</h2>
        <button type="button" 
    onClick={e => {
         e.preventDefault()
         onClick()
       }}>Click Me!</button>
    </div>
    
)

Results.propTypes = {
      Results: PropTypes.string.isRequired,
}

export default Results