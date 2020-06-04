import React, { Component } from 'react';
import Letter from './Letter'

  class Letters extends Component {
  
    render() {
      let letters = Object.keys(this.props.letterStatus)
        return (
                <div>
                    <div>Available letters:</div>
                    {letters.map(letter => <Letter letter={letter} key={letter} letterStatus={this.props.letterStatus}/>)}
                </div>
            ) 
    }
    
  }
        
export default Letters;