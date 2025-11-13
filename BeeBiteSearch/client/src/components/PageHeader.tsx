import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import beeMascot from '@assets/generated_images/Cute_friendly_bee_mascot_204bb5c9.png';

interface PageHeaderProps {
  category: string;
  onHomeClick?: () => void;
}

export default function PageHeader({ category, onHomeClick }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={beeMascot} 
            alt="BeeBite" 
            className="w-8 h-8"
            data-testid="img-bee-logo"
          />
          <div>
            <h2 className="font-display font-bold text-lg" data-testid="text-brand-header">
              BeeBite
            </h2>
            <p className="text-xs text-muted-foreground" data-testid="text-category">
              {category}
            </p>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          className="rounded-full gap-2"
          onClick={onHomeClick}
          data-testid="button-home"
        >
          <Home className="w-4 h-4" />
          Search Again
        </Button>
      </div>
    </header>
  );
}
