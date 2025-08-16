'use client';
import React from 'react';
import { Search } from 'lucide-react';

const JobManagement = () => {
  // Purpose: Component for managing jobs and applications.

  // Dummy data for the job list table
  const jobs = [
    { title: 'Software Engineer', company: 'TechCorp Pvt Ltd', status: 'Open', applicants: 23, postedDate: '2025-03-01' },
    { title: 'UI/UX Designer', company: 'Creative Minds', status: 'Closed', applicants: 15, postedDate: '2025-02-14' },
    { title: 'Data Analyst', company: 'DataFlow Ltd', status: 'Open', applicants: 9, postedDate: '2025-03-05' },
  ];

  return (
    <div className="p-6 text-white"> {/* Ensure overall text is white */}
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Job Management</h1>
          <p className="text-sm text-gray-600">Create, track, and manage job postings</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Post New Job
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {/* Status Filter */}
        <select className="border rounded-md px-3 py-2 text-gray-700 bg-white bg-opacity-10 border border-opacity-20 border-white text-white"> {/* Apply card styling */}
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Draft">Draft</option>
        </select>
 
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search job title or company"
            className="border rounded-md px-3 py-2 pl-10 text-gray-700"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size={18} /> {/* Ensure icon is white */}
        </div>

      </div>

      {/* Job List Table */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white overflow-hidden mb-6"> {/* Apply card styling */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Posted Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead> {/* You might want to style thead for dark theme as well */}
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {job.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      job.status === 'Open' ? 'bg-green-500 text-white' : // Adjust status colors for dark theme
                      job.status === 'Closed' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.applicants}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.postedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 mr-3">Edit</a>
                  <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobManagement;
