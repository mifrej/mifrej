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
        <section>
          <p>
            <img src="/img/editorial/milosz-s-head.png" width="140" height="" alt="Miłosz's Face" />
          </p>
          <h1>
            <Link to="/">
              {`mifrej { `}
              <em>craft</em>:
              <em> frontend-engineer</em>
              {`; }`}
            </Link>
          </h1>
        </section>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
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
