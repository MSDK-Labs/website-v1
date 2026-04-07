export default function DeploymentSection() {
  const options = [
    {
      title: 'Cloud API',
      subtitle: 'Get started in days',
      desc: 'Managed service hosted on Google Cloud Platform in EU data centres (europe-west2, London). Sub-2s API response time. No infrastructure to manage. Your compliance team is operational within a week.',
      best: 'Firms wanting fast time-to-value with managed infrastructure.',
    },
    {
      title: 'Private Cloud',
      subtitle: 'Your cloud, your control',
      desc: 'Containerised deployment in your own cloud tenant, whether AWS, GCP, or Azure. Complete data sovereignty. Managed updates. Your security team retains full network control.',
      best: 'Firms with existing cloud infrastructure and data residency requirements.',
    },
    {
      title: 'On-Premises',
      subtitle: 'Nothing leaves your network',
      desc: 'Full deployment within your own data centres. Air-gapped and restricted network environments supported. For the most regulated environments where data must never leave the premises.',
      best: 'Firms with the strictest data sovereignty and regulatory requirements.',
    },
  ]

  return (
    <section id="deployment">
      <div className="container">
        <div className="section-label reveal"><span>Deployment</span></div>
        <h2 className="section-title reveal">Deploy where your compliance architecture requires.</h2>
        <div className="cards-grid-3">
          {options.map((o, i) => (
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
  )
}
