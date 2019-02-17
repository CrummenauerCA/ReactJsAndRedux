import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <a href="/" className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}