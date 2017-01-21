export const updateNumber = (results) => {
  return {
    type: 'SET_NUMBERS',
    results
  }
}

export const setMax = (max) => {
  return {
    type: 'SET_MAX',
    max
  }
}