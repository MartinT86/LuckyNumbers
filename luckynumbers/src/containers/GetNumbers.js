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
      dispatch(updateNumber(max))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers