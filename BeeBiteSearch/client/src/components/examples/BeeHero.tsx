import BeeHero from '../BeeHero';

export default function BeeHeroExample() {
  return <BeeHero onNavigate={(path) => console.log('Navigate to:', path)} />;
}
