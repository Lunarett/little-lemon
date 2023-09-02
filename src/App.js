import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Main, Footer } from './Components';

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