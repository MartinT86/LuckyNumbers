import { connect } from 'react-redux'
import MaxNumber from '../components/MaxNumber'
import { setMax } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    max: state.max
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
)(MaxNumber)

export default SetMax