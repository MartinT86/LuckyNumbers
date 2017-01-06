import { combineReducers } from 'redux'
import { SET_NUMBERS, setNumbers } from './actions'

function result(state = [], action){
    switch(action.type){
        case SET_NUMBERS:
            return action.numbers
        default:
            return state
    }
}

const numbersApp = combineReducers({
  result
})

export default numbersApp