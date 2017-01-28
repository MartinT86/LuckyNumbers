import React, { PropTypes } from 'react'
import Result from './Result'
import '../css/Results.css';

const Results = ({ Results }) => (
    <div>
        <h2 className="results-title">Your Lucky Numbers!</h2>
        {Results.map((item, index) =>
            // <h3 key={index}>{item}</h3>
            <Result key={index} Result={item}/>
        )}
    </div>
    
)

Results.propTypes = {
      Results: PropTypes.array.isRequired,
}

export default Results