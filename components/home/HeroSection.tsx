export default function HeroSection() {
  return (
    <section className="hero" id="product">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-eyebrow reveal"><span>02 — What Aegis Trace is</span></div>
          <h1 className="hero-headline reveal">
            Aegis Trace gives every AI-assisted decision a tamper-proof certificate a regulator can verify — automatically, the moment the decision is made.
          </h1>
          <p className="hero-sub reveal">
            When your AI makes a regulated decision, Aegis Trace seals a permanent, independently verifiable record of it — so when the regulator asks, the evidence already exists.
          </p>
          <div className="hero-ctas reveal">
            <a href="/#request-access" className="btn-primary">Request access &rarr;</a>
          </div>
          <div className="trust-bar reveal">
            Selected for the FCA AI Spotlight · Built for FCA Consumer Duty and EU AI Act Article 12 · UK and EU data residency
          </div>
        </div>
      </div>
    </section>
  )
}
