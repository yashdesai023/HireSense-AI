'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mar', Applications: 400, Hires: 24 },
  { name: 'Apr', Applications: 300, Hires: 13 },
  { name: 'May', Applications: 200, Hires: 98 },
  { name: 'Jun', Applications: 278, Hires: 39 },
  { name: 'Jul', Applications: 189, Hires: 48 },
  { name: 'Aug', Applications: 239, Hires: 38 },
];

const TrendChart = () => {
  return (
    <div className="w-full p-6 h-[420px] rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
      <h3 className="text-lg font-semibold mb-4">Hiring Trends (Last 6 Months)</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
          <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
          <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="Applications" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="Hires" stroke="hsl(var(--chart-2))" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
