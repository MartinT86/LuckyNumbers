import { combineReducers } from 'redux'
import Results from './Results'
import Max from './Max'
import Min from './Min'

const numbersApp = combineReducers({
  Results,
  Max,
  Min
})

export default numbersApp