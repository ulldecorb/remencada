import React from 'react';
import { Header } from './components/Header';
import { Historia } from './components/Historia';
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="app__top-margin" />
      <Header />
      <Historia />
      <Footer />
    </div>
  );
}

export default App;
