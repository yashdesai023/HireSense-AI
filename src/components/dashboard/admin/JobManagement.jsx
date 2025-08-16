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
    <div className="p-6">
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
        <select className="border rounded-md px-3 py-2 text-gray-700">
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
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Date Range Filter (Placeholder) */}
        {/* <div className="flex items-center">
          <label className="mr-2 text-gray-700">Posted Date:</label>
          <input type="date" className="border rounded-md px-3 py-2 text-gray-700" />
          <span className="mx-2 text-gray-500">-</span>
          <input type="date" className="border rounded-md px-3 py-2 text-gray-700" />
        </div> */}
      </div>

      {/* Job List Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
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
          </thead>
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
                      job.status === 'Open' ? 'bg-green-100 text-green-800' :
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

      {/* Optional Analytics Sidebar (Placeholder) */}
      {/* <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Analytics Overview</h3>
        <p className="text-sm text-gray-700">Open Jobs Count: XX</p>
        <p className="text-sm text-gray-700">Applicants Today: YY</p>
        <p className="text-sm text-gray-700">Most Applied Job: Job Title</p>
      </div> */}
    </div>
  );
};

export default JobManagement;