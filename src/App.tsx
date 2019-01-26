import React from 'react'
import { Root, Routes } from 'react-static'
import { Link } from '@reach/router'
import 'normalize.css';
import './app.css'
import FancyDiv from '@components/FancyDiv'

function App() {
  return (
    <Root>
      <header>
        <h1>
          <Link to="/">
            {`mifrej { `}
            <em>craft</em>:
            <em> frontend-engineer</em>
            {`; }`}
          </Link>
        </h1>
        <nav>
          <div className="mainDial naviDial">
            <div className="mD-hd nD-hd">
              <div className="mD-hdc nD-hdc"></div>
            </div>
            <div className="mD-bd nD-bd">
              <div className="mD-c nD-c">
                <div className="mD-s nD-s clearfix">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/blog">Blog</Link>
                </div>
              </div>
            </div>
            <div className="mD-ft nD-ft">
              <div className="mD-ftc nD-ftc"></div>
            </div>
          </div>
        </nav>
      </header>
      <div className="mainContent">
        <FancyDiv>
          <Routes />
        </FancyDiv>
      </div>
    </Root>
  )
}

export default App
