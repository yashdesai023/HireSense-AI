
'use client'
import React from 'react';

const StatsCard = ({ title, value, icon, changeValue, changeType }) => {
  // Purpose: Component for displaying key metrics.
  return (
    <div className="p-6 bg-card rounded-lg shadow-md text-card-foreground transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold text-muted-foreground">{title}</div>
        <div className="text-primary">
            {icon}
        </div>
      </div>
      <div className="text-3xl font-bold mb-2 text-primary">
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
