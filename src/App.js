import './App.css';
import React, { Component } from 'react';
import Solution from './components/Soulution'
import Letters from './components/Letters'
import Score from './components/Score'

  class App extends Component {
    
    constructor(){
      super()
      this.state = {
        letterStatus:{},
        solution:{
          word:'EITAN',
          hint:'He\'s super cool...'
        },
        score:100
      }
    }

    generateLetterStatuses(){
      for(let i=65; i<=90; i++){
        let letter = String.fromCharCode(i)
        this.state.letterStatus[letter] = false
      }
    }

    render() {
      this.generateLetterStatuses()
      return (
          <div>
            <Score score={this.state.score}/>
            <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
            <Letters letterStatus={this.state.letterStatus}/>
          </div>
        )
    }
  }

export default App;