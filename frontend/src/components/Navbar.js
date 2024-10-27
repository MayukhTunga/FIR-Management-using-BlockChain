import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-800 to-blue-800 text-white p-4 flex justify-between items-center shadow-lg ">
      <Link to="/" className="flex items-center space-x-2">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">FIR Management</h1>
          <p className="text-xs text-blue-100">Mayukh Pratyush</p>
        </div>
      </Link>
      <div>
        <Link to="/view-firs">
          <button className="bg-white text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-green-100 hover:text-green-700 transition duration-200 font-medium">
            View FIRs
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
