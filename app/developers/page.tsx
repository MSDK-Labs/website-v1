import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developers , Aegis Trace | API Reference, Integration, Technical Architecture',
  description: 'Submit your first decision trace via REST API. Technical architecture and deployment options for Aegis Trace.',
}

function CodeTabs() {
  return (
    <div className="dev-code-card reveal">
      <div className="dev-code-header">
        <span className="dev-tab active">curl</span>
        <span className="dev-tab">Python</span>
        <span className="dev-tab">Node.js</span>
      </div>
      <div className="dev-code-body">
        <pre className="uc-pre">{`# Submit a decision trace to the ingestion API
curl -X POST https://api.aegistrace.ai/v1/audit \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  --cert client.crt --key client.key --cacert ca.crt \\
  -d '{
    "tenant_id": "your-tenant-id",
    "agent_id": "suitability-engine-v3",
    "decision_type": "portfolio_recommendation",
    "input_hash": "sha256:a3f8c1d...",
    "output": {
      "action": "REDUCE_EXPOSURE",
      "rationale": "Risk profile mismatch",
      "confidence": 0.94,
      "metadata": {}
    },
    "regulatory_context": ["FCA_PS22_3", "CONSUMER_DUTY"]
  }'

# Response: HTTP 202
# {
#   "certificate_id": "AT-2026-07-14-c3a9f1e",
#   "status": "QUEUED"
# }`}</pre>
      </div>
    </div>
  )
}

export default function Developers() {
  const endpoints = [
    { method: 'POST', path: '/v1/audit', desc: 'Submit a decision trace (returns HTTP 202 + certificate_id)', group: 'Submit' },
    { method: 'GET', path: '/v1/certificates/{certificate_id}', desc: 'Retrieve a certificate', group: 'Retrieve' },
    { method: 'GET', path: '/v1/certificates', desc: 'List certificates (paginated, filterable by verdict, agent, framework, date)', group: 'Retrieve' },
    { method: 'GET', path: '/v1/certificates/{certificate_id}/verify', desc: 'Verify certificate integrity', group: 'Verify' },
    { method: 'GET', path: '/v1/stats', desc: 'Aggregate verdict statistics (by period, agent, framework)', group: 'Retrieve' },
    { method: 'GET', path: '/v1/export/fca', desc: 'Export FCA Consumer Duty format', group: 'Export' },
    { method: 'GET', path: '/v1/export/euai', desc: 'Export EU AI Act Article 12 format', group: 'Export' },
    { method: 'GET', path: '/v1/reconciliation', desc: 'Completeness check (surfaces gaps between submitted traces and completed certificates)', group: 'Verify' },
  ]

  const pipeline = [
    { num: '01', title: 'Decision trace submitted via POST /v1/audit. Authenticated with mTLS and JWT. HTTP 202 returned immediately with certificate_id. The client system is never blocked.' },
    { num: '02', title: 'PII redaction via Presidio sidecar. Runs inside the client\'s network. The client deploys and manages it. MSDK Labs has no access to raw personal data. Only redacted traces are transmitted to the ingestion API.' },
    { num: '03', title: 'Regulatory assessment against FCA Consumer Duty and EU AI Act Article 12. Verdict produced: PASS, FAIL, or FLAG, with regulatory citations.' },
    { num: '04', title: 'RFC 3161 trusted timestamp obtained from an independent timestamping authority. Then the certificate is signed with Google Cloud KMS. The timestamp is independent of MSDK Labs infrastructure, providing auditor-verifiable proof of issuance time.' },
    { num: '05', title: 'Signed certificate stored in two locations: GCS (the immutable, tamper-evident object) and AlloyDB (the queryable record). Retrievable via API. Sub-200ms p99 latency.' },
  ]

  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>For Developers</span></div>
          <h1 className="section-title reveal" style={{ fontSize: '42px', lineHeight: 1.15 }}>
            Submit your first decision trace in minutes.
          </h1>
          <p className="reveal" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, maxWidth: '640px' }}>
            A single REST API endpoint for submitting decision traces. Language-agnostic. OpenAPI 3.0 specification provided on access. Built for engineering teams integrating AI traceability into production systems.
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
                <div className="card-desc">Google Cloud KMS, managed key infrastructure, automatic key rotation</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Data Residency</div>
                <div className="card-desc">europe-west2 (London), EU data processing, GDPR compliant</div>
              </div>
              <div className="dev-infra-item">
                <div className="card-title">Security</div>
                <div className="card-desc">mTLS for service authentication. RFC 3161 trusted timestamping via independent timestamping authority, providing auditor-verifiable proof of certificate issuance time independent of MSDK Labs infrastructure.</div>
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
          <p className="dev-auth-note reveal">
            The ingestion endpoint (<code>POST /v1/audit</code>) authenticates via mTLS and JWT. All retrieval and export endpoints authenticate via API key. Credentials are provisioned during onboarding.
          </p>
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
              <div className="card-desc">REST endpoint with OpenAPI 3.0 specification. Auto-scaling. No infrastructure to manage.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">Private Cloud</div>
              <div className="card-title">Containerised</div>
              <div className="card-desc">Docker/Kubernetes deployment. Helm charts provided. Environment variables for configuration. Managed updates via container registry. AWS, GCP, or Azure.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">On-Premises</div>
              <div className="card-title">Air-Gapped</div>
              <div className="card-desc">Full deployment package. Offline installation supported. Deployment specifications provided during planning.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Integration</span></div>
          <h2 className="section-title reveal">Connect your AI systems to Aegis Trace.</h2>
          <div className="cards-grid-3">
            <div className="card reveal">
              <div className="card-title">REST API</div>
              <div className="card-desc">A single REST endpoint for submitting decision traces. OpenAPI 3.0 specification provided on access. Language-agnostic. Any system that can make an HTTPS POST request can integrate. Typical integration takes less than a day.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Authentication</div>
              <div className="card-desc">The ingestion endpoint authenticates via mTLS and JWT. Your engineering team receives a CA certificate, client certificate, and client key during onboarding. All retrieval and export endpoints authenticate via API key (X-API-Key header). Credentials are provisioned and managed through the compliance dashboard.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Webhook Support</div>
              <div className="card-desc">Configure webhooks for FLAG and FAIL verdicts. Receive real-time notifications in your compliance or incident management systems when a decision fails assessment.</div>
            </div>
          </div>
          <div className="dev-extras reveal">
            <div className="card">
              <div className="card-title">Reconciliation</div>
              <div className="card-desc">The reconciliation endpoint confirms that every submitted decision trace has a corresponding completed certificate. Use it to detect pipeline gaps and demonstrate to auditors that no decisions were missed.</div>
            </div>
            <div className="card">
              <div className="card-title">Documentation</div>
              <div className="card-desc">Comprehensive API reference, authentication guides, quickstart tutorials, and FCA compliance mapping guides provided to onboarded organisations. Request access for full technical documentation.</div>
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
