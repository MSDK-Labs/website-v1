export default function TrustSection() {
  const badges = [
    { title: 'Hosted on Google Cloud Platform', desc: 'Production infrastructure runs on GCP in EU data centres. Kubernetes orchestration. Managed database services. Enterprise-grade SLA.' },
    { title: 'EU Data Residency', desc: 'All data processed and stored within EU regions (europe-west2, London). Full GDPR compliance by architecture.' },
    { title: 'GDPR Art.25, By Architecture', desc: 'PII redaction runs exclusively inside your network. Aegis Trace never receives raw personal data. Data protection by design and by default.' },
    { title: 'EU AI Act Conformity', desc: 'Designed to meet EU AI Act requirements for high-risk AI system providers and deployers. Automatic logging, transparency, and human oversight support.' },
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
