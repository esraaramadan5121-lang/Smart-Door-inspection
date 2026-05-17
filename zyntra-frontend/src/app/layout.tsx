import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ZYNTRA Digital — We Build Digital Masterpieces',
    template: '%s | ZYNTRA Digital',
  },
  description: 'Zyntra is a luxury digital agency crafting high-performance websites, brands, and digital experiences that elevate your business.',
  keywords: ['digital agency', 'web development', 'brand identity', 'UI/UX design', 'luxury web design'],
  authors: [{ name: 'ZYNTRA Digital' }],
  creator: 'ZYNTRA Digital',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zyntra.com',
    siteName: 'ZYNTRA Digital',
    title: 'ZYNTRA Digital — We Build Digital Masterpieces',
    description: 'Luxury digital agency crafting high-performance websites and digital experiences.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ZYNTRA Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZYNTRA Digital',
    description: 'Luxury digital agency crafting high-performance websites.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}