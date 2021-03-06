import React, { PropTypes } from 'react'
import Message from './Message'

const Messages = ({ messages }) => (
    <div>
        {messages.map((item, index) =>
            // <h3 key={index}>{item}</h3>
            <Message key={index} message={item}/>
        )}
    </div>
    
)

Messages.propTypes = {
      messages: PropTypes.array.isRequired,
}

export default Messages