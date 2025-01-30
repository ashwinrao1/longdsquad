import { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

function App() {
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

    // Send email using EmailJS
    emailjs.send('service_roygrll', 'template_z3ny72p', formData, 'iKLtoWt5SFGFGeTdp')
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
      </header>

      <div className="image-container">
        <img src="DSC_3306.png" alt="Squad Image"/>
      </div>

      <nav className="bottom-nav">
        <ul>
          <li><a href="#our-team">Our Team</a></li>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#photos">Photos</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

      {/* Our Team Section */}
      <section id="our-team">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 1" />
            <h3>Connor Nguyen</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 2" />
            <h3>Ashwin Rao</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 3" />
            <h3>Mark Johnson</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 1" />
            <h3>Connor Nguyen</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 2" />
            <h3>Ashwin Rao</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 3" />
            <h3>Mark Johnson</h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 1" />
            <h3>Connor Nguyen</h3>
            <p>Team Leader</p>
          </div>
          <div className="team-member">
            <img src="AshwinRaoPhoto.jpg" alt="Team Member 2" />
            <h3>Ashwin Rao</h3>
            <p>Marketing Specialist</p>
          </div>
          
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar">
        <h2>Our Calendar</h2>
        <div className="calendar-container">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=jonessecretaries%40gmail.com&ctz=America%2FChicago"
          ></iframe>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos">
        <h2>Photos</h2>
        <div className="photo-gallery">
          <img src="kipchoge.jpg" alt="Photo 1" />
          <img src="kipchoge.jpg" alt="Photo 2" />
          <img src="kipchoge.jpg" alt="Photo 3" />
          <img src="kipchoge.jpg" alt="Photo 1" />
          <img src="kipchoge.jpg" alt="Photo 2" />
          <img src="kipchoge.jpg" alt="Photo 3" />
          <img src="kipchoge.jpg" alt="Photo 1" />
          <img src="kipchoge.jpg" alt="Photo 2" />
          <img src="kipchoge.jpg" alt="Photo 3" />
          <img src="kipchoge.jpg" alt="Photo 1" />
          <img src="kipchoge.jpg" alt="Photo 2" />
          <img src="kipchoge.jpg" alt="Photo 3" />
          <img src="kipchoge.jpg" alt="Photo 1" />
          <img src="kipchoge.jpg" alt="Photo 2" />
          <img src="kipchoge.jpg" alt="Photo 3" />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default App;
