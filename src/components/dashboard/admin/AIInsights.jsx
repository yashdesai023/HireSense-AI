import React from 'react';
import { BrainCircuit, TrendingUp, Users, Check, BarChart, AlertTriangle, Lightbulb } from 'lucide-react';
import InsightCard from './ai-insights/InsightCard';
import TrendChart from './ai-insights/TrendChart';
import PipelineChart from './ai-insights/PipelineChart';
import BiasDetectionPanel from './ai-insights/BiasDetectionPanel';
import RecommendationsPanel from './ai-insights/RecommendationsPanel';
import ConfidenceGauge from './ai-insights/ConfidenceGauge';

const AIInsights = () => {
  const insights = [
    {
      title: 'Predicted Hiring Success',
      value: '82%',
      description: 'Based on candidate profiles and role alignment.',
      icon: <Check className="text-green-400" />,
    },
    {
      title: 'Candidate Drop-off Rate',
      value: '12%',
      description: 'Most common at online assessment stage.',
      icon: <TrendingUp className="text-red-400" />,
    },
    {
      title: 'Diversity Index',
      value: 'Balanced',
      description: '45% Women, 50% Men, 5% Non-binary.',
      icon: <Users className="text-blue-400" />,
    },
    {
      title: 'Skill Gaps Identified',
      value: 'Low',
      description: 'Cloud Computing, Data Engineering trending low.',
      icon: <AlertTriangle className="text-yellow-400" />,
    },
  ];

  return (
    <div className="p-6 text-foreground min-h-screen">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <BrainCircuit className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">AI Insights Dashboard</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform raw data into smarter hiring decisions with AI-powered intelligence.
        </p>
      </header>

      {/* Key Insight Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </section>

      {/* Trend Analytics & Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3">
          <TrendChart />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
            <PipelineChart />
            <ConfidenceGauge />
        </div>
      </section>

      {/* Bias Detection & Recommendations */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BiasDetectionPanel />
        <RecommendationsPanel />
      </section>
    </div>
  );
};

export default AIInsights;
