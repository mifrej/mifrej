import React from 'react'
import { Root, Routes } from 'react-static'
import 'normalize.css';
import './app.css'
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import './helpers.css';
import './print.css';

function App() {
  return (
    <Root>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Root>
  )
}

export default App
