import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber } from '../actions/index'
import getRandomIntInclusive from '../helpers/getRandomIntInclusive'

const mapStateToProps = (state) => {
  return {
    max: state.Max
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (max) => {
      // need to set the new array here
      var newArray = [getRandomIntInclusive(1, max),getRandomIntInclusive(1,max)]
      dispatch(updateNumber(newArray))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers