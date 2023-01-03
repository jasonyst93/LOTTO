import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Ball from './Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ball num={17} />
        <Ball num={25} />
        <Ball num={33} />
        <Ball num={5} />
      </div>
    );
  }
}

export default App;
