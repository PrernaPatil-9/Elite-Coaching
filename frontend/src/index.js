import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// AOS imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS before rendering App
AOS.init({
  duration: 1000, // animation duration in ms
  once: true      // animate only once per element
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
