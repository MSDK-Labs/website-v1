import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Eyebrow from '@/components/Eyebrow'

export const metadata: Metadata = {
  title: 'Developers · Aegis Trace | API Reference, Integration, Technical Architecture',
  description: 'Submit your first decision via REST API. Technical architecture, API reference, and deployment options for Aegis Trace.',
}

const quickstart = `# Submit a decision to the certificates API
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
# }`

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

const schema = [
  { f: 'agent_id', d: 'string — identifier of the AI system that made the decision' },
  { f: 'decision_type', d: 'string — the kind of decision (e.g. portfolio_recommendation)' },
  { f: 'decision_payload', d: 'object — the decision inputs and outputs to be sealed' },
  { f: 'regulatory_context', d: 'array — one or more of FCA_CONSUMER_DUTY | EU_AI_ACT_ART12 | GDPR_ART22' },
  { f: 'client_ref', d: 'string, optional — your own reference for the decision' },
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

const endpoints = [
  { m: 'POST', p: '/v1/certificates', d: 'Submit a decision (returns HTTP 202 + certificate_id)' },
  { m: 'GET', p: '/v1/certificates/{certificate_id}', d: 'Retrieve a certificate' },
  { m: 'GET', p: '/v1/certificates', d: 'List certificates (paginated, filterable by verdict, agent, framework, date)' },
  { m: 'GET', p: '/v1/certificates/{certificate_id}/verify', d: 'Verify certificate integrity' },
  { m: 'GET', p: '/v1/stats', d: 'Aggregate verdict statistics (by period, agent, framework)' },
  { m: 'GET', p: '/v1/export/fca', d: 'Export FCA Consumer Duty format' },
  { m: 'GET', p: '/v1/export/euai', d: 'Export EU AI Act Article 12 format' },
  { m: 'GET', p: '/v1/reconciliation', d: 'Completeness check (surfaces gaps between submitted decisions and completed certificates)' },
]

const deployment = [
  { sub: 'Cloud API', title: 'Managed service', desc: 'REST endpoint with OpenAPI 3.0 specification. Autoscaling. No infrastructure to manage.' },
  { sub: 'Private cloud', title: 'Containerised', desc: 'Docker/Kubernetes deployment. Helm charts provided. Managed updates via container registry. AWS, GCP, or Azure.' },
  { sub: 'On-premises', title: 'Air-gapped', desc: 'Full deployment package. Offline installation supported. Deployment specifications provided during planning.' },
]

const integration = [
  { title: 'REST API', desc: 'A single REST endpoint for submitting decisions. OpenAPI 3.0 specification provided on access. Language-agnostic. Any system that can make an HTTPS POST request can integrate. Typical integration takes less than a day.' },
  { title: 'Authentication', desc: 'Every endpoint authenticates with an API key in the X-API-Key header. Your engineering team is provisioned credentials during onboarding. Service-to-service transport additionally uses mTLS.' },
  { title: 'Webhook support', desc: 'Configure webhooks for FLAG and FAIL verdicts. Receive real-time notifications in your compliance or incident-management systems when a decision fails assessment.' },
  { title: 'Reconciliation', desc: 'The reconciliation endpoint confirms that every submitted decision has a corresponding completed certificate. Use it to detect pipeline gaps and demonstrate to auditors that no decisions were missed.' },
  { title: 'Documentation', desc: 'Comprehensive API reference, authentication guides, quickstart tutorials, and FCA compliance mapping guides are provided to onboarded organisations. Request access for full technical documentation.' },
]

export default function Developers() {
  return (
    <main>
      <PageHeader
        eyebrow="For developers"
        head="Submit your first decision"
        tail="in minutes."
        lead="A single REST API endpoint for submitting decisions. Language-agnostic. OpenAPI 3.0 specification provided on access. Built for engineering teams integrating AI traceability into production systems."
        texture
      />

      {/* QUICK START */}
      <section className="section">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Quick start</Eyebrow></div>
            <h2 className="statement b4-statement reveal">
              One integration. <span className="tone2">Complete decision evidence.</span>
            </h2>
          </div>
          <div className="codeblock reveal" style={{ marginTop: '48px' }}>
            <div className="dev-code-tabs">
              <span className="dev-code-tab active">curl</span>
              <span className="dev-code-tab">Python</span>
              <span className="dev-code-tab">Node.js</span>
            </div>
            <pre>{quickstart}</pre>
          </div>
        </div>
      </section>

      {/* REQUEST SCHEMA */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Request schema</Eyebrow></div>
            <h2 className="statement b4-statement reveal">The request body.</h2>
          </div>
          <div className="dgrid">
            {schema.map((s, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9375rem' }}>{s.f}</div>
                <p className="body-sm dcell-body">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: '48px' }}>
            There is no tenant_id field — your tenant is derived from the API key. There is no client-supplied hash — the server computes the payload hash. The response is HTTP 202 with a certificate_id.
          </p>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Examples</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Five decisions, <span className="tone2">one schema.</span></h2>
          </div>
        </div>
        <div className="container" style={{ marginTop: '32px' }}>
          {examples.map((ex) => (
            <div className="splitrow grid12 reveal" key={ex.title} style={{ paddingBlock: '72px' }}>
              <div className="splitrow-label">
                <div className="cell-title dev-example-title">{ex.title}</div>
              </div>
              <div className="splitrow-body">
                <div className="codeblock"><pre>{ex.code}</pre></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Architecture</Eyebrow></div>
            <h2 className="statement b4-statement reveal">How the pipeline <span className="tone2">works.</span></h2>
          </div>
          <div style={{ marginTop: '48px' }}>
            {pipeline.map((p) => (
              <div className="prow grid12 reveal" key={p.num}>
                <div className="mono-caption prow-label"><span className="eyebrow-n">{p.num}</span></div>
                <div className="prow-body"><p className="body">{p.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="grid12" style={{ marginTop: '64px' }}>
            <div className="b4-eyebrow"><Eyebrow>Infrastructure</Eyebrow></div>
          </div>
          <div className="dgrid" style={{ marginTop: '24px' }}>
            {infra.map((it, i) => (
              <div className="dcell reveal" key={it.title} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title">{it.title}</div>
                <p className="body-sm dcell-body">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API REFERENCE */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>API reference</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Key endpoints.</h2>
          </div>
          <div style={{ marginTop: '48px' }}>
            {endpoints.map((ep, i) => (
              <div className="prow grid12 reveal" key={i}>
                <div className="prow-label">
                  <div className="mono-caption" style={{ color: ep.m === 'POST' ? 'var(--verified)' : 'var(--ink)' }}>{ep.m}</div>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8125rem' }}>{ep.p}</code>
                </div>
                <div className="prow-body"><p className="body">{ep.d}</p></div>
              </div>
            ))}
          </div>
          <p className="body" style={{ marginTop: '32px' }}>
            All endpoints authenticate with an API key in the X-API-Key header, provisioned during onboarding. Service-to-service transport additionally uses mTLS.
          </p>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Deployment</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Deployment options.</h2>
          </div>
          <div className="dgrid">
            {deployment.map((o, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="mono-caption" style={{ marginBottom: '10px' }}>{o.sub}</div>
                <div className="cell-title">{o.title}</div>
                <p className="body-sm dcell-body">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Integration</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Connect your AI systems <span className="tone2">to Aegis Trace.</span></h2>
          </div>
          <div className="dgrid">
            {integration.map((it, i) => (
              <div className="dcell reveal" key={it.title} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title">{it.title}</div>
                <p className="body-sm dcell-body">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="grid12">
            <div className="cta-text reveal">
              <h2 className="statement">Request API access and <span className="tone2">technical documentation.</span></h2>
              <div style={{ marginTop: '40px' }}>
                <Link href="/#request-access" className="btn btn--on-band">Request access</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
