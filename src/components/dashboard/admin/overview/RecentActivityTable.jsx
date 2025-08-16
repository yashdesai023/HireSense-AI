
'use client';
import React from 'react';

const RecentActivityTable = () => {
  // Purpose: Display recent platform activity
  const recentActivities = [
    { id: 1, activity: 'New Job Posted', name: 'ABC Pvt Ltd', dateTime: '13 Aug 2025', status: 'Success' },
    { id: 2, activity: 'Candidate Shortlisted', name: 'John Doe', dateTime: '12 Aug 2025', status: 'Pending' },
    { id: 3, activity: 'AI Match Found', name: 'Sarah Smith', dateTime: '12 Aug 2025', status: 'Success' },
    // Add more dummy data as needed
  ];

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Activity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User/Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr></thead>
          <tbody className="divide-y divide-gray-200">
            {recentActivities.map((activity, index) => (
              <tr
                key={activity.id}
                className={`
                  ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  hover:bg-gray-100 transition-colors
                `}
              ><td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {activity.activity}
                </td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {activity.name}
                </td><td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {activity.dateTime}
                </td><td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table></div></div>
  );
};

export default RecentActivityTable;
