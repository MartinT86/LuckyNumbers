import React from 'react'

const Button = ({ onClick }) => (
    <div>
        <button type="button" 
    onClick={e => {
         e.preventDefault()
         onClick()
       }}>Get Numbers!</button>
    </div>
    
)

export default Button