// components/OurTeam.js
import React from 'react';

function OurTeam() {
  return (
    <section id="our-team">
      <h2>Meet Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="Pictures/ConnorPhoto.png" alt="" />
          <h3>Connor Nguyen</h3>
          <p>Co-President and Co-Founder<br/>Wiess 26</p>
        </div>
        <div className="team-member">
          <img id="diff" src="Pictures/VarshaPhoto.png" alt="" />
          <h3>Varsha Chandramouli</h3>
          <p>Co-President and Co-Founder<br/>Jones 26</p>
        </div>
        <div className="team-member">
          <img src="Pictures/AdrianPhoto.png" alt="" />
          <h3>Adrian Pomer</h3>
          <p>Treasurer<br/>Jones 26</p>
        </div>
        <div className="team-member">
          <img src="Pictures/AshwinRaoPhoto.png" alt="" />
          <h3>Ashwin Rao</h3>
          <p>Outreach and Web-Design<br/>Jones 28</p>
        </div>
        <div className="team-member">
          <img src="Pictures/LaurenPhoto.png" alt="" />
          <h3>Lauren Nguyen</h3>
          <p>Events Coordinator<br/>Sid 26</p>
        </div>
        <div className="team-member">
          <img src="Pictures/AaronPhoto.png" alt="" />
          <h3>Aaron Chu</h3>
          <p>Hypeman<br/>Martel 25</p>
        </div>
        <div className="team-member">
          <img src="Pictures/KylePhoto.png" alt="" />
          <h3>Kyle Marks</h3>
          <p>Marketing and PR Manager<br/>Duncan 27</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;