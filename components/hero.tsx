'use client'

import React from "react"
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setMousePos({ x: Math.max(30, Math.min(70, x)) })
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/organized-closet.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Master the Art of the <span className="text-secondary">Interior</span>
            </h1>
            <p className="text-lg text-white/90">
              Curated systems for a clutter-free life. From the pantry to the powder room, we provide the blueprints for perfection.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/product" className="px-8 py-3 bg-primary text-white font-bold rounded-sm hover:opacity-90 transition-opacity inline-block">
                Get Started
              </Link>
              <Link href="/about" className="px-8 py-3 border-2 border-white text-white font-bold rounded-sm hover:bg-white hover:text-foreground transition-colors inline-block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Interactive Hero */}
          
        </div>
      </div>
    </section>
  )
}
