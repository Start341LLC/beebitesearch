import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import ResultCard from '@/components/ResultCard';
import PageFooter from '@/components/PageFooter';

export default function RealEstatePage() {
  const [, setLocation] = useLocation();

  const partners = [
    {
      name: 'Zillow',
      url: 'www.zillow.com',
      description: 'Find your dream home with America\'s most trusted real estate marketplace. Browse millions of listings, get home value estimates, and connect with local agents.',
      affiliateLink: 'https://www.zillow.com',
    },
    {
      name: 'Rocket Mortgage',
      url: 'www.rocketmortgage.com',
      description: 'Get pre-approved for a mortgage in minutes. Compare rates, calculate payments, and apply online with America\'s largest mortgage lender.',
      affiliateLink: 'https://www.rocketmortgage.com',
    },
    {
      name: 'Realtor.com',
      url: 'www.realtor.com',
      description: 'Search homes for sale, rental properties, and find real estate agents in your area. Access the most accurate and up-to-date real estate listings.',
      affiliateLink: 'https://www.realtor.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader category="Real Estate" onHomeClick={() => setLocation('/')} />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8 text-foreground" data-testid="text-page-title">
            Top Real Estate Partners
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
