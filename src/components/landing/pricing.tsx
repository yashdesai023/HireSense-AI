import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="container space-y-12 py-16 sm:py-24 lg:py-32">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
 Simple, Transparent Pricing — Tailored to Your Hiring Needs
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
 A flexible pricing model that scales with your hiring goals, whether you’re a growing startup or an established enterprise.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
 {/* Starter Plan */}
 <Card className="flex flex-col p-6 bg-background/80 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
 <CardHeader className="text-center pb-4">
 <CardTitle className="font-headline text-2xl font-bold">Starter Plan</CardTitle>
 <p className="text-lg text-muted-foreground mt-2">₹0 <span className="text-sm">/ month</span></p>
 </CardHeader>
 <CardContent className="flex-grow flex flex-col justify-between space-y-6">
 <div>
 <p className="text-center text-sm text-muted-foreground mb-4">Best for: Individuals & small teams exploring AI hiring tools</p>
 <ul className="space-y-3 text-sm text-muted-foreground">
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> 1 active job posting
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> 50 resume parses/month
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Basic AI skill assessment tools
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Candidate profile storage (up to 100 profiles)
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Email notifications for applications
 </li>
 </ul>
 </div>
 <Button size="lg" className="w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">Get Started for Free</Button>
 </CardContent>
 </Card>

 {/* Professional Plan */}
 <Card className="flex flex-col p-6 bg-background/80 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
 <Badge className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 animate-pulse">Most Popular</Badge>
 <CardHeader className="text-center pb-4">
 <CardTitle className="font-headline text-2xl font-bold">Professional Plan</CardTitle>
 <p className="text-lg text-muted-foreground mt-2">₹2,499 <span className="text-sm">/ month</span></p>
 </CardHeader>
 <CardContent className="flex-grow flex flex-col justify-between space-y-6">
 <div>
 <p className="text-center text-sm text-muted-foreground mb-4">Best for: SMEs with regular hiring requirements</p>
 <ul className="space-y-3 text-sm text-muted-foreground">
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> 10 active job postings
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> 500 resume parses/month
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Advanced AI candidate matching
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Video interview scheduling
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Skill assessment reports with AI scoring
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Candidate profile storage (up to 1,000 profiles)
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Email & SMS notifications
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Role-based access for recruiters
 </li>
 <li className="flex items-center font-semibold text-primary">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Priority email support
 </li>
 </ul>
 </div>
 <Button size="lg" className="w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">Choose Professional</Button>
 </CardContent>
 </Card>

 {/* Enterprise Plan */}
 <Card className="flex flex-col p-6 bg-background/80 backdrop-blur-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
 <CardHeader className="text-center pb-4">
 <CardTitle className="font-headline text-2xl font-bold">Enterprise Plan</CardTitle>
 <p className="text-lg text-muted-foreground mt-2">Custom</p>
 </CardHeader>
 <CardContent className="flex-grow flex flex-col justify-between space-y-6">
 <div>
 <p className="text-center text-sm text-muted-foreground mb-4">Best for: Large organizations & staffing agencies</p>
 <ul className="space-y-3 text-sm text-muted-foreground">
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Unlimited job postings
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Unlimited resume parsing
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Advanced AI insights & predictive hiring analytics
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Dedicated account manager
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> API integration with ATS/HRMS
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Multi-location hiring support
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Role-based admin & recruiter dashboards
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> SLA-backed uptime guarantee
 </li>
 <li className="flex items-center">
 <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Onboarding & training support
 </li>
 </ul>
 </div>
 <Button size="lg" variant="outline" className="w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">Contact Sales</Button>
 </CardContent>
 </Card>
      </div>

      {/* Extra Features Section */}
 <div className="mt-16 text-center space-y-6">
 <h3 className="font-headline text-2xl font-bold tracking-tight">Extra Features Included in All Plans</h3>
 <ul className="grid grid-cols-1 gap-4 text-muted-foreground md:grid-cols-2 lg:grid-cols-4">
 <li className="flex items-center justify-center text-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> AI Resume Parsing</li>
 <li className="flex items-center justify-center text-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Skill Gap Analysis</li>
 <li className="flex items-center justify-center text-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Diversity & Inclusion Insights</li>
 <li className="flex items-center justify-center text-center"><CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Data Security</li>
 </ul>
      </div>
    </section>
  );
}