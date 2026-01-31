'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-lg border-4 border-foreground p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Schedule your free consultation today and discover how our expert organizers can help you create the perfect, organized home you've always wanted.
            </p>

            {/* Form */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-2.5 border-2 border-primary rounded-sm text-foreground font-medium placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-2.5 border-2 border-primary rounded-sm text-foreground font-medium placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-2.5 border-2 border-primary rounded-sm text-foreground font-medium placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                placeholder="Tell us about your organizing needs"
                rows={3}
                className="w-full px-4 py-2.5 border-2 border-primary rounded-sm text-foreground font-medium placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-primary text-white px-8 py-3 font-bold rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg">
              Book Your Free Consultation
              <ArrowRight size={20} />
            </button>

            <p className="text-sm mt-6 opacity-75">
              No obligation. We'll follow up within 24 hours with available times.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
