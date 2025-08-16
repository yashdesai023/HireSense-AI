
'use client';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Dummy Data
const userGrowthData = [
    { name: 'Jan', users: 0 },
    { name: 'Feb', users: 100 },
    { name: 'Mar', users: 250 },
    { name: 'Apr', users: 400 },
    { name: 'May', users: 600 },
    { name: 'Jun', users: 850 },
    { name: 'Jul', users: 1100 },
];

const jobsData = [
  { name: 'Engineering', posted: 50, filled: 40 },
  { name: 'Marketing', posted: 35, filled: 30 },
  { name: 'Sales', posted: 20, filled: 15 },
  { name: 'Design', posted: 15, filled: 10 },
  { name: 'HR', posted: 10, filled: 8 },
];

const aiMatchSuccessData = [
  { name: 'Successful Match', value: 70, fill: 'hsl(var(--primary))' },
  { name: 'Needs Review', value: 20, fill: 'hsl(var(--destructive))' },
  { name: 'Low Match', value: 10, fill: 'hsl(var(--muted))' },
];


const ChartSection = () => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-card-foreground mb-4">Platform Analytics</h2>

      <div className="mb-6" style={{ height: '300px' }}>
        <h3 className="text-lg font-semibold text-card-foreground mb-2">User Growth Over Time</h3>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))"/>
                <YAxis stroke="hsl(var(--muted-foreground))"/>
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                <Legend />
                <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-6" style={{ height: '300px' }}>
        <h3 className="text-lg font-semibold text-card-foreground mb-2">Jobs Posted vs. Filled</h3>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={jobsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))"/>
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))"/>
                <YAxis stroke="hsl(var(--muted-foreground))"/>
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                <Legend />
                <Bar dataKey="posted" fill="hsl(var(--primary))" />
                <Bar dataKey="filled" fill="hsl(var(--secondary))" />
            </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ height: '300px' }}>
        <h3 className="text-lg font-semibold text-card-foreground mb-2">AI Match Success Rate</h3>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie data={aiMatchSuccessData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label />
                <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
            </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
