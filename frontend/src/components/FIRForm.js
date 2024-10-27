import React, { useState } from 'react';
import axios from 'axios';

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

      // Retrieve and display the IPFS URL
      const fileUrl = "https://gateway.pinata.cloud/ipfs/" + responseData.data.IpfsHash;
      console.log("Uploaded File URL:", fileUrl);
      alert('FIR Submitted and Uploaded Successfully!');

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
    <div className="w-full p-6 flex flex-col items-center justify-center border-dashed border-2 border-gray-400 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">File an FIR</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        
        {/* Book No */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookNo">
            Book No.
          </label>
          <input
            type="text"
            name="bookNo"
            id="bookNo"
            value={formData.bookNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Book No."
          />
        </div>

        {/* Police Station */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="policeStation">
            Police Station
          </label>
          <input
            type="text"
            name="policeStation"
            id="policeStation"
            value={formData.policeStation}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Police Station"
            required
          />
        </div>

        {/* District */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
            District
          </label>
          <input
            type="text"
            name="district"
            id="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="District"
            required
          />
        </div>

        {/* Date and Hour of Occurrence */}
        <div className="mb-4 flex">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfOccurrence">
              Date of Occurrence
            </label>
            <input
              type="date"
              name="dateOfOccurrence"
              id="dateOfOccurrence"
              value={formData.dateOfOccurrence}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeOfOccurrence">
              Time of Occurrence
            </label>
            <input
              type="time"
              name="timeOfOccurrence"
              id="timeOfOccurrence"
              value={formData.timeOfOccurrence}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Date and Hour When Reported */}
        <div className="mb-4 flex">
          <div className="mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateReported">
              Date When Reported
            </label>
            <input
              type="date"
              name="dateReported"
              id="dateReported"
              value={formData.dateReported}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeReported">
              Time When Reported
            </label>
            <input
              type="time"
              name="timeReported"
              id="timeReported"
              value={formData.timeReported}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
       {/* Date and Time of Dispatch from Police Station */}
           <div className="mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dispatchTime">
              Time of Dispatch
            </label>
            <input
              type="time"
              name="dispatchTime"
              id="dispatchTime"
              value={formData.dispatchTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Name and Residence of Informer */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="informerName">
            Name of Informer
          </label>
          <input
            type="text"
            name="informerName"
            id="informerName"
            value={formData.informerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Informer Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="informerResidence">
            Residence of Informer
          </label>
          <input
            type="text"
            name="informerResidence"
            id="informerResidence"
            value={formData.informerResidence}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Informer Residence"
            required
          />
        </div>

        {/* Brief Description of Offense */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Brief Description of Offense
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the offense..."
            rows="4"
            required
          />
        </div>
                {/* Place of Occurrence */}
                <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="placeOfOccurrence">
            Place of Occurrence
          </label>
          <input
            type="text"
            name="placeOfOccurrence"
            id="placeOfOccurrence"
            value={formData.placeOfOccurrence}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Place of Occurrence"
            required
          />
        </div>

        {/* Distance and Direction from Police Station */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="distanceDirection">
            Distance and Direction from Police Station
          </label>
          <input
            type="text"
            name="distanceDirection"
            id="distanceDirection"
            value={formData.distanceDirection}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Distance and Direction"
            required
          />
        </div>

        {/* Name of Criminal (if known) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criminalName">
            Name of Criminal (if known)
          </label>
          <input
            type="text"
            name="criminalName"
            id="criminalName"
            value={formData.criminalName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Criminal Name"
          />
        </div>

        {/* Address of Criminal (if known) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="criminalAddress">
            Address of Criminal (if known)
          </label>
          <input
            type="text"
            name="criminalAddress"
            id="criminalAddress"
            value={formData.criminalAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Criminal Address"
          />
        </div>

        {/* Steps Taken Regarding Investigation */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="investigationSteps">
            Steps Taken Regarding Investigation
          </label>
          <textarea
            name="investigationSteps"
            id="investigationSteps"
            value={formData.investigationSteps}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe investigation steps..."
            rows="4"
            required
          />
        </div>


        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Submit FIR
          </button>
        </div>
      </form>
    </div>
  );
};

export default FIRForm;
