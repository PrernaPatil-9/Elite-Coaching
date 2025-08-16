import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${scrollTop}%`,
      height: '5px',
      backgroundColor: '#10b981',
      zIndex: 9999,
      transition: 'width 0.2s ease-out',
    }} />
  );
};

export default ScrollProgress;
