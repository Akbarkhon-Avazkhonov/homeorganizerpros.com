import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - HomeOrganizerPros',
  description: 'Terms of Service for HomeOrganizerPros organizing services.',
}

export default function TermsPage() {
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
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on HomeOrganizerPros's
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
                <p>
                  The materials on HomeOrganizerPros's website are provided on an 'as is' basis. HomeOrganizerPros makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
                  or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
                <p>
                  In no event shall HomeOrganizerPros or its suppliers be liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
                  HomeOrganizerPros's website.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on HomeOrganizerPros's website could include technical, typographical, or photographic errors.
                  HomeOrganizerPros does not warrant that any of the materials on our website are accurate, complete, or current.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Links</h2>
                <p>
                  HomeOrganizerPros has not reviewed all of the sites linked to its website and is not responsible for the contents of
                  any such linked site. The inclusion of any link does not imply endorsement by HomeOrganizerPros of the site. Use of any
                  such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
                <p>
                  HomeOrganizerPros may revise these terms of service for our website at any time without notice. By using this website,
                  you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Texas, United States,
                  and you irrevocably submit to the exclusive jurisdiction of the courts located in Houston, Texas.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                  <br />
                  +1 (832) 436-5948
                  <br />
                  231 Circle Drive, Houston, Texas 77002
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
