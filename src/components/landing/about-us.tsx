import React from 'react';
import ourStoryImage from '../../images/landing-page/our-story.png';
import humanAiImage from '../../images/landing-page/human-ai.png';

export default function AboutUs() {
 return (
    <>
      {/* 1️⃣ Hero Tagline + Mission */}
      <section id="hero-about" className="relative w-full py-16 md:py-24 lg:py-32 text-center">
        {/* Comment: Animated AI brain mesh background with slow pulsing glow */}
        <div className="container space-y-6">
          {/* Comment: Tagline with typewriter animation */}
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Empowering Smarter Hiring Decisions with AI Precision
          </h2>
          {/* Comment: Mission statement fades in below */}
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl animate-in fade-in duration-1000">
            HireSense AI is a next-generation hiring platform that uses advanced AI and machine learning to match the right candidates to the right jobs — faster, fairer, and smarter.
            Designed for recruiters and job seekers alike, our beta version offers full access to AI-driven skill assessments, automated candidate ranking, and instant hiring insights — all for free.
          </p>
        </div>
        {/* Comment: Subtle parallax effect when scrolling */}
      </section>

      {/* 2️⃣ Our Story */}
      <section id="our-story" className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-24 lg:py-32">
        {/* Left Side Visual */}
        <div className="flex justify-center items-center">
          {/* Placeholder: Photo/illustration of a recruiter using HireSense AI */}
          {/* Comment: Optional: Image morph animation from "pile of resumes" → "organized shortlist" */}
          {/* Replace the div below with your image tag */}
          <img
            src={ourStoryImage.src} // Use the src property of the imported image
            alt="Recruiter using HireSense AI"
            className="w-full h-64 object-cover rounded-lg" // Add appropriate styling
          />
        </div>
        {/* Right Side Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">Our Story</h3>
          {/* Short narrative paragraph */}
          <p className="text-lg text-muted-foreground">
            Founded with the belief that hiring should be efficient, unbiased, and centered around finding the best fit for both companies and candidates. We saw the challenges in traditional processes and built HireSense AI to transform them.
          </p>
          {/* Button: "See How It Works" */}
          {/* Comment: Button should scroll to the features section */}
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold">
            See How It Works
          </button>
        </div>
      </section>

      {/* 3️⃣ Vision & Values */}
      <section id="vision-values" className="container py-16 md:py-24 lg:py-32">
        <h3 className="text-center text-2xl font-bold tracking-tight mb-8">Vision & Values</h3>
        {/* Representation: 4 cards in a horizontal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value Card 1 */}
          {/* Comment: Hover effect: The card glows and expands slightly with a background illustration */}
          <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
            {/* Placeholder: Minimal icon */}
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">T</div>
            <h4 className="text-lg font-semibold">Transparency</h4>
            <p className="text-muted-foreground text-sm">Open processes, clear feedback.</p>
          </div>
          {/* Value Card 2 */}
          <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
            {/* Placeholder: Minimal icon */}
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">S</div>
            <h4 className="text-lg font-semibold">Speed</h4>
            <p className="text-muted-foreground text-sm">Accelerated hiring cycles.</p>
          </div>
          {/* Value Card 3 */}
          <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
            {/* Placeholder: Minimal icon */}
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl">F</div>
            <h4 className="text-lg font-semibold">Fairness</h4>
            <p className="text-muted-foreground text-sm">Bias reduction in assessments.</p>
          </div>
          {/* Value Card 4 */}
          <div className="flex flex-col items-center text-center space-y-2 p-6 border rounded-lg">
            {/* Placeholder: Minimal icon */}
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold text-xl">A</div>
            <h4 className="text-lg font-semibold">Accuracy</h4>
            <p className="text-muted-foreground text-sm">Precise matching of skills.</p>
          </div>
        </div>
      </section>

      {/* 4️⃣ Key Statistics */}
      <section id="key-statistics" className="relative py-16 md:py-24 lg:py-32 text-center overflow-hidden">
        {/* Comment: Background: Abstract AI circuit lines, scrolling slowly */}
        <div className="container space-y-8">
          <h3 className="text-2xl font-bold tracking-tight">Key Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Placeholder: Animated counter */}
              <div className="text-4xl font-bold">3X</div>
              <p className="text-muted-foreground">Faster Hiring</p>
              {/* Comment: Small line-chart / progress bar animation */}
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Placeholder: Animated counter */}
              <div className="text-4xl font-bold">95%</div>
              <p className="text-muted-foreground">Candidate Satisfaction</p>
              {/* Comment: Small line-chart / progress bar animation */}
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Placeholder: Animated counter */}
              <div className="text-4xl font-bold">85%</div>
              <p className="text-muted-foreground">Bias Reduction</p>
              {/* Comment: Small line-chart / progress bar animation */}
            </div>
            {/* Stat 4 */}
            <div className="flex flex-col items-center space-y-2">
              {/* Placeholder: Animated counter */}
              <div className="text-4xl font-bold">50+</div>
              <p className="text-muted-foreground">Integrations</p>
              {/* Comment: Small line-chart / progress bar animation */}
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Human + AI Advantage */}
      <section id="human-ai" className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-24 lg:py-32">
        {/* Left Side Illustration */}
        <div className="flex justify-center items-center">
          {/* Placeholder: AI brain merging with a human silhouette */}
          {/* <div className="w-full h-64 bg-purple-200 flex items-center justify-center rounded-lg">
            <p className="text-purple-700">Placeholder Illustration</p>
          </div> */}
 <img
 src={humanAiImage.src} // Use the src property of the imported image
 alt="AI brain merging with human silhouette"
 className="w-full h-64 object-cover rounded-lg" // Add appropriate styling
 />
        </div>
        {/* Right Side Text Block */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tight">The Human + AI Advantage</h3>
          <p className="text-lg text-muted-foreground">
            HireSense AI enhances human expertise, not replaces it. Our platform empowers recruiters with intelligent insights while keeping them in control of the final decision, creating a powerful synergy.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder for icons */}
            {/* Comment: Hover on each icon → shows a short 1-line tooltip */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">I</div>
              <p className="text-sm text-muted-foreground">Speed</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">I</div>
              <p className="text-sm text-muted-foreground">Accuracy</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">I</div>
              <p className="text-sm text-muted-foreground">Cultural Fit</p>
            </div>
          </div>
        </div>
      </section>
    </>
 );
}
 