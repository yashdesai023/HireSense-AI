
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
        return 'bg-green-500/20 text-green-300';
      case 'Pending':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'Failed':
        return 'bg-red-500/20 text-red-300';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="w-full p-8 rounded-lg shadow-lg bg-card text-card-foreground">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Activity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                User/Company Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Date & Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
            </tr></thead>
          <tbody className="divide-y divide-border">
            {recentActivities.map((activity, index) => (
              <tr
                key={activity.id}
                className="hover:bg-muted/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                  {activity.activity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {activity.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
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
        </table></div></div>
  );
};

export default RecentActivityTable;
