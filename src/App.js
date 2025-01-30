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
      <header>
        
        <h1>Long Distance Squad</h1>
        <img src="Pictures/Logo.png" alt="Logo" className="logo" />  {/* Add this line for the logo */}
      </header>

      <div className="image-container">
        <img src="Pictures/DSC_3306.png" alt="" />
      </div>

      <nav className="bottom-nav">
        <ul>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

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
            <img src="Pictures/AshwinRaoPhoto.jpg" alt="" />
            <h3>Connor Nguyen</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src="Pictures/AshwinRaoPhoto.jpg" alt="" />
            <h3>Connor Nguyen</h3>
            <p>Team Leader</p>
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
