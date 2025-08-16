import React from 'react';
import { User, Briefcase, Bot, Send } from 'lucide-react'; // Importing Lucide icons

const StatsCard = ({ title, value, icon, changeValue, changeType }) => {
  // Purpose: Component for displaying key metrics.
  return (
    <div className="p-6 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] rounded-lg shadow-md text-white transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-gray-300">{title}</div>
        <div className="text-blue-400">
 {icon} {/* Render the passed icon component */}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2" style={{ color: '#00B894' }}>
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
