import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const FIRDetails = () => {
  const { id } = useParams(); 
  const [fir, setFIR] = useState(null);

  useEffect(() => {
    const fetchFIRDetails = async () => {
      try {
        const response = await axios.get(`https://gateway.pinata.cloud/ipfs/${id}`);
        setFIR(response.data);
      } catch (error) {
        console.error("Error fetching FIR details from IPFS:", error);
        alert("Failed to load FIR details.");
      }
    };

    fetchFIRDetails();
  }, [id]);

  if (!fir) {
    return (
      <div className="p-8 min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">FIR Not Found</h1>
        <Link to="/view-firs" className="text-blue-200 hover:text-blue-100 underline">
          Back to FIR List
        </Link>
      </div>
    );
  }

  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-extrabold mb-8 drop-shadow-lg">FIR Details - {fir.bookNo}</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-gray-800">
        <ul className="space-y-6 text-lg">
          <li><strong>Police Station:</strong> {fir.policeStation}</li>
          <li><strong>District:</strong> {fir.district}</li>
          <li><strong>Date and Time of Occurrence:</strong> {fir.dateOfOccurrence} at {fir.timeOfOccurrence}</li>
          <li><strong>Date and Time When Reported:</strong> {fir.dateReported} at {fir.timeReported}</li>
          <li><strong>Informer Name:</strong> {fir.informerName}</li>
          <li><strong>Informer Residence:</strong> {fir.informerResidence}</li>
          <li><strong>Description:</strong> {fir.description}</li>
          <li><strong>Place of Occurrence:</strong> {fir.placeOfOccurrence}</li>
          <li><strong>Distance and Direction from Station:</strong> {fir.distanceDirection}</li>
          <li><strong>Criminal Name:</strong> {fir.criminalName}</li>
          <li><strong>Criminal Address:</strong> {fir.criminalAddress}</li>
          <li><strong>Investigation Steps Taken:</strong> {fir.investigationSteps}</li>
          <li><strong>Dispatch Time:</strong> {fir.dispatchTime}</li>
        </ul>
        <Link to="/view-firs" className="text-blue-600 hover:text-blue-700 mt-8 inline-block underline">
          Back to FIR List
        </Link>
      </div>
    </div>
    </>
  );
};

export default FIRDetails;
