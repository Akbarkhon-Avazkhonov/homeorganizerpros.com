'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-white p-6 z-40 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="font-serif font-bold text-lg mb-2">Cookie Settings</h3>
            <p className="text-sm text-white/80">
              We use cookies to enhance your browsing experience and analyze site usage. By clicking "Accept All", you consent to our use of cookies. You can adjust your preferences by visiting our{' '}
              <Link href="/privacy" className="text-primary hover:text-secondary transition-colors underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="flex-1 px-4 py-2 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-charcoal transition-colors text-sm"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 bg-primary text-white font-bold rounded-sm hover:opacity-90 transition-opacity text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
