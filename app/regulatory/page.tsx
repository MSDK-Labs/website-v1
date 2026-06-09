import type { Metadata } from 'next'
import Link from 'next/link'
import Eyebrow from '@/components/Eyebrow'

export const metadata: Metadata = {
  title: 'Regulatory Compliance · Aegis Trace | MSDK Labs',
  description: 'Aegis Trace regulatory mapping has moved to the Trust page.',
  robots: { index: false, follow: true },
}

export default function RegulatoryRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/trust/" />
      <main className="container stub">
        <Eyebrow>Redirecting</Eyebrow>
        <h1 className="statement" style={{ marginBottom: '16px' }}>This page has moved</h1>
        <p className="body stub-line">
          Regulatory mapping now lives on the Trust page. &nbsp;
          <Link href="/trust/" className="link-arrow">Go to Trust</Link>
        </p>
      </main>
    </>
  )
}
