import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">View FIRs</h1>
      <ul className="space-y-4">
        {firs.map((fir) => (
          <li key={fir.id} className="border p-4 rounded-lg shadow-md text-center">
            <Link to={`/firs/${fir.ipfsHash}`}> 
              <h2 className="text-xl font-semibold">{fir.informerName}</h2>
              <p>Date Reported: {fir.dateReported}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFIR;
