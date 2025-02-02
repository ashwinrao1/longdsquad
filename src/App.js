import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
  const [clickedImage, setClickedImage] = useState(null);

  // Handle image click: toggle the clicked state
  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  // Handle outside click to reset the image state
  const handleOutsideClick = (e) => {
    if (e.target.closest(".photo-gallery") === null) {
      setClickedImage(null);
    }
  };

  // Add event listener to detect clicks outside the image gallery
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email data
    const emailData = {
      user_name: formData.name,       // Send the name as 'user_name'
      user_email: formData.email,     // Send the email as 'user_email'
      user_message: formData.message, // Send the message as 'user_message'
    };

    // Send email using EmailJS
    emailjs.send('service_roygrll', 'template_z3ny72p', emailData, 'iKLtoWt5SFGFGeTdp')
      .then((response) => {
        console.log('Success:', response);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('Error:', error);
        alert('Something went wrong. Please try again.');
      });

    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="App">
      <div id = "home">
      <header>
        
        <h1>Long Distance Squad</h1>
        <img src="Pictures/Logo.png" href = "#home" alt="Logo" className="logo" />  {/* Add this line for the logo */}
      </header>

      <div className="image-container">
        <img src="Pictures/DSC_3306.png" alt="" />
      </div>
      </div>
      
      


      <nav className="bottom-nav">
        <ul>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>
      {/* Calendar Section */}
      <section id="aboutUs">
        <h2>About Us</h2>
        <div className="calendar-container">
          
          <p>
            At the Rice Long Distance Run Club, we believe that fitness is more than just exercise—it’s a tool for building stronger, healthier, and more connected communities. <br />
            <br /><br />
Through our partnership with Fonde Civic Club, we are bringing free fitness programming to underserved communities in Houston. From running and yoga to mindfulness and interactive games, we are creating a space where kids, families, and community members can move, play, and prioritize their well-being.<br />
<br /><br /></p>
<h4>Our Partnership with Fonde Civic Club</h4><p><br />
</p>
<h5>🏡 Why Fonde Civic Club?</h5><p>
Fonde Civic Club is a pillar of Super Neighborhood 69, advocating for community resources and engagement. Together, we are working to bring accessible fitness opportunities to the neighborhood through:<br />

✔ Community-Led Fitness Classes – Running, stretching, and yoga sessions tailored to local needs.<br />
✔ Health & Wellness Workshops – Educational sessions on exercise, nutrition, and mindfulness.<br />
✔ Survey & Research Initiative – Listening to community members to shape the program.<br />
✔ Annual Walk/Run Race at Fonde Park – Bringing people together for a fun and active event.<br />
<br />
</p>
<h5>What We Do</h5><p>
🏃‍♂️ Youth & Community Fitness Workshops<br />
Held at Fonde Park and local schools, our workshops focus on:<br />
✔ Running & Stretching Sessions<br />
✔ Yoga & Mindfulness<br />
✔ Interactive Games (Dodgeball, Freeze Tag, Capture the Flag, etc.)<br />
✔ Health & Nutrition Education<br />
<br />
</p>
<h5>📊 Community Research & Advocacy</h5><p>
We are actively surveying residents in partnership with Fonde Civic Club to:<br />
📝 Understand barriers to exercise (transportation, access to facilities, etc.).<br />
🏫 Advocate for stronger school fitness programs.<br />
🗣️ Shape our programming based on real community input.<br />
<br />
</p>
<h5>🎉 Annual Fonde Fit Walk/Run</h5><p>
We are organizing a community-wide walk/run event at Fonde Park to:<br />
🏆 Celebrate movement & health in the neighborhood.<br />
🤝 Strengthen community connections.<br />
💰 Raise funds to sustain local wellness initiatives.<br />
<br />
</p>
<h5>How You Can Get Involved</h5><p>
🔹 Join Us – Rice students can volunteer to help lead workshops and events.<br />
🔹 Participate – Community members can attend our free classes and events.<br />
🔹 Support – Donate or partner with us to expand our programs.<br />
<br />
💙 Together with Fonde Civic Club, we’re making fitness fun, inclusive, and accessible for all!
</p>
        </div>
      </section>
      
      {/* Calendar Section */}
      <section id="calendar">
        <h2>Our Calendar</h2>
        <div className="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_cb55216cf4870ff11e5ef899c0fea76e2ff4a1a0f798c52eaa2f4af3ec5298a3%40group.calendar.google.com&ctz=America%2FChicago"
            title="Google Calendar"
          ></iframe>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos">
        <h2>Photos</h2>
        <div className="photo-gallery">
          {["Picture1", "Picture2", "Picture3", "Picture4", "Picture5", "Picture6", "Picture7", "Picture8", "Picture9", "Picture10", "Picture11", "Picture12", "Picture13", "Picture14", "Picture15", "Picture16", "Picture17", "Picture18", "Picture19", "Picture20", "Picture21", "Picture22"].map((pic, index) => (
            <img
              key={index}
              src={`Pictures/${pic}.png`}
              alt=""
              className={`photo ${clickedImage === pic ? 'image-clicked' : ''}`}
              onClick={() => handleImageClick(pic)}
            />
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="Pictures/ConnorPhoto.png" alt="" />
            <h3>Connor Nguyen</h3>
            <p>Co-President and Co-Founder</p>
          </div>
          <div className="team-member">
            <img id = "diff" src="Pictures/VarshaPhoto.png" alt="" />
            <h3>Varsha Chandramouli</h3>
            <p>Co-President and Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AdrianPhoto.png" alt="" />
            <h3>Adrian Pomer</h3>
            <p>Treasurer</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AshwinRaoPhoto.png" alt="" />
            <h3>Ashwin Rao</h3>
            <p>Outreach and Web-Design</p>
          </div>
          <div className="team-member">
            <img src="Pictures/LaurenPhoto.png" alt="" />
            <h3>Lauren Nguyen</h3>
            <p>Treasurer</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AaronPhoto.png" alt="" />
            <h3>Aaron Chu</h3>
            <p>Hypeman</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AdrianPhoto.png" alt="" />
            <h3>Adrian Pomer</h3>
            <p>Treasurer</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AdrianPhoto.png" alt="" />
            <h3>Adrian Pomer</h3>
            <p>Treasurer</p>
          </div>
          {/* Repeat team members as needed */}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <h3 id="instagram">@longdsquadhtx on Instagram!</h3>
      </section>

    </div>
  );
}

export default App;
