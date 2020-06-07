import React, { Component } from 'react';
import Letter from './Letter'

  class Letters extends Component {
  
    
    render() {
      let letters = Object.keys(this.props.letterStatus)
        return (
                <div>
                    <div>Available letters:</div>
                    {letters.map(letter => <Letter letter={letter} key={letter} letterStatus={this.props.letterStatus} endGame={this.props.endGame} selectLetter={this.props.selectLetter} decreaseScore={this.props.decreaseScore} word={this.props.word}/>)}
                </div>
            ) 
    }
    
  }
        
export default Letters;