export default function DashboardMockup() {
  const records = [
    { id: 'AT-2026-04-07-a3f8c1d', agent: 'suitability-engine-v3', verdict: 'PASS', date: '07 Apr 2026, 09:31' },
    { id: 'AT-2026-04-07-b7e2d4c', agent: 'credit-scoring-v2', verdict: 'PASS', date: '07 Apr 2026, 09:28' },
    { id: 'AT-2026-04-07-c9d2e8f', agent: 'portfolio-rebalance-v1', verdict: 'FLAG', date: '07 Apr 2026, 09:14' },
    { id: 'AT-2026-04-06-d4c1b8e', agent: 'underwriting-model-v4', verdict: 'FAIL', date: '06 Apr 2026, 17:42' },
    { id: 'AT-2026-04-06-e2f9a3b', agent: 'suitability-engine-v3', verdict: 'PASS', date: '06 Apr 2026, 16:55' },
    { id: 'AT-2026-04-06-f1c8d7e', agent: 'aml-screening-v2', verdict: 'PASS', date: '06 Apr 2026, 15:30' },
  ]

  return (
    <div className="dashboard-mockup" role="img" aria-label="Aegis Trace compliance dashboard showing real-time AI decision audit records with pass, fail, and flag verdicts">
      {/* Browser chrome */}
      <div className="dashboard-chrome">
        <div className="dashboard-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="dashboard-url">app.aegistrace.io/dashboard</div>
      </div>

      {/* Dashboard content */}
      <div className="dashboard-body">
        {/* KPI row */}
        <div className="dashboard-kpis">
          <div className="kpi-card">
            <div className="kpi-label">Total Records</div>
            <div className="kpi-value">12,847</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Pass Rate</div>
            <div className="kpi-value kpi-pass">97.3%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Flagged</div>
            <div className="kpi-value kpi-flag">34</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Failed</div>
            <div className="kpi-value kpi-fail">12</div>
          </div>
        </div>

        {/* Table */}
        <div className="dashboard-table">
          <div className="table-header">
            <span className="col-id">Certificate ID</span>
            <span className="col-agent">Agent</span>
            <span className="col-verdict">Verdict</span>
            <span className="col-date">Sealed</span>
          </div>
          {records.map((r) => (
            <div className="table-row" key={r.id}>
              <span className="col-id">{r.id}</span>
              <span className="col-agent">{r.agent}</span>
              <span className={`col-verdict verdict-${r.verdict.toLowerCase()}`}>{r.verdict}</span>
              <span className="col-date">{r.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
