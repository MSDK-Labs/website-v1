import Link from 'next/link'
import Eyebrow from '../Eyebrow'
import BandedStack, { BandStep } from './BandedStack'

const steps: BandStep[] = [
  {
    num: '01',
    name: 'Capture',
    outcome: 'Personal data is stripped out before anything leaves your systems.',
    desc: 'When your AI makes a decision, the record is captured automatically. Aegis Trace takes a mathematical fingerprint that proves the record is unchanged.',
  },
  {
    num: '02',
    name: 'Seal',
    outcome: 'Sealed so it can never be altered, backdated, or deleted.',
    desc: 'Each record is locked the moment it is created. It is time-stamped by an independent authority, so the date can’t be disputed.',
  },
  {
    num: '03',
    name: 'Retrieve',
    outcome: 'Any decision retrievable in seconds.',
    desc: 'When a regulator, auditor, or internal review asks for evidence, you produce it on demand. Every record comes ready for submission.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works">
      <div className="section section--ruled" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="grid12">
            <div className="bstack-head-eyebrow reveal">
              <Eyebrow n="03">How it works</Eyebrow>
            </div>
            <h2 className="statement bstack-head-statement reveal">
              Three steps, from AI decision to{' '}
              <span className="tone2">evidence a regulator can trust.</span>
            </h2>
          </div>
        </div>
      </div>

      <BandedStack steps={steps} />

      <div className="container" style={{ paddingTop: '40px', paddingBottom: 'var(--pad-section)' }}>
        <Link href="/developers/" className="link-arrow bstack-foot">Read the technical detail</Link>
      </div>
    </section>
  )
}
