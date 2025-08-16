"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";

const montserrat = Montserrat({ subsets: ["latin"] });

const HowItWorks: React.FC = () => {
  // Placeholder for Mini Explainer Video - Integrate video component here
  // <div className="w-full max-w-2xl mx-auto mt-12">{/* Video Player */}</div>

  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up in seconds using email or LinkedIn. Fill in your skills, experience, and preferred job roles.",
      icon: 'Icon1', // Placeholder icon
    },
    {
      title: "Upload or Parse Resume",
      description: "Upload your CV, and HireSense AI auto-extracts details using AI-powered resume parsing. Suggestions are given to improve your profile instantly.",
      icon: 'Icon2', // Placeholder icon
    },
    {
      title: "Skill Assessment & AI Evaluation",
      description: "Take tailored coding, aptitude, or domain-specific tests. AI instantly scores and generates a skill map.",
      icon: 'Icon3', // Placeholder icon
    },
    {
      title: "AI Job Matching",
      description: "Our AI engine recommends jobs that match your profile and skill level. Real-time filtering for role, salary, and location.",
      icon: 'Icon4', // Placeholder icon
    },
    {
      title: "Smart Interview & Offer Tracking",
      description: "Get automated interview invites. Track offers, negotiations, and joining dates in one dashboard.",
      icon: 'Icon5', // Placeholder icon
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Framer Motion for step transitions
  };

  return (
    <section id="how-it-works" className={`${montserrat.className} container grid place-content-center gap-12 px-4 py-24 text-center md:py-32 lg:py-48`}>
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          How <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">HireSense</span> AI Works
        </motion.h2>
        <motion.p
          className="mt-4 text-xl text-gray-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {/* Mini Explainer Video Placeholder */}
          {/* Step-by-Step Timeline Animation Placeholder - Can be a horizontal scroll or fade-in cards */}
          A flexible pricing model that scales with your hiring goals, whether you’re a growing startup or an established enterprise.
        </motion.p>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5" // Updated grid for 5 steps
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            // Apply glassmorphism style with subtle shadow and hover lift animation
            <motion.div
              key={index}
              className="rounded-lg bg-white/10 dark:bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center size-12 rounded-full bg-primary/20 text-primary-foreground font-bold text-xl mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
