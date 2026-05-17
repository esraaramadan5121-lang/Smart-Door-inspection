import Navbar from '@/components/website/Navbar'
import Hero from '@/components/website/Hero'
import Services from '@/components/website/Services'
import Stats from '@/components/website/Stats'
import Portfolio from '@/components/website/Portfolio'
import Testimonials from '@/components/website/Testimonials'
import Footer from '@/components/website/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <Footer />
    </main>
  )
}