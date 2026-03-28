import RequestForm from '@/components/RequestForm'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-badge reveal">Trusted by regulated enterprises</div>
              <h1 className="reveal">Every AI decision, cryptographically auditable.</h1>
              <p className="hero-sub reveal">One API call generates signed, immutable audit records for every model decision, retrievable on demand for regulatory review, internal audit, or litigation.</p>
              <div className="hero-ctas reveal">
                <a href="#request-access" className="btn-primary" data-scroll>Start Integration &rarr;</a>
                <a href="#how-it-works" className="btn-secondary" data-scroll>View Documentation</a>
              </div>
            </div>
            <div className="hero-right reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/decisions</div>
                <div className="header-line">Content-Type: application/json</div>
                <br />
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;agent_id&quot;:</span> <span className="value">&quot;underwriting-model-v3&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;decision&quot;:</span> <span className="value">&quot;approve&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;confidence&quot;:</span> <span className="value">0.9412</span>,</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;inputs_hash&quot;:</span> <span className="value">&quot;sha256:8f14e...&quot;</span></div>
                <div>{'}'}</div>
                <hr className="sep" />
                <div className="res-status">201 Created</div>
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;audit_record_id&quot;:</span> <span className="value">&quot;AT-2026-07-14-c3a9f1e&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;status&quot;:</span> <span className="value">&quot;sealed&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="key">&quot;hmac&quot;:</span> <span className="value">&quot;b7e2d4...f19a03&quot;</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal">
              <div className="stat-value">$40B+</div>
              <div className="stat-desc">Annual losses from AI-related compliance failures</div>
              <div className="stat-source">Deloitte, 2025</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-value">78%</div>
              <div className="stat-desc">Of enterprises cannot reconstruct AI decisions for audit</div>
              <div className="stat-source">KPMG, 2025</div>
            </div>
            <div className="stat-item reveal">
              <div className="stat-value">Aug 2026</div>
              <div className="stat-desc">EU AI Act high-risk enforcement deadline</div>
              <div className="stat-source">European Commission</div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES / PROBLEM */}
      <section id="problem">
        <div className="container">
          <div className="section-label reveal"><span>Industries</span></div>
          <h2 className="section-title reveal">Wherever AI influences a regulated outcome, that decision must be evidenced.</h2>
          <div className="cards-grid-industries">
            <div className="card reveal">
              <div className="card-title">Financial Services</div>
              <div className="card-desc">Suitability, credit, and portfolio decisions. FCA PS22/3, MiFID II, Consumer Duty.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Healthcare</div>
              <div className="card-desc">Clinical decision support and diagnostic AI. MHRA, MDR, patient safety.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Insurance &amp; Legal</div>
              <div className="card-desc">Underwriting, claims, and legal AI. Solvency II, FCA ICOBS, judicial review.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">HR &amp; Workforce</div>
              <div className="card-desc">Hiring, performance, and compensation AI. High-risk under EU AI Act Annex III.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Any Industry</div>
              <div className="card-desc">Custom redaction profiles. Telecom, retail, government: you define the identifier types.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-label reveal"><span>How it works</span></div>
          <h2 className="section-title reveal">From model inference to signed audit record.</h2>
          <div className="steps-grid">
            <div className="step-card reveal">
              <div className="step-num">01</div>
              <div className="step-title">Capture</div>
              <div className="step-desc">Your system sends a structured decision payload to a single REST endpoint.</div>
            </div>
            <div className="step-card reveal">
              <div className="step-num">02</div>
              <div className="step-title">Process</div>
              <div className="step-desc">Redaction sidecar runs inside your network. 34 recognisers, 13 EU countries, 9 languages. PII never leaves.</div>
            </div>
            <div className="step-card reveal">
              <div className="step-num">03</div>
              <div className="step-title">Sign</div>
              <div className="step-desc">Payload hashed and signed with HMAC-SHA256. Managed key infrastructure.</div>
            </div>
            <div className="step-card reveal">
              <div className="step-num">04</div>
              <div className="step-title">Store</div>
              <div className="step-desc">Written to append-only, WORM-locked store with defined retention policy.</div>
            </div>
          </div>
          <div className="certificate-card reveal">
            <div className="certificate-header">
              <span className="certificate-header-title">AEGIS TRACE AUDIT RECORD</span>
              <span className="verified-badge">VERIFIED</span>
            </div>
            <div className="certificate-body">
              <div><span className="key">audit_record_id</span>&nbsp;&nbsp;<span className="value">AT-2026-07-14-c3a9f1e</span></div>
              <div><span className="key">agent_id</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">underwriting-model-v3</span></div>
              <div><span className="key">verdict</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value-green">PASS</span></div>
              <div><span className="key">confidence</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">0.9412</span></div>
              <div><span className="key">hmac_signature</span>&nbsp;<span className="value">b7e2d4c8...f19a03e1</span></div>
              <div><span className="key">regulatory_refs</span> <span className="value">FCA PS22/3, MiFID II</span></div>
              <div><span className="key">sealed_at</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">2026-07-14T09:31:44Z</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Deployment</span></div>
          <h2 className="section-title reveal">Deploy where your architecture requires.</h2>
          <div className="cards-grid-3">
            <div className="card reveal">
              <div className="card-title">Cloud API</div>
              <div className="card-desc">Managed service. Single REST endpoint. Sub-2s p99 latency. No infrastructure to operate.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">On-Premises</div>
              <div className="card-desc">Full deployment within your infrastructure. Air-gapped and restricted environments supported.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Private Cloud</div>
              <div className="card-desc">Containerised deployment in your cloud tenant. Complete data sovereignty and access control.</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE / REGULATORY */}
      <section id="regulatory">
        <div className="container">
          <div className="section-label reveal"><span>Compliance</span></div>
          <h2 className="section-title reveal">Mapped to the regulations governing AI-driven decisions.</h2>
          <div className="cards-grid-2x3">
            <div className="card reveal"><div className="card-title">FCA PS22/3</div><div className="card-desc">Suitability evidence for consumer investment advice</div></div>
            <div className="card reveal"><div className="card-title">Consumer Duty</div><div className="card-desc">Outcome monitoring for client-appropriate recommendations</div></div>
            <div className="card reveal"><div className="card-title">EU AI Act Art.12</div><div className="card-desc">Automatic logging of high-risk AI system decisions</div></div>
            <div className="card reveal"><div className="card-title">MiFID II</div><div className="card-desc">Audit trail for investment decisions and order execution</div></div>
            <div className="card reveal"><div className="card-title">GDPR Art.30</div><div className="card-desc">Records of automated processing involving personal data</div></div>
            <div className="card reveal"><div className="card-title">FCA SYSC 9</div><div className="card-desc">Record retention to reconstruct regulated activities</div></div>
          </div>
          <div className="guarantee-card reveal">
            <div className="card-badge">Architecture Guarantee</div>
            <div className="card-title">GDPR Art.25</div>
            <div className="card-desc">PII never leaves your network. Privacy enforced by design.</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-label reveal"><span>The team</span></div>
          <h2 className="section-title reveal">Built by practitioners from regulated financial environments.</h2>
          <div className="team-grid">
            <div className="team-body reveal">
              <p>MSDK Labs is formed by engineers and delivery specialists with direct experience of FCA-regulated environments, audit processes, and section 166 reviews. The product is designed to meet the practical requirements of evidencing AI-driven decisions under regulatory scrutiny.</p>
            </div>
            <div className="team-cards">
              <div className="card reveal">
                <div className="card-title">Regulated financial services</div>
                <div className="card-desc">Enterprise delivery at wealth managers across the UK and EU and FCA and EU-regulated firms. We understand compliance requirements from the inside.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Production AI systems</div>
                <div className="card-desc">Production AI systems, API architecture, and the engineering required to make machine-learning decisions auditable at scale.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Compliance architecture</div>
                <div className="card-desc">FCA examination processes, section 166 reviews, and the evidence formats compliance teams are required to present.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST ACCESS */}
      <RequestForm />
    </main>
  )
}
