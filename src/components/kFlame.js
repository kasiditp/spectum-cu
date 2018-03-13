import React, { Component } from 'react';
import '../styles/flame.css';

class Flame extends Component {
  render() {
    return (
        <div className="flame-container flame-position">
            <div className="k-purple flame"></div>
            <div className="k-purple-middle flame"></div>
            {/* <div className="red flame"></div>
            <div className="orange flame"></div>
            <div className="yellow flame"></div>
            <div className="white flame"></div> */}
            {/* <div className="yellow-na flame"></div> */}
            {/* <div className="blue circle"></div> */}
            {/* <div className="black circle"></div> */}
        </div>
    )
  }
}

export default Flame
