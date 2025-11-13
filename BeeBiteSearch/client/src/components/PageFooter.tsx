import beeMascot from '@assets/generated_images/Cute_friendly_bee_mascot_204bb5c9.png';

export default function PageFooter() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <img 
          src={beeMascot} 
          alt="BeeBite" 
          className="w-6 h-6 mx-auto mb-3 opacity-60"
          data-testid="img-bee-footer"
        />
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors" data-testid="link-home">
            Home
          </a>
          <a href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">
            Privacy
          </a>
          <a href="/terms" className="hover:text-foreground transition-colors" data-testid="link-terms">
            Terms
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-4" data-testid="text-copyright">
          © 2025 BeeBite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
