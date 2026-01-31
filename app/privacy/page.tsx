import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - HomeOrganizerPros',
  description: 'Privacy Policy for HomeOrganizerPros. Learn how we protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/" className="text-primary font-bold hover:opacity-80">
                ← Back Home
              </Link>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p>
                  HomeOrganizerPros ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and otherwise process personal information in connection with our website and services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Contact us with inquiries or feedback</li>
                  <li>Request a consultation or booking</li>
                  <li>Subscribe to our newsletter or communications</li>
                  <li>Create an account or profile</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Provide and improve our services and website</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates, marketing communications, and promotional materials</li>
                  <li>Comply with legal obligations</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information with service providers
                  who assist us in operating our website and conducting our business, under strict confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings
                  through your browser preferences. Some features may not function properly if cookies are disabled.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including the right to access,
                  correct, or delete your data. To exercise these rights, please contact us using the information below.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these
                  external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
                <p>
                  Our website and services are not directed to individuals under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we learn we have collected personal information from a child under 13, we will
                  delete such information as quickly as possible.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Policy Changes</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements,
                  and other factors. Your continued use of our website constitutes your acceptance of the updated Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                  <br />
                  +1 (832) 436-5948
                  <br />
                  231 Circle Drive, Houston, Texas 77002
                  <br />
                  hello@homeorganizerPros.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
