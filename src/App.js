import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import Initiatives from './pages/Initiatives';
import Events from './pages/Events';
import Eboard from './pages/Eboard';
import Mission from './pages/Mission';
import Application from './pages/Application';
import MCSD from './pages/MCSD';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Marshall Outreach Volunteer Entrepreneurs | USC's Premier Social Entrepreneurship Organization");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eboard" element={<Eboard />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
            <Route path="/join-us" element={<Application />} /> 
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/events" element={<Events />} />
            <Route path="/MCSD" element={<MCSD />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
