import React from 'react'

const Button = ({ onClick, max }) => (
    <div>
        <button type="button" 
    onClick={e => {
         e.preventDefault()
         onClick(max)
       }}>Get Numbers!</button>
    </div>
    
)

export default Button