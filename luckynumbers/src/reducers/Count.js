import * as constants from '../constants/actions'

const Count = (state = 0, action) => {
  switch (action.type) {
    case constants.actions.setCount:
      return parseInt(action.count, 10)
    default:
      return state
  }
}

export default Count