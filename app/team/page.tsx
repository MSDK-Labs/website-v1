import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team · Aegis Trace | MSDK Labs',
  description: 'MSDK Labs team information has moved to the About page.',
  robots: { index: false, follow: true },
}

export default function TeamRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/about/" />
      <main className="redirect-stub">
        <h1>This page has moved</h1>
        <p>Team information now lives on the About page.</p>
        <Link href="/about/">Go to About &rarr;</Link>
      </main>
    </>
  )
}
