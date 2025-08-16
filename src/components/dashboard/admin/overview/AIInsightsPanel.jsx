// src/components/dashboard/admin/overview/AIInsightsPanel.jsx
import React from 'react';
// Assuming you have Lucide React or similar icon library installed
import { Lightbulb, TrendingUp, AlertTriangle, ExternalLink } from 'lucide-react';

// Dummy data for insights
const insights = [
  {
    id: 1,
    icon: <Lightbulb className="text-yellow-400" size={24} />,
    text: '12 candidates match the new Software Engineer role — recommend scheduling interviews.',
    isImportant: false,
  },
  {
    id: 2,
    icon: <TrendingUp className="text-green-500" size={24} />,
    text: 'AI predicts a 15% increase in job postings next month based on trends.',
    isImportant: false,
  },
  {
    id: 3,
    icon: <AlertTriangle className="text-red-500" size={24} />,
    text: 'Low match rate detected in Marketing category — suggest adjusting skills criteria.',
    isImportant: true, // Mark as important for the glow effect
  },
  // Add more dummy insights as needed
];

const AIInsightsPanel = () => {
  // Purpose: Displays AI-related insights and alerts on the dashboard overview.
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg shadow-xl text-white"> {/* Dark background card */}
      <h2 className="text-xl font-bold mb-4">AI Insights & Suggestions</h2>
      <div className="space-y-4">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`flex items-start p-4 rounded-md border border-gray-700 ${
              insight.isImportant ? 'ring-2 ring-cyan-500 ring-opacity-50' : '' // Cyan glow border
            }`}
          >
            <div className="flex-shrink-0 mr-4">
              {insight.icon}
            </div>
            <div className="flex-grow">
              <p className="text-gray-200 text-sm mb-2">{insight.text}</p>
              {/* Placeholder View Details Button */}
              <button className="text-cyan-400 hover:text-cyan-500 text-xs font-medium flex items-center">
                View Details
                <ExternalLink className="ml-1" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsightsPanel;