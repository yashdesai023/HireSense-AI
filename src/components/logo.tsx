import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <BrainCircuit className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold text-foreground font-headline font-white">HireSense AI</span>
    </div>
  );
};

export default Logo;
