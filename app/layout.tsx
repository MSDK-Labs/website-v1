import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Aegis Trace — AI Decision Audit Infrastructure | MSDK Labs',
  description: 'Cryptographic proof of every AI decision. A single API integration produces signed, immutable audit certificates for regulatory review, internal audit, or litigation.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H5V5H0V0Z' fill='%23F2F0EB'/%3E%3Cpath d='M5 5H10V10H5V5Z' fill='%23F2F0EB'/%3E%3Cpath d='M10 0H15V5H10V0Z' fill='%23F2F0EB'/%3E%3Cpath d='M10 10H15V15H10V10Z' fill='%23F2F0EB'/%3E%3Cpath d='M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z' fill='%23F2F0EB'/%3E%3C/svg%3E",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
