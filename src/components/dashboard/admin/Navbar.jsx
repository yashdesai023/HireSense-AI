
'use client';
import React from 'react';
import Link from 'next/link';
import { Search, Bell, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 w-full bg-background/80 text-foreground shadow-md backdrop-blur-lg h-16 flex items-center px-6">
      {/* Left Side: Logo and Project Title */}
      <div className="flex items-center space-x-2">
        <Link href="/admin" className="flex items-center space-x-2 text-foreground">
          <span className="font-bold text-xl">HireSense AI</span>
        </Link>
      </div>

      {/* Right Side: Search, Notifications, User Profile */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-muted-foreground h-5 w-5" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-muted text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <Bell className="h-6 w-6 text-muted-foreground cursor-pointer" />
          {/* Notification Badge Placeholder */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-background bg-red-500" />
        </div>

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer focus:outline-none">
            <Avatar>
              <AvatarImage src="https://placehold.co/40x40.png" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <span className="hidden md:block text-sm font-medium">Admin Name</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-background text-foreground border-border">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
