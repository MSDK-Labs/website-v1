import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MSDK Labs | The Team Behind Aegis Trace',
  description: 'MSDK Labs company information has moved to the About page.',
  robots: { index: false, follow: true },
}

export default function CompanyRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/about/" />
      <main className="redirect-stub">
        <h1>This page has moved</h1>
        <p>Company and team information now lives on a single About page.</p>
        <Link href="/about/">Go to About &rarr;</Link>
      </main>
    </>
  )
}
