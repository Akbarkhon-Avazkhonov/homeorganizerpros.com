import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Contact Us - HomeOrganizerPros',
  description: 'Get in touch with HomeOrganizerPros. Book a consultation or ask any questions about our services.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                  <p className="text-foreground/80 mb-6">
                    Ready to transform your space? Contact us today to schedule a consultation with one of our expert organizers.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <p className="text-foreground/70">+1 (832) 436-5948</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-foreground/70">hello@homeorganizerPros.com</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Address</h3>
                    <p className="text-foreground/70">231 Circle Drive</p>
                    <p className="text-foreground/70">Houston, Texas 77002</p>
                    <p className="text-foreground/70">United States</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Hours</h3>
                    <p className="text-foreground/70">Monday - Friday: 9am - 6pm</p>
                    <p className="text-foreground/70">Saturday: 10am - 4pm</p>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block font-bold text-foreground mb-2">Name</label>
                  <input type="text" className="w-full border-2 border-foreground rounded-sm p-3" placeholder="Your name" />
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-2">Email</label>
                  <input type="email" className="w-full border-2 border-foreground rounded-sm p-3" placeholder="Your email" />
                </div>
                <div>
                  <label className="block font-bold text-foreground mb-2">Message</label>
                  <textarea className="w-full border-2 border-foreground rounded-sm p-3 h-32" placeholder="Your message"></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-accent text-white font-bold rounded-sm hover:opacity-90">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
