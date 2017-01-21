import { connect } from 'react-redux'
import Results from '../components/Results'
// import { updateNumber } from '../actions/index' 

// const CalculateResults = (state) => {

//   return state.Max
// }

const mapStateToProps = (state) => {
  return {
    Results: state.Results
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onClick: () => {
    //   dispatch(updateNumber('3'))
    // }
  }
}

const ResultsToShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsToShow