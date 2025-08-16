'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Screened', value: 1200 },
  { name: 'Assessed', value: 800 },
  { name: 'Interviewed', value: 400 },
  { name: 'Offered', value: 150 },
  { name: 'Hired', value: 95 },
];

const PipelineChart = () => {
  return (
    <div className="w-full p-6 h-full rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
      <h3 className="text-lg font-semibold mb-4">Candidate Pipeline Efficiency</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
          <YAxis type="category" dataKey="name" width={80} stroke="hsl(var(--muted-foreground))" />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
          <Bar dataKey="value" fill="hsl(var(--primary))" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PipelineChart;
