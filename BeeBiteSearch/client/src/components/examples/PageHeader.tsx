import PageHeader from '../PageHeader';

export default function PageHeaderExample() {
  return <PageHeader category="Real Estate" onHomeClick={() => console.log('Home clicked')} />;
}
