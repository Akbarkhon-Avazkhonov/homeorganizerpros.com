import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'About Us - HomeOrganizerPros',
  description: 'Learn about HomeOrganizerPros and our mission to transform homes through expert organization.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">About HomeOrganizerPros</h1>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-bold text-primary">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed">
                  At HomeOrganizerPros, we believe that an organized home is a happy home. Our mission is to provide expert organizing solutions that transform chaotic spaces into beautifully organized sanctuaries.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With over a decade of experience, our team of professional organizers has helped thousands of families reclaim their spaces and simplify their lives.
                </p>

                <h2 className="font-serif text-2xl font-bold text-secondary pt-6">Why Choose Us</h2>
                <ul className="space-y-3">
                  {['Expert organizers', 'Customized solutions', 'Sustainable practices', 'Premium products', 'Lifetime support'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-4 border-foreground rounded-sm p-6 bg-white">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">By The Numbers</h3>
                  <div className="space-y-3">
                    <div><span className="text-3xl font-bold text-primary">2000+</span><p className="text-foreground/70">Projects Completed</p></div>
                    <div><span className="text-3xl font-bold text-secondary">15+</span><p className="text-foreground/70">Years Experience</p></div>
                    <div><span className="text-3xl font-bold text-accent">98%</span><p className="text-foreground/70">Customer Satisfaction</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
