import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Poke'times</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
