'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import HowItWorks from './how-it-works';
export default function Header() {
  const GlowLine = () => (
    <div className="absolute inset-x-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
  );

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#hero-about' },
  ];
  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
 <Button variant="ghost">Log In</Button>
 </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
      <GlowLine />
    </header>
  );
}
