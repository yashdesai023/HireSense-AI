'use client';

import React from 'react';
import { Lightbulb } from 'lucide-react';

const recommendations = [
  "Introduce structured interview templates to reduce bias in the technical round.",
  "Post job ads on new channels (e.g., LinkedIn Groups, Niche Forums) to attract diverse talent.",
  "Consider AI-powered skill-based assessments to lower drop-off rates at the screening stage.",
];

const RecommendationsPanel = () => {
  return (
    <div className="w-full p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm border border-white/20 text-card-foreground">
      <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
      <ul className="space-y-3">
        {recommendations.map((rec, index) => (
          <li key={index} className="flex items-start">
            <Lightbulb className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{rec}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsPanel;
