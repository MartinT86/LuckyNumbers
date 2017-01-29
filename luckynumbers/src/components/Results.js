import React, { PropTypes } from 'react'
import Result from './Result'
import '../css/Results.css';

function showHeading(check) {
    if (check.length > 0) {
        return <h2 className="results-title">Your Lucky Numbers!</h2>
    }
}

const Results = ({ Results }) => (
    <div>
        {showHeading(Results)}
        <div className="results-container">
        {Results.map((item, index) =>
            // <h3 key={index}>{item}</h3>
            <Result key={index} Result={item}/>
        )}
        </div>
    </div>
    
)

Results.propTypes = {
      Results: PropTypes.array.isRequired,
}

export default Results