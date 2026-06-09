import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trust & Security · Aegis Trace | MSDK Labs',
  description: 'Enterprise-grade security, transparent compliance posture, and flexible deployment. Aegis Trace records are mapped to FCA Consumer Duty, EU AI Act Article 12, MiFID II, GDPR, and FCA SYSC 9.',
}

export default function Trust() {
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

  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '160px' }} id="security">
        <div className="container">
          <div className="section-label reveal"><span>Trust</span></div>
          <h1 className="section-title reveal">Enterprise-grade security. Transparent compliance posture.</h1>
          <p className="dev-intro reveal">
            Aegis Trace is built for the firms that regulators scrutinise most closely. Security, data residency, and deployment are designed around that reality — and our compliance posture is stated plainly, including what is in progress.
          </p>
        </div>
      </section>

      {/* SECURITY */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title reveal">Security</h2>
          <div className="trust-grid">
            {security.map((b, i) => (
              <div className="trust-card reveal" key={i}>
                <div className="trust-card-title">{b.title}</div>
                <div className="trust-card-desc">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section id="deployment">
        <div className="container">
          <div className="section-label reveal"><span>Deployment</span></div>
          <h2 className="section-title reveal">Deploy where your compliance architecture requires.</h2>
          <div className="cards-grid-3">
            {deployment.map((o, i) => (
              <div className="card reveal" key={i}>
                <div className="card-subtitle">{o.subtitle}</div>
                <div className="card-title">{o.title}</div>
                <div className="card-desc">{o.desc}</div>
                <div className="card-best"><strong>Best for:</strong> {o.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATORY MAPPING */}
      <section id="regulatory">
        <div className="container">
          <div className="section-label reveal"><span>Regulatory alignment</span></div>
          <h2 className="section-title reveal">Mapped to the regulations governing your AI decisions.</h2>
          <div className="cards-grid-2x3">
            {regulatory.map((r, i) => (
              <div className="card reveal" key={i}>
                <div className="card-title">{r.title}</div>
                <div className="card-desc">{r.desc}</div>
              </div>
            ))}
          </div>
          <div className="guarantee-card reveal">
            <div className="card-badge">Architecture guarantee</div>
            <div className="card-title">GDPR Art.25 — data protection by design</div>
            <div className="card-desc">Personal data is removed entirely inside the client network. Aegis Trace never receives raw personal data. Verified by automated network-isolation tests on every build.</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get started</span></div>
          <h2 className="section-title reveal">Bring your security and compliance teams.</h2>
          <p className="cta-sub reveal">We are happy to walk through architecture, data residency, and our compliance roadmap in detail.</p>
          <div className="reveal">
            <Link href="/#request-access" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Request access &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
