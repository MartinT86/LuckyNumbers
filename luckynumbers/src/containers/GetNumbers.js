import { connect } from 'react-redux'
import Button from '../components/Button'
import { updateNumber } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    // Results: state.Results
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(updateNumber('4'))
    }
  }
}

const GetNumbers = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default GetNumbers