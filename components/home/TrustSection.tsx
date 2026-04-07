export default function TrustSection() {
  const badges = [
    { title: 'Hosted on Google Cloud Platform', desc: 'Production infrastructure runs on GCP in EU data centres. Kubernetes orchestration. Managed database services. Enterprise-grade SLA.', status: 'active' },
    { title: 'EU Data Residency', desc: 'All data processed and stored within EU regions (europe-west2, London). Full GDPR compliance by architecture.', status: 'active' },
    { title: 'GDPR Art.25, By Architecture', desc: 'PII redaction runs exclusively inside your network. Aegis Trace never receives raw personal data. Data protection by design and by default.', status: 'active' },
    { title: 'EU AI Act Conformity', desc: 'Designed to meet EU AI Act requirements for high-risk AI system providers and deployers. Automatic logging, transparency, and human oversight support.', status: 'active' },
    { title: 'SOC 2 Type II', desc: 'Formal SOC 2 Type II attestation engagement planned for 2027. Security controls and audit logging already in place.', status: 'roadmap' },
    { title: 'ISO 27001', desc: 'Information security management system being formalised. Controls aligned to ISO 27001 Annex A requirements.', status: 'roadmap' },
    { title: 'HIPAA Ready', desc: 'Architecture supports HIPAA compliance requirements for healthcare deployments. BAA available on request.', status: 'active' },
  ]

  return (
    <section id="trust">
      <div className="container">
        <div className="section-label reveal"><span>Trust &amp; Security</span></div>
        <h2 className="section-title reveal">Enterprise-grade security. Transparent compliance posture.</h2>
        <div className="trust-grid">
          {badges.map((b, i) => (
            <div className={`trust-card ${b.status === 'roadmap' ? 'trust-card-roadmap' : ''} reveal`} key={i}>
              <div className="trust-card-title">
                {b.title}
                {b.status === 'roadmap' && <span className="roadmap-badge">In Progress</span>}
              </div>
              <div className="trust-card-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
