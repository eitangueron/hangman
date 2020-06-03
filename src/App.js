import './App.css';
import React, { Component } from 'react';
import Solution from './components/Soulution'
import Letters from './components/Letters'
import Score from './components/Score'

  class App extends Component {
  
    render() {
    return (
      <div>
        <Score />
        <Solution />
        <Letters/>
      </div>
      )
    }
  }

export default App;