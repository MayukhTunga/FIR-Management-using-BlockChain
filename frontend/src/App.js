import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FIRForm from './components/FIRForm';
import ViewFIR from './components/ViewFIR';
import FIRDetails from './components/FIRDetails'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          {/* FIR Form Route */}
          <Route path="/" element={<FIRForm />} />
          
          {/* FIR List Route */}
          <Route path="/view-firs" element={<ViewFIR />} />

          {/* FIR Details Route */}
          <Route path="/firs/:id" element={<FIRDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
