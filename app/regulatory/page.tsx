import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Regulatory Compliance · Aegis Trace | MSDK Labs',
  description: 'Aegis Trace regulatory mapping has moved to the Trust page.',
  robots: { index: false, follow: true },
}

export default function RegulatoryRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/trust/" />
      <main className="redirect-stub">
        <h1>This page has moved</h1>
        <p>Regulatory mapping now lives on the Trust page.</p>
        <Link href="/trust/">Go to Trust &rarr;</Link>
      </main>
    </>
  )
}
