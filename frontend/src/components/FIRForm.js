import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const FIRForm = () => {
  const [formData, setFormData] = useState({
    bookNo: '',
    policeStation: '',
    district: '',
    dateOfOccurrence: '',
    timeOfOccurrence: '',
    dateReported: '',
    timeReported: '',
    informerName: '',
    informerResidence: '',
    description: '',
    placeOfOccurrence: '',
    distanceDirection: '',
    criminalName: '',
    criminalAddress: '',
    investigationSteps: '',
    dispatchTime: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FIR Submitted:', formData);

    const fileName = `${formData.informerName}|${formData.dateOfOccurrence || 'UnknownDate'}`;

    const textBlob = new Blob([JSON.stringify(formData, null, 2)], { type: 'text/plain' });
    const file = new File([textBlob], fileName, { type: 'text/plain' });

    try {
      const fileData = new FormData();
      fileData.append("file", file);

      const responseData = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: fileData,
        headers: {
          pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
          pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
          "Content-Type": "multipart/form-data"
        }
      });

      const fileUrl = "https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
      console.log("Uploaded File URL:", fileUrl);
      alert('FIR Submitted and Uploaded Successfully!'+responseData.data.IpfsHash+"\n Please Note this FIR Unique ID to access it later");

      setFormData({
        bookNo: '',
        policeStation: '',
        district: '',
        dateOfOccurrence: '',
        timeOfOccurrence: '',
        dateReported: '',
        timeReported: '',
        informerName: '',
        informerResidence: '',
        description: '',
        placeOfOccurrence: '',
        distanceDirection: '',
        criminalName: '',
        criminalAddress: '',
        investigationSteps: '',
        dispatchTime: '',
      });

    } catch (err) {
      console.error("Error uploading file to IPFS:", err);
      alert('Failed to upload FIR to IPFS');
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">File an FIR</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Book No.', id: 'bookNo', placeholder: 'Book No.', type: 'text' },
            { label: 'Police Station', id: 'policeStation', placeholder: 'Police Station', type: 'text', required: true },
            { label: 'District', id: 'district', placeholder: 'District', type: 'text', required: true },
            { label: 'Date of Occurrence', id: 'dateOfOccurrence', type: 'date', required: true },
            { label: 'Time of Occurrence', id: 'timeOfOccurrence', type: 'time', required: true },
            { label: 'Date Reported', id: 'dateReported', type: 'date', required: true },
            { label: 'Time Reported', id: 'timeReported', type: 'time', required: true },
            { label: 'Informer Name', id: 'informerName', placeholder: 'Informer Name', type: 'text', required: true },
            { label: 'Informer Residence', id: 'informerResidence', placeholder: 'Informer Residence', type: 'text', required: true },
            { label: 'Place of Occurrence', id: 'placeOfOccurrence', placeholder: 'Place of Occurrence', type: 'text', required: true },
            { label: 'Distance and Direction', id: 'distanceDirection', placeholder: 'Distance and Direction', type: 'text', required: true },
            { label: 'Criminal Name', id: 'criminalName', placeholder: 'Criminal Name', type: 'text' },
            { label: 'Criminal Address', id: 'criminalAddress', placeholder: 'Criminal Address', type: 'text' },
          ].map(({ label, id, placeholder, type, required }) => (
            <div key={id} className="relative">
              <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                id={id}
                name={id}
                type={type}
                required={required}
                placeholder={placeholder}
                value={formData[id]}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          ))}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Brief Description of Offense</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the offense..."
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="investigationSteps" className="block text-sm font-medium text-gray-700">Steps Taken Regarding Investigation</label>
            <textarea
              id="investigationSteps"
              name="investigationSteps"
              value={formData.investigationSteps}
              onChange={handleChange}
              placeholder="Describe investigation steps..."
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-150 ease-in-out"
            >
              Submit FIR
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default FIRForm;