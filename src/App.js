// App.js
import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Photos from './components/Photos';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import CommunityProject from './components/CommunityProject';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/community-project" element={<CommunityProject />} />
        </Routes>

        <nav className="bottom-nav">
          <ul>
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/calendar" activeClassName="active">Calendar</NavLink></li>
            <li><NavLink to="/photos" activeClassName="active">Photos</NavLink></li>
            <li><NavLink to="/our-team" activeClassName="active">Our Team</NavLink></li>
            <li><NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink></li>
            <li><NavLink to="/community-project" activeClassName="active">Community Project</NavLink></li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;