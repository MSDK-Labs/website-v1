export default function KPISection() {
  const stats = [
    { value: '75%', desc: 'of UK financial services firms are already using AI', source: 'Bank of England & FCA Joint Survey, 2024' },
    { value: '59%', desc: 'of institutions report measurable productivity gains from AI, up from 32% a year earlier', source: 'Lloyds Financial Institutions Sentiment Survey, 2025' },
    { value: '1 in 3', desc: 'UK customers use AI weekly to manage their money', source: 'Lloyds, 2025' },
    { value: 'August 2026', desc: 'EU AI Act high-risk enforcement begins. Most firms are not ready.', source: 'European Commission' },
  ]

  return (
    <section className="kpi-section">
      <div className="container">
        <div className="section-label reveal"><span>The Scale of the Problem</span></div>
        <h2 className="section-title reveal">The numbers that matter.</h2>
        <div className="kpi-stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item reveal" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-desc">{s.desc}</div>
              <div className="stat-source">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
