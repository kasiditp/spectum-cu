import React, { Component } from 'react';
import Circle from '../components/circle'
import { Link, IndexLink } from 'react-router'
import '../styles/circle.css'
// import EmptyFlame from '../components/emptyFlame'
// import NaFlame from '../components/naFlame'
// import KFlame from '../components/kFlame'
// import light from '../assets/light.png'

class PageCircle extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <section className="hero is-fullheight">
                 <h1 className="title">ระดับพลังงานของอะตอม</h1>
                <Circle />
                <Link to="2" activeClassName="active">
                    <button className="button is-large button-circle-page"> สีของเปลวไฟ เกิดขึ้นได้อย่างไร </button>
                </Link>
            </section>
        )
    }
}

export default PageCircle
