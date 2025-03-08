import React, { useState, useRef } from 'react';
import './styles.css'; // Import your styles
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

    const [formData, setFormData] = useState({
         user_name: "",
        user_email: "",
        phone: "",
        topic: "Topic",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        console.log(formData);

        emailjs
          .sendForm('service_v3ninov', 'contact_form', form.current, {
            publicKey: 'jIY0ZIyGcbrYcq-Mi',
          })
          .then(
            () => {
              alert('Email sent successfully!');
              setFormData({
                user_name: "",
                user_email: "",
                phone: "",
                topic: "Topic",
                message: "",})
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
      return (
        <div className="contact-page">
        <div className="contact-container">
        <h1 className="contact-header">Visibility, Conversions, Success – Let’s Chat!</h1>
        <div className="form-card">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                value={formData.user_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
              >
                <option value="Topic" disabled>
                  Topic
                </option>
                <option value="New Projects">New Projects</option>
                <option value="General queries">General Queries</option>
                <option value="Say hello">Say Hello</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <p>
            Call <strong>+91 9819134779</strong>
          </p>
          <p>
            <strong>satyen@cowtheagency.in</strong>
          </p>
        </div>
      </div>
      </div>
    
      );
    };
    

export default ContactUs;