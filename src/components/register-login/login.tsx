"use client";

import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '@/animations/register-animation.json';
import { BrainCircuit } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }

    console.log({
      email,
      password,
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-black to-gray-900 relative">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-black via-slate-900 to-blue-900/20"
        style={{
          filter: 'blur(10px)',
          opacity: 0.8,
        }}
       />

      {/* Left Side (Visual & Branding Section) */}
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center p-8 relative z-10">
        {/* Logo + Project Title */}
        <div className="flex items-center mb-8">
          <BrainCircuit className="h-7 w-7 text-primary" />
          <h1 className="text-3xl font-bold font-headline">HireSense AI</h1>
        </div>

        {/* Intro Content */}
        <div className="text-center mb-8 max-w-sm">
          <p className="text-xl font-headline mb-4">Welcome Back.</p>
          <p className="text-base text-gray-300 font-code">
            Log in to continue empowering your recruitment process with AI precision.
          </p>
        </div>

        {/* Animated Element */}
        <div className="mb-8">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>

        {/* Tagline */}
        <p className="text-sm text-center text-gray-400 font-code">
          Empowering Smarter Hiring Decisions with AI Precision
        </p>
      </div>

      {/* Right Side (Form Section) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md p-8 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-opacity-20 border-white text-white">
          <h2 className="text-2xl font-poppins font-bold text-center mb-6">
            Login to Your HireSense AI Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-inter font-medium text-gray-200"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-inter text-white bg-white bg-opacity-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-inter font-medium text-gray-200"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-inter text-white bg-white bg-opacity-10 placeholder-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-shadow"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm font-inter text-gray-200">
            Don't have an account?{" "}
            <a
              href="/register" 
              className="font-medium text-primary hover:underline"
            >
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
