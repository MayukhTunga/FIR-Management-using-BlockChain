import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
      <div className="p-8">
        <h1 className="text-2xl font-bold">FIR Not Found</h1>
        <Link to="/view-firs" className="text-blue-500">Back to FIR List</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">FIR Details - {fir.bookNo}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <ul className="space-y-4">
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
        <Link to="/view-firs" className="text-blue-500 mt-6 inline-block">Back to FIR List</Link>
      </div>
    </div>
  );
};

export default FIRDetails;
