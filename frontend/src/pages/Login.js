import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        setMessage('✅ Login successful! Redirecting...');
        setTimeout(() => navigate('/'), 1500);
      }
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || 'Login failed'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email: resetEmail });
      setMessage(`📩 ${response.data.message}`);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || 'Error sending reset email'}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to access your account</p>

        {!showForgotPassword ? (
          <>
            <form onSubmit={handleLogin} className="auth-form">
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="auth-footer">
              <p><Link to="/forgot-password">Forgot Password?</Link></p>
            </div>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
          </>
        ) : (
          <>
            <form onSubmit={handleForgotPassword} className="auth-form">
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Reset Link
              </button>
            </form>

            <div className="auth-footer">
              <button
                type="button"
                className="link-button"
                onClick={() => setShowForgotPassword(false)}
              >
                Back to Login
              </button>
            </div>
          </>
        )}

        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
