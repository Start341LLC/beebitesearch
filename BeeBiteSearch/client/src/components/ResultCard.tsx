interface ResultCardProps {
  logo?: string;
  name: string;
  url: string;
  description: string;
  affiliateLink: string;
}

export default function ResultCard({ name, url, description, affiliateLink }: ResultCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Affiliate click:', affiliateLink);
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mb-6" data-testid={`card-result-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <a
        href={affiliateLink}
        onClick={handleClick}
        className="group block"
      >
        <h3 
          className="text-xl text-[#1a0dab] hover:underline cursor-pointer mb-1 font-normal"
          data-testid={`text-name-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {name}
        </h3>
      </a>
      <div className="flex items-center gap-1 mb-2">
        <cite 
          className="text-sm text-[#006621] not-italic font-normal"
          data-testid={`text-url-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {url}
        </cite>
      </div>
      <p 
        className="text-sm text-muted-foreground leading-relaxed"
        data-testid={`text-description-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {description}
      </p>
    </div>
  );
}
