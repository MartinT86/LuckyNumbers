import * as constants from '../constants/actions'

export const updateNumber = (results) => {
  return {
    type: constants.actions.updateNumber,
    results
  }
}

export const setMax = (max) => {
  return {
    type: constants.actions.setMax,
    max
  }
}

export const setMin = (min) => {
  return {
    type: constants.actions.setMin,
    min
  }
}

export const setCount = (count) => {
  return {
    type: constants.actions.setCount,
    count
  }
}

export const addMessages = (messages) => {
  return {
    type: constants.actions.addMessages,
    messages
  }
}