import type { Metadata } from 'next'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ZYNTRA Digital. Let us build something extraordinary together.',
}

export default function Contact() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  )
}