import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown';

class App extends Component {
  render() {
    return (
        <div className={`App`}>
          <div className={`countdown`}>
            <Countdown />
          </div>
        </div>
    );
  }
}

export default App;
