import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { History } from './components/History';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { Map } from './components/Map';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__top-margin" />
      <main>
        {/* <Home />
        <AboutUs />
        <History />
      <Map /> */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<History />} />
            <Route path="quisom" element={<AboutUs />} />
            <Route path="map" element={<Map />} />
          </Routes>
        </Router>
      </main>
      <div className="app__bottom-margin" />
      <Footer />
    </div>
  );
}

export default App;
