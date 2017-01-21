import React, { PropTypes } from 'react'

// need to set a new Result component

const Results = ({ Results }) => (
    <div>
        <h2>numbers</h2>
        <h2>{Results[0]}</h2>
        {Results.map((item, index) =>
            <h3 key={index}>{item}</h3>
        )}
    </div>
    
)

Results.propTypes = {
      Results: PropTypes.array.isRequired,
}

export default Results