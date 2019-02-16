import React, { Component } from 'react';
import {Link, Navlink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <a href="/" className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    )
  }
}