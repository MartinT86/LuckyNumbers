import { combineReducers } from 'redux'
import Results from './Results'
import Max from './Max'
import Min from './Min'
import Count from './Count'

const numbersApp = combineReducers({
  Results,
  Max,
  Min,
  Count
})

export default numbersApp