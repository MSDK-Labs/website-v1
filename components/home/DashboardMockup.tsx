export default function DashboardMockup() {
  const records = [
    { id: 'AT-2026-04-07-a3f8c1d', agent: 'suitability-engine-v3', verdict: 'PASS', date: '07 Apr 2026' },
    { id: 'AT-2026-04-07-b7e2d4c', agent: 'credit-scoring-v2', verdict: 'PASS', date: '07 Apr 2026' },
    { id: 'AT-2026-04-07-c9d2e8f', agent: 'portfolio-rebalance-v1', verdict: 'FLAG', date: '07 Apr 2026' },
    { id: 'AT-2026-04-06-d4c1b8e', agent: 'underwriting-model-v4', verdict: 'FAIL', date: '06 Apr 2026' },
    { id: 'AT-2026-04-06-e2f9a3b', agent: 'suitability-engine-v3', verdict: 'PASS', date: '06 Apr 2026' },
  ]

  // Simulated 30-day chart data (pass/flag/fail counts per day)
  const chartBars = [
    [38,1,0],[42,2,1],[35,0,0],[40,1,0],[44,0,1],[39,2,0],[41,1,0],
    [36,0,0],[43,1,1],[37,2,0],[45,0,0],[40,1,0],[38,1,1],[42,0,0],
    [41,2,0],[39,1,0],[44,0,1],[36,1,0],[43,2,0],[40,0,0],[38,1,0],
    [42,1,1],[37,0,0],[41,2,0],[39,1,0],[44,0,0],[40,1,1],[43,2,0],
    [38,1,0],[45,1,0],
  ]

  return (
    <div className="dashboard-wrapper" role="img" aria-label="Aegis Trace compliance dashboard showing AI decision audit records with pass, fail, and flag verdicts">
      {/* Browser window frame */}
      <div className="dashboard-window-chrome">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="window-title">Aegis Trace &ndash; Compliance Dashboard</div>
        <div className="window-spacer" />
      </div>

      <div className="dashboard-mockup">
        {/* App header */}
        <div className="dashboard-chrome">
          <div className="dashboard-app-name">
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M0 0H5V5H0V0Z" fill="#B8956A"/>
              <path d="M5 5H10V10H5V5Z" fill="#B8956A"/>
              <path d="M10 0H15V5H10V0Z" fill="#B8956A"/>
              <path d="M10 10H15V15H10V10Z" fill="#B8956A"/>
              <path d="M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z" fill="#B8956A"/>
            </svg>
            <span>Aegis Trace</span>
          </div>
          <div className="dashboard-nav-items">
            <span className="dashboard-nav-active">Decision Log</span>
            <span>Exports</span>
            <span>Settings</span>
          </div>
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
              <div className="kpi-value kpi-pass">
                97.3%
                <span className="kpi-delta kpi-delta-up">+0.4%</span>
              </div>
            </div>
            <div className="kpi-card kpi-card-flag">
              <div className="kpi-label">Flagged</div>
              <div className="kpi-value kpi-flag">34</div>
            </div>
            <div className="kpi-card kpi-card-fail">
              <div className="kpi-label">Failed</div>
              <div className="kpi-value kpi-fail">12</div>
            </div>
          </div>

          {/* Trend chart */}
          <div className="dashboard-chart">
            <div className="chart-label">Decision Volume &ndash; Last 30 Days</div>
            <div className="chart-bars">
              {chartBars.map((bar, i) => {
                const total = bar[0] + bar[1] + bar[2]
                const maxTotal = 50
                return (
                  <div className="chart-bar-col" key={i}>
                    <div
                      className="chart-bar-stack"
                      style={{ height: `${(total / maxTotal) * 100}%` }}
                    >
                      {bar[2] > 0 && (
                        <div
                          className="chart-segment chart-fail"
                          style={{ flex: bar[2] }}
                        />
                      )}
                      {bar[1] > 0 && (
                        <div
                          className="chart-segment chart-flag"
                          style={{ flex: bar[1] }}
                        />
                      )}
                      <div
                        className="chart-segment chart-pass"
                        style={{ flex: bar[0] }}
                      />
                    </div>
                  </div>
                )
              })}
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
              <div
                className={`table-row ${r.verdict === 'FLAG' ? 'table-row-flag' : ''} ${r.verdict === 'FAIL' ? 'table-row-fail' : ''}`}
                key={r.id}
              >
                <span className="col-id">{r.id}</span>
                <span className="col-agent">{r.agent}</span>
                <span className={`col-verdict verdict-${r.verdict.toLowerCase()}`}>{r.verdict}</span>
                <span className="col-date">{r.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reflection */}
      <div className="dashboard-reflection" />
    </div>
  )
}
