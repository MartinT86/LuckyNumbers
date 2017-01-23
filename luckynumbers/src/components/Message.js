import React, { PropTypes } from 'react'

const Message = ({ message }) => (
    <div>
        <h3>{message}</h3>
    </div>
    
)

Message.propTypes = {
      message: PropTypes.string.isRequired,
}

export default Message