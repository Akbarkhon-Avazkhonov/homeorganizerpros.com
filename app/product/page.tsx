import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Products - HomeOrganizerPros',
  description: 'Explore our curated collection of organizing products and solutions for every room in your home.',
}

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Our Products</h1>
            <p className="text-lg text-foreground/80 mb-12">
              Discover our premium collection of organizing solutions designed to transform your space.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Storage Containers', description: 'Premium labeled containers in multiple sizes', image: '/product-containers.jpg', slug: 'storage-containers' },
                { title: 'Shelving Systems', description: 'Modular shelving designed for organization', image: '/product-shelving.jpg', slug: 'shelving-systems' },
                { title: 'Drawer Organizers', description: 'Custom drawer dividers and organizers', image: '/product-drawer.jpg', slug: 'drawer-organizers' },
                { title: 'Labels & Tags', description: 'Professional labeling systems', image: '/product-labels.jpg', slug: 'labels-tags' },
                { title: 'Hanging Systems', description: 'Closet rods, hangers, and hanging solutions', image: '/product-hanging.jpg', slug: 'hanging-systems' },
                { title: 'Storage Bins', description: 'Color-coded bins for every space', image: '/product-bins.jpg', slug: 'storage-bins' },
              ].map((product, idx) => (
                <div key={idx} className="border-4 border-foreground rounded-sm overflow-hidden bg-white hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{product.title}</h3>
                    <p className="text-foreground/70 mb-4">{product.description}</p>
                    <Link href={`/product/${product.slug}`} className="inline-block px-4 py-2 bg-accent text-white font-bold rounded-sm hover:opacity-90 transition-opacity">
                      View Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
