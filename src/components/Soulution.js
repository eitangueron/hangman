import React, { Component } from 'react';
import Letter from './Letter'

  class Soulution extends Component {
  
    render() {
        let word = this.props.solution.word.split('')
        let hint = this.props.solution.hint
            return (<div>
                    {word.map(letter =><span key={letter + 'Word'}>{this.props.letterStatus[letter] ? letter : ' _ '}</span>)}
                    <div>
                        <em>{hint}</em>
                    </div>
                </div>)
    }
    
  }
        
    export default Soulution;