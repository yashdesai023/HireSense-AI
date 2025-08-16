import React from 'react';
import Link from 'next/link'; // Assuming you might want the logo to be a link
import { Search, Bell, User } from 'lucide-react'; // Importing icons from lucide-react
import { Input } from '@/components/ui/input'; // Assuming you have a shadcn/ui Input component or similar
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assuming you have a shadcn/ui Avatar component or similar
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // Assuming you have shadcn/ui Dropdown Menu

const Navbar = () => {
  // Purpose: Top navigation bar for quick actions and profile menu
  return (
    <div className="sticky top-0 z-40 w-full bg-[#111827] text-white shadow-md h-16 flex items-center px-6">
      {/* Left Side: Logo and Project Title */}
      <div className="flex items-center space-x-2">
        {/* You might want to replace this with your actual Logo component */}
        <Link href="/dashboard/admin" className="flex items-center space-x-2 text-white">
          {/* Assuming you have a Logo component or just use text */}
          {/* <Logo /> */}
          <span className="font-bold text-xl">HireSense AI</span>
        </Link>
      </div>

      {/* Right Side: Search, Notifications, User Profile */}
      <div className="flex items-center space-x-4 ml-auto"> {/* ml-auto pushes this section to the right */}
        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notification Icon */}
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-300 cursor-pointer" />
          {/* Notification Badge Placeholder */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-[#111827] bg-red-500" />
        </div>

        {/* User Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer focus:outline-none">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" alt="User Avatar" /> {/* Replace with user avatar source */}
              <AvatarFallback>U</AvatarFallback> {/* Replace with user initials */}
            </Avatar>
            <span className="hidden md:block text-sm font-medium">Admin Name</span> {/* Replace with actual admin name */}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-gray-800 text-white border border-gray-700">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Optional: Quick Action Button (e.g., Add Job) */}
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
          + Add Job
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;