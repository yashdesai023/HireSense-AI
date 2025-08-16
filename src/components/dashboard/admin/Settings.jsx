
'use client';
import React from 'react';

const Settings = () => {
  // Purpose: Component for managing system configurations.
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-foreground">System Settings</h1>

      {/* General Settings */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="platformName" className="block text-sm font-medium text-muted-foreground mb-1">Platform Name</label>
            <input
              type="text"
              id="platformName"
              className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
              defaultValue="HireSense AI"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Logo Upload</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-border">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-muted-foreground" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-muted-foreground">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="themePicker" className="block text-sm font-medium text-muted-foreground mb-1">Primary Color Theme</label>
            <input type="color" id="themePicker" className="w-full h-10 px-2 py-1 rounded-md bg-input border border-border focus:outline-none focus:ring-primary focus:border-primary" defaultValue="#0A84FF"/>
          </div>
          <div>
            <label htmlFor="defaultLanguage" className="block text-sm font-medium text-muted-foreground mb-1">Default Language</label>
            <select
              id="defaultLanguage"
              className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
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
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">User & Role Management Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="defaultRole" className="block text-sm font-medium text-muted-foreground mb-1">Default Role for New Users</label>
            <select
              id="defaultRole"
              className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
              defaultValue="Candidate"
            >
              <option value="Candidate">Candidate</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Permissions Table</label>
            <div className="bg-muted/50 p-4 rounded-md text-muted-foreground">
              <p>Placeholder for Permissions Table (Role-based permissions settings would go here)</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">Account Approval Rules</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-primary" name="approvalRules" value="auto" defaultChecked />
                <span className="ml-2 text-foreground">Automatic Approval</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio text-primary" name="approvalRules" value="manual" />
                <span className="ml-2 text-foreground">Manual Approval</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Notification Settings</h2>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Email notifications for Job Updates</span>
            <input type="checkbox" className="form-checkbox text-primary" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Email notifications for New Applicants</span>
            <input type="checkbox" className="form-checkbox text-primary" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Email notifications for System Alerts</span>
            <input type="checkbox" className="form-checkbox text-primary" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">SMS Alerts (if integrated)</span>
            <input type="checkbox" className="form-checkbox text-primary" disabled /> {/* Placeholder */}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Weekly Summary Email</span>
            <input type="checkbox" className="form-checkbox text-primary" />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground mb-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">Security Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">Password Policy</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="minLength" className="block text-xs font-medium text-muted-foreground mb-1">Minimum Length</label>
                <input
                  type="number"
                  id="minLength"
                  className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
                  defaultValue="8"
                />
              </div>
              <div>
                <label htmlFor="complexity" className="block text-xs font-medium text-muted-foreground mb-1">Complexity (e.g., require uppercase, number)</label>
                 <input
                  type="text"
                  id="complexity"
                  className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
                  defaultValue="Requires 1 uppercase, 1 number"
                  disabled
                /> {/* Placeholder for complexity rules */}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Enable Two-Factor Authentication (2FA)</span>
            <input type="checkbox" className="form-checkbox text-primary" />
          </div>
          <div>
            <label htmlFor="sessionTimeout" className="block text-sm font-medium text-muted-foreground mb-1">Session Timeout Duration (minutes)</label>
            <input
              type="number"
              id="sessionTimeout"
              className="w-full px-3 py-2 rounded-md bg-input text-foreground border border-border focus:outline-none focus:ring-primary focus:border-primary"
              defaultValue="60"
            />
          </div>
        </div>
      </div>

      {/* System Maintenance */}
      <div className="w-full p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
        <h2 className="text-xl font-semibold mb-4 text-foreground">System Maintenance</h2>
        <div className="space-y-4">
          <div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Backup Data Now</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">View System Logs (Last 7 Days)</button>
          </div>
          <div>
            <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-destructive">Clear Cache</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
