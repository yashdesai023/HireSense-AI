import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Register from '../register-login/register';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="container grid place-content-center gap-12 px-4 py-24 text-center md:py-32 lg:py-48">
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out backdrop-blur-sm">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Smarter Hiring with <br />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">AI Precision</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] font-montserratsans text-lg font-medium text-gray-400 md:text-xl">
          Find the right talent faster with AI-driven skill evaluations, intelligent recommendations, and data-backed hiring insights.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/register">
            <Button size="lg" className="bg-blue-600 text-white uppercase font-semibold hover:bg-blue-700">
              Get Started
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 uppercase font-semibold hover:text-white hover:bg-cyan-500/20 transition-all duration-300">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
