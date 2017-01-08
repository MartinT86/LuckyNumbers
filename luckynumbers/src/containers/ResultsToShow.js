import { connect } from 'react-redux'
import Results from '../components/Results'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    Results: state.Results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // numbers: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
    // }
  }
}

const ResultsToShow = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsToShow