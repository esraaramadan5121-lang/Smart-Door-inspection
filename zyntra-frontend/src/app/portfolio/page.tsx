import type { Metadata } from 'next'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import PortfolioClient from './PortfolioClient'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore our selected work — luxury brands, corporate websites, mobile apps, and digital experiences.',
}

export default function Portfolio() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <PortfolioClient />
      <Footer />
    </main>
  )
}