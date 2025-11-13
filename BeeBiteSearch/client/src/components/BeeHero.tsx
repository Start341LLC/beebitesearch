import beeMascot from '@assets/generated_images/Cute_friendly_bee_mascot_204bb5c9.png';
import { ChevronRight } from 'lucide-react';

interface BeeHeroProps {
  onNavigate?: (path: string) => void;
}

export default function BeeHero({ onNavigate }: BeeHeroProps) {
  const verticals = [
    { name: 'Real Estate', path: '/realestate', description: 'Find homes, mortgages, and real estate services' },
    { name: 'Insurance', path: '/insurance', description: 'Compare auto, home, and life insurance quotes' },
    { name: 'Income Tax', path: '/incometax', description: 'File taxes and maximize your refund' },
  ];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
      <img 
        src={beeMascot} 
        alt="BeeBite Mascot" 
        className="w-32 h-32 md:w-40 md:h-40 mb-6"
        data-testid="img-bee-mascot"
      />
      
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3 text-center" data-testid="text-brand-name">
        BeeBite
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-center font-medium" data-testid="text-tagline">
        Sweet Finds for Smart Shoppers
      </p>
      
      <div className="w-full max-w-2xl space-y-2">
        {verticals.map((vertical) => (
          <button
            key={vertical.path}
            onClick={() => onNavigate?.(vertical.path)}
            className="w-full text-left p-4 rounded-lg hover-elevate active-elevate-2 transition-all group"
            data-testid={`button-vertical-${vertical.name.toLowerCase().replace(' ', '-')}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {vertical.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {vertical.description}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
