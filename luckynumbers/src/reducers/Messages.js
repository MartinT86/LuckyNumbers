import * as constants from '../constants/actions'

const Messages = (state = ['message 1'], action) => {
  switch (action.type) {
    case constants.actions.addMessages:
      return action.messages
    default:
      return state
  }
}

export default Messages