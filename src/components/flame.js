import React, { Component } from 'react';
import '../styles/flame.css';

class Flame extends Component {
  render() {
    return (
        <div className="flame-container flame-position">
            <div className="red flame"></div>
            <div className="orange flame"></div>
            <div className="yellow flame"></div>
            <div className="white flame"></div>
            {/* <div className="blue circle"></div> */}
            {/* <div className="black circle"></div> */}
        </div>
    )
  }
}

export default Flame
