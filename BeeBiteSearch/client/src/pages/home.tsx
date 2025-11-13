import { useLocation } from 'wouter';
import BeeHero from '@/components/BeeHero';
import PageFooter from '@/components/PageFooter';

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <BeeHero onNavigate={setLocation} />
      <PageFooter />
    </div>
  );
}
