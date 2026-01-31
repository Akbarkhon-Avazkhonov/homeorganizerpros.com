'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 border-t-4 border-primary bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">HomeOrganizerPros</h3>
            <p className="text-sm opacity-80">
              Transforming homes and lives through expert organization and design.
            </p>
          </div>

          {/* Quick Links */}
          

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+18324365948" className="opacity-80 hover:opacity-100">
                  +1 (832) 436-5948
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@homeorganizerpros.com" className="opacity-80 hover:opacity-100">
                  hello@homeorganizerpros.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="opacity-80">
                  <div>231 Circle Drive</div>
                  <div>Houston, Texas 77002</div>
                  <div>United States</div>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © 2024 HomeOrganizerPros. All rights reserved.
            </p>
            <p className="text-xs opacity-50 text-center">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
