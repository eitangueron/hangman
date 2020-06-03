import React, { Component } from 'react';
import Letter from './Letter'

  class Soulution extends Component {
  
    render() {
        let letters = ["_ ","_ ","_ ","_ "]
            return (<div>
                    {letters.map(letter => <span>{letter}</span>)}
                    <div>
                        <em>Hint Hint</em>
                    </div>
                </div>)
    }
    
  }
        
    export default Soulution;