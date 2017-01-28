import React from 'react'
import '../css/Button.css';

const Button = ({ onClick, max, min, count }) => (
    <div>
        <button className="button" type="button" 
    onClick={e => {
         e.preventDefault()
         onClick(max, min, count)
       }}>Get Your Lucky Numbers!</button>
    </div>
    
)

export default Button