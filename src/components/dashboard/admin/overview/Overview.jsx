jsx
import React from 'react';
import StatsCard from './overview/StatsCard';
import ChartSection from './overview/ChartSection';
import RecentActivityTable from './overview/RecentActivityTable';
import AIInsightsPanel from './overview/AIInsightsPanel';

const Overview = () => {
  // Dummy data for StatsCard
  const statsData = [
    {
      title: 'Total Users',
      value: '5,432',
      change: '+12% this month',
      changeType: 'increase', // 'increase', 'decrease', 'neutral'
      // Add icon placeholder here
    },
    {
      title: 'Active Job Listings',
      value: '1,254',
      change: '-5% this week',
      changeType: 'decrease',
      // Add icon placeholder here
    },
    {
      title: 'AI-Matched Candidates',
      value: '872',
      change: '+8% today',
      changeType: 'increase',
      // Add icon placeholder here
    },
    {
      title: 'Interview Requests',
      value: '356',
      change: '+3% yesterday',
      changeType: 'increase',
      // Add icon placeholder here
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Admin Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white"
          >
            {/* Icon Placeholder */}
            <div className="text-3xl mb-3">{/* Icon */}</div>
            <h3 className="text-lg font-medium text-white mb-1">{stat.title}</h3>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div> {/* Ensuring value text is white */}
            <div className={`text-sm ${stat.changeType === 'increase' ? 'text-green-500' : stat.changeType === 'decrease' ? 'text-red-500' : 'text-gray-500'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mb-8">
        <ChartSection />
      </div>

      {/* Recent Activity Table */}
      <div className="mb-8">
        <RecentActivityTable />
      </div>

      {/* AI Insights Panel */}
      <div>
        <AIInsightsPanel />
      </div>
    </div>
  );
};

export default Overview;