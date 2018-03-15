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
        <div className="animated zoomIn">

            <div className="test" />
            <img className="image-circle" src={circle} />
            <svg className="a" height="200" width="200">
                <circle cx="0" cy="-30" r="92" stroke="black" stroke-width="0" fill="red" />
            </svg>
        </div>
        
    )
  }
}

export default Circle
