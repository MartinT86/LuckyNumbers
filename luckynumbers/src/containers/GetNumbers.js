import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber } from '../actions/index'
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
      // var newArray = [getRandomIntInclusive(min, max),getRandomIntInclusive(min,max)]
      dispatch(updateNumber(newArray))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers