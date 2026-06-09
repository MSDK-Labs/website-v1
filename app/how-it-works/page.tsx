import type { Metadata } from 'next'
import Link from 'next/link'
import CertificateMotif from '@/components/home/CertificateMotif'

export const metadata: Metadata = {
  title: 'How It Works | Aegis Trace | MSDK Labs',
  description: 'From an AI decision to a sealed, independently verifiable record — in three plain steps. How Aegis Trace captures, seals, and retrieves evidence regulators trust.',
}

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Capture',
      outcome: 'Personal data is stripped out before anything leaves your systems.',
      body: 'The moment your AI makes a regulated decision, Aegis Trace captures a structured record of it — automatically, with no manual documentation. Personal data is removed inside your own systems first, so sensitive information never travels anywhere it should not. Aegis Trace then takes a mathematical fingerprint of the record: a unique value that proves the record is unchanged if anyone ever questions it.',
    },
    {
      num: '02',
      title: 'Seal',
      outcome: 'Sealed so it can never be altered, backdated, or deleted.',
      body: 'Each record is locked the instant it is created. It is time-stamped by an independent authority, so the date can’t be disputed — not even by you. From that point on, the record cannot be altered, backdated, or quietly deleted. That is what makes it evidence a regulator can rely on, rather than a log that could have been edited after the fact.',
    },
    {
      num: '03',
      title: 'Retrieve',
      outcome: 'Any decision retrievable in seconds.',
      body: 'When a regulator, auditor, or internal review asks “why did your AI do this, on this date, for this customer?”, you produce the answer on demand. Any decision is retrievable in seconds, and every record comes ready for submission — mapped to the rules that apply, such as FCA Consumer Duty and EU AI Act Article 12.',
    },
  ]

  return (
    <main>
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>How it works</span></div>
          <h1 className="section-title reveal">From an AI decision to evidence a regulator can trust.</h1>
          <p className="dev-intro reveal">
            Aegis Trace turns every AI-assisted decision your firm makes into a permanent, independently verifiable record — without your teams writing a line of documentation. Here is what happens, in plain terms.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="layer-grid">
            {steps.map((s) => (
              <div className="layer-card reveal" key={s.num}>
                <div className="layer-num">{s.num}</div>
                <div className="layer-title">{s.title}</div>
                <div className="layer-outcome">{s.outcome}</div>
                <div className="layer-desc">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: '520px', margin: '0 auto' }} className="reveal">
            <CertificateMotif />
            <p className="certificate-caption">An illustrative certificate. Every sealed decision produces one.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get started</span></div>
          <h2 className="section-title reveal">See it against your own regulatory context.</h2>
          <p className="cta-sub reveal">We will confirm whether Aegis Trace covers your specific requirements.</p>
          <div className="reveal" style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#request-access" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Request access &rarr;
            </Link>
            <Link href="/developers/" className="btn-secondary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              For engineers &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
