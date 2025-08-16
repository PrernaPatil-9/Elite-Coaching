import React, { useEffect, useState } from 'react'; // Added useState import
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

// Using image URLs instead of local files to avoid import errors
const heroBanner = "https://media.istockphoto.com/id/177400275/photo/graduation.jpg?s=612x612&w=0&k=20&c=Qwj4o5gjMOt5KgnIGdHAjP3sr98WaSNH5RVl3Ij173s=";
const feature1 = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature2 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const feature3 = "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const testimonial1 = "https://randomuser.me/api/portraits/women/44.jpg";
const testimonial2 = "https://randomuser.me/api/portraits/men/32.jpg";

const Home = () => {
  // ✅ AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="elite-coaching-home">
      {/* Header/Navbar - Updated with hamburger */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">Elite<span>Coaching</span></Link>
          </div>
          
          {/* Hamburger Menu Button - Visible only on mobile */}
          <button 
            className="hamburger-menu" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={isMenuOpen ? "line line1 open" : "line line1"}></span>
            <span className={isMenuOpen ? "line line2 open" : "line line2"}></span>
            <span className={isMenuOpen ? "line line3 open" : "line line3"}></span>
          </button>
          
          <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className={`auth-buttons ${isMenuOpen ? "open" : ""}`}>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Unlock Your Potential with &nbsp;
              <span className="highlighted-name">
                <span className="highlight-primary">Elite</span>
                <span className="highlight-secondary"> Coaching</span>
              </span>
            </h1>
            <p style={{ color: 'black' }}>
              Personalized mentorship from industry experts to help you achieve academic and career excellence.
            </p>

            <div className="hero-buttons">
              <Link to="/courses" className="hero-btn primary-btn">Explore Programs</Link>
              <Link to="/contact" className="hero-btn secondary-btn">Free Consultation</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroBanner} alt="Students learning with Elite Coaching" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
            <h3>50+</h3>
            <p>Expert Coaches</p>
          </div>
          <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Our Key Features</h2>
            <p>What makes Elite Coaching different</p>
          </div>
          <div className="features-grid">
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="feature-img">
                <img src={feature1} alt="Personalized Learning" />
              </div>
              <h3>Personalized Learning</h3>
              <p>Customized learning paths tailored to your specific goals and learning style.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="feature-img">
                <img src={feature2} alt="Expert Mentors" />
              </div>
              <h3>Expert Mentors</h3>
              <p>Learn from industry professionals with proven track records in their fields.</p>
            </div>
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="feature-img">
                <img src={feature3} alt="Cutting-edge Curriculum" />
              </div>
              <h3>Cutting-edge Curriculum</h3>
              <p>Modern courses designed to keep you ahead of the competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Students Say</h2>
            <p>Success stories from our community</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card" data-aos="fade-right">
              <div className="testimonial-content">
                <p>"Elite Coaching helped me land my dream job at Google. The interview preparation was exceptional!"</p>
                <div className="testimonial-author">
                  <img src={testimonial1} alt="Alex Johnson" />
                  <div className="author-info">
                    <h4>Alex Johnson</h4>
                    <p>Software Engineer, Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" data-aos="fade-left">
              <div className="testimonial-content">
                <p>"I went from failing my classes to graduating with honors thanks to my Elite mentor."</p>
                <div className="testimonial-author">
                  <img src={testimonial2} alt="Sarah Williams" />
                  <div className="author-info">
                    <h4>Sarah Williams</h4>
                    <p>Honors Graduate, Stanford</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta"
        style={{
          position: 'relative',
          backgroundImage: "url('/images/cta-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>Ready to Transform Your Future?</h2>
          <p>Join hundreds of successful students who achieved their goals with our help.</p>
          <Link to="/contact" className="btn-primary">Get Started Today</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h2 className="footer-logo">
                  <span className="logo-primary">Elite</span>
                  <span className="logo-secondary">Coaching</span>
                </h2>
                <p className="footer-description">
                  Your pathway to academic excellence and career success through personalized mentorship and industry-leading education.
                </p>
                <div className="footer-newsletter">
                  <h4>Subscribe to our newsletter</h4>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>

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
                    <li><Link to="/courses">Civil Services</Link></li>
                    <li><Link to="/courses">Banking</Link></li>
                    <li><Link to="/courses">Railways</Link></li>
                    <li><Link to="/courses">Defense</Link></li>
                    <li><Link to="/courses">SSC</Link></li>
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

export default Home;
