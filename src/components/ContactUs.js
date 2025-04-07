// components/ContactUs.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      user_message: formData.message,
    };

    // Correct placement of emailjs send function.
    emailjs
      .send('service_roygrll', 'template_z3ny72p', emailData, 'iKLtoWt5SFGFGeTdp')
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error:', error);
          alert('Something went wrong. Please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
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
      <h3 id="instagram">@longdsquad.htx on Instagram!</h3>
    </section>
  );
}

export default ContactUs;