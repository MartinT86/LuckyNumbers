import { combineReducers } from 'redux'
import Results from './Results'
import Max from './Max'
import Min from './Min'
import Count from './Count'
import Messages from './Messages'

const numbersApp = combineReducers({
  Results,
  Max,
  Min,
  Count,
  Messages
})

export default numbersApp