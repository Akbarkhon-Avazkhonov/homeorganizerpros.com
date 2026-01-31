'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  category: string
  beforeImage: string
  afterImage: string
}

const projects: Project[] = [
  { id: 1, title: 'Kitchen Transformation', category: 'Kitchen', beforeImage: '/kitchen-before.jpg', afterImage: '/kitchen-after.jpg' },
  { id: 2, title: 'Pantry Paradise', category: 'Pantry', beforeImage: '/pantry-before.jpg', afterImage: '/pantry-after.jpg' },
  { id: 3, title: 'Closet Creations', category: 'Closet', beforeImage: '/closet-before.jpg', afterImage: '/closet-after.jpg' },
  { id: 4, title: 'Bathroom Bliss', category: 'Bathroom', beforeImage: '/bathroom-before.jpg', afterImage: '/bathroom-after.jpg' },
  { id: 5, title: 'Powder Room', category: 'Bathroom', beforeImage: '/bathroom-before.jpg', afterImage: '/bathroom-after.jpg' },
  { id: 6, title: 'Kitchen Refresh', category: 'Kitchen', beforeImage: '/kitchen-before.jpg', afterImage: '/kitchen-after.jpg' },
]

export default function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Kitchen', 'Pantry', 'Closet', 'Bathroom']
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="gallery" className="bg-cream py-16 md:py-24 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chaos to <span className="text-primary">Clarity</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See the transformation our expert organizers have created for hundreds of homes
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 font-bold rounded-sm transition-all ${
                activeFilter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg border-4 border-foreground h-64 bg-white">
                {/* Before Side */}
                <div className="absolute inset-0 w-1/2 overflow-hidden">
                  <Image
                    src={project.beforeImage || "/placeholder.svg"}
                    alt={`${project.title} - Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-4">
                    <div className="text-white text-sm font-bold bg-black/60 px-3 py-1 rounded">BEFORE</div>
                  </div>
                </div>

                {/* After Side */}
                <div className="absolute inset-0 left-1/2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={project.afterImage || "/placeholder.svg"}
                    alt={`${project.title} - After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-4">
                    <div className="text-white text-sm font-bold bg-primary px-3 py-1 rounded">AFTER</div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project Info */}
              <div className="mt-4">
                <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                <p className="text-sm text-foreground/60">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
