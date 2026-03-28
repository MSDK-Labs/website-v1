import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — Aegis Trace | MSDK Labs',
  description: 'From model inference to signed audit record. Learn how Aegis Trace captures, processes, signs, and stores AI decision payloads.',
}

export default function HowItWorks() {
  return (
    <main>
      <section style={{ paddingTop: '160px' }} id="developers">
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
              <div className="step-desc">The redaction sidecar runs inside your network and automatically detects the language of your payload. 34 specialist recognisers cover 13 EU countries across 9 languages, handling names, national IDs, financial identifiers, and more. No personal data ever leaves your network.</div>
            </div>
            <div className="step-card reveal">
              <div className="step-num">03</div>
              <div className="step-title">Sign</div>
              <div className="step-desc">Payload is hashed and signed using HMAC-SHA256 with managed key infrastructure.</div>
            </div>
            <div className="step-card reveal">
              <div className="step-num">04</div>
              <div className="step-title">Store</div>
              <div className="step-desc">Audit record written to append-only, WORM-locked store with defined retention.</div>
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

      <section>
        <div className="container">
          <div className="section-label reveal"><span>Deployment</span></div>
          <h2 className="section-title reveal">Deploy where your architecture requires.</h2>
          <div className="cards-grid-3">
            <div className="card reveal"><div className="card-title">Cloud API</div><div className="card-desc">Managed service. Single REST endpoint. Sub-2s p99 latency. No infrastructure to operate.</div></div>
            <div className="card reveal"><div className="card-title">On-Premises</div><div className="card-desc">Full deployment within your infrastructure. Air-gapped and restricted environments supported.</div></div>
            <div className="card reveal"><div className="card-title">Private Cloud</div><div className="card-desc">Containerised deployment in your cloud tenant. Complete data sovereignty and access control.</div></div>
          </div>
        </div>
      </section>
    </main>
  )
}
