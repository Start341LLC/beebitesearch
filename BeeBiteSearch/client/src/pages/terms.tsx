import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import PageFooter from '@/components/PageFooter';

export default function TermsPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader category="Terms of Service" onHomeClick={() => setLocation('/')} />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-4xl mx-auto prose prose-sm">
          <h1 className="text-3xl font-display font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last Updated: November 12, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using BeeBite.com (the "Website"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p>
              BeeBite is a directory website that provides information about various service providers in categories including real estate, insurance, and income tax preparation. We present curated recommendations to help visitors discover services that may meet their needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Affiliate Relationships</h2>
            <p>
              BeeBite participates in affiliate marketing programs. This means we may earn commissions when you click on links to third-party websites or make purchases through those links. These affiliate relationships do not influence the services we recommend, and we strive to present accurate, helpful information.
            </p>
            <p className="mt-4">
              <strong>Important:</strong> The prices you pay are not affected by our affiliate relationships. You pay the same price whether you access the service through our links or directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Websites</h2>
            <p>
              Our Website contains links to third-party websites that are not owned or controlled by BeeBite. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
            <p className="mt-4">
              By using our Website, you expressly release BeeBite from any and all liability arising from your use of any third-party website. We encourage you to read the terms and conditions and privacy policies of any third-party websites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Warranties or Guarantees</h2>
            <p>
              The information provided on BeeBite is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The accuracy, reliability, or completeness of information on our Website</li>
              <li>The quality, suitability, or availability of third-party services</li>
              <li>That our Website will be uninterrupted, secure, or error-free</li>
              <li>That any services recommended will meet your specific needs</li>
            </ul>
            <p>
              <strong>The Website is provided "as is" and "as available" without warranty of any kind.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, BeeBite shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use of or inability to use our Website</li>
              <li>Any conduct or content of third parties on third-party websites</li>
              <li>Any services or products obtained through third-party links</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to the Website or its systems</li>
              <li>Interfere with or disrupt the Website or servers</li>
              <li>Use any automated system to access the Website</li>
              <li>Collect or harvest any information from the Website</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p>
              All content on BeeBite, including text, graphics, logos, images, and software, is the property of BeeBite or its content suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="mt-4">
              You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content from our Website without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless BeeBite and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Website or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in the United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will indicate changes by updating the "Last Updated" date at the top of this page. Your continued use of the Website following any changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{' '}
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
