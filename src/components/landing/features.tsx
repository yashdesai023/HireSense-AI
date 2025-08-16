"use client";

import { useEffect, useState } from "react";
import { Shield, BarChart3, CalendarDays, Scale, FileText, Network } from "lucide-react";

type Feature = {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: JSX.Element;
  animation?: string; // placeholder description for now
  punchline: string;
};

const features: Feature[] = [
  {
    id: "resume-screening",
    title: "AI-Powered Resume Parsing",
    shortDescription: "Parse Resumes in Seconds",
    detailedDescription:
      "HireSense AI’s intelligent parser extracts key information from resumes—skills, education, work history, and achievements—with 95%+ accuracy. It understands multiple formats (PDF, DOCX, TXT) and even multi-language resumes, saving recruiters hours of manual screening. Our NLP engine uses contextual understanding, meaning it knows that “Java” is a programming language, not coffee. Supports bulk uploads for high-volume hiring and integrates directly into your job pipeline.",
    icon: <FileText className="h-12 w-12 text-primary" />, // Assuming FileText is appropriate for parsing
    animation: "Animation: Document icon morphing into a structured database icon.",
    punchline: "Parse Resumes in Seconds",
  },
  {
    id: "smart-ranking",
    title: "Smart Candidate Ranking",
    shortDescription: "The Right Fit, Instantly",
    detailedDescription:
      "Our AI model scores and ranks candidates based on job requirements, cultural fit, and performance predictions. Recruiters see a priority list so they can focus on the top 10% best-fit candidates immediately. The ranking model adapts over time using feedback loops, improving accuracy with every hire. Supports customizable ranking weights—e.g., prioritize skills over experience, or education over location—depending on the role.",
    icon: <BarChart3 className="h-12 w-12 text-primary" />, // Changed to BarChart3 for ranking/scoring
    animation: "Animation: Ranking visualization.", // Placeholder, update as needed
    punchline: "The Right Fit, Instantly",
  },
  {
    id: "skill-assessments",
    title: "Automated Skill Assessments",
    shortDescription: "Test Skills, Not Luck",
    detailedDescription:
      "Built-in technical and aptitude assessments designed for over 50+ job domains. Candidates can take coding challenges, quizzes, or real-world scenario tests directly within the platform. Results are instantly scored, with breakdowns by skill type, difficulty, and time taken. Includes AI-generated adaptive testing, which adjusts question difficulty in real-time based on candidate performance.",
    icon: <Scale className="h-12 w-12 text-primary" />, // Assuming Scale is appropriate for assessments
    animation: "Animation: Assessment completion.", // Placeholder, update as needed
    punchline: "Test Skills, Not Luck",
  },
  {
    id: "video-interview-ai",
    title: "Video Interview AI Insights",
    shortDescription: "Beyond the Words",
    detailedDescription:
      "Integrated video interview platform with AI-powered sentiment analysis, speech-to-text transcription, and facial expression tracking. It detects **confidence, communication clarity, and emotional tone, helping interviewers make data-backed hiring decisions. Includes bias detection alerts, helping recruiters maintain fairness and inclusivity.",
    icon: <CalendarDays className="h-12 w-12 text-primary" />, // Assuming CalendarDays might still fit or needs a different video icon
    animation: "Animation: Video analysis.", // Placeholder, update as needed
    punchline: "Beyond the Words",
  },
  {
    id: "hiring-dashboard",
    title: "End-to-End Hiring Dashboard",
    shortDescription: "Your Command Center",
    detailedDescription:
      "A single unified dashboard to manage every step—posting jobs, shortlisting candidates, scheduling interviews, sending offers, and tracking hiring metrics. Fully role-based** so recruiters, managers, and admins see the tools they need. Real-time analytics on time-to-hire, offer acceptance rates, and source effectiveness.",
    icon: <Network className="h-12 w-12 text-primary" />, // Assuming Network is appropriate for a central dashboard
    animation: "Animation: Dashboard view.", // Placeholder, update as needed
    punchline: "Your Command Center",
  },
];

export default function Features() {
  const [isClient, setIsClient] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || isPaused) return;
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
        }, [isClient, isPaused]);

  return (
    <section id="features" className="container space-y-12 py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          A Smarter Way to Hire
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Discover the powerful features that make HireSense AI the ultimate recruitment tool.
        </p>
      </div>

      {isClient ? (
        <div
          className="relative w-full mx-auto max-w-4xl shadow-lg rounded-lg overflow-hidden text-white glassmorphism"
          style={{ minHeight: "450px"}}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="HireSense AI features carousel"
        >
          {/* Slides wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${features.length * 100}%`,
              transform: `translateX(-${currentFeatureIndex * (100 / features.length)}%)`,
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full flex-shrink-0 p-8 flex flex-col items-center text-center backdrop-filter backdrop-blur-lg bg-white/5/20"
                style={{ width: `${100 / features.length}%` }}
                role="group"
                aria-roledescription="slide"
                aria-label={feature.title}
              >
                <div className="mb-6 h-16 w-16 flex items-center justify-center">{feature.icon}</div>

                {/* Placeholder area for future Lottie/GIF */}
                {/* <div className="mb-6 h-32 w-32 flex items-center justify-center">
                  <Lottie animationData={...} loop />
                </div> */}

                <h3 className="font-headline text-2xl font-bold text-[#00F5A0] mb-2">{feature.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{feature.punchline}</p>
                <p className="text-base text-gray-300 mb-6">{feature.detailedDescription}</p>
              </div>
            ))}
          </div>

          {/* Dots / progress */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {features.map((_, index) => {
              const active = index === currentFeatureIndex;
              return (
                <button
                  key={index}
                  className={`h-2 w-6 rounded-full transition-all ${
                    active ? "bg-primary w-8" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={active}
                  onClick={() => setCurrentFeatureIndex(index)}
                />
              );
            })}
          </div>

          {/* Optional arrows (uncomment if needed) */}
          {/* <button
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-md"
            onClick={() =>
              setCurrentFeatureIndex((prev) => (prev - 1 + features.length) % features.length)
            }
            aria-label="Previous feature"
          >
            ‹
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-md"
            onClick={() => setCurrentFeatureIndex((prev) => (prev + 1) % features.length)}
            aria-label="Next feature"
          >
            ›
          </button> */}
        </div>
      ) : (
        <div className="relative h-[450px] w-full flex items-center justify-center text-muted-foreground">
          Loading features...
        </div>
      )}
    </section>
  );
}
