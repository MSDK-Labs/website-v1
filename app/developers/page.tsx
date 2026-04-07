import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developers — Aegis Trace | API Reference, SDKs, Technical Architecture',
  description: 'Log your first AI decision in 5 minutes. REST API, Python, Node.js, and Java SDKs. Technical architecture and deployment options for Aegis Trace.',
}

function CodeTabs() {
  return (
    <div className="dev-code-card reveal">
      <div className="dev-code-header">
        <span className="dev-tab active">Python</span>
        <span className="dev-tab">Node.js</span>
        <span className="dev-tab">Java</span>
      </div>
      <div className="dev-code-body">
        <pre className="uc-pre">{`# Install the SDK
pip install aegis-trace

# Log a decision
from aegis_trace import AegisClient

client = AegisClient(api_key="at_live_...")
record = client.log_decision(
    agent_id="suitability-engine-v3",
    decision_type="portfolio_recommendation",
    inputs={
        "client_risk_profile": "moderate",
        "market_conditions": "volatile"
    },
    output={
        "action": "REDUCE_EXPOSURE",
        "fund": "GB00B3X7QG63"
    },
    regulatory_context=["FCA_CONSUMER_DUTY", "MIFID_II"]
)

print(record.certificate_id)  # AT-2026-07-14-c3a9f1e
print(record.verdict)          # PASS
print(record.hmac_signature)   # b7e2d4c8...f19a03e1`}</pre>
      </div>
    </div>
  )
}

export default function Developers() {
  const endpoints = [
    { method: 'POST', path: '/v1/decisions', desc: 'Log a decision' },
    { method: 'GET', path: '/v1/decisions/{id}', desc: 'Retrieve a decision record' },
    { method: 'GET', path: '/v1/decisions', desc: 'List decisions (paginated, filterable)' },
    { method: 'GET', path: '/v1/export/fca', desc: 'Export FCA Consumer Duty format' },
    { method: 'GET', path: '/v1/export/euai', desc: 'Export EU AI Act Article 12 format' },
    { method: 'POST', path: '/v1/verify/{id}', desc: 'Verify certificate integrity' },
  ]

  const pipeline = [
    { num: '01', title: 'Decision payload sent via REST API or SDK' },
    { num: '02', title: 'PII redaction via Presidio sidecar (34 recognisers, 13 EU countries, 9 languages), runs inside client network' },
    { num: '03', title: 'HMAC-SHA256 signing with managed KMS key infrastructure' },
    { num: '04', title: 'Tamper-proof storage with configurable retention policy (7-year default)' },
    { num: '05', title: 'Certificate retrieval via API, sub-200ms p99 latency' },
  ]

  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>For Developers</span></div>
          <h1 className="section-title reveal" style={{ fontSize: '42px', lineHeight: 1.15 }}>
            Log your first AI decision in 5 minutes.
          </h1>
          <p className="reveal" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, maxWidth: '640px' }}>
            A single REST API endpoint. SDKs for Python, Node.js, and Java. Comprehensive documentation. Built for engineering teams integrating AI traceability into production systems.
          </p>
        </div>
      </section>

      {/* QUICK START */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Quick Start</span></div>
          <h2 className="section-title reveal">One integration. Complete decision provenance.</h2>
          <CodeTabs />
        </div>
      </section>

      {/* TECHNICAL ARCHITECTURE */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Architecture</span></div>
          <h2 className="section-title reveal">How the pipeline works.</h2>
          <div className="dev-pipeline">
            {pipeline.map((p) => (
              <div className="dev-pipeline-step reveal" key={p.num}>
                <div className="step-num">{p.num}</div>
                <div className="dev-pipeline-desc">{p.title}</div>
              </div>
            ))}
          </div>
          <div className="dev-infra reveal">
            <div className="mills-title">Infrastructure</div>
            <div className="dev-infra-grid">
              <div className="dev-infra-item">
                <div className="card-title">Compute</div>
                <div className="card-desc">Google Kubernetes Engine (GKE), autoscaling, multi-zone availability</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Database</div>
                <div className="card-desc">AlloyDB (PostgreSQL-compatible), managed backups, point-in-time recovery</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Key Management</div>
                <div className="card-desc">Google Cloud KMS, hardware security modules, automatic key rotation</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Data Residency</div>
                <div className="card-desc">europe-west2 (London), EU data processing, GDPR compliant</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Security</div>
                <div className="card-desc">mTLS for internal service communication, RFC 3161 timestamping</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Latency</div>
                <div className="card-desc">Sub-200ms p99 certificate retrieval, sub-2s end-to-end sealing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API REFERENCE */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>API Reference</span></div>
          <h2 className="section-title reveal">Key endpoints.</h2>
          <div className="dev-endpoints reveal">
            {endpoints.map((ep, i) => (
              <div className="dev-endpoint" key={i}>
                <span className={`dev-method dev-method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                <code className="dev-path">{ep.path}</code>
                <span className="dev-endpoint-desc">{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT OPTIONS */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Deployment</span></div>
          <h2 className="section-title reveal">Deployment options.</h2>
          <div className="cards-grid-3">
            <div className="card reveal">
              <div className="card-subtitle">Cloud API</div>
              <div className="card-title">Managed Service</div>
              <div className="card-desc">REST endpoint with OpenAPI 3.0 spec. Rate limits: 1,000 req/min (standard), custom limits available. 99.9% SLA. Auto-scaling. No infrastructure to manage.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">Private Cloud</div>
              <div className="card-title">Containerised</div>
              <div className="card-desc">Docker/Kubernetes deployment. Helm charts provided. Environment variables for configuration. Managed updates via container registry. AWS, GCP, or Azure.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">On-Premises</div>
              <div className="card-title">Air-Gapped</div>
              <div className="card-desc">Full deployment package. Offline installation supported. Network requirements: outbound HTTPS for updates (optional). Minimum: 4 vCPU, 16GB RAM, 500GB storage.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>SDKs &amp; Integration</span></div>
          <h2 className="section-title reveal">Client libraries and integration.</h2>
          <div className="cards-grid-3">
            <div className="card reveal">
              <div className="card-title">Python SDK</div>
              <div className="card-desc">Available via PyPI. Python 3.8+. Async support. Type hints throughout.</div>
              <div className="dev-code-inline">pip install aegis-trace</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Node.js SDK</div>
              <div className="card-desc">Available via npm. Node 18+. TypeScript definitions included. ESM and CJS.</div>
              <div className="dev-code-inline">npm install @aegis-trace/sdk</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Java SDK</div>
              <div className="card-desc">Available via Maven Central. Java 17+. Spring Boot integration module available.</div>
              <div className="dev-code-inline">com.aegistrace:aegis-sdk</div>
            </div>
          </div>
          <div className="dev-extras reveal">
            <div className="card">
              <div className="card-title">REST API</div>
              <div className="card-desc">OpenAPI 3.0 specification. Language-agnostic. Full API reference provided on access.</div>
            </div>
            <div className="card">
              <div className="card-title">Webhook Support</div>
              <div className="card-desc">Configure webhooks for FLAG and FAIL verdicts. Real-time notifications to your compliance or incident management systems.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get Access</span></div>
          <h2 className="section-title reveal">Request API access and technical documentation.</h2>
          <div className="reveal">
            <Link href="/request-access/" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Request Access &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
