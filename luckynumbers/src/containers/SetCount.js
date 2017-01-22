import { connect } from 'react-redux'
import NumberInput from '../components/NumberInput'
import { setCount } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    count: state.count,
    title: 'Set how many numbers you need'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onchange: (newCount) => {
      dispatch(setCount(newCount))
    }
  }
}

const SetCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput)

export default SetCount