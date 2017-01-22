import * as constants from '../constants/actions'

const Min = (state = 0, action) => {
  switch (action.type) {
    case constants.actions.setMin:
      return parseInt(action.min, 10)
    default:
      return state
  }
}

export default Min