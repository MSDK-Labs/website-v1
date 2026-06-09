import Eyebrow from '../Eyebrow'
import CertificateMotif from './CertificateMotif'
import { DotMatrixPlane } from '../Textures'

export default function HeroSection() {
  return (
    <section className="hero" id="product">
      <div className="texture">
        <DotMatrixPlane
          annotate
          style={{ position: 'absolute', bottom: 0, right: 0, width: '62%', height: 'auto' }}
        />
      </div>
      <div className="container">
        <div className="grid12">
          <div className="hero-left reveal">
            <Eyebrow n="02" onBand>What Aegis Trace is</Eyebrow>
            <h1 className="display-hero">
              Aegis Trace gives every AI-assisted decision a tamper-proof certificate a regulator can verify —{' '}
              <span className="tone2">automatically, the moment the decision is made.</span>
            </h1>
            <p className="hero-sub">
              When your AI makes a regulated decision, Aegis Trace seals a permanent, independently verifiable record of it — so when the regulator asks, the evidence already exists.
            </p>
            <div className="hero-ctas">
              <a href="/#request-access" className="btn btn--on-band">Request access</a>
            </div>
            <div className="mono-caption mono-caption--on-band hero-trust">
              Selected for the FCA AI Spotlight · Built for FCA Consumer Duty and EU AI Act Article 12 · UK and EU data residency
            </div>
          </div>
          <div className="hero-right reveal">
            <div>
              <CertificateMotif />
              <p className="body-sm" style={{ color: 'var(--muted-on-band)', fontSize: '0.8125rem', marginTop: '16px', maxWidth: '420px' }}>
                An illustrative certificate. Every sealed decision produces one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
