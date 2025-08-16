import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

// Image URLs
const courseHero = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const upscImg = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const bankingImg = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const sscImg = "https://educationpost.in/_next/image?url=https%3A%2F%2Fapi.educationpost.in%2Fs3-images%2F1728365001052-20.webp&w=3840&q=75";
const railwayImg = "https://sabrangindia.in/wp-content/uploads/2024/06/indian-railways-1612445249-1704939791-1711000649.jpg"

const Courses = () => {
  const [activeTab, setActiveTab] = useState('All Courses');

  const courses = [
    {
      id: 1,
      title: "UPSC Foundation",
      description: "Comprehensive preparation for UPSC Civil Services Examination with expert guidance and personalized mentoring.",
      duration: "12 Months",
      fee: "₹45,000",
      image: upscImg,
      category: "Civil Services",
      features: [
        "Complete GS + CSAT coverage",
        "Current affairs updates",
        "Answer writing practice",
        "Interview preparation"
      ]
    },
    {
      id: 2,
      title: "Banking Exams",
      description: "Targeted coaching for IBPS, SBI PO/Clerk and other banking examinations with specialized modules.",
      duration: "6 Months",
      fee: "₹25,000",
      image: bankingImg,
      category: "Banking",
      features: [
        "Quantitative aptitude",
        "Reasoning ability",
        "English language",
        "Banking awareness"
      ]
    },
    {
      id: 3,
      title: "SSC CGL Coaching",
      description: "Focused training for SSC Combined Graduate Level examination with mock tests and performance analysis.",
      duration: "8 Months",
      fee: "₹30,000",
      image: sscImg,
      category: "SSC",
      features: [
        "Tier I & II preparation",
        "Previous year papers",
        "Time management",
        "Sectional cut-off strategy"
      ]
    },
    {
      id: 4,
      title: "State PSC",
      description: "State-specific civil services preparation with local language support and regional focus.",
      duration: "10 Months",
      fee: "₹35,000",
      image: upscImg,
      category: "Civil Services",
      features: [
        "State syllabus coverage",
        "Regional language papers",
        "State-specific current affairs",
        "Interview guidance"
      ]
    },
    {
      id: 5,
      title: "Defense Exams",
      description: "Specialized coaching for CDS, AFCAT, CAPF and other defense-related examinations.",
      duration: "6 Months",
      fee: "₹28,000",
      image: bankingImg,
      category: "Defense",
      features: [
        "Mathematics & English",
        "General knowledge",
        "Officer potential test",
        "SSB interview prep"
      ]
    },
    {
      id: 6,
      title: "Railway Exams",
      description: "Complete preparation for RRB NTPC, Group D and other railway recruitment board examinations.",
      duration: "5 Months",
      fee: "₹20,000",
      image: railwayImg,
      category: "Railways",
      features: [
        "Technical & non-technical",
        "CBAT preparation",
        "Psychometric tests",
        "Previous year patterns"
      ]
    }
  ];

  // ✅ Filtered Courses
  const filteredCourses =
    activeTab === 'All Courses'
      ? courses
      : courses.filter(course => course.category === activeTab);

  return (
    <div className="elite-coaching-courses">
      {/* Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">Elite<span>Coaching</span></Link>
          </div>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses" className="active">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </div>
        </div>
      </header>

     {/* Combined Courses Hero + CTA Section */}
<section className="courses-hero">
  <div className="container">
    <div className="hero-content">
      <h1>Our Comprehensive Courses</h1>
      <p className="subtitle">Designed to help you crack competitive exams with confidence</p>

      {/* Added CTA inside the same section */}
      <div className="hero-cta">
        <h2>Ready to Start Your Preparation?</h2>
        <p>Join thousands of successful candidates who transformed their careers with our courses</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Book Free Consultation</Link>
        </div>
      </div>
    </div>
  </div>
</section>


  {/* Courses Section (Categories + Course Cards) */}
<section className="main-courses">
  <div className="container">

    {/* Course Categories as Section Heading */}
    <div className="section-header">
      <h2>Exam Categories</h2>
      <p>We cover all major competitive examinations</p>
    </div>
    <div className="category-tabs">
      <button
        className={`tab ${activeTab === 'All Courses' ? 'active' : ''}`}
        onClick={() => setActiveTab('All Courses')}
      >
        All Courses
      </button>
      <button
        className={`tab ${activeTab === 'Civil Services' ? 'active' : ''}`}
        onClick={() => setActiveTab('Civil Services')}
      >
        Civil Services
      </button>
      <button
        className={`tab ${activeTab === 'Banking' ? 'active' : ''}`}
        onClick={() => setActiveTab('Banking')}
      >
        Banking
      </button>
      <button
        className={`tab ${activeTab === 'SSC' ? 'active' : ''}`}
        onClick={() => setActiveTab('SSC')}
      >
        SSC
      </button>
      <button
        className={`tab ${activeTab === 'Defense' ? 'active' : ''}`}
        onClick={() => setActiveTab('Defense')}
      >
        Defense
      </button>
      <button
        className={`tab ${activeTab === 'Railways' ? 'active' : ''}`}
        onClick={() => setActiveTab('Railways')}
      >
        Railways
      </button>
    </div>

    {/* Main Courses Display */}
    <div className="courses-grid">
      {filteredCourses.map(course => (
        <div key={course.id} className="course-card">
          <div className="course-image">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course-content">
            <h3>{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <div className="course-meta">
              <span><i className="fas fa-clock"></i> {course.duration}</span>
              <span><i className="fas fa-rupee-sign"></i> {course.fee}</span>
            </div>
            <div className="course-features">
              <h4>Key Features:</h4>
              <ul>
                {course.features.map((feature, index) => (
                  <li key={index}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>
            </div>
            <div className="course-actions">
              <Link to="/contact" className="btn-secondary">Enquire Now</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="course-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Success Stories</h2>
            <p>What our students say about our courses</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The UPSC course structure was comprehensive and the mentors were incredibly supportive. Cleared prelims in first attempt!"</p>
                <div className="testimonial-author">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Riya Sharma" />
                  <div className="author-info">
                    <h4>Riya Sharma</h4>
                    <p>UPSC 2022 Rank Holder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Banking course mock tests were exactly like the actual exam. Helped me secure SBI PO with AIR 127."</p>
                <div className="testimonial-author">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Amit Patel" />
                  <div className="author-info">
                    <h4>Amit Patel</h4>
                    <p>SBI Probationary Officer</p>
                  </div>
                </div>
              </div>
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

export default Courses;

