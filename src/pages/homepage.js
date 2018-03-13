import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'
import Flask from '../components/flask'
import oke from '../assets/oke.jpg';
import '../styles/App.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          {/* <img src={oke} className="Oke-logo" alt="logo" /> */}
        {/* </header> */}
        <section className="hero is-fullheight">
        <Flask />
        <div className="hero-body">
            <div className="container">
            <h1 className="title">แบบร่างวัตกรรมการเรียนรู้</h1>
            <h2 className="subtitle">วิทยาศาสตร์เรื่อง spectrum และสีของเปลวไฟ</h2>
            <Link to="1" activeClassName="active">
                <button className="button"> Link </button>
            </Link>
            </div>
        </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
