import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber, addMessages } from '../actions/index'
import buildNumberArray from '../helpers/buildNumberArray'

var setMessages = (max, min, count) => {
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
      if(count > (max - min)){
        messageArray.push('you need more numbers for you min and max')
      }
  return messageArray
}

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
      
      var messageArray = setMessages(max, min, count)
      dispatch(addMessages(messageArray))

      var numberArray = []
      if(messageArray.length === 0){
        numberArray = buildNumberArray(max, min, count)
      }
      
      dispatch(updateNumber(numberArray))
      
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers