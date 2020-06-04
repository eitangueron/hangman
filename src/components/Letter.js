import React, { Component } from 'react';

  class Letter extends Component {
    render() {
        let letter = this.props.letter
        return <span className={this.props.letterStatus[letter] ? 'selected' : 'unselected'}>{letter}</span>
    }
    
  }
        
export default Letter;