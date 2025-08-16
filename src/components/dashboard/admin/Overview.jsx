
'use client';
import React from 'react';
import { User, Briefcase, Bot, Send } from 'lucide-react';
// Import placeholder components for Overview sections (update paths as needed)
import StatsCard from './overview/StatsCard';
import ChartSection from './overview/ChartSection';
import RecentActivityTable from './overview/RecentActivityTable';
import AIInsightsPanel from './overview/AIInsightsPanel';
import ConfidenceGauge from './ai-insights/ConfidenceGauge';

const Overview = () => {
  // Purpose: This component serves as the default landing page for the admin dashboard,
  // displaying key metrics, charts, recent activity, and AI insights.

  const stats = [
      {title: "Total Users", value: "1,250", icon: <User />, changeValue: "+5%", changeType: "up"},
      {title: "Job Postings", value: "340", icon: <Briefcase />, changeValue: "+12", changeType: "up"},
      {title: "AI Matches", value: "8,600", icon: <Bot />, changeValue: "+50", changeType: "up"},
      {title: "Applications Sent", value: "12,400", icon: <Send />, changeValue: "-2%", changeType: "down"},
  ]

  return (
    <div className="p-6">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">Welcome back, Admin 👋</h1>
        {/* Quick Action Buttons Placeholder */}
        <div className="space-x-4">
          {/* <button>Add New Job</button> */}
          {/* <button>Add User</button> */}
          {/* <button>Export Reports</button> */}
        </div>
      </div>

      {/* Key Metrics Cards Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => <StatsCard key={stat.title} {...stat} />)}
      </div>

      {/* Charts & Visuals Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartSection />
        </div>
        <div className="flex flex-col gap-6">
            <AIInsightsPanel />
            <ConfidenceGauge />
        </div>
      </div>

      {/* Recent Activity & AI Insights Placeholder */}
      <div className="mb-8"> {/* Added mb-8 for spacing from potential content below */}
        <RecentActivityTable />
      </div>
    </div>
  );
};

export default Overview;
