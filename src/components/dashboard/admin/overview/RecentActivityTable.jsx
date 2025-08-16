jsx
// src/components/dashboard/admin/overview/RecentActivityTable.jsx
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
        return 'bg-green-500 text-white';
      case 'Pending':
        return 'bg-yellow-500 text-gray-800';
      case 'Failed':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Activity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                User/Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {recentActivities.map((activity, index) => (
              <tr
                key={activity.id}
                className={`
                  ${index % 2 === 0 ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-900 bg-opacity-50'}
                  hover:bg-gray-700 hover:bg-opacity-70 transition-colors
                `}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {activity.activity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {activity.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                  {activity.dateTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityTable;