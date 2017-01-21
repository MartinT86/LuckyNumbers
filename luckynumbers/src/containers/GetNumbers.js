import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    max: state.Max
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (max) => {
      // need to set the new array here
      dispatch(updateNumber([8,9]))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers