import * as constants from '../constants/actions'

const Max = (state = 0, action) => {
  switch (action.type) {
    case constants.actions.setMax:
      return parseInt(action.max, 10)
    default:
      return state
  }
}

export default Max