import React from 'react'
import { Root, Routes } from 'react-static'
import 'normalize.css';
import './app.css'
import Header from './components/Header/Header';
import './helpers.css';
import './print.css';

function App() {
  return (
    <Root>
      <Header />
      <main>
        <Routes />
      </main>
    </Root>
  )
}

export default App
