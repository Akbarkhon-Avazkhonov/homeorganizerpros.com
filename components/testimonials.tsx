'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    text: 'HomeOrganizerPros transformed our kitchen into a dream space. The system they created makes meal prep so much easier!',
    rating: 5,
    color: 'border-primary',
  },
  {
    name: 'James Chen',
    role: 'Busy Professional',
    text: 'I never thought my closet could be this organized and beautiful. Worth every penny. Highly recommend!',
    rating: 5,
    color: 'border-secondary',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Interior Designer',
    text: 'As a design professional, I appreciate their attention to detail and aesthetic sensibility. Truly exceptional work.',
    rating: 5,
    color: 'border-accent',
  },
  {
    name: 'Michael Torres',
    role: 'Entrepreneur',
    text: 'They organized our home office perfectly. The productivity boost has been incredible!',
    rating: 5,
    color: 'border-primary',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-accent">Homeowners</span>
          </h2>
          <p className="text-lg text-foreground/70">Join hundreds of satisfied customers</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-lg border-4 ${testimonial.color} transform hover:scale-105 transition-transform`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-secondary text-secondary"
                    />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-foreground font-medium mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
