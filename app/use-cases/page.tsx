import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Use Cases , Aegis Trace | AI Audit Trails for Financial Services, Healthcare, Insurance',
  description: 'Real-world examples of Aegis Trace providing decision provenance in regulated financial services, healthcare, insurance, credit, and algorithmic trading.',
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
            From AI decision to compliance evidence. In every regulated context.
          </h1>
          <p className="reveal" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.75, maxWidth: '580px' }}>
            Aegis Trace provides complete decision provenance for every regulated industry where AI systems influence outcomes that must be evidenced. The same API, the same certificate format, the same tamper-proof audit trail.
          </p>
        </div>
      </section>

      {/* USE CASE 01 , FINANCIAL SERVICES */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 01 , Financial Services</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            A wealth manager&apos;s AI recommends selling a position. The FCA asks why.
          </h2>
          <div className="uc-grid">
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                A client&apos;s portfolio is reviewed by an AI-assisted suitability engine. It recommends reducing exposure to a fund based on risk profile, market conditions, and client objectives. Six months later, the FCA requests evidence that the recommendation was suitable under Consumer Duty. Without Aegis Trace, the firm has application logs. With Aegis Trace, they have a signed certificate with complete decision provenance.
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
                <div className="req-line">POST /v1/audit</div>
                <pre className="uc-pre">{`{
  "tenant_id": "wealthco-prod-001",
  "agent_id": "suitability-engine-v3",
  "decision_type": "portfolio_recommendation",
  "input_hash": "sha256:a3f8c1d...",
  "output": {
    "action": "REDUCE_EXPOSURE",
    "fund": "GB00B3X7QG63",
    "rationale": "Risk profile mismatch, client objective: capital preservation",
    "confidence": 0.94,
    "metadata": {}
  },
  "regulatory_context": ["FCA_PS22_3", "CONSUMER_DUTY"],
  "client_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 Accepted</span>
                  <span className="verified-badge">QUEUED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-22-f8a3c1d",
  "status": "QUEUED"
}`}</pre>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the FCA receives:</strong> A tamper-proof certificate with complete decision provenance, from data input through model inference to final output, retrievable via API in under 200ms.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 02 , HEALTHCARE */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 02 , Healthcare &amp; Life Sciences</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            A clinical decision support system flags a drug interaction. The MHRA needs the audit trail.
          </h2>
          <div className="uc-grid uc-grid-reverse">
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/audit</div>
                <pre className="uc-pre">{`{
  "tenant_id": "nhs-trust-alpha-001",
  "agent_id": "clinical-dss-v2",
  "decision_type": "drug_interaction_flag",
  "input_hash": "sha256:b7e2a9f...",
  "output": {
    "flag": "INTERACTION_WARNING",
    "severity": "HIGH",
    "drug_pair": "[REDACTED]",
    "recommendation": "REVIEW_BEFORE_PRESCRIBING",
    "confidence": 0.91,
    "metadata": {}
  },
  "regulatory_context": ["MHRA_AI", "EU_MDR"],
  "patient_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 Accepted</span>
                  <span className="verified-badge">QUEUED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-14-c9d2e8f",
  "status": "QUEUED"
}`}</pre>
              </div>
            </div>
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An AI system assists a clinician by flagging a potential drug interaction based on a patient&apos;s prescription history. The recommendation influences the prescribing decision. Under MHRA AI regulations and the EU MDR, the hospital must demonstrate the AI&apos;s recommendation was within validated parameters and was appropriately overseen. Aegis Trace provides complete decision provenance for every clinical AI output.
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
            <strong>What the MHRA receives:</strong> A complete decision record with validated model version, redacted patient reference, severity classification, and cryptographic seal, structured for regulatory submission.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 03 , INSURANCE */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 03 , Insurance &amp; Underwriting</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            An underwriting model declines a policy. The applicant requests an explanation under GDPR Art.22.
          </h2>
          <div className="uc-grid">
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An automated underwriting model assesses a commercial insurance application and returns a decline decision. Under GDPR Article 22 and FCA ICOBS, the applicant has the right to request a meaningful explanation of the automated decision. The insurer must produce a record of what the model assessed, what it decided, and on what basis. Aegis Trace captures the full decision provenance automatically.
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
                <div className="req-line">POST /v1/audit</div>
                <pre className="uc-pre">{`{
  "tenant_id": "insureco-prod-001",
  "agent_id": "underwriting-model-v4",
  "decision_type": "policy_assessment",
  "input_hash": "sha256:d4c1b8e...",
  "output": {
    "decision": "DECLINE",
    "risk_score": 0.847,
    "primary_factors": ["claims_history", "sector_risk"],
    "explanation_ref": "EXP-2026-03-11-449",
    "confidence": 0.85,
    "metadata": {}
  },
  "regulatory_context": ["GDPR_ART22", "FCA_ICOBS"],
  "applicant_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 Accepted</span>
                  <span className="verified-badge">QUEUED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-03-11-d4c1b8e",
  "status": "QUEUED"
}`}</pre>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the applicant and regulator receive:</strong> A structured explanation record tied to a tamper-proof certificate, satisfying the GDPR Article 22 right to explanation and FCA ICOBS evidencing requirements.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 04 , CREDIT */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 04 , AI Credit Decisioning</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            Your AI credit model declined a mortgage application. The borrower appeals.
          </h2>
          <div className="uc-grid uc-grid-reverse">
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/audit</div>
                <pre className="uc-pre">{`{
  "tenant_id": "lendco-prod-001",
  "agent_id": "credit-scoring-v2",
  "decision_type": "mortgage_assessment",
  "input_hash": "sha256:e7f3b2a...",
  "output": {
    "decision": "DECLINE",
    "risk_score": 0.782,
    "primary_factors": [
      "debt_to_income_ratio",
      "employment_tenure"
    ],
    "explanation_ref": "EXP-2026-04-02-891",
    "confidence": 0.88,
    "metadata": {}
  },
  "regulatory_context": ["FCA_CONC", "GDPR_ART22"],
  "applicant_ref": "[REDACTED-BY-PRESIDIO]"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 Accepted</span>
                  <span className="verified-badge">QUEUED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-04-02-e7f3b2a",
  "status": "QUEUED"
}`}</pre>
              </div>
            </div>
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An AI-assisted credit scoring model evaluates a mortgage application and returns a decline. Under FCA CONC and GDPR Article 22, the firm must provide a meaningful explanation of the automated decision and demonstrate the assessment was fair. Without Aegis Trace, the firm has model logs scattered across systems. With Aegis Trace, there is a single, signed decision record with complete provenance.
              </p>
              <h3 className="uc-subheading">The regulations</h3>
              <div className="uc-pills">
                <RegPill>FCA CONC</RegPill>
                <RegPill>GDPR Art.22</RegPill>
                <RegPill>EU AI Act</RegPill>
                <RegPill>SR 11-7</RegPill>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the borrower and regulator receive:</strong> A single, tamper-proof decision record with every input, risk factor, and model output. Every AI decision with full provenance, traceable, verifiable, defensible.
          </div>
        </div>
      </section>

      <div className="container"><hr className="uc-divider" /></div>

      {/* USE CASE 05 , ALGORITHMIC TRADING */}
      <section>
        <div className="container">
          <div className="uc-label reveal">Use Case 05 , Algorithmic Trading</div>
          <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
            Your trading algorithm executed a series of orders during market volatility. The FCA requests a reconstruction.
          </h2>
          <div className="uc-grid">
            <div className="uc-scenario reveal">
              <h3 className="uc-subheading">The situation</h3>
              <p className="uc-body">
                An algorithmic trading system made autonomous decisions during a period of market stress. Under MiFID II and FCA SYSC 9, the firm must be able to reconstruct the decision chain: what data the model consumed, what signals it acted on, and what orders it placed. Aegis Trace provides a sealed, time-stamped record for every execution decision, with complete decision provenance from market input to order output.
              </p>
              <h3 className="uc-subheading">The regulations</h3>
              <div className="uc-pills">
                <RegPill>MiFID II</RegPill>
                <RegPill>FCA SYSC 9</RegPill>
                <RegPill>MAR</RegPill>
              </div>
            </div>
            <div className="uc-code reveal">
              <div className="terminal-card">
                <div className="req-line">POST /v1/audit</div>
                <pre className="uc-pre">{`{
  "tenant_id": "tradeco-prod-001",
  "agent_id": "algo-trading-v7",
  "decision_type": "execution_order",
  "input_hash": "sha256:f9a2c7d...",
  "output": {
    "action": "SELL",
    "instrument": "GBPUSD",
    "quantity": 500000,
    "signal_strength": 0.91,
    "market_condition": "HIGH_VOLATILITY",
    "confidence": 0.93,
    "metadata": {}
  },
  "regulatory_context": ["MIFID_II", "FCA_SYSC_9"],
  "execution_ref": "ORD-2026-04-07-1142"
}`}</pre>
              </div>
              <div className="terminal-card" style={{ marginTop: '16px' }}>
                <div className="certificate-header" style={{ marginBottom: '12px', paddingBottom: '12px', padding: '0 0 12px 0' }}>
                  <span className="res-status" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px' }}>HTTP 202 Accepted</span>
                  <span className="verified-badge">QUEUED</span>
                </div>
                <pre className="uc-pre">{`{
  "certificate_id": "AT-2026-04-07-f9a2c7d",
  "status": "QUEUED"
}`}</pre>
              </div>
            </div>
          </div>
          <div className="uc-outcome reveal">
            <strong>What the FCA receives:</strong> A complete, sealed reconstruction of every algorithmic trading decision. Time-stamped, cryptographically signed, and exportable in MiFID II format.
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
                <div className="card-desc">A tamper-proof certificate with complete decision provenance exists for every decision. Retrievable in under 200ms. Exportable for submission.</div>
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
