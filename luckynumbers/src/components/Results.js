import React, { PropTypes } from 'react'

const Results = ({ Results }) => (
    <div>
        <h2>numbers</h2>
        <h2>{Results}</h2>
    </div>
    
)

Results.propTypes = {
      Results: PropTypes.number.isRequired,
}

export default Results