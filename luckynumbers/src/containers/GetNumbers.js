import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber, addMessages } from '../actions/index'
import getRandomIntInclusive from '../helpers/getRandomIntInclusive'

const mapStateToProps = (state) => {
  return {
    max: state.Max,
    min: state.Min,
    count: state.Count
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (max, min, count) => {
      // need to set the new array here
      var newArray = [];
      for(var i = 0; i < count; i++){
        newArray.push(getRandomIntInclusive(min, max))
      }
      dispatch(updateNumber(newArray))
      var messageArray = [];
      if(count === 0){
        messageArray.push('Pick how many numbers you need')
      }
      if(min > max){
        messageArray.push('The minimum needs to be less than the maximum')        
      }
      if(min === 0){
        messageArray.push('Set a minimum')
      }
      if(max === 0){
        messageArray.push('set a maximum')
      }
      dispatch(addMessages(messageArray))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers