import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>
}

const productDetails: Record<string, any> = {
  'storage-containers': {
    title: 'Storage Containers',
    description: 'Premium labeled containers in multiple sizes',
    image: '/product-containers.jpg',
    price: '$49.99',
    amazonLink: 'https://www.amazon.com/s?k=storage+containers',
    fullDescription: 'Our premium storage containers are designed for maximum organization and durability. Made from eco-friendly materials with secure lids and measurement markings for easy identification. Perfect for pantries, kitchens, and any storage space.',
    features: [
      'Available in multiple sizes',
      'Air-tight seal for freshness',
      'Stackable design for space efficiency',
      'BPA-free materials',
      'Dishwasher safe',
      'Transparent for easy visibility'
    ],
    specs: {
      material: 'Eco-friendly plastic',
      colors: 'Clear with teal accents',
      sizes: '3 pack, 6 pack, 12 pack',
      warranty: '2-year guarantee'
    }
  },
  'shelving-systems': {
    title: 'Shelving Systems',
    description: 'Modular shelving designed for organization',
    image: '/product-shelving.jpg',
    price: '$199.99',
    amazonLink: 'https://www.amazon.com/s?k=shelving+systems',
    fullDescription: 'Customizable shelving systems that adapt to any space. Our modular design allows you to create the perfect storage solution for your home. Easy assembly and stunning aesthetics combine for the ultimate organizing tool.',
    features: [
      'Modular and customizable',
      'Heavy-duty construction',
      'Adjustable shelf heights',
      'Supports up to 200 lbs per shelf',
      'Multiple finish options',
      'Easy assembly without tools'
    ],
    specs: {
      material: 'Steel and wood',
      dimensions: '30" W x 72" H (customizable)',
      weight: '45 lbs',
      warranty: '5-year guarantee'
    }
  },
  'drawer-organizers': {
    title: 'Drawer Organizers',
    description: 'Custom drawer dividers and organizers',
    image: '/product-drawer.jpg',
    price: '$34.99',
    amazonLink: 'https://www.amazon.com/s?k=drawer+organizers',
    fullDescription: 'Transform messy drawers into perfectly organized compartments. Our flexible dividers work in any drawer size and can be easily adjusted to fit your specific needs.',
    features: [
      'Flexible sizing system',
      'Works in any drawer',
      'Premium wood construction',
      'Non-slip bottom pads',
      'Multiple divider options',
      'Eco-friendly materials'
    ],
    specs: {
      material: 'Bamboo wood',
      sizes: 'Fits drawers 12"-24" wide',
      pieces: '4-piece set',
      warranty: '2-year guarantee'
    }
  },
  'labels-tags': {
    title: 'Labels & Tags',
    description: 'Professional labeling systems',
    image: '/product-labels.jpg',
    price: '$24.99',
    amazonLink: 'https://www.amazon.com/s?k=labeling+systems',
    fullDescription: 'Professional labeling system for creating organized, clearly identified storage spaces. Includes a portable label maker and hundreds of pre-designed templates.',
    features: [
      'Portable label maker included',
      'Hundreds of templates',
      'Waterproof labels',
      'Multiple font options',
      '1000 label sheets',
      'Color and pattern choices'
    ],
    specs: {
      material: 'Plastic and adhesive vinyl',
      included: 'Label maker, 1000 labels, USB cable',
      connectivity: 'Bluetooth & USB',
      warranty: '1-year guarantee'
    }
  },
  'hanging-systems': {
    title: 'Hanging Systems',
    description: 'Closet rods, hangers, and hanging solutions',
    image: '/product-hanging.jpg',
    price: '$89.99',
    amazonLink: 'https://www.amazon.com/s?k=closet+hangers',
    fullDescription: 'Complete closet hanging system with premium hangers and rods. Maximize your closet space and keep clothes organized by category.',
    features: [
      '25 premium wooden hangers included',
      'Heavy-duty hanging rod',
      'Expandable design',
      'Velvet non-slip surface',
      'Supports up to 500 lbs',
      'Perfect for any closet size'
    ],
    specs: {
      material: 'Wood and steel',
      rodLength: '24"-48" adjustable',
      hangers: '25 premium wooden hangers',
      warranty: '3-year guarantee'
    }
  },
  'storage-bins': {
    title: 'Storage Bins',
    description: 'Color-coded bins for every space',
    image: '/product-bins.jpg',
    price: '$59.99',
    amazonLink: 'https://www.amazon.com/s?k=storage+bins',
    fullDescription: 'Beautiful color-coded storage bins that combine functionality with style. Our bins are perfect for organizing any room in your home.',
    features: [
      'Color-coded system (teal, yellow, pink, white)',
      'Durable plastic construction',
      'Stackable design',
      'Handle for easy transport',
      'Set of 8 bins',
      'Indoor and outdoor use'
    ],
    specs: {
      material: 'Heavy-duty plastic',
      colors: 'Teal, yellow, pink, white',
      sizes: '4 large, 4 medium',
      warranty: '3-year guarantee'
    }
  }
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = productDetails[slug]
  
  return {
    title: `${product?.title || 'Product'} - HomeOrganizerPros`,
    description: product?.description || 'Product details',
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params
  const product = productDetails[slug]

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link href="/product" className="text-primary font-bold hover:underline">
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm">
              <Link href="/product" className="text-primary hover:underline">
                Products
              </Link>
              <span className="text-foreground/50">/</span>
              <span className="text-foreground">{product.title}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="border-4 border-foreground rounded-sm overflow-hidden">
                <div className="relative h-96 w-full">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {product.title}
                  </h1>
                  
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Features */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground/80">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div className="border-t border-b border-border py-6">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm font-bold text-foreground/60 uppercase">{key}</dt>
                        <dd className="text-foreground font-semibold">{value as string}</dd>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-4">
                  <a 
                    href={product.amazonLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-accent text-white font-bold rounded-sm hover:opacity-90 transition-opacity flex-1 text-center inline-block"
                  >
                    Buy on Amazon
                  </a>
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
