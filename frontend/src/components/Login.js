import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State for Police Login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');

  // Hardcoded credentials for Police login
  const correctUsername = 'police';
  const correctPassword = '12345';

  const handlePoliceLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      navigate('/fir-form'); 
    } else {
      alert('Invalid username or password');
    }
  };

  const handleViewFIR = (e) => {
    e.preventDefault();
    if (ipfsHash) {
      navigate(`/firs/${ipfsHash}`); 
    } else {
      alert('Please enter a valid IPFS hash');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-400 to-blue-500">
      <h1 className="text-3xl font-bold mb-8 text-white">Login</h1>
      {/* Login as Police */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Login as Police</h2>
        <form onSubmit={handlePoliceLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>

      {/* View FIR */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">View FIR</h2>
        <form onSubmit={handleViewFIR}>
          <input
            type="text"
            placeholder="Enter IPFS Hash"
            value={ipfsHash}
            onChange={(e) => setIpfsHash(e.target.value)}
            className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition"
          >
            View FIR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
