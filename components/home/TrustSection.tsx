export default function TrustSection() {
  const badges = [
    { title: 'Hosted on Google Cloud Platform', desc: 'Production infrastructure runs on GCP in EU data centres. Kubernetes orchestration. Managed database services. Enterprise-grade SLA.' },
    { title: 'EU Data Residency', desc: 'All data processed and stored within EU regions (europe-west2, London). Full GDPR compliance by architecture.' },
    { title: 'Encryption at Rest and in Transit', desc: 'All data encrypted using AES-256 at rest and TLS 1.3 in transit. Certificate records are additionally protected by cryptographic signing with managed key infrastructure.' },
    { title: 'Role-Based Access Control with MFA', desc: 'Dashboard access requires multi-factor authentication. Three roles (Admin, Compliance Officer, Viewer) ensure appropriate access controls. Operator-managed onboarding with no self-registration.' },
    { title: 'Built on Secure, Industry-Certified Infrastructure', desc: 'Hosted on ISO 27001 and SOC 2 certified Google Cloud infrastructure. Enterprise security controls, audit logging, and encryption at rest and in transit.' },
    { title: 'HIPAA Ready', desc: 'Architecture supports HIPAA compliance requirements for healthcare deployments. BAA available on request.' },
  ]

  return (
    <section id="trust">
      <div className="container">
        <div className="section-label reveal"><span>Trust &amp; Security</span></div>
        <h2 className="section-title reveal">Enterprise-grade security. Transparent compliance posture.</h2>
        <div className="trust-grid">
          {badges.map((b, i) => (
            <div className="trust-card reveal" key={i}>
              <div className="trust-card-title">{b.title}</div>
              <div className="trust-card-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
