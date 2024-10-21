import React from 'react';
import { Link } from 'react-router-dom';

const sampleFIRs = [
  {
    id: 1,
    bookNo: '1234',
    policeStation: 'Station 1',
    district: 'District A',
    dateReported: '2024-10-01',
    informerName: 'John Doe',
  },
  {
    id: 2,
    bookNo: '5678',
    policeStation: 'Station 2',
    district: 'District B',
    dateReported: '2024-09-15',
    informerName: 'Jane Smith',
  },
  {
    id: 3,
    bookNo: '9101',
    policeStation: 'Station 3',
    district: 'District C',
    dateReported: '2024-08-21',
    informerName: 'David Brown',
  },
];

const ViewFIR = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">View FIRs</h1>
      <ul className="space-y-4">
        {sampleFIRs.map((fir) => (
          <li key={fir.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/firs/${fir.id}`}>
              <h2 className="text-xl font-semibold">
                FIR {fir.bookNo} - {fir.policeStation}
              </h2>
              <p>Date Reported: {fir.dateReported}</p>
              <p>Informer: {fir.informerName}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewFIR;
