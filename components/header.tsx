'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-4 h-6 bg-primary rounded-sm"></div>
              <div className="w-4 h-6 bg-secondary rounded-sm"></div>
              <div className="w-4 h-6 bg-accent rounded-sm"></div>
            </div>
            <span className="font-serif text-2xl font-bold text-foreground hidden sm:inline">
              HomeOrganizerPros
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavBlock label="Product" href="/product" bgColor="bg-primary" textColor="text-white" />
            <NavBlock label="About" href="/about" bgColor="bg-secondary" textColor="text-charcoal" />
            <NavBlock label="Contact" href="/contact" bgColor="bg-accent" textColor="text-white" />
            <NavBlock label="Reviews" href="/reviews" bgColor="bg-primary" textColor="text-white" />
          </div>

          {/* CTA Button */}
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <MobileNavBlock label="Product" href="/product" bgColor="bg-primary" textColor="text-white" />
            <MobileNavBlock label="About" href="/about" bgColor="bg-secondary" textColor="text-charcoal" />
            <MobileNavBlock label="Contact" href="/contact" bgColor="bg-accent" textColor="text-white" />
            <MobileNavBlock label="Reviews" href="/reviews" bgColor="bg-primary" textColor="text-white" />
            <button className="w-full px-4 py-2 bg-accent text-white font-bold rounded-sm hover:bg-pink transition-colors">
              Book Now
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

function NavBlock({ label, href, bgColor, textColor }: { label: string; href: string; bgColor: string; textColor: string }) {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} px-4 py-2.5 rounded-sm font-bold text-sm transition-opacity hover:opacity-90`}
    >
      {label}
    </Link>
  )
}

function MobileNavBlock({ label, href, bgColor, textColor }: { label: string; href: string; bgColor: string; textColor: string }) {
  return (
    <Link
      href={href}
      className={`${bgColor} ${textColor} px-4 py-2.5 rounded-sm font-bold text-sm transition-colors hover:opacity-90 block`}
    >
      {label}
    </Link>
  )
}
