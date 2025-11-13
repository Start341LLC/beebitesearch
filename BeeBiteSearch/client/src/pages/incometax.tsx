import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import ResultCard from '@/components/ResultCard';
import PageFooter from '@/components/PageFooter';

export default function IncomeTaxPage() {
  const [, setLocation] = useLocation();

  const partners = [
    {
      name: 'TurboTax',
      url: 'www.turbotax.com',
      description: 'File your taxes with confidence. Get your maximum refund guaranteed with expert help and step-by-step guidance. Free and paid options available.',
      affiliateLink: 'https://www.turbotax.com',
    },
    {
      name: 'H&R Block',
      url: 'www.hrblock.com',
      description: 'America\'s tax leader for over 60 years. File online, with an advisor, or in-office. Get your biggest refund with our tax professionals.',
      affiliateLink: 'https://www.hrblock.com',
    },
    {
      name: 'TaxAct',
      url: 'www.taxact.com',
      description: 'Maximum refund, guaranteed. Accurate calculations and 100% free support. File federal and state returns with confidence at a great price.',
      affiliateLink: 'https://www.taxact.com',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader category="Income Tax" onHomeClick={() => setLocation('/')} />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-8 text-foreground" data-testid="text-page-title">
            Top Income Tax Partners
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
