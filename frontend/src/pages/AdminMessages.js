import React, { useEffect, useState } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error('Failed to fetch messages:', err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td style={tdStyle}>{msg.name}</td>
                <td style={tdStyle}>{msg.email}</td>
                <td style={tdStyle}>{msg.message}</td>
                <td style={tdStyle}>{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  verticalAlign: 'top',
};

export default AdminMessages;
