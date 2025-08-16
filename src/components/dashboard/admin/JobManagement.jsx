
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
    <div className="p-6 text-foreground">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Job Management</h1>
          <p className="text-sm text-muted-foreground">Create, track, and manage job postings</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md">
          Post New Job
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-4 mb-6">
        {/* Status Filter */}
        <select className="border rounded-md px-3 py-2 bg-input text-foreground border-border">
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
            className="border rounded-md px-3 py-2 pl-10 bg-input text-foreground border-border"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
        </div>

      </div>

      {/* Job List Table */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground overflow-hidden mb-6">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr><th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Applicants
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Posted Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-border">
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-muted/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                  {job.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {job.company}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      job.status === 'Open' ? 'bg-green-500/20 text-green-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {job.applicants}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                  {job.postedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-primary hover:text-primary/80 mr-3">Edit</a>
                  <a href="#" className="text-destructive hover:text-destructive/80">Delete</a>
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
