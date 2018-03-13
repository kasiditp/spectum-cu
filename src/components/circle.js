import React, { Component } from 'react'
import { Link } from 'react-router'
import circle from '../assets/circle.png'
import anime from 'animejs'

class Circle extends Component {
    componentDidMount = () => {
        var path = anime.path('svg circle');

        var motionPath = anime({
        targets: '.test',
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        easing: 'linear',
        duration: 2000,
        loop: true
        });
    }

  render() {
    return (
        <div className="circle-container">
            <div className="test" />
            <img src={circle} />
            <svg className="a" height="100" width="100">
                <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="red" />
            </svg>
            <Link to="2" activeClassName="active">
                <button className="button button-page2"> Zoom </button>
            </Link>
        </div>
        
    )
  }
}

export default Circle
