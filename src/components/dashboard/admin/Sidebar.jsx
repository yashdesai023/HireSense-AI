import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, Briefcase, Brain, Settings, LogOut } from 'lucide-react'; // Importing Lucide Icons

const Sidebar = () => {
  // Purpose: Admin Dashboard Navigation Menu

  // Admin Menu Items
  const menuItems = [
    { name: 'Overview', href: '/dashboard/admin', icon: LayoutDashboard },
    { name: 'User Management', href: '/dashboard/admin/users', icon: Users },
    { name: 'Job Management', href: '/dashboard/admin/jobs', icon: Briefcase },
    { name: 'AI Insights', href: '/dashboard/admin/ai-insights', icon: Brain },
    { name: 'Settings', href: '/dashboard/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-[220px] bg-gradient-to-b from-[#1f2937] to-[#111827] text-white flex flex-col h-screen fixed top-0 left-0">
      {/* Logo or Icon Placeholder */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-center h-16">
        {/* Replace with your actual logo or icon component */}
        <span className="text-2xl font-bold">Admin</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 flex-grow">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div className="flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 hover:bg-[#3b82f6] hover:text-white cursor-pointer">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout Button/Link */}
      <div className="p-4 border-t border-gray-700">
        <Link href="/logout"> {/* Adjust the logout path as needed */}
          <div className="flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 hover:bg-red-600 hover:text-white cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;