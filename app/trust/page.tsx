import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Eyebrow from '@/components/Eyebrow'

export const metadata: Metadata = {
  title: 'Trust & Security · Aegis Trace | MSDK Labs',
  description: 'Enterprise-grade security, transparent compliance posture, and flexible deployment. Aegis Trace records are mapped to FCA Consumer Duty, EU AI Act Article 12, MiFID II, GDPR, and FCA SYSC 9.',
}

const security = [
  { title: 'Hosted on secure cloud infrastructure', desc: 'Production infrastructure runs on Google Cloud in UK and EU data centres, with enterprise-grade availability and operational controls.' },
  { title: 'UK and EU data residency', desc: 'All data is processed and stored within UK and EU regions. GDPR compliance by architecture.' },
  { title: 'Encryption at rest and in transit', desc: 'All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Certificate records are additionally protected by independent cryptographic signing.' },
  { title: 'Role-based access control with MFA', desc: 'Dashboard access requires multi-factor authentication. Three roles — Admin, Compliance Officer, Viewer — ensure appropriate access. Operator-managed onboarding, with no self-registration.' },
  { title: 'Industry-certified infrastructure', desc: 'Hosted on ISO 27001 and SOC 2 certified cloud infrastructure, with enterprise security controls, audit logging, and encryption at rest and in transit.' },
  { title: 'HIPAA ready', desc: 'Architecture supports HIPAA requirements for healthcare deployments. BAA available on request.' },
]

const deployment = [
  { subtitle: 'Get started in days', title: 'Cloud API', desc: 'Managed service hosted on Google Cloud in UK and EU data centres. Responses in seconds. No infrastructure to manage. Your compliance team is operational within a week.', best: 'Firms wanting fast time-to-value with managed infrastructure.' },
  { subtitle: 'Your cloud, your control', title: 'Private Cloud', desc: 'Containerised deployment in your own cloud tenant, whether AWS, GCP, or Azure. Complete data sovereignty. Managed updates. Your security team retains full network control.', best: 'Firms with existing cloud infrastructure and data residency requirements.' },
  { subtitle: 'Nothing leaves your network', title: 'On-Premises', desc: 'Full deployment within your own data centres. Air-gapped and restricted network environments supported. For the most regulated environments where data must never leave the premises.', best: 'Firms with the strictest data sovereignty and regulatory requirements.' },
]

const regulatory = [
  { title: 'FCA PS22/3', desc: 'Suitability evidence for consumer investment advice. Aligned with the evidence direction signalled by the FCA Mills Review (January 2026).' },
  { title: 'Consumer Duty', desc: 'Outcome monitoring for client-appropriate recommendations.' },
  { title: 'EU AI Act Art.12', desc: 'Automatic record-keeping for high-risk AI system decisions. Enforcement begins 2 August 2026.' },
  { title: 'MiFID II', desc: 'Audit trail for investment decisions and order execution.' },
  { title: 'GDPR Art.30', desc: 'Records of automated processing involving personal data.' },
  { title: 'FCA SYSC 9', desc: 'Record retention to reconstruct regulated activities. Five-year retention aligned to SYSC 9 requirements.' },
]

export default function Trust() {
  return (
    <main>
      <PageHeader
        eyebrow="Trust"
        head="Enterprise-grade security."
        tail="Transparent compliance posture."
        lead="Aegis Trace is built for the firms that regulators scrutinise most closely. Security, data residency, and deployment are designed around that reality — and our compliance posture is stated plainly, including what is in progress."
        texture
      />

      {/* SECURITY */}
      <section className="section" id="security">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Security</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Security</h2>
          </div>
          <div className="dgrid">
            {security.map((s, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title">{s.title}</div>
                <p className="body-sm dcell-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="section section--ruled" id="deployment">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Deployment</Eyebrow></div>
            <h2 className="statement b4-statement reveal">
              Deploy where your <span className="tone2">compliance architecture requires.</span>
            </h2>
          </div>
          <div className="dgrid">
            {deployment.map((o, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="mono-caption" style={{ marginBottom: '10px' }}>{o.subtitle}</div>
                <div className="cell-title">{o.title}</div>
                <p className="body-sm dcell-body">{o.desc}</p>
                <p className="body-sm dcell-best"><strong>Best for:</strong> {o.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY MAPPING */}
      <section className="section section--ruled" id="regulatory">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Regulatory alignment</Eyebrow></div>
            <h2 className="statement b4-statement reveal">
              Mapped to the regulations <span className="tone2">governing your AI decisions.</span>
            </h2>
          </div>
          <div style={{ marginTop: '64px' }}>
            {regulatory.map((r, i) => (
              <div className="prow grid12 reveal" key={i}>
                <div className="mono-caption prow-label">{r.title}</div>
                <div className="prow-body"><p className="body">{r.desc}</p></div>
              </div>
            ))}
            <div className="prow grid12 reveal">
              <div className="mono-caption prow-label">Architecture guarantee</div>
              <div className="prow-body">
                <div className="cell-title" style={{ marginBottom: '12px' }}>GDPR Art.25 — data protection by design</div>
                <p className="body">Personal data is removed entirely inside the client network. Aegis Trace never receives raw personal data. Verified by automated network-isolation tests on every build.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="grid12">
            <div className="cta-text reveal">
              <Eyebrow onBand>Get started</Eyebrow>
              <h2 className="statement">Bring your security and <span className="tone2">compliance teams.</span></h2>
              <p className="body body--on-band-muted cta-onboard">We are happy to walk through architecture, data residency, and our compliance roadmap in detail.</p>
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
