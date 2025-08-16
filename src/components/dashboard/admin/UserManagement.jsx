'use client';
import React from 'react';

const UserManagement = () => {
  // Purpose: Component for managing users (Candidates, Recruiters, Roles & Permissions)
  const dummyUsers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Admin',
      email: 'john@hiresense.ai',
      status: 'Active',
      dateJoined: '2025-02-15',
    },
    {
      id: 2,
      name: 'Priya Desai',
      role: 'Candidate',
      email: 'priya@hiresense.ai',
      status: 'Pending',
      dateJoined: '2025-03-02',
    },
    {
      id: 3,
      name: 'Raj Mehta',
      role: 'Recruiter',
      email: 'raj@hiresense.ai',
      status: 'Suspended',
      dateJoined: '2025-01-20',
    },
  ];

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      {/* Page Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-gray-600">View, filter, and manage all platform users</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add User
        </button>
      </div>

      {/* Filter Bar */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6 flex flex-wrap items-center gap-4">
        <select className="border rounded-md p-2">
          <option value="All">Filter by Role (All)</option>
          <option value="Admin">Admin</option>
          <option value="Recruiter">Recruiter</option>
          <option value="Candidate">Candidate</option>
        </select>
        <select className="border rounded-md p-2">
          <option value="All">Filter by Status (All)</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Pending">Pending</option>
        </select>
        <input type="date" className="border rounded-md p-2" placeholder="Filter by date joined" />
        <input type="text" className="border rounded-md p-2 flex-grow" placeholder="Search by name or email" />
      </div>

      {/* Bulk Actions Panel */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6 flex items-center gap-4">
        <input type="checkbox" className="form-checkbox" />
        <span>Select All</span>
        <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
          Activate
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600">
          Suspend
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">
          Delete
        </button>
      </div>

      {/* User Table */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th> {/* Checkbox column */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {dummyUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap"><input type="checkbox" className="form-checkbox" /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-800' :
                      user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.dateJoined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className={`text-yellow-600 hover:text-yellow-900 mr-2 ${user.status === 'Active' ? '' : 'hidden'}`}>Suspend</button>
                   <button className={`text-blue-600 hover:text-blue-900 mr-2 ${user.status === 'Pending' ? '' : 'hidden'}`}>Approve</button>
                   <button className={`text-red-600 hover:text-red-900 ${user.status === 'Pending' ? '' : 'hidden'}`}>Reject</button>
                   <button className={`text-green-600 hover:text-green-900 mr-2 ${user.status === 'Suspended' ? '' : 'hidden'}`}>Activate</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls (Placeholder) */}
      <div className="mt-6 flex justify-between items-center">
        <div>Showing 1 to {dummyUsers.length} of {dummyUsers.length} results</div>
        <div className="space-x-2">
          <button className="border rounded-md p-2 text-sm">Previous</button>
          <button className="border rounded-md p-2 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
