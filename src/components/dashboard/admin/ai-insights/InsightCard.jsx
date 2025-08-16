'use client';

import React from 'react';

const InsightCard = ({ title, value, description, icon }) => {
  return (
    <div className="w-full p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-muted-foreground">{title}</h3>
        <div className="text-2xl">{icon}</div>
      </div>
      <div>
        <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
