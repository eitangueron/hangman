import React, { Component } from 'react';

  class Letter extends Component {

    selectLetter = async () => {
      let letter = this.props.letter
      {if (!this.props.word.includes(letter)){this.props.decreaseScore()}}
      await this.props.selectLetter(letter)
      this.props.endGame()
    }

    render() {
        let letter = this.props.letter
        return <span className={this.props.letterStatus[letter] ? 'selected' : 'unselected'} onClick={this.selectLetter}> {letter} </span>
    }
    
  }
        
export default Letter;