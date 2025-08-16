'use client';

import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'AI Accuracy', value: 91, fill: 'hsl(var(--chart-2))' },
];

const ConfidenceGauge = () => {
  return (
    <div className="w-full p-6 h-full rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
      <h3 className="text-lg font-semibold mb-4 text-center">AI Prediction Accuracy</h3>
      <ResponsiveContainer width="100%" height="85%">
        <RadialBarChart 
          innerRadius="70%" 
          outerRadius="85%" 
          data={data} 
          startAngle={180} 
          endAngle={-180}
          barSize={20}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="value"
          />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
          <text 
            x="50%" 
            y="50%" 
            textAnchor="middle"  
            dominantBaseline="middle" 
            className="fill-foreground text-3xl font-bold">
            {`${data[0].value}%`}
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConfidenceGauge;
