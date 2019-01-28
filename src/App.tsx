import React from 'react'
import { Root, Routes } from 'react-static'
import 'normalize.css';
import './app.css'
import Header from './components/Header/Header';

function App() {
  return (
    <Root>
      <Header />
      <div className="mainContent">
        <Routes />
      </div>
    </Root>
  )
}

export default App
