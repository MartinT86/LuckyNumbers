import React from 'react'

const Button = ({ onClick, max, min, count }) => (
    <div>
        <button type="button" 
    onClick={e => {
         e.preventDefault()
         onClick(max, min, count)
       }}>Get Numbers!</button>
    </div>
    
)

export default Button