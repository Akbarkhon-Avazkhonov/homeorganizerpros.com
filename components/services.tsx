'use client'

import { Package, Home, Zap, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Kitchen Organization',
    description: 'From pantries to cabinets, we create systems that make cooking effortless and enjoyable.',
    icon: Package,
    color: 'bg-primary',
    textColor: 'text-white',
    href: '/product',
  },
  {
    title: 'Closet Design',
    description: 'Custom closet solutions that showcase your style while maximizing every inch of space.',
    icon: Home,
    color: 'bg-secondary',
    textColor: 'text-charcoal',
    href: '/product/hanging-systems',
  },
  {
    title: 'Garage Solutions',
    description: 'Transform chaotic garages into functional spaces with smart storage and accessibility.',
    icon: Zap,
    color: 'bg-accent',
    textColor: 'text-white',
    href: '/product/storage-bins',
  },
  {
    title: 'Full Home Organizing',
    description: 'Complete home transformation that flows seamlessly from room to room.',
    icon: Users,
    color: 'bg-primary',
    textColor: 'text-white',
    href: '/about',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Specialized organizing solutions tailored to every space in your home
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div
                key={idx}
                className={`${service.color} ${service.textColor} p-6 rounded-lg border-4 border-foreground transform hover:scale-105 transition-transform`}
              >
                <div className="mb-4">
                  <IconComponent size={40} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{service.description}</p>
                <Link href={service.href} className="mt-4 inline-block px-4 py-2 bg-white/20 hover:bg-white/30 rounded font-bold text-sm transition-colors">
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
