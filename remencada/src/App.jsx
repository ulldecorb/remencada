import React, { useEffect, useState } from 'react';
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
  const [aboutUsData, setAboutUsData] = useState([]);
  const [historyData, setHistoryData] = useState([]);

  const getAboutUs = async () => {
    const response = await fetch('http://localhost:4545/api/aboutus');
    const data = await response.json();
    setAboutUsData(data);
  };

  const getHistory = async () => {
    const response = await fetch('http://localhost:4545/api/history');
    const data = await response.json();
    setHistoryData(data);
  };

  useEffect(() => {
    getAboutUs();
    getHistory();
  }, []);

  return (
    <div className="app">
      <div className="app__top-margin" />
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<History data={historyData} />} />
            <Route path="quisom" element={<AboutUs data={aboutUsData} />} />
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
