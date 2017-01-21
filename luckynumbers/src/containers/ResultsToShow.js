import { connect } from 'react-redux'
import Results from '../components/Results'
import { updateNumber } from '../actions/index'  //to finish

const mapStateToProps = (state) => {
  console.log(state)
  return {
    Results: state.Results
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log('clicked')
      dispatch(updateNumber('3'))
    }
  }
}

const ResultsToShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsToShow