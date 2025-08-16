
'use client';
import React from 'react';

const Settings = () => {
  // Purpose: Component for managing system configurations.
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">System Settings</h1>

      {/* General Settings */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="platformName" className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label>
            <input
              type="text"
              id="platformName"
              className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              defaultValue="HireSense AI"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Logo Upload</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="themePicker" className="block text-sm font-medium text-gray-700 mb-1">Primary Color Theme</label>
            <input type="color" id="themePicker" className="w-full h-10 px-2 py-1 rounded-md bg-gray-50 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue="#00D4FF"/>
          </div>
          <div>
            <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
            <select
              id="defaultLanguage"
              className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              defaultValue="English"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>

      {/* User & Role Management Settings */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">User & Role Management Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="defaultRole" className="block text-sm font-medium text-gray-700 mb-1">Default Role for New Users</label>
            <select
              id="defaultRole"
              className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              defaultValue="Candidate"
            >
              <option value="Candidate">Candidate</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Permissions Table</label>
            <div className="bg-gray-100 p-4 rounded-md text-gray-500">
              <p>Placeholder for Permissions Table (Role-based permissions settings would go here)</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Approval Rules</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-500" name="approvalRules" value="auto" defaultChecked />
                <span className="ml-2 text-gray-700">Automatic Approval</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-blue-500" name="approvalRules" value="manual" />
                <span className="ml-2 text-gray-700">Manual Approval</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Notification Settings</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email notifications for Job Updates</span>
            <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email notifications for New Applicants</span>
            <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Email notifications for System Alerts</span>
            <input type="checkbox" className="form-checkbox text-blue-500" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">SMS Alerts (if integrated)</span>
            <input type="checkbox" className="form-checkbox text-blue-500" disabled /> {/* Placeholder */}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Weekly Summary Email</span>
            <input type="checkbox" className="form-checkbox text-blue-500" />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Security Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password Policy</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="minLength" className="block text-xs font-medium text-gray-500 mb-1">Minimum Length</label>
                <input
                  type="number"
                  id="minLength"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="8"
                />
              </div>
              <div>
                <label htmlFor="complexity" className="block text-xs font-medium text-gray-500 mb-1">Complexity (e.g., require uppercase, number)</label>
                 <input
                  type="text"
                  id="complexity"
                  className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue="Requires 1 uppercase, 1 number"
                  disabled
                /> {/* Placeholder for complexity rules */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Enable Two-Factor Authentication (2FA)</span>
            <input type="checkbox" className="form-checkbox text-blue-500" />
          </div>
          <div>
            <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700 mb-1">Session Timeout Duration (minutes)</label>
            <input
              type="number"
              id="sessionTimeout"
              className="w-full px-3 py-2 rounded-md bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              defaultValue="60"
            />
          </div>
        </div>
      </div>

      {/* System Maintenance */}
      <div className="w-full p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white">
        <h2 className="text-xl font-semibold mb-4 text-white">System Maintenance</h2>
        <div className="space-y-4">
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Backup Data Now</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">View System Logs (Last 7 Days)</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Clear Cache</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
