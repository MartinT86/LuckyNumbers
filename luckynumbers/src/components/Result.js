import React, { PropTypes } from 'react'

const Result = ({ Result }) => (
    <div>
        <h3>{Result}</h3>
    </div>
    
)

Result.propTypes = {
      Result: PropTypes.number.isRequired,
}

export default Result