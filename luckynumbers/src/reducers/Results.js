const Results = (state = [3,2], action) => {
  switch (action.type) {
    case 'SET_NUMBERS':
      return action.results
    default:
      return state
  }
}

export default Results