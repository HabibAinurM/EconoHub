import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png"; // Update the path as needed

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // success or error
  const navigate = useNavigate();

  // Dummy data for email and password
  const dummyData = {
    email: "user@example.com",  // Set this as the valid dummy email
    password: "password123",    // Set this as the valid dummy password
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setAlertMessage('Email and Password are required.');
      setAlertType('error');
      return;
    }

    // Simulate login process with dummy data
    if (email === dummyData.email && password === dummyData.password) {
      setAlertMessage('Login successful!');
      setAlertType('success');

      // Simulate storing a token in localStorage
      localStorage.setItem('token', 'dummy_token');

      // Redirect to the dashboard after successful login
      setTimeout(() => navigate('/dashboard'), 2000); // Wait 2 seconds before redirecting
    } else {
      setAlertMessage('Invalid email or password!');
      setAlertType('error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <a href="/" className="flex items-center mb-2">
            <img src={logo} alt="EconoHub Logo" className="w-12" />
          </a>
          <h2 className="text-3xl font-semibold text-center">Login</h2>
        </div>

        {/* Custom Alert */}
        {alertMessage && (
          <div className={`p-4 mb-4 text-sm font-semibold text-white rounded-lg ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Belum memiliki akun? <Link to="/register" className="text-blue-500">Daftar Sekarang</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
