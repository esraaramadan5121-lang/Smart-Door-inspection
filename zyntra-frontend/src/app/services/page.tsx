import type { Metadata } from 'next'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore ZYNTRA Digital services: Brand Identity, Web Development, UI/UX Design, Mobile Apps, and Digital Strategy.',
}

export default function Services() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <ServicesClient />
      <Footer />
    </main>
  )
}