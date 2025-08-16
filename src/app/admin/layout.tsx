
'use client';
import React from 'react';
import Sidebar from '@/components/dashboard/admin/Sidebar';
import Navbar from '@/components/dashboard/admin/Navbar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
