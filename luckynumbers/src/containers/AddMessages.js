import { connect } from 'react-redux'
import Messages from '../components/Messages'
// import { addMessages } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    messages: state.Messages
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onchange: (newCount) => {
    //   dispatch(setCount(newCount))
    // }
  }
}

const AddMessages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages)

export default AddMessages