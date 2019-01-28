import React from 'react';
import { Link } from '@reach/router';
import MiloszFaceSvg from '@components/MiloszFaceSvg'
import './header.css';

export default function Header() {
  return (
    <header>
      <section>
        <h1>
          <Link to="/">
            <MiloszFaceSvg />
            <span>
              {`mifrej {`}
              &nbsp;<em className="css-prop-name">craft</em>:&nbsp;
              <em>frontend-engineer</em>
              {`; }`}
            </span>
          </Link>
        </h1>
      </section>
      <nav>
        <ul>
          <li><h2><Link to="/">Home</Link></h2></li>
          <li><h2><Link to="/career">Career</Link></h2></li>
        </ul>
      </nav>
    </header>
  )
}
