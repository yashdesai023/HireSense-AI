
import Navbar from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Link from 'next/link';
import Cta from '@/components/landing/cta';
import HowItWorks from '@/components/landing/how-it-works';
import AboutUs from '@/components/landing/about-us';
import Pricing from '@/components/landing/pricing';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground dark-theme"> {/* Added dark-theme class */}

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <AboutUs />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
