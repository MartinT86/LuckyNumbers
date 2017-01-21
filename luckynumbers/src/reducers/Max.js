const Max = (state = 0, action) => {
  switch (action.type) {
    case 'SET_MAX':
      return parseInt(action.max, 10)
    default:
      return state
  }
}

export default Max