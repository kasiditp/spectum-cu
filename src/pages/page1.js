import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import anime from 'animejs'
import Flame from '../components/flame'
import Circle from '../components/circle'
import light from '../assets/light.png'
import glass from '../assets/glass.png'
import '../styles/App.css'
import Modal from 'react-modal'

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            showCircle: false
        }
      
    }
    hoverGlassImage = () => {
        this.setState({
            hover: true
        })
    }
    onMouseOut = () => {
        this.setState({
            hover: false
        })
    }
    showCircle = async () => {
        this.props.router.push('/0')
    }

    render() {
        return (
        <div className="App">
            <section className="hero is-fullheight">
            <h1 className="title">Spectrum of H<sub>2</sub></h1>
            <div className="hero-body">
                <div className="container">
                    <div className="container" >
                        <div onMouseOver={this.hoverGlassImage} onMouseOut={this.onMouseOut}>
                            <img src={glass} className={(this.state.hover ? "glassShow": "glassImage")} alt="ตะเกียง" onClick={this.showCircle}/>
                            <Flame />
                        </div>
                    </div>
                    <div className="container">
                        <img src={light} className="light-img" alt="ตะเกียง" />
                    </div>
                </div>
            </div>
            </section>
            {/* {
                this.state.showCircle && 
                <Circle />
            } */}
        </div>
        );
    }
}

export default Page1
