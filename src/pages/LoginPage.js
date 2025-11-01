import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [role, setRole] = useState('citizen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('role', role);
    alert(`Logging in as ${role} with ${email}`);

    // Redirect based on role
    if (role === 'citizen') {
      navigate('/report');
    } else {
      navigate('/view-issues');
    }
  };

  return (
    <div className="login-container">
      <h2>JanSeva Portal Login</h2>
      <form onSubmit={handleLogin}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="citizen">Citizen</option>
          <option value="officer">Officer</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <Link to="/report">
        <button type="button" className="report-button">Go to Report Issue</button>
      </Link>
    </div>
  );
}

export default LoginPage;