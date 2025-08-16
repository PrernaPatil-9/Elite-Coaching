import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '40px',
          left: '30px',
          backgroundColor: '#4f46e5',
          color: '#fff',
          border: 'none',
          padding: '10px 15px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          zIndex: 9999,
        }}
        aria-label="Scroll to top"
      >
        ⬆
      </button>
    )
  );
};

export default ScrollToTopButton;
