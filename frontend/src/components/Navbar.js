import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/">
      <div>
        <h1 className="text-lg font-bold">FIR Management</h1>
        <p className="text-sm">MP</p>
      </div>
      </Link>
      <div>
        {/* Button to View FIRs */}
        <Link to="/view-firs">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
            View FIRs
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
