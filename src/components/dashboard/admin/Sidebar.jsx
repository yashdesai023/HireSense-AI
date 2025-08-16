
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, Briefcase, Brain, Settings, LogOut } from 'lucide-react'; // Importing Lucide Icons

const Sidebar = () => {
  // Purpose: Admin Dashboard Navigation Menu
  const pathname = usePathname();

  // Admin Menu Items
  const menuItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'Job Management', href: '/admin/jobs', icon: Briefcase },
    { name: 'AI Insights', href: '/admin/ai-insights', icon: Brain },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-card text-card-foreground flex-col h-screen fixed top-0 left-0 hidden lg:flex border-r border-border">
      {/* Logo or Icon Placeholder */}
      <div className="p-4 border-b border-border flex items-center justify-center h-16">
        {/* Replace with your actual logo or icon component */}
        <span className="text-2xl font-bold text-white animate-pulse-glow">Admin</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col p-4 flex-grow">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <div
              className={`flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 cursor-pointer ${
                pathname === item.href
                  ? 'border-2 border-cyan-400 bg-transparent text-cyan-400'
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout Button/Link */}
      <div className="p-4 border-t border-border">
        <Link href="/login"> {/* Adjust the logout path as needed */}
          <div className="flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 hover:bg-destructive hover:text-destructive-foreground cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
