import React from 'react';

// Import placeholder components for Overview sections (update paths as needed)
import StatsCard from './overview/StatsCard';
import ChartSection from './overview/ChartSection';
import RecentActivityTable from './overview/RecentActivityTable';
import AIInsightsPanel from './overview/AIInsightsPanel';

const Overview = () => {
  // Purpose: This component serves as the default landing page for the admin dashboard,
  // displaying key metrics, charts, recent activity, and AI insights.

  return (
    <div className="p-6">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin 👋</h1>
        {/* Quick Action Buttons Placeholder */}
        <div className="space-x-4">
          {/* <button>Add New Job</button> */}
          {/* <button>Add User</button> */}
          {/* <button>Export Reports</button> */}
        </div>
      </div>

      {/* Key Metrics Cards Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>

      {/* Charts & Visuals Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartSection />
        <AIInsightsPanel />
      </div>

      {/* Recent Activity & AI Insights Placeholder */}
      <div className="mb-8"> {/* Added mb-8 for spacing from potential content below */}
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Overview;
