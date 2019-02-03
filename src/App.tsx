import React from 'react';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import 'normalize.css';
// import { Analytics } from 'react-router-ga';
import { Root, Routes } from 'react-static';
import './app.css';
import './helpers.css';
import './print.css';

function App() {
  return (
    <Root>
      <Header />
      <main>
        {/* <Analytics id="UA-2176096-15"> */}
          <Routes />
        {/* </Analytics> */}
      </main>
      <Footer />
    </Root>
  );
}

export default App;
