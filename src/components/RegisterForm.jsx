import React, { useState } from 'react';
import logo from "../assets/Logo.png"; // Update the path as needed
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState(''); // success or error
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password) {
      setAlertMessage('All fields are required.');
      setAlertType('error');
      return;
    }

    // Simulate API response for dummy data
    setTimeout(() => {
      if (email === "test@example.com") {
        // Simulate a failed registration if email is already taken
        setAlertMessage('Email already exists. Please use a different email.');
        setAlertType('error');
      } else {
        // Simulate a successful registration
        setAlertMessage('Registration successful! Redirecting to login...');
        setAlertType('success');
        
        // Redirect to login page after successful registration
        setTimeout(() => navigate('/login'), 2000); // Wait 2 seconds before redirecting
      }
    }, 1000); // Simulate a delay for API call
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center mb-8">
          <a href="/" className="flex items-center mb-2">
            <img src={logo} alt="EconoHub Logo" className="w-12" />
          </a>
          <h2 className="text-3xl font-semibold text-center">Register</h2>
        </div>

        {/* Custom Alert */}
        {alertMessage && (
          <div className={`p-4 mb-4 text-sm font-semibold text-white rounded-lg ${alertType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {alertMessage}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-1 text-black">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-black">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-black">Password</label>
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
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Sudah memiliki akun? <Link to="/login" className="text-blue-500">Login Sekarang</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
