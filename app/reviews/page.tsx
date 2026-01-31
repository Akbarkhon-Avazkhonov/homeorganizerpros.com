import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Customer Reviews - HomeOrganizerPros',
  description: 'Read reviews from our satisfied customers who have transformed their homes with HomeOrganizerPros.',
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'HomeOrganizerPros completely transformed my kitchen! The team was professional and thorough. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Best investment I made for my home. My closet has never looked better. The organizing system is so intuitive.',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Absolutely fantastic service. The before and after of my pantry is night and day. Worth every penny!',
    },
    {
      name: 'David Thompson',
      rating: 5,
      text: 'Professional, efficient, and creative. They understood exactly what I needed and delivered beyond expectations.',
    },
    {
      name: 'Jessica Lee',
      rating: 5,
      text: 'My entire house has been reorganized by HomeOrganizerPros. The results are stunning and the products are premium quality.',
    },
    {
      name: 'Robert Martinez',
      rating: 5,
      text: 'Outstanding work! The organizing system is so functional and beautiful. My family loves the new layout.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">Customer Reviews</h1>
            <p className="text-lg text-foreground/80 mb-12">
              Don't just take our word for it. See what our satisfied customers have to say about their transformation journey.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="border-4 border-foreground rounded-sm p-6 bg-white">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="text-secondary text-xl">★</div>
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 leading-relaxed">"{review.text}"</p>
                  <p className="font-bold text-foreground">{review.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-4 border-foreground rounded-sm p-8 bg-white text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Transform Your Space?</h2>
              <p className="text-foreground/80 mb-6">
                Join thousands of satisfied customers who have transformed their homes with HomeOrganizerPros.
              </p>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
