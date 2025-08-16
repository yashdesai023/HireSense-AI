
'use client'
import React from 'react';
import { User, Briefcase, Bot, Send } from 'lucide-react'; // Importing Lucide icons

const StatsCard = ({ title, value, icon, changeValue, changeType }) => {
  // Purpose: Component for displaying key metrics.
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-600">{title}</div>
        <div className="text-blue-500">
            {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 text-blue-500">
        {value}
      </div>
      {changeValue && (
        <div className={`text-sm ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {changeValue} this month
        </div>
      )}
    </div>
  );
};

export default StatsCard;

