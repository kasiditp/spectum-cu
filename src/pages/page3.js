import React, { Component } from 'react';
import EmptyFlame from '../components/emptyFlame'
import NaFlame from '../components/naFlame'
import KFlame from '../components/kFlame'
import light from '../assets/light.png'

class Page3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonSelect: 0
        }
    }
    clickButton = (buttonID) => {
        if (this.state.buttonSelect === buttonID) {
            this.setState({
                buttonSelect: 0
            })
        } else {
            this.setState({
                buttonSelect: buttonID
            })
        }
    }
    render() {
        const { buttonSelect } = this.state
        return (
        <div className="App">
            <section className="hero is-fullheight">
            <h1 className="title">สีของเปลวไฟสารประกอบ</h1>
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">    
                            {
                                buttonSelect === 0 &&
                                <EmptyFlame />
                            }
                            {
                                buttonSelect === 3 &&
                                <KFlame />
                            }
                            {
                                ( buttonSelect === 1 || buttonSelect === 2 )&&
                                <NaFlame />
                            }
                            <img src={light} className="light-img-2" alt="ตะเกียง" />
                        </div>
                        <div class="column">
                            <div className="page3-button">
                                <a class={"button is-primary is-large is-outlined" + (buttonSelect === 1 ? ":hover":"")} onClick={() => this.clickButton(1)}>Na<sub>2</sub>SO<sub>4</sub></a>
                            </div>
                            <div className="page3-button">
                                <a class={"button is-primary is-large is-outlined" + (buttonSelect === 2 ? ":hover":"")} onClick={() => this.clickButton(2)}> NaCl </a>
                            </div>
                            <div className="page3-button">
                                <a class={"button is-primary is-large is-outlined" + (buttonSelect === 3 ? ":hover":"")} onClick={() => this.clickButton(3)}>KCl</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        )
    }
}

export default Page3
