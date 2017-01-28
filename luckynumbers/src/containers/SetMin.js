import { connect } from 'react-redux'
import NumberInput from '../components/NumberInput'
import { setMin } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    min: state.min,
    title: 'Set your minimum number'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onchange: (newMin) => {
      dispatch(setMin(newMin))
    }
  }
}

const SetMin = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput)

export default SetMin