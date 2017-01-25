import * as constants from '../constants/actions'

const Results = (state = [], action) => {
  switch (action.type) {
    case constants.actions.updateNumber:
      return action.results
    default:
      return state
  }
}

export default Results