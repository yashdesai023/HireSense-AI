import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
// Make sure you have installed chart.js and react-chartjs-2
// npm install chart.js react-chartjs-2
// Chart.js needs to be registered for use with react-chartjs-2 v4+
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// Dummy Data
const userGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'User Growth',
      data: [0, 100, 250, 400, 600, 850, 1100],
      fill: false,
      borderColor: '#00D4FF', // Primary color
      tension: 0.1,
      pointBackgroundColor: '#00D4FF',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#00D4FF',
    },
  ],
};

const jobsData = {
  labels: ['Engineering', 'Marketing', 'Sales', 'Design', 'HR'],
  datasets: [
    {
      label: 'Jobs Posted',
      data: [50, 35, 20, 15, 10],
      backgroundColor: '#00D4FF', // Primary color
    },
    {
      label: 'Jobs Filled',
      data: [40, 30, 15, 10, 8],
      backgroundColor: '#FF6F61', // Secondary color
    },
  ],
};

const aiMatchSuccessData = {
  labels: ['Successful Match', 'Needs Review', 'Low Match'],
  datasets: [
    {
      data: [70, 20, 10], // Percentages
      backgroundColor: ['#00D4FF', '#FF6F61', '#CCCCCC'], // Primary, Secondary, Neutral
      borderColor: '#1A1A1A', // Card background border
      borderWidth: 2,
    },
  ],
};

// Chart Options (Common)
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allow controlling size with container
  plugins: {
    legend: {
      labels: {
        color: '#E6F1FF', // Text Light color
      },
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y;
          }
           if (context.dataset.label === undefined) { // For Pie chart values
             label = context.label + ': ' + context.raw + '%';
           }
          return label;
        }
      }
    },
  },
  animation: {
    duration: 1000, // Smooth animation duration
    easing: 'easeOutQuart',
  },
};

const lineChartOptions = {
    ...commonOptions,
     scales: {
        x: {
            ticks: { color: '#8892B0' }, // Text Dark color
            grid: { color: '#333333' } // Dark grid lines
        },
        y: {
            ticks: { color: '#8892B0' }, // Text Dark color
             grid: { color: '#333333' } // Dark grid lines
        }
     }
};

const barChartOptions = {
     ...commonOptions,
     scales: {
        x: {
            ticks: { color: '#8892B0' }, // Text Dark color
            grid: { color: '#333333' } // Dark grid lines
        },
        y: {
            ticks: { color: '#8892B0' }, // Text Dark color
             grid: { color: '#333333' } // Dark grid lines
        }
     }
};

const pieChartOptions = {
    ...commonOptions,
};

const ChartSection = () => {
  // Purpose: Display various charts and visuals for platform analytics.
  return (
    <div>
      <h2 className="text-xl font-bold text-[#E6F1FF] mb-4">Platform Analytics</h2> {/* Text Light color */}
      
      {/* User Growth Chart */}
      <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-6" style={{ height: '300px' }}> {/* Secondary background */}
        <h3 className="text-lg font-semibold text-[#E6F1FF] mb-2">User Growth Over Time</h3> {/* Text Light color */}
        {/* Ensure you have registered the required Chart.js components if using v4+ */}
        <Line data={userGrowthData} options={lineChartOptions} />
      </div>

      {/* Jobs Posted vs. Filled Chart */}
       <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-6" style={{ height: '300px' }}> {/* Secondary background */}
        <h3 className="text-lg font-semibold text-[#E6F1FF] mb-2">Jobs Posted vs. Filled</h3> {/* Text Light color */}
         {/* Ensure you have registered the required Chart.js components if using v4+ */}
        <Bar data={jobsData} options={barChartOptions} />
      </div>

      {/* AI Match Success Rate Chart */}
       <div className="bg-[#112240] p-6 rounded-lg shadow-xl" style={{ height: '300px' }}> {/* Secondary background */}
        <h3 className="text-lg font-semibold text-[#E6F1FF] mb-2">AI Match Success Rate</h3> {/* Text Light color */}
         {/* Ensure you have registered the required Chart.js components if using v4+ */}
        <Pie data={aiMatchSuccessData} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default ChartSection;