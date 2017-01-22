import React from 'react'

const Button = ({ onClick, max, min }) => (
    <div>
        <button type="button" 
    onClick={e => {
         e.preventDefault()
         onClick(max, min)
       }}>Get Numbers!</button>
    </div>
    
)

export default Button