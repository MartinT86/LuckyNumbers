import React from 'react'
import ResultsToShow from '../containers/ResultsToShow'
import GetNumbers from '../containers/GetNumbers'
import SetMax from '../containers/SetMax'
import SetMin from '../containers/SetMin'
import SetCount from '../containers/SetCount'
import AddMessages from '../containers/AddMessages'
import '../css/App.css';

// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <h1 className="heading">Lucky Numbers</h1>
        <SetCount/>
        <SetMin/>
        <SetMax/>
        <AddMessages/>
        <ResultsToShow/>
        <GetNumbers/>
    </div>
)

export default App