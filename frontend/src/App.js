import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import AdminMessages from './pages/AdminMessages';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import WhatsAppChat from './pages/WhatsAppChat';

import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgress />
      <ScrollToTopButton />
      <WhatsAppChat />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/messages" element={<AdminMessages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
