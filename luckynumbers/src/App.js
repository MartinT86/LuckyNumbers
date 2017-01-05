import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import NumberForm from './NumberForm';
import NumberResult from './NumberResult';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {};

        this.handleFormSubmission = this.handleFormSubmission.bind(this);
    }

  handleFormSubmission(values){
    alert('callback: ' + values.count + ',' + values.min + ',' + values.max);
    console.log('test');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome/>
        <NumberForm handleFormSubmission={this.handleFormSubmission}/>
        <NumberResult />
      </div>
    );
  }
}

export default App;
