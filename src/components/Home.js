// components/Home.js
import React from 'react';

function Home() {
  return (
    <div id="home">
      <header>
        <h1>Long Distance Squad</h1>
        <img src="Pictures/Logo.png" alt="Logo" className="logo" />
      </header>
      <div className="image-container">
        <img src="Pictures/DSC_3306.png" alt="" />
      </div>
      <div className = "about-home">
        <p>No one is too slow or too fast - at Long D(istance) Squad we are committed to creating a fun, healthy, and inclusive community of runners!</p>
      </div>
    </div>
  );
}

export default Home;