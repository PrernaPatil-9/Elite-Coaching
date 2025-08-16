import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      if (res.data.success) {
        setMessage('✅ Password reset successfully! Redirecting...');
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || 'Failed to reset password'}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset} className="auth-form">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary">Update Password</button>
        </form>
        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
