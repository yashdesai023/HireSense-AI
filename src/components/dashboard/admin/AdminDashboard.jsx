"use client"

import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Overview from './Overview';
import UserManagement from './UserManagement';
import JobManagement from './JobManagement';
import AIInsights from './AIInsights';
import Settings from './Settings';

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = React.useState('overview');

  const handleNavigation = (content) => {
    setActiveContent(content);
  };

  const renderMainContent = () => {
    switch (activeContent) {
      case 'overview':
        return <Overview />;
      case 'user-management':
        return <UserManagement />;
      case 'job-management':
        return <JobManagement />;
      case 'ai-insights':
        return <AIInsights />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#0A192F] text-[#E6F1FF]">
      <Sidebar onNavigate={handleNavigation} />

      <div className="flex-grow flex flex-col ml-[220px]">
        <Navbar />
        <div className="flex-grow p-6 overflow-y-auto bg-[#f9fafb] text-gray-900">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
