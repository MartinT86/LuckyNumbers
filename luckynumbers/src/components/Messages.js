import React, { PropTypes } from 'react'
// import Message from './Message'

const Messages = ({ messages }) => (
    <div>
        <h2>messages</h2>
        <h2>{messages[0]}</h2>
    </div>
    
)

Messages.propTypes = {
      messages: PropTypes.array.isRequired,
}

export default Messages