import React from 'react';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import 'normalize.css';
import { Root, Routes } from 'react-static';
import './app.css';
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
  );
}

export default App;
