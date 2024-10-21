import React from 'react';
import { useParams, Link } from 'react-router-dom';

const sampleFIRs = [
  {
    id: 1,
    bookNo: '1234',
    policeStation: 'Station 1',
    district: 'District A',
    dateOfOccurrence: '2024-09-29',
    timeOfOccurrence: '12:00',
    dateReported: '2024-10-01',
    timeReported: '14:00',
    informerName: 'John Doe',
    informerResidence: '123 Main Street',
    description: 'Theft of personal belongings.',
    placeOfOccurrence: 'Market Street',
    distanceDirection: '2km North of Station 1',
    criminalName: 'Unknown',
    criminalAddress: 'N/A',
    investigationSteps: 'Investigation started; CCTV footage being reviewed.',
    dispatchTime: '15:00',
  },
  {
    id: 2,
    bookNo: '5678',
    policeStation: 'Station 2',
    district: 'District B',
    dateOfOccurrence: '2024-09-13',
    timeOfOccurrence: '18:00',
    dateReported: '2024-09-15',
    timeReported: '09:00',
    informerName: 'Jane Smith',
    informerResidence: '456 Elm Street',
    description: 'Assault and battery.',
    placeOfOccurrence: 'Central Park',
    distanceDirection: '1km West of Station 2',
    criminalName: 'John Doe',
    criminalAddress: '789 Oak Lane',
    investigationSteps: 'Witness statements being taken.',
    dispatchTime: '10:00',
  },
  {
    id: 3,
    bookNo: '9101',
    policeStation: 'Station 3',
    district: 'District C',
    dateOfOccurrence: '2024-08-19',
    timeOfOccurrence: '20:00',
    dateReported: '2024-08-21',
    timeReported: '08:00',
    informerName: 'David Brown',
    informerResidence: '789 Pine Road',
    description: 'Hit and run accident.',
    placeOfOccurrence: 'Highway 20',
    distanceDirection: '5km East of Station 3',
    criminalName: 'Unknown',
    criminalAddress: 'N/A',
    investigationSteps: 'Searching for vehicle involved.',
    dispatchTime: '09:30',
  },
];

const FIRDetails = () => {
  const { id } = useParams();
  const fir = sampleFIRs.find((fir) => fir.id === parseInt(id));

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
