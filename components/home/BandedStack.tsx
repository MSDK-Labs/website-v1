/* B3 / P1-02 — three full-bleed rows stepping dark → mid → light.
   Shared by the homepage beat 03 and the /how-it-works page. */

export interface BandStep {
  num: string
  name: string
  outcome: string
  desc: string
}

const SHADES = ['brow--dark', 'brow--mid', 'brow--light']

export default function BandedStack({ steps }: { steps: BandStep[] }) {
  return (
    <div className="bstack">
      {steps.map((s, i) => (
        <div
          className={`brow ${SHADES[i % SHADES.length]} reveal`}
          key={s.num}
          style={{ transitionDelay: `${Math.min(i * 70, 350)}ms` }}
        >
          <div className="container">
            <div className="grid12">
              <div className="bzone-a">
                <div className="bstep-outcome">{s.outcome}</div>
              </div>
              <div className="bzone-b">
                <div className="row-title">{s.name}</div>
                <p className="bstep-desc">{s.desc}</p>
              </div>
              <div className="bzone-c">
                <div className="bindex">
                  <span className="bindex-text">
                    <span className="eyebrow-n">{s.num}</span>{' | '}{s.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
