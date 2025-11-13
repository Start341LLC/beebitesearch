import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import ResultCard from '@/components/ResultCard';
import PageFooter from '@/components/PageFooter';

export default function InsurancePage() {
  const [, setLocation] = useLocation();

  const partners = [
    {
      name: 'Geico',
      url: 'www.geico.com',
      description: 'Save on auto insurance with 15 minutes or less. Get a free quote and discover why millions trust GEICO for car, home, and more.',
      affiliateLink: 'https://www.geico.com',
    },
    {
      name: 'Progressive',
      url: 'www.progressive.com',
      description: 'Compare insurance quotes and save. Bundle auto, home, and renters insurance for bigger discounts. Name Your Price® tool helps you find coverage that fits your budget.',
      affiliateLink: 'https://www.progressive.com',
    },
    {
      name: 'State Farm',
      url: 'www.statefarm.com',
      description: 'Get a free insurance quote from a trusted neighbor. Auto, home, life insurance and more with personalized service from local agents.',
      affiliateLink: 'https://www.statefarm.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader category="Insurance" onHomeClick={() => setLocation('/')} />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8 text-foreground" data-testid="text-page-title">
            Top Insurance Partners
          </h1>
          
          <div className="space-y-4">
            {partners.map((partner) => (
              <ResultCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </main>
      
      <PageFooter />
    </div>
  );
}
