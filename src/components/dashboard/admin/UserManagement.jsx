
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="p-6 text-foreground min-h-screen">
      {/* Page Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-muted-foreground">View, filter, and manage all platform users</p>
        </div>
        <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Add User
        </Button>
      </div>

      {/* Filter Bar */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6 flex flex-wrap items-center gap-4">
        <select className="border rounded-md p-2 bg-input text-foreground">
          <option value="All">Filter by Role (All)</option>
          <option value="Admin">Admin</option>
          <option value="Recruiter">Recruiter</option>
          <option value="Candidate">Candidate</option>
        </select>
        <select className="border rounded-md p-2 bg-input text-foreground">
          <option value="All">Filter by Status (All)</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Pending">Pending</option>
        </select>
        <input type="date" className="border rounded-md p-2 bg-input text-foreground" placeholder="Filter by date joined" />
        <input type="text" className="border rounded-md p-2 flex-grow bg-input text-foreground" placeholder="Search by name or email" />
      </div>

      {/* Bulk Actions Panel */}
      <div className="w-full p-4 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6 flex items-center gap-4">
        <input type="checkbox" className="form-checkbox" />
        <span>Select All</span>
        <Button variant="outline" size="sm" className="bg-green-500/20 border-green-500 text-green-300 hover:bg-green-500/30 hover:text-green-200">
          Activate
        </Button>
        <Button variant="outline" size="sm" className="bg-yellow-500/20 border-yellow-500 text-yellow-300 hover:bg-yellow-500/30 hover:text-yellow-200">
          Suspend
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </div>

      {/* User Table */}
      <div className="w-full rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"></th>{/* Checkbox column */}
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Date Joined</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-transparent">
            {dummyUsers.map((user) => (
              <tr key={user.id} className="hover:bg-muted/50">
                <td className="px-6 py-4 whitespace-nowrap"><input type="checkbox" className="form-checkbox" /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' ? 'bg-green-500/20 text-green-300' :
                      user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-red-500/20 text-red-300'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">{user.dateJoined}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                   <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-white/10 border-white/20 hover:bg-white/20">Edit</Button>
                    
                    {user.status === 'Active' && <Button variant="outline" size="sm" className="bg-yellow-500/20 border-yellow-500 text-yellow-300 hover:bg-yellow-500/30 hover:text-yellow-200">Suspend</Button>}
                    
                    {user.status === 'Pending' && (
                      <>
                        <Button variant="outline" size="sm" className="bg-green-500/20 border-green-500 text-green-300 hover:bg-green-500/30 hover:text-green-200">Approve</Button>
                        <Button variant="destructive" size="sm">Reject</Button>
                      </>
                    )}
                    
                    {user.status === 'Suspended' && <Button variant="outline" size="sm" className="bg-green-500/20 border-green-500 text-green-300 hover:bg-green-500/30 hover:text-green-200">Activate</Button>}

                    <Button variant="destructive" size="sm">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls (Placeholder) */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">Showing 1 to {dummyUsers.length} of {dummyUsers.length} results</div>
        <div className="space-x-2">
          <button className="border rounded-md p-2 text-sm">Previous</button>
          <button className="border rounded-md p-2 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

