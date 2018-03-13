import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import anime from 'animejs'
// import Flame from '../components/flame'
// import Circle from '../components/circle'
import ladder from '../assets/ladder1.png'
import '../styles/arrow.css'

class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            energy1: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 1'
            },
            energy2: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 2'
            },
            energy3: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 3'
            },
            energy4: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 4'
            },
            energy5: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 5'
            }
        }
    }
    resetEnergyState = async () => {
        this.setState({
            energy1: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 1'
            },
            energy2: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 2'
            },
            energy3: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 3'
            },
            energy4: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 4'
            },
            energy5: {
                show: false,
                showArrow: false,
                showSquare: false,
                showBall: false,
                textButton: 'ดูดพลังงาน 5'
            }
        })
        
    }
    takeEnergy1 = async () => {
        await this.resetEnergyState() 
        const { energy1 }  = this.state
        energy1.show = true
        energy1.showArrow = true
        energy1.textButton = 'n=6  → n=1'
        await this.setState({
            energy1, 
        })
        var cssSelector = anime({
            targets: '.ball-page2',
            duration: 3400,
            translateY: -355,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square1').classList.toggle('clicked1-up');
            document.querySelector('.arrow-up1') .classList.toggle('arrow-clicked'); 
        }, 50);
    }
    releaseEnergy1 = async () => {
        const { energy1 }  = this.state
        energy1.showArrow = false
        await this.setState({
            energy1, 
        })
        var cssSelector = anime({
            targets: '.ball-page2',
            duration: 3400,
            translateY: 0,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square1-down').classList.toggle('clicked1-down');
            document.querySelector('.arrow-down1') .classList.toggle('arrow-down1-clicked'); 
        }, 50);
    }
    takeEnergy2 = async () => {
        await this.resetEnergyState() 
        const { energy2 }  = this.state
        energy2.show = true
        energy2.showArrow = true
        energy2.textButton = 'n=6  → n=2'
        await this.setState({
            energy2, 
        })
        var cssSelector = anime({
            targets: '.ball1-page2',
            duration: 3400,
            translateY: -355,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square2').classList.toggle('clicked2-up');
            document.querySelector('.arrow-up2') .classList.toggle('arrow2-clicked'); 
        }, 50);
    }
    releaseEnergy2 = async () => {
        const { energy2 }  = this.state
        energy2.showArrow = false
        await this.setState({
            energy2, 
        })
        var cssSelector = anime({
            targets: '.ball1-page2',
            duration: 3400,
            translateY: -160,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square2-down').classList.toggle('clicked2-down');
            document.querySelector('.arrow-down2') .classList.toggle('arrow2-down-clicked'); 
        }, 50);
    }
    takeEnergy3 = async () => {
        await this.resetEnergyState() 
        const { energy3 }  = this.state
        energy3.show = true
        energy3.showArrow = true
        energy3.textButton = 'n=5  → n=2'
        await this.setState({
            energy3, 
        })
        var cssSelector = anime({
            targets: '.ball2-page2',
            duration: 3400,
            translateY: -325,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square3').classList.toggle('clicked3-up');
            document.querySelector('.arrow-up3') .classList.toggle('arrow3-clicked'); 
        }, 50);
    }
    releaseEnergy3 = async () => {
        const { energy3 }  = this.state
        energy3.showArrow = false
        await this.setState({
            energy3 
        })
        var cssSelector = anime({
            targets: '.ball2-page2',
            duration: 3400,
            translateY: -160,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square3-down').classList.toggle('clicked3-down');
            document.querySelector('.arrow-down3') .classList.toggle('arrow3-down-clicked'); 
        }, 50);
    }
    takeEnergy4 = async () => {
        await this.resetEnergyState() 
        const { energy4 }  = this.state
        energy4.show = true
        energy4.showArrow = true
        energy4.textButton = 'n=4  → n=2'
        await this.setState({
            energy4, 
        })
        var cssSelector = anime({
            targets: '.ball3-page2',
            duration: 3400,
            translateY: -285,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square4').classList.toggle('clicked4-up');
            document.querySelector('.arrow-up4') .classList.toggle('arrow4-clicked'); 
        }, 50);
    }
    releaseEnergy4 = async () => {
        const { energy4 }  = this.state
        energy4.showArrow = false
        await this.setState({
            energy4
        })
        var cssSelector = anime({
            targets: '.ball3-page2',
            duration: 3400,
            translateY: -160,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square4-down').classList.toggle('clicked4-down');
            document.querySelector('.arrow-down4') .classList.toggle('arrow4-down-clicked'); 
        }, 50);
    }
    takeEnergy5 = async () => {
        await this.resetEnergyState() 
        const { energy5 }  = this.state
        energy5.show = true
        energy5.showArrow = true
        energy5.textButton = 'n=3  → n=2'
        await this.setState({
            energy5
        })
        var cssSelector = anime({
            targets: '.ball4-page2',
            duration: 3400,
            translateY: -230,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square5').classList.toggle('clicked5-up');
            document.querySelector('.arrow-up5') .classList.toggle('arrow5-clicked'); 
        }, 50);
    }
    releaseEnergy5 = async () => {
        const { energy5 }  = this.state
        energy5.showArrow = false
        await this.setState({
            energy5
        })
        var cssSelector = anime({
            targets: '.ball4-page2',
            duration: 3400,
            translateY: -160,
            easing: 'easeInOutQuart'
        })
        setTimeout(function(){ 
            document.querySelector('.square5-down').classList.toggle('clicked5-down');
            document.querySelector('.arrow-down5') .classList.toggle('arrow5-down-clicked'); 
        }, 50);
    }
    render() {
        const { energy1, energy2, energy3, energy4, energy5 }  = this.state
        return (
        <div className="App">
            <h1 className="title">ระดับชั้นพลังงานของ H และการเกิด spectrum เมื่อเผา</h1>
            <section className="hero is-fullheight">
            <div className="container">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <img src={ladder} className="image is-800x540" alt="บันได" />
                        {
                            energy1.show &&
                            <div>
                                {
                                    energy1.showArrow &&
                                    <div>
                                        <div className="square1"></div>
                                        <div className="arrow-up1"></div>
                                    </div>
                                }
                                {
                                    !energy1.showArrow &&
                                    <div>
                                    <div className="square1-down"></div>
                                        <div className="arrow-down1"></div>
                                    </div>
                                }
                                <svg className="ball-page2" height="100" width="100">
                                    <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="black" />
                                </svg>
                            </div>
                        }
                        {
                            energy2.show &&
                            <div>
                                {
                                    energy2.showArrow &&
                                    <div>
                                        <div className="square2"></div>
                                        <div className="arrow-up2"></div>
                                    </div>
                                }
                                {
                                    !energy2.showArrow &&
                                    <div>
                                    <div className="square2-down"></div>
                                        <div className="arrow-down2"></div>
                                    </div>
                                }
                                <svg className="ball1-page2" height="100" width="100">
                                    <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="black" />
                                </svg>
                            </div>
                        }
                        {
                            energy3.show &&
                            <div>
                                {
                                    energy3.showArrow &&
                                    <div>
                                        <div className="square3"></div>
                                        <div className="arrow-up3"></div>
                                    </div>
                                }
                                {
                                    !energy3.showArrow &&
                                    <div>
                                    <div className="square3-down"></div>
                                        <div className="arrow-down3"></div>
                                    </div>
                                }
                                <svg className="ball2-page2" height="100" width="100">
                                    <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="black" />
                                </svg>
                            </div>
                        }
                        {
                            energy4.show &&
                            <div>
                                {
                                    energy4.showArrow &&
                                    <div>
                                        <div className="square4"></div>
                                        <div className="arrow-up4"></div>
                                    </div>
                                }
                                {
                                    !energy4.showArrow &&
                                    <div>
                                    <div className="square4-down"></div>
                                        <div className="arrow-down4"></div>
                                    </div>
                                }
                                <svg className="ball3-page2" height="100" width="100">
                                    <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="black" />
                                </svg>
                            </div>
                        }
                        {
                            energy5.show &&
                            <div>
                                {
                                    energy5.showArrow &&
                                    <div>
                                        <div className="square5"></div>
                                        <div className="arrow-up5"></div>
                                    </div>
                                }
                                {
                                    !energy5.showArrow &&
                                    <div>
                                    <div className="square5-down"></div>
                                        <div className="arrow-down5"></div>
                                    </div>
                                }
                                <svg className="ball4-page2" height="100" width="100">
                                    <circle cx="45" cy="45" r="18" stroke="black" stroke-width="3" fill="black" />
                                </svg>
                            </div>
                        }
                    </div>
                    <div class="column is-one-fourth">
                        การดูดพลังงาน
                        <a class="button is-primary is-large is-outlined" 
                        onClick={() => { energy1.show ? this.releaseEnergy1() : this.takeEnergy1() }}>
                            { energy1.textButton }
                        </a>
                        <a class="button is-primary is-large is-outlined" 
                        onClick={() => { energy2.show ? this.releaseEnergy2() : this.takeEnergy2() }}>
                            { energy2.textButton }
                        </a>
                        <a class="button is-primary is-large is-outlined" 
                        onClick={() => { energy3.show ? this.releaseEnergy3() : this.takeEnergy3() }}>
                            { energy3.textButton }
                        </a>
                        <a class="button is-primary is-large is-outlined" 
                        onClick={() => { energy4.show ? this.releaseEnergy4() : this.takeEnergy4() }}>
                            { energy4.textButton }
                        </a>
                        <a class="button is-primary is-large is-outlined" 
                        onClick={() => { energy5.show ? this.releaseEnergy5() : this.takeEnergy5() }}>
                            { energy5.textButton }
                        </a>
                    </div>
                    <div class="column">
                        λ ที่ได้
                        <div class="control">
                            <input class="input" type="text" />
                        </div>
                        <div class="control">
                            <input class="input" type="text" />
                        </div>
                        <div class="control">
                            <input class="input" type="text" />
                        </div>
                        <div class="control">
                            <input class="input" type="text" />
                        </div>
                        <div class="control">
                            <input class="input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                    <div class="column">
                        λ ที่ได้
                    </div>
                    <div class="column">
                        <Link to="3" activeClassName="active">
                            <button className="button is-light is-large">เปรียบเทียบสีของเปลวไฟและ spectrum</button>
                        </Link>
                    </div>
            </div>
            </section>
        </div>
        )
    }
}

export default Page2
