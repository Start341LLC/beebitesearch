import ResultCard from '../ResultCard';

export default function ResultCardExample() {
  return (
    <div className="max-w-2xl p-4 bg-background">
      <ResultCard
        name="Zillow"
        url="www.zillow.com"
        description="Find your dream home with America's most trusted real estate marketplace. Browse millions of listings, get home value estimates, and connect with local agents."
        affiliateLink="https://www.zillow.com"
      />
      <ResultCard
        name="Rocket Mortgage"
        url="www.rocketmortgage.com"
        description="Get pre-approved for a mortgage in minutes. Compare rates, calculate payments, and apply online with America's largest mortgage lender."
        affiliateLink="https://www.rocketmortgage.com"
      />
    </div>
  );
}
