import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developers · Aegis Trace | API Reference, Integration, Technical Architecture',
  description: 'Submit your first decision via REST API. Technical architecture, API reference, and deployment options for Aegis Trace.',
}

const examples = [
  {
    title: 'Financial services — suitability recommendation',
    code: `POST /v1/certificates
X-API-Key: <your-api-key>
Content-Type: application/json

{
  "agent_id": "suitability-engine-v3",
  "decision_type": "portfolio_recommendation",
  "decision_payload": {
    "action": "REDUCE_EXPOSURE",
    "fund": "GB00B3X7QG63",
    "rationale": "Risk profile mismatch; objective: capital preservation",
    "confidence": 0.94
  },
  "regulatory_context": ["FCA_CONSUMER_DUTY", "EU_AI_ACT_ART12"],
  "client_ref": "[REDACTED]"
}

# Response: HTTP 202
# { "certificate_id": "AT-2026-07-14-c3a9f1e", "status": "QUEUED" }`,
  },
  {
    title: 'Healthcare — clinical decision support',
    code: `POST /v1/certificates
X-API-Key: <your-api-key>
Content-Type: application/json

{
  "agent_id": "clinical-dss-v2",
  "decision_type": "drug_interaction_flag",
  "decision_payload": {
    "flag": "INTERACTION_WARNING",
    "severity": "HIGH",
    "recommendation": "REVIEW_BEFORE_PRESCRIBING",
    "confidence": 0.91
  },
  "regulatory_context": ["GDPR_ART22"],
  "client_ref": "[REDACTED]"
}

# Response: HTTP 202
# { "certificate_id": "AT-2026-07-14-c9d2e8f", "status": "QUEUED" }`,
  },
  {
    title: 'Insurance — automated underwriting',
    code: `POST /v1/certificates
X-API-Key: <your-api-key>
Content-Type: application/json

{
  "agent_id": "underwriting-model-v4",
  "decision_type": "policy_assessment",
  "decision_payload": {
    "decision": "DECLINE",
    "risk_score": 0.847,
    "primary_factors": ["claims_history", "sector_risk"],
    "confidence": 0.85
  },
  "regulatory_context": ["GDPR_ART22", "EU_AI_ACT_ART12"],
  "client_ref": "[REDACTED]"
}

# Response: HTTP 202
# { "certificate_id": "AT-2026-07-14-d4c1b8e", "status": "QUEUED" }`,
  },
  {
    title: 'Credit — mortgage decisioning',
    code: `POST /v1/certificates
X-API-Key: <your-api-key>
Content-Type: application/json

{
  "agent_id": "credit-scoring-v2",
  "decision_type": "mortgage_assessment",
  "decision_payload": {
    "decision": "DECLINE",
    "risk_score": 0.782,
    "primary_factors": ["debt_to_income_ratio", "employment_tenure"],
    "confidence": 0.88
  },
  "regulatory_context": ["GDPR_ART22", "EU_AI_ACT_ART12"],
  "client_ref": "[REDACTED]"
}

# Response: HTTP 202
# { "certificate_id": "AT-2026-07-14-e7f3b2a", "status": "QUEUED" }`,
  },
  {
    title: 'Algorithmic trading — execution decision',
    code: `POST /v1/certificates
X-API-Key: <your-api-key>
Content-Type: application/json

{
  "agent_id": "algo-trading-v7",
  "decision_type": "execution_order",
  "decision_payload": {
    "action": "SELL",
    "instrument": "GBPUSD",
    "quantity": 500000,
    "signal_strength": 0.91,
    "market_condition": "HIGH_VOLATILITY"
  },
  "regulatory_context": ["FCA_CONSUMER_DUTY", "EU_AI_ACT_ART12"]
}

# Response: HTTP 202
# { "certificate_id": "AT-2026-07-14-f9a2c7d", "status": "QUEUED" }`,
  },
]

export default function Developers() {
  const endpoints = [
    { method: 'POST', path: '/v1/certificates', desc: 'Submit a decision (returns HTTP 202 + certificate_id)' },
    { method: 'GET', path: '/v1/certificates/{certificate_id}', desc: 'Retrieve a certificate' },
    { method: 'GET', path: '/v1/certificates', desc: 'List certificates (paginated, filterable by verdict, agent, framework, date)' },
    { method: 'GET', path: '/v1/certificates/{certificate_id}/verify', desc: 'Verify certificate integrity' },
    { method: 'GET', path: '/v1/stats', desc: 'Aggregate verdict statistics (by period, agent, framework)' },
    { method: 'GET', path: '/v1/export/fca', desc: 'Export FCA Consumer Duty format' },
    { method: 'GET', path: '/v1/export/euai', desc: 'Export EU AI Act Article 12 format' },
    { method: 'GET', path: '/v1/reconciliation', desc: 'Completeness check (surfaces gaps between submitted decisions and completed certificates)' },
  ]

  const pipeline = [
    { num: '01', desc: 'Decision submitted via POST /v1/certificates, authenticated with an X-API-Key header. HTTP 202 is returned immediately with a certificate_id. The client system is never blocked.' },
    { num: '02', desc: 'PII redaction via a Presidio sidecar that runs inside the client’s own network. The client deploys and manages it. MSDK Labs has no access to raw personal data; only redacted records are transmitted to the ingestion API.' },
    { num: '03', desc: 'The server computes the payload hash and runs a regulatory assessment against FCA Consumer Duty and EU AI Act Article 12. A verdict is produced — PASS, FAIL, or FLAG — with regulatory citations.' },
    { num: '04', desc: 'An RFC 3161 trusted timestamp is obtained from an independent timestamping authority, then the certificate is signed with Google Cloud KMS. The timestamp is independent of MSDK Labs infrastructure, providing auditor-verifiable proof of issuance time.' },
    { num: '05', desc: 'The signed certificate is stored in two locations: object storage (the immutable, tamper-evident object) and a queryable database. It is then retrievable via API.' },
  ]

  const infra = [
    { title: 'Compute', desc: 'Google Kubernetes Engine (GKE), autoscaling, multi-zone availability' },
    { title: 'Database', desc: 'AlloyDB (PostgreSQL-compatible), managed backups, point-in-time recovery' },
    { title: 'Key management', desc: 'Google Cloud KMS, managed key infrastructure, automatic key rotation' },
    { title: 'Data residency', desc: 'UK and EU (europe-west2, London), GDPR-compliant data processing' },
    { title: 'Security', desc: 'mTLS for service-to-service transport. RFC 3161 trusted timestamping via an independent authority, providing auditor-verifiable proof of certificate issuance time independent of MSDK Labs infrastructure.' },
    { title: 'Availability', desc: 'Records are sealed and become retrievable in seconds. Multi-zone, autoscaling infrastructure.' },
  ]

  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>For developers</span></div>
          <h1 className="section-title reveal">Submit your first decision in minutes.</h1>
          <p className="dev-intro reveal">
            A single REST API endpoint for submitting decisions. Language-agnostic. OpenAPI 3.0 specification provided on access. Built for engineering teams integrating AI traceability into production systems.
          </p>
        </div>
      </section>

      {/* QUICK START */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label reveal"><span>Quick start</span></div>
          <h2 className="section-title reveal">One integration. Complete decision evidence.</h2>
          <div className="dev-code-card reveal">
            <div className="dev-code-header">
              <span className="dev-tab active">curl</span>
              <span className="dev-tab">Python</span>
              <span className="dev-tab">Node.js</span>
            </div>
            <div className="dev-code-body">
              <pre className="uc-pre">{`# Submit a decision to the certificates API
curl -X POST https://api.aegistrace.ai/v1/certificates \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "agent_id": "suitability-engine-v3",
    "decision_type": "portfolio_recommendation",
    "decision_payload": {
      "action": "REDUCE_EXPOSURE",
      "rationale": "Risk profile mismatch",
      "confidence": 0.94
    },
    "regulatory_context": ["FCA_CONSUMER_DUTY"]
  }'

# Response: HTTP 202
# {
#   "certificate_id": "AT-2026-07-14-c3a9f1e",
#   "status": "QUEUED"
# }`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST SCHEMA */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Request schema</span></div>
          <h2 className="section-title reveal">The request body.</h2>
          <div className="dev-endpoints reveal" style={{ maxWidth: '760px' }}>
            <div className="dev-endpoint"><code className="dev-path">agent_id</code><span className="dev-endpoint-desc">string — identifier of the AI system that made the decision</span></div>
            <div className="dev-endpoint"><code className="dev-path">decision_type</code><span className="dev-endpoint-desc">string — the kind of decision (e.g. portfolio_recommendation)</span></div>
            <div className="dev-endpoint"><code className="dev-path">decision_payload</code><span className="dev-endpoint-desc">object — the decision inputs and outputs to be sealed</span></div>
            <div className="dev-endpoint"><code className="dev-path">regulatory_context</code><span className="dev-endpoint-desc">array — one or more of FCA_CONSUMER_DUTY | EU_AI_ACT_ART12 | GDPR_ART22</span></div>
            <div className="dev-endpoint"><code className="dev-path">client_ref</code><span className="dev-endpoint-desc">string, optional — your own reference for the decision</span></div>
          </div>
          <p className="dev-auth-note reveal">
            There is no <code>tenant_id</code> field — your tenant is derived from the API key. There is no client-supplied hash — the server computes the payload hash. The response is <code>HTTP 202</code> with a <code>certificate_id</code>.
          </p>
        </div>
      </section>

      {/* EXAMPLES */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Examples</span></div>
          <h2 className="section-title reveal">Five decisions, one schema.</h2>
          {examples.map((ex) => (
            <div className="dev-example reveal" key={ex.title}>
              <div className="dev-example-title">{ex.title}</div>
              <div className="terminal-card">
                <pre className="uc-pre">{ex.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Architecture</span></div>
          <h2 className="section-title reveal">How the pipeline works.</h2>
          <div className="dev-pipeline">
            {pipeline.map((p) => (
              <div className="dev-pipeline-step reveal" key={p.num}>
                <div className="layer-num">{p.num}</div>
                <div className="dev-pipeline-desc">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="dev-infra reveal">
            <div className="dev-infra-title">Infrastructure</div>
            <div className="dev-infra-grid">
              {infra.map((it) => (
                <div className="dev-infra-item" key={it.title}>
                  <div className="card-title">{it.title}</div>
                  <div className="card-desc">{it.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API REFERENCE */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>API reference</span></div>
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
            All endpoints authenticate with an API key in the <code>X-API-Key</code> header, provisioned during onboarding. Service-to-service transport additionally uses mTLS.
          </p>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Deployment</span></div>
          <h2 className="section-title reveal">Deployment options.</h2>
          <div className="cards-grid-3">
            <div className="card reveal">
              <div className="card-subtitle">Cloud API</div>
              <div className="card-title">Managed service</div>
              <div className="card-desc">REST endpoint with OpenAPI 3.0 specification. Autoscaling. No infrastructure to manage.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">Private cloud</div>
              <div className="card-title">Containerised</div>
              <div className="card-desc">Docker/Kubernetes deployment. Helm charts provided. Managed updates via container registry. AWS, GCP, or Azure.</div>
            </div>
            <div className="card reveal">
              <div className="card-subtitle">On-premises</div>
              <div className="card-title">Air-gapped</div>
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
              <div className="card-desc">A single REST endpoint for submitting decisions. OpenAPI 3.0 specification provided on access. Language-agnostic. Any system that can make an HTTPS POST request can integrate. Typical integration takes less than a day.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Authentication</div>
              <div className="card-desc">Every endpoint authenticates with an API key in the X-API-Key header. Your engineering team is provisioned credentials during onboarding. Service-to-service transport additionally uses mTLS.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Webhook support</div>
              <div className="card-desc">Configure webhooks for FLAG and FAIL verdicts. Receive real-time notifications in your compliance or incident-management systems when a decision fails assessment.</div>
            </div>
          </div>
          <div className="dev-extras reveal">
            <div className="card">
              <div className="card-title">Reconciliation</div>
              <div className="card-desc">The reconciliation endpoint confirms that every submitted decision has a corresponding completed certificate. Use it to detect pipeline gaps and demonstrate to auditors that no decisions were missed.</div>
            </div>
            <div className="card">
              <div className="card-title">Documentation</div>
              <div className="card-desc">Comprehensive API reference, authentication guides, quickstart tutorials, and FCA compliance mapping guides are provided to onboarded organisations. Request access for full technical documentation.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get access</span></div>
          <h2 className="section-title reveal">Request API access and technical documentation.</h2>
          <div className="reveal">
            <Link href="/#request-access" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Request access &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
