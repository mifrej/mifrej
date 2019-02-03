import MiloszFaceSvg from '@components/MiloszFaceSvg';
import Navigation from '@components/Navigation/Navigation';
import { Link } from '@reach/router';
import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header>
      <section>
        <h1>
          <Link to='/'>
            <MiloszFaceSvg />
            <span>
              {'mifrej {'}
              &nbsp;<em className='css-prop-name'>craft</em>:&nbsp;
              <em>frontend-engineer</em>
              {'; }'}
            </span>
          </Link>
        </h1>
      </section>
      <Navigation />
    </header>
  );
}
