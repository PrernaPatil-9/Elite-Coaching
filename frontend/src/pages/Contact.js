import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMsg('✅ Your message was sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccessMsg('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMsg('❌ Server error. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">

      {/* ✅ Navbar/Header (Same as Home) */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">Elite<span>Coaching</span></Link>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact" className="active">Contact</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Elite Coaching</h1>
          <p>We’d love to hear from you! Let’s talk about your future goals.</p>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="contact-section container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Fill out the form or reach us using the details below:</p>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> 123 Education St, Learning City</li>
            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fas fa-envelope"></i> info@elitecoaching.com</li>
          </ul>

          {/* Embedded Google Map */}
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9559231153176!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ff1b64b6df6!2s123%20Education%20St%2C%20Learning%20City!5e0!3m2!1sen!2sin!4v1691234567890"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Elite Coaching Location"
            ></iframe>
          </div>
        </div>


        <form className="contact-form" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Main Footer Content */}
            <div className="footer-main">
              {/* Brand Info */}
              <div className="footer-brand">
                <h2 className="footer-logo">
                  <span className="logo-primary">Elite</span>
                  <span className="logo-secondary">Coaching</span>
                </h2>

                <p className="footer-description">
                  Your pathway to academic excellence and career success through
                  personalized mentorship and industry-leading education.
                </p>
                <div className="footer-newsletter">
                  <h4>Subscribe to our newsletter</h4>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>

              {/* Links Sections */}
              <div className="footer-links-container">
                <div className="footer-links quick-links">
                  <h3>Quick Links</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                  </ul>
                </div>


                <div className="footer-links courses-section">
                  <h3>Courses</h3>
                  <ul>
                    <li><Link to="/courses/technical">Civil Services</Link></li>
                    <li><Link to="/courses/business">Banking</Link></li>
                    <li><Link to="/courses/test-prep">Railways</Link></li>
                    <li><Link to="/courses/career">Defense</Link></li>
                    <li><Link to="/courses/workshops">SSC</Link></li>
                  </ul>
                </div>


                <div className="footer-links">
                  <h3>Support</h3>
                  <ul>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/refund">Refund Policy</Link></li>
                    <li><Link to="/support">Help Center</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="footer-bottom">
              <div className="copyright">
                &copy; {new Date().getFullYear()} Elite Coaching. All rights reserved.
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://x.com/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://in.linkedin.com/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.youtube.com/" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
