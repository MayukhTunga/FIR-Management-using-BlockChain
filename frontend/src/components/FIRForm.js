import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('FIR Submitted:', formData);
    // Clear the form after submission
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
    alert('FIR Submitted Successfully!');
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

        {/* Additional fields like Place of Occurrence, Criminal Info, Investigation Steps, etc. */}
        {/* ...Continue with remaining fields... */}

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
