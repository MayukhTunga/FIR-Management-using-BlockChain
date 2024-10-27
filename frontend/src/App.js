import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FIRForm from './components/FIRForm';
import ViewFIR from './components/ViewFIR';
import FIRDetails from './components/FIRDetails'; 
import Login from './components/Login';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fir-form" element={<FIRForm />} />
        <Route path="/firs/:id" element={<FIRDetails />} />
        <Route path="/view-firs" element={<ViewFIR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
