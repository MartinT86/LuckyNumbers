import * as constants from '../constants/actions'

const Messages = (state = [], action) => {
  switch (action.type) {
    case constants.actions.addMessages:
      return action.messages
    default:
      return state
  }
}

export default Messages