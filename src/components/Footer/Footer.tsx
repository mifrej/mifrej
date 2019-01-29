import React from 'react';
import { Link } from '@reach/router';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li><h2><Link to="/">Home</Link></h2></li>
          <li><h2><Link to="/career">Career</Link></h2></li>
          <li><h2><Link to="/contact">Contact</Link></h2></li>
        </ul>
      </nav>
    </footer>
  )
}
