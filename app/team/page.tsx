import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/Eyebrow'

export const metadata: Metadata = {
  title: 'Team · Aegis Trace | MSDK Labs',
  description: 'MSDK Labs team information has moved to the About page.',
  robots: { index: false, follow: true },
}

export default function TeamRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/about/" />
      <main className="container stub">
        <Eyebrow>Redirecting</Eyebrow>
        <h1 className="statement" style={{ marginBottom: '16px' }}>This page has moved</h1>
        <p className="body stub-line">
          Team information now lives on the About page. &nbsp;
          <Link href="/about/" className="link-arrow">Go to About</Link>
        </p>
      </main>
    </>
  )
}
