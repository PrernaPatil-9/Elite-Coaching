import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const team1 = "https://randomuser.me/api/portraits/women/47.jpg";
const team2 = "https://randomuser.me/api/portraits/men/41.jpg";
const team3 = "https://randomuser.me/api/portraits/women/52.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">Elite<span>Coaching</span></Link>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about" className="active">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="about-hero">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/class.mp4" type="video/mp4" />

        </video>

        {/* Overlay */}
        <div className="about-overlay"></div>

        {/* Text Content */}
        <div className="container hero-content">
          <h1>Welcome to <span>Elite Coaching</span></h1>
          <p>
            We are dedicated to transforming students' lives with expert mentorship,
            personalized learning, and a proven approach to academic and career success.
          </p>
          <div className="hero-stats">
            <div>
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Successful Students</p>
            </div>
            <div>
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To provide high-quality coaching that nurtures talent, builds confidence,
              and prepares students to excel in academics and beyond.
            </p>
          </div>
          <div className="mv-card">
            <h2>🚀 Our Vision</h2>
            <p>
              To become a globally recognized coaching institute that transforms students
              into future leaders and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="team-section">
        <div className="container">
          <h2>Meet Our Expert Coaches</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={team1} alt="Coach" />
              <h3>Emily Carter</h3>
              <p>Senior Academic Mentor</p>
            </div>
            <div className="team-card">
              <img src={team2} alt="Coach" />
              <h3>James Wilson</h3>
              <p>Career Development Coach</p>
            </div>
            <div className="team-card">
              <img src={team3} alt="Coach" />
              <h3>Sophia Brown</h3>
              <p>Soft Skills Trainer</p>
            </div>
          </div>
        </div>
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

export default About;
