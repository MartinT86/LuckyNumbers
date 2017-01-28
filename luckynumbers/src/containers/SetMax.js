import { connect } from 'react-redux'
import NumberInput from '../components/NumberInput'
import { setMax } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    max: state.max,
    title: 'Set your maximum number'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onchange: (newMax) => {
      dispatch(setMax(newMax))
    }
  }
}

const SetMax = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput)

export default SetMax