import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const ViewFIR = () => {
  const [firs, setFirs] = useState([]);

  useEffect(() => {
    const fetchFIRs = async () => {
      try {
        const response = await axios.get("https://api.pinata.cloud/data/pinList?status=pinned", {
          headers: {
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
          },
        });

        const fetchedFIRs = response.data.rows.map((item, index) => {
          const { name } = item.metadata;
          const [informerName, dateReported] = name.split('|');
          return {
            id: index + 1,
            informerName: informerName || "Unknown",
            dateReported: dateReported || "Unknown",
            ipfsHash: item.ipfs_pin_hash, 
          };
        });

        setFirs(fetchedFIRs);
      } catch (error) {
        console.error("Error fetching FIRs from Pinata:", error);
        alert("Failed to load FIRs from IPFS.");
      }
    };

    fetchFIRs();
  }, []);

  return (
    <>
    <Navbar />
    <div className="p-8 min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-white drop-shadow-lg">View FIRs</h1>
      <ul className="space-y-6 max-w-3xl mx-auto">
        {firs.map((fir) => (
          <li key={fir.id} className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transform hover:scale-105 transition duration-200">
            <Link to={`/firs/${fir.ipfsHash}`} className="block text-center">
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{fir.informerName}</h2>
              <p className="text-gray-600">Date Reported: <span className="font-medium">{fir.dateReported}</span></p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ViewFIR;
