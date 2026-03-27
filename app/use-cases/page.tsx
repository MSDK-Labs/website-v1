import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Use Cases — Aegis Trace',
  description: 'Real-world examples of Aegis Trace in regulated financial services, healthcare, and insurance.',
}

function RegPill({ children }: { children: string }) {
  return <span className="uc-reg-pill">{children}</span>
}

export default function UseCases() {
  return (
    <main>
      {/* HERO */}
      <section style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="section-label reveal"><span>Use Cases</span></div>
          <h1 className="section-title reveal" style={{ fontSize: '42px', lineHeight: 1.15, maxWidth: '760px' }}>
            From AI decision to compliance certificate. In every regulated context.
          </h1>
          <p className="reveal" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, maxWidth: '580px' }}>
            Aegis Trace is infrastructure. The same API, the same certificate format, and the same audit trail — applied to every regulated industry where AI systems influence outcomes that must be evidenced.
          </p>
        </div>
      </section>

      {/* USE CASE 01 — FINANCIAL SERVICES */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 01 — Financial Services</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            A wealth manager&apos;s AI recommends selling a position. The FCA asks why.
          </h2>
          <div className="uc-grid">
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                A client&apos;s portfolio is reviewed by an AI-assisted suitability engine. It recommends reducing exposure to a fund based on risk profile, market conditions, and client objectives. Six months later, the FCA requests evidence that the recommendation was suitable under Consumer Duty. Without Aegis Trace, the firm has application logs. With Aegis Trace, they have a signed certificate.
              </p>
              <h3 className="uc-subheading">The regulations</h3>
              <div className="uc-pills">
                <RegPill>FCA PS22/3</RegPill>
                <RegPill>Consumer Duty</RegPill>
                <RegPill>MiFID II</RegPill>
                <RegPill>EU AI Act Art.12</RegPill>
              </div>
            </div>
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/certificates</div>
                <pre className="uc-pre">{`{
  "agent_id": "suitability-engine-v3",
  "decision_type": "portfolio_recommendation",
  "input_hash": "sha256:a3f8c1d...",
  "output": {
    "action": "REDUCE_EXPOSURE",
    "fund": "GB00B3X7QG63",
    "rationale": "Risk profile mismatch — client objective: capital preservation"
  },
  "regulatory_context": ["FCA_PS22_3", "CONSUMER_DUTY"],
  "client_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 — Certificate Issued</span>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-22-f8a3c1d",
  "verdict": "PASS",
  "confidence": 0.9847,
  "hmac_signature": "a3f8c1d9e2b4f...",
  "pii_redacted": true,
  "regulatory_refs": ["FCA PS22/3", "Consumer Duty"],
  "sealed_at": "2026-03-22T11:53:52Z",
  "retention_until": "2033-03-22T00:00:00Z"
}`}</pre>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the FCA receives:</strong> A tamper-proof certificate with cryptographic proof of every input, output, and regulatory mapping — retrievable via API in under 200ms.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 02 — HEALTHCARE */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 02 — Healthcare &amp; Life Sciences</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            A clinical decision support system flags a drug interaction. The MHRA needs the audit trail.
          </h2>
          <div className="uc-grid uc-grid-reverse">
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/certificates</div>
                <pre className="uc-pre">{`{
  "agent_id": "clinical-dss-v2",
  "decision_type": "drug_interaction_flag",
  "input_hash": "sha256:b7e2a9f...",
  "output": {
    "flag": "INTERACTION_WARNING",
    "severity": "HIGH",
    "drug_pair": "[REDACTED]",
    "recommendation": "REVIEW_BEFORE_PRESCRIBING"
  },
  "regulatory_context": ["MHRA_AI", "EU_MDR"],
  "patient_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 — Certificate Issued</span>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-14-c9d2e8f",
  "verdict": "PASS",
  "oversight_required": true,
  "pii_redacted": true,
  "regulatory_refs": ["MHRA AI Guidance", "EU MDR Art.61"],
  "sealed_at": "2026-03-14T09:22:11Z",
  "retention_until": "2036-03-14T00:00:00Z"
}`}</pre>
              </div>
            </div>
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An AI system assists a clinician by flagging a potential drug interaction based on a patient&apos;s prescription history. The recommendation influences the prescribing decision. Under MHRA AI regulations and the EU MDR, the hospital must demonstrate the AI&apos;s recommendation was within validated parameters and was appropriately overseen.
              </p>
              <h3 className="uc-subheading">The regulations</h3>
              <div className="uc-pills">
                <RegPill>MHRA AI Guidance</RegPill>
                <RegPill>EU MDR Art.61</RegPill>
                <RegPill>NHS AI Framework</RegPill>
                <RegPill>GDPR Art.22</RegPill>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the MHRA receives:</strong> A complete decision record with validated model version, redacted patient reference, severity classification, and cryptographic seal — structured for regulatory submission.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 03 — INSURANCE */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 03 — Insurance &amp; Legal Services</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            An underwriting model declines a policy. The applicant requests an explanation under GDPR Art.22.
          </h2>
          <div className="uc-grid">
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An automated underwriting model assesses a commercial insurance application and returns a decline decision. Under GDPR Article 22 and FCA ICOBS, the applicant has the right to request a meaningful explanation of the automated decision. The insurer must produce a record of what the model assessed, what it decided, and on what basis.
              </p>
              <h3 className="uc-subheading">The regulations</h3>
              <div className="uc-pills">
                <RegPill>GDPR Art.22</RegPill>
                <RegPill>FCA ICOBS</RegPill>
                <RegPill>Solvency II</RegPill>
                <RegPill>EU AI Act Art.12</RegPill>
              </div>
            </div>
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/certificates</div>
                <pre className="uc-pre">{`{
  "agent_id": "underwriting-model-v4",
  "decision_type": "policy_assessment",
  "input_hash": "sha256:d4c1b8e...",
  "output": {
    "decision": "DECLINE",
    "risk_score": 0.847,
    "primary_factors": ["claims_history", "sector_risk"],
    "explanation_ref": "EXP-2026-03-11-449"
  },
  "regulatory_context": ["GDPR_ART22", "FCA_ICOBS"],
  "applicant_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 — Certificate Issued</span>
                  <span className="verified-badge">VERIFIED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-11-d4c1b8e",
  "verdict": "PASS",
  "explanation_available": true,
  "pii_redacted": true,
  "regulatory_refs": ["GDPR Art.22", "FCA ICOBS", "Solvency II"],
  "sealed_at": "2026-03-11T14:07:33Z",
  "retention_until": "2033-03-11T00:00:00Z"
}`}</pre>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the applicant and regulator receive:</strong> A structured explanation record tied to a cryptographic certificate — satisfying the GDPR Article 22 right to explanation and FCA ICOBS evidencing requirements.
          </div>
        </div>
      </section>

      {/* THE COMMON THREAD */}
      <section>
        <div className="container">
          <div className="uc-common-box reveal">
            <h3 style={{ fontSize: '28px', fontWeight: 500, marginBottom: '36px', letterSpacing: '-0.01em' }}>
              The regulation changes. The requirement does not.
            </h3>
            <div className="uc-common-grid">
              <div>
                <div className="card-title">A decision was made</div>
                <div className="card-desc">An AI system produced an output that influenced a regulated outcome.</div>
              </div>
              <div>
                <div className="card-title">Evidence is required</div>
                <div className="card-desc">A regulator, auditor, or court asks: what produced that output, when, and was it appropriate?</div>
              </div>
              <div>
                <div className="card-title">Aegis Trace provides it</div>
                <div className="card-desc">A cryptographically signed certificate exists for every decision. Retrievable in under 200ms. Exportable for submission.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Private Beta</span></div>
          <h2 className="section-title reveal">Tell us your regulatory context.</h2>
          <p className="cta-sub reveal">We will confirm whether Aegis Trace covers your specific requirements and provide relevant technical documentation.</p>
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
