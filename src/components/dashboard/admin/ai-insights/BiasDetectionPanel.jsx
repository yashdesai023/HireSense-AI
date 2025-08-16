'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AlertTriangle } from 'lucide-react';

const genderData = [
  { name: 'Female', value: 45, color: 'hsl(var(--chart-1))' },
  { name: 'Male', value: 50, color: 'hsl(var(--chart-2))' },
  { name: 'Non-binary', value: 5, color: 'hsl(var(--chart-3))' },
];

const ethnicityData = [
    { name: 'Asian', value: 30, color: 'hsl(var(--chart-1))' },
    { name: 'White', value: 40, color: 'hsl(var(--chart-2))' },
    { name: 'Hispanic', value: 15, color: 'hsl(var(--chart-3))' },
    { name: 'Black', value: 10, color: 'hsl(var(--chart-4))' },
    { name: 'Other', value: 5, color: 'hsl(var(--chart-5))' },
];


const BiasDetectionPanel = () => {
  return (
    <div className="w-full p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
      <h3 className="text-lg font-semibold mb-4">Bias Detection</h3>
      <div className="flex items-center p-3 rounded-md bg-yellow-500/10 border border-yellow-500/30 mb-4">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mr-3" />
        <p className="text-sm text-yellow-300">
          Female applicants drop-off rate is 15% higher than male applicants at the coding test stage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-[250px]">
            <h4 className="text-center text-sm font-medium mb-2">Gender Distribution</h4>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={genderData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                          const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                          const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

                          return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                              {`${(percent * 100).toFixed(0)}%`}
                            </text>
                          );
                        }}>
                        {genderData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                    <Legend iconSize={10} />
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="h-[250px]">
            <h4 className="text-center text-sm font-medium mb-2">Ethnicity Distribution</h4>
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={ethnicityData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={80} label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                          const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
                          const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

                          return (
                            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                              {`${(percent * 100).toFixed(0)}%`}
                            </text>
                          );
                        }}>
                        {ethnicityData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                    <Legend iconSize={10} />
                </PieChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BiasDetectionPanel;
