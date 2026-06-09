import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import BandedStack, { BandStep } from '@/components/home/BandedStack'

export const metadata: Metadata = {
  title: 'How It Works | Aegis Trace | MSDK Labs',
  description: 'From an AI decision to a sealed, independently verifiable record — in three plain steps. How Aegis Trace captures, seals, and retrieves evidence regulators trust.',
}

const steps: BandStep[] = [
  {
    num: '01',
    name: 'Capture',
    outcome: 'Personal data is stripped out before anything leaves your systems.',
    desc: 'The moment your AI makes a regulated decision, Aegis Trace captures a structured record of it — automatically, with no manual documentation. Personal data is removed inside your own systems first, so sensitive information never travels anywhere it should not. Aegis Trace then takes a mathematical fingerprint of the record: a unique value that proves the record is unchanged if anyone ever questions it.',
  },
  {
    num: '02',
    name: 'Seal',
    outcome: 'Sealed so it can never be altered, backdated, or deleted.',
    desc: 'Each record is locked the instant it is created. It is time-stamped by an independent authority, so the date can’t be disputed — not even by you. From that point on, the record cannot be altered, backdated, or quietly deleted. That is what makes it evidence a regulator can rely on, rather than a log that could have been edited after the fact.',
  },
  {
    num: '03',
    name: 'Retrieve',
    outcome: 'Any decision retrievable in seconds.',
    desc: 'When a regulator, auditor, or internal review asks “why did your AI do this, on this date, for this customer?”, you produce the answer on demand. Any decision is retrievable in seconds, and every record comes ready for submission — mapped to the rules that apply, such as FCA Consumer Duty and EU AI Act Article 12.',
  },
]

export default function HowItWorks() {
  return (
    <main>
      <PageHeader
        eyebrow="How it works"
        head="From an AI decision to"
        tail="evidence a regulator can trust."
        lead="Aegis Trace turns every AI-assisted decision your firm makes into a permanent, independently verifiable record — without your teams writing a line of documentation. Here is what happens, in plain terms."
      />

      <BandedStack steps={steps} />

      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="statement-block reveal">
              <h2 className="statement">
                See it against your own <span className="tone2">regulatory context.</span>
              </h2>
              <p className="body" style={{ marginTop: '24px' }}>
                We will confirm whether Aegis Trace covers your specific requirements.
              </p>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
                <Link href="/#request-access" className="btn btn--on-light">Request access</Link>
                <Link href="/developers/" className="link-arrow">For engineers</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
