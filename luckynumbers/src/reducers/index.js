import { combineReducers } from 'redux'
import Results from './Results'
import Max from './Max'

const numbersApp = combineReducers({
  Results,
  Max
})

export default numbersApp