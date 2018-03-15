import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import Flame from '../components/flame'
import light from '../assets/light.png'
// import EmptyFlame from '../components/emptyFlame'
// import NaFlame from '../components/naFlame'
// import KFlame from '../components/kFlame'
import spectrum from '../assets/spectrum1.png'

class Page4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <section className="hero is-fullheight">
                 <h1 className="title">เปรียบเทียบสีของเปลวไฟกับ spectrum</h1>
                <img src={spectrum} className="padding-horizontal"/>
                <Flame />
                <div className="container">
                    <img src={light} className="light-img" alt="ตะเกียง" />
                </div>
                <Link to="3" activeClassName="active">
                    <button className="button is-large button-circle-page">สีของเปลวไฟของสารประกอบอื่นจะเป็นอย่างไรบ้าง</button>
                </Link>
            </section>
        )
    }
}

export default Page4
