import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Whether you have a question, a special request, or just want to say hello.</p>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {isSubmitted ? (
            <div className="form-success-message">
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>

        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <ul className="contact-details">
            <li><FaMapMarkerAlt className="info-icon" /> 123 Bakery Lane, Sweetville, SV 12345</li>
            <li><FaPhoneAlt className="info-icon" /> (123) 456-7890</li>
            <li><FaEnvelope className="info-icon" /> contact@sweetdreams.com</li>
          </ul>

          <div className="business-hours">
            <h3><FaClock className="info-icon" /> Business Hours</h3>
            <ul>
              <li><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 9:00 AM - 5:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>
          
          <div className="map-placeholder">
            {/* Replace with your actual map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890123456!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI4JzExLjQiTiAwwrAwNyc0MS4xIlc!5e0!3m2!1sen!2suk!4v1622641139498!5m2!1sen!2suk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Bakery Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 