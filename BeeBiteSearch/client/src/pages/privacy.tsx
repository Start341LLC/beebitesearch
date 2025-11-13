import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

export default function PrivacyPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader category="Privacy Policy" onHomeClick={() => setLocation('/')} />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto prose prose-sm">
          <h1 className="text-3xl font-display font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: November 12, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              BeeBite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Data</h3>
            <p>
              We do not collect, store, or process any personal information or user data. We do not require registration, accounts, or any form submission.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Analytics and Cookies</h3>
            <p>
              We use cookies and similar technologies (such as Google Analytics) to understand how visitors use our website. This helps us improve our service and user experience. These cookies may collect:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Pages you visit on our site</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
            <p>
              You can disable cookies in your browser settings, though this may affect your experience on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Affiliate Links</h2>
            <p>
              BeeBite contains affiliate links to third-party websites. When you click on these links, you will be redirected to external websites operated by our partners. We may receive compensation when you visit or make purchases through these links.
            </p>
            <p className="mt-4">
              Once you leave our website, the privacy policies and practices of those third-party sites will apply. We are not responsible for the privacy practices or content of external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p>The limited information we collect through analytics is used solely to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our website's content and functionality</li>
              <li>Monitor website performance</li>
              <li>Understand which services interest our visitors</li>
            </ul>
            <p>We do not sell, rent, or share this information with third parties except as required by law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p>
              We use Google Analytics to track website usage. Google Analytics uses cookies to collect information about how visitors use our site. For more information about how Google uses data, please visit{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google's Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your data:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right to Access:</strong> Request information about data we collect</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your data</li>
              <li><strong>Right to Opt-Out:</strong> Disable cookies through your browser settings</li>
              <li><strong>Right to Object:</strong> Object to processing of your data</li>
            </ul>
            <p>
              Since we do not collect or store personal data beyond anonymous analytics, most data rights requests can be fulfilled by clearing your browser cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">GDPR Compliance (EU Visitors)</h2>
            <p>
              If you are located in the European Economic Area (EEA), you have additional rights under the General Data Protection Regulation (GDPR). We process minimal data based on our legitimate interest in understanding website usage and improving our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">CCPA Compliance (California Residents)</h2>
            <p>
              California residents have rights under the California Consumer Privacy Act (CCPA). Since we do not sell personal information and collect only anonymous analytics data, most CCPA obligations do not apply to our operations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our website is not directed to children under 13 years of age. We do not knowingly collect information from children. If you believe a child has provided us with information, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The "Last Updated" date at the top of this page will reflect when changes were made. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
              <a href="mailto:support@start341.com" className="text-primary hover:underline">
                support@start341.com
              </a>
            </p>
          </section>
        </div>
      </main>
      
      <PageFooter />
    </div>
  );
}
