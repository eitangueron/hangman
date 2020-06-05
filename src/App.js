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
      this.generateLetterStatuses()
    }

    generateLetterStatuses(){
      for(let i=65; i<=90; i++){
        let letter = String.fromCharCode(i)
        this.state.letterStatus[letter] = false
      }
    }

    decreaseScore = () => {
      let oldScore = this.state.score
      let decreaseAmount = 100/this.state.solution.word.length
      if(this.state.score- decreaseAmount > 0){
        this.setState({
          score: oldScore-decreaseAmount
        })
      } else {
        this.setState({
          score: 0
        })
        alert('Game over u f loser!')
      }
    }

    selectLetter = (letter) => {
      let XletterStatus = {...this.state.letterStatus}
      XletterStatus[letter] = true
      this.setState({
        letterStatus : XletterStatus
      })
    }

    render() {
      return (
          <div>
            <Score score={this.state.score}/>
            <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
            <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} decreaseScore={this.decreaseScore} word={this.state.solution.word}/>
          </div>
        )
    }
  }

export default App;