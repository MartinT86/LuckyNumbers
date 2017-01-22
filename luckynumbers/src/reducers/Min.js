const Min = (state = 0, action) => {
  switch (action.type) {
    case 'SET_MIN':
      return parseInt(action.min, 10)
    default:
      return state
  }
}

export default Min