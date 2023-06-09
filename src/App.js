import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './Styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;