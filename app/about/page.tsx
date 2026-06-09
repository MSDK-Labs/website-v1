import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MSDK Labs | The Team Behind Aegis Trace',
  description: 'Built by practitioners who understand what regulators actually ask for. Domain expertise in regulated financial services, security engineering, compliance architecture, and AI.',
}

export default function About() {
  const expertise = [
    {
      title: 'Regulated financial services delivery',
      desc: 'Direct enterprise delivery experience across UK wealth managers, FCA-regulated advisory firms, and European financial institutions. The team has worked inside the compliance, risk, and technology functions of firms managing billions in client assets. This is not theoretical knowledge — it comes from building and shipping technology inside regulated environments.',
    },
    {
      title: 'Security and infrastructure engineering',
      desc: 'Production experience in security architecture, cryptographic systems, cloud infrastructure, and API platform engineering. Aegis Trace is built to the standards that enterprise security teams expect.',
    },
    {
      title: 'Compliance and regulatory architecture',
      desc: 'First-hand knowledge of FCA examination processes, section 166 skilled person reviews, and the evidence formats compliance teams are required to present. Aegis Trace is designed around the practical reality of regulatory scrutiny, not theoretical compliance frameworks.',
    },
    {
      title: 'AI and machine learning engineering',
      desc: 'Production AI systems, model governance, and the specific challenge of making machine-learning decisions auditable at scale. Experience spans natural language processing, automated personal-data detection across multiple EU languages, and decision evidence engineering.',
    },
  ]

  return (
    <main>
      {/* ABOUT */}
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>About MSDK Labs</span></div>
          <h1 className="section-title reveal">Built by practitioners who understand what regulators actually ask for.</h1>
          <div className="company-about reveal">
            <p>
              MSDK Labs was founded by engineers and technologists with direct experience inside UK wealth management and regulated fintech. The team has delivered enterprise programmes for some of the UK&#39;s largest financial services firms. We have been in the room when compliance teams cannot answer a regulator&#39;s question about an AI system. We built Aegis Trace because we know what evidence is needed, and what happens when it does not exist.
            </p>
            <p>
              Our team combines deep expertise in regulated financial services delivery, production AI engineering, and compliance architecture. We are not generalist AI engineers who discovered financial regulation. We are financial technology specialists who built an AI compliance product.
            </p>
          </div>
        </div>
      </section>

      {/* DOMAIN EXPERTISE */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-title reveal">Domain expertise</h2>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <div className="card reveal" key={i}>
                <div className="card-title">{e.title}</div>
                <div className="card-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="container">
          <div className="section-label reveal"><span>The team</span></div>
          <h2 className="section-title reveal">Built by practitioners from regulated financial environments.</h2>
          <div className="about-team-grid">
            <div className="about-team-body reveal">
              <p>MSDK Labs is formed by engineers and delivery specialists with direct experience of FCA-regulated environments, audit processes, and section 166 reviews. The product is designed to meet the practical requirements of evidencing AI-driven decisions under regulatory scrutiny.</p>
            </div>
            <div className="about-team-cards">
              <div className="card reveal">
                <div className="card-title">Regulated financial services</div>
                <div className="card-desc">Enterprise delivery at wealth managers across the UK and EU and FCA and EU-regulated firms. We understand compliance requirements from the inside.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Production AI systems</div>
                <div className="card-desc">Production AI systems, API architecture, and the engineering required to make machine-learning decisions auditable at scale.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Compliance architecture</div>
                <div className="card-desc">FCA examination processes, section 166 reviews, and the evidence formats compliance teams are required to present.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-label reveal"><span>Recognition</span></div>
          <h2 className="section-title reveal">Recognition</h2>
          <div className="recognition-grid">
            <div className="card reveal">
              <div className="card-title">Selected for the FCA AI Spotlight</div>
              <div className="card-desc">MSDK Labs has been selected for the FCA AI Spotlight, which showcases real-world case studies of how firms innovate with AI in financial services. This recognises Aegis Trace as a practical contribution to the FCA&#39;s understanding of AI governance.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Built on Google Cloud</div>
              <div className="card-desc">Aegis Trace is built on Google Cloud infrastructure with UK and EU data residency.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get in touch</span></div>
          <h2 className="section-title reveal">Tell us your regulatory context.</h2>
          <p className="cta-sub reveal">We are onboarding a select number of FCA-regulated wealth managers and fintechs.</p>
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
