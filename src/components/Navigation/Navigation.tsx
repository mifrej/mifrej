import React from 'react';
import { Link } from '@reach/router';
import './navigation.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><h2><Link to="/">Home</Link></h2></li>
        <li><h2><Link to="/career">Career</Link></h2></li>
        <li><h2><Link to="/contact">Contact</Link></h2></li>
      </ul>
    </nav>
  )
}
