import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Use Cases · Aegis Trace | AI Audit Trails for Financial Services, Healthcare, Insurance',
  description: 'Real-world examples of Aegis Trace providing decision evidence in regulated financial services, healthcare, insurance, credit, and algorithmic trading.',
}

interface UseCase {
  label: string
  title: string
  situation: string
  regs: string[]
  receives: string
}

const cases: UseCase[] = [
  {
    label: 'Use Case 01 · Financial Services',
    title: 'A wealth manager’s AI recommends selling a position. The FCA asks why.',
    situation:
      'A client’s portfolio is reviewed by an AI-assisted suitability engine. It recommends reducing exposure to a fund based on risk profile, market conditions, and client objectives. Six months later, the FCA requests evidence that the recommendation was suitable under Consumer Duty. Without Aegis Trace, the firm has scattered system logs. With Aegis Trace, they have a signed certificate that records the complete decision.',
    regs: ['FCA PS22/3', 'Consumer Duty', 'MiFID II', 'EU AI Act Art.12'],
    receives:
      'A tamper-proof certificate recording the complete decision, from the information that went in to the recommendation that came out — retrievable in seconds.',
  },
  {
    label: 'Use Case 02 · Healthcare & Life Sciences',
    title: 'A clinical decision support system flags a drug interaction. The MHRA needs the audit trail.',
    situation:
      'An AI system assists a clinician by flagging a potential drug interaction based on a patient’s prescription history. The recommendation influences the prescribing decision. Under MHRA AI guidance and the EU MDR, the hospital must demonstrate that the AI’s recommendation was within validated parameters and was appropriately overseen. Aegis Trace records every clinical AI output, with personal data removed before it leaves the hospital’s systems.',
    regs: ['MHRA AI Guidance', 'EU MDR Art.61', 'NHS AI Framework', 'GDPR Art.22'],
    receives:
      'A complete decision record with the validated model in use, a redacted patient reference, the severity flagged, and a tamper-proof seal — structured for regulatory submission.',
  },
  {
    label: 'Use Case 03 · Insurance & Underwriting',
    title: 'An underwriting model declines a policy. The applicant requests an explanation under GDPR Art.22.',
    situation:
      'An automated underwriting model assesses a commercial insurance application and returns a decline decision. Under GDPR Article 22 and FCA ICOBS, the applicant has the right to request a meaningful explanation of the automated decision. The insurer must produce a record of what the model assessed, what it decided, and on what basis. Aegis Trace captures the full decision automatically.',
    regs: ['GDPR Art.22', 'FCA ICOBS', 'Solvency II', 'EU AI Act Art.12'],
    receives:
      'A structured explanation tied to a tamper-proof certificate, satisfying the GDPR Article 22 right to explanation and FCA ICOBS evidencing requirements.',
  },
  {
    label: 'Use Case 04 · AI Credit Decisioning',
    title: 'Your AI credit model declined a mortgage application. The borrower appeals.',
    situation:
      'An AI-assisted credit scoring model evaluates a mortgage application and returns a decline. Under FCA CONC and GDPR Article 22, the firm must provide a meaningful explanation of the automated decision and demonstrate the assessment was fair. Without Aegis Trace, the firm has model logs scattered across systems. With Aegis Trace, there is a single, signed decision record.',
    regs: ['FCA CONC', 'GDPR Art.22', 'EU AI Act', 'SR 11-7'],
    receives:
      'A single, tamper-proof decision record showing what the model assessed and why. Every AI decision traceable, verifiable, and defensible.',
  },
  {
    label: 'Use Case 05 · Algorithmic Trading',
    title: 'Your trading algorithm executed orders during volatility. The FCA requests a reconstruction.',
    situation:
      'An algorithmic trading system made autonomous decisions during a period of market stress. Under MiFID II and FCA SYSC 9, the firm must be able to reconstruct the decision chain: what data the model consumed, what signals it acted on, and what orders it placed. Aegis Trace provides a sealed, time-stamped record for every execution decision.',
    regs: ['MiFID II', 'FCA SYSC 9', 'MAR'],
    receives:
      'A complete, sealed reconstruction of every algorithmic trading decision — time-stamped, independently verifiable, and ready for submission in the format the FCA expects.',
  },
]

export default function UseCases() {
  return (
    <main>
      <PageHeader
        eyebrow="Use cases"
        head="From AI decision to compliance evidence."
        tail="In every regulated context."
        lead="Aegis Trace provides complete decision evidence for every regulated industry where AI systems influence outcomes that must be evidenced. The same certificate, the same tamper-proof record, whatever the rules."
      />

      <div className="container">
        {cases.map((c) => (
          <div className="splitrow grid12 reveal" key={c.label}>
            <div className="mono-caption splitrow-label">{c.label}</div>
            <div className="splitrow-body">
              <h2 className="cell-title">{c.title}</h2>
              <p className="body">{c.situation}</p>
              <span className="mono-caption">{c.regs.join(', ')}</span>
              <p className="body body--muted">
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>What the regulator receives:</strong> {c.receives}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal" />
            <h2 className="statement b4-statement reveal" style={{ gridColumn: '1 / 10' }}>
              The regulation changes. <span className="tone2">The requirement does not.</span>
            </h2>
          </div>
          <div className="dgrid">
            <div className="dcell reveal">
              <div className="cell-title">A decision was made</div>
              <p className="body-sm dcell-body">An AI system produced an output that influenced a regulated outcome.</p>
            </div>
            <div className="dcell reveal">
              <div className="cell-title">Evidence is required</div>
              <p className="body-sm dcell-body">A regulator, auditor, or court asks: what produced that output, when, and was it appropriate?</p>
            </div>
            <div className="dcell reveal">
              <div className="cell-title">Aegis Trace provides it</div>
              <p className="body-sm dcell-body">A tamper-proof certificate exists for every decision. Retrievable in seconds. Ready for submission.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="grid12">
            <div className="cta-text reveal">
              <h2 className="statement">Tell us your <span className="tone2">regulatory context.</span></h2>
              <p className="body body--on-band-muted cta-onboard">We will confirm whether Aegis Trace covers your specific requirements.</p>
              <div style={{ marginTop: '40px' }}>
                <Link href="/#request-access" className="btn btn--on-band">Request access</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
