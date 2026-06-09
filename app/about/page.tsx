import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Eyebrow from '@/components/Eyebrow'

export const metadata: Metadata = {
  title: 'About MSDK Labs | The Team Behind Aegis Trace',
  description: 'Built by practitioners who understand what regulators actually ask for. Domain expertise in regulated financial services, security engineering, compliance architecture, and AI.',
}

const expertise = [
  { title: 'Regulated financial services delivery', desc: 'Direct enterprise delivery experience across UK wealth managers, FCA-regulated advisory firms, and European financial institutions. The team has worked inside the compliance, risk, and technology functions of firms managing billions in client assets. This is not theoretical knowledge — it comes from building and shipping technology inside regulated environments.' },
  { title: 'Security and infrastructure engineering', desc: 'Production experience in security architecture, cryptographic systems, cloud infrastructure, and API platform engineering. Aegis Trace is built to the standards that enterprise security teams expect.' },
  { title: 'Compliance and regulatory architecture', desc: 'First-hand knowledge of FCA examination processes, section 166 skilled person reviews, and the evidence formats compliance teams are required to present. Aegis Trace is designed around the practical reality of regulatory scrutiny, not theoretical compliance frameworks.' },
  { title: 'AI and machine learning engineering', desc: 'Production AI systems, model governance, and the specific challenge of making machine-learning decisions auditable at scale. Experience spans natural language processing, automated personal-data detection across multiple EU languages, and decision evidence engineering.' },
]

const team = [
  { title: 'Regulated financial services', desc: 'Enterprise delivery at wealth managers across the UK and EU and FCA and EU-regulated firms. We understand compliance requirements from the inside.' },
  { title: 'Production AI systems', desc: 'Production AI systems, API architecture, and the engineering required to make machine-learning decisions auditable at scale.' },
  { title: 'Compliance architecture', desc: 'FCA examination processes, section 166 reviews, and the evidence formats compliance teams are required to present.' },
]

export default function About() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        head="Built by practitioners who understand"
        tail="what regulators actually ask for."
      />

      {/* NARRATIVE */}
      <section className="section">
        <div className="container">
          <div className="grid12">
            <div className="narrative statement-block--wide reveal">
              <p>
                MSDK Labs was founded by engineers and technologists with direct experience inside UK wealth management and regulated fintech. The team has delivered enterprise programmes for some of the UK&#39;s largest financial services firms. We have been in the room when compliance teams cannot answer a regulator&#39;s question about an AI system. We built Aegis Trace because we know what evidence is needed,{' '}
                <span className="tone2">and what happens when it does not exist.</span>
              </p>
              <p>
                Our team combines deep expertise in regulated financial services delivery, production AI engineering, and compliance architecture. We are not generalist AI engineers who discovered financial regulation. We are financial technology specialists who built an AI compliance product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN EXPERTISE */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Domain expertise</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Domain expertise</h2>
          </div>
          <div className="dgrid">
            {expertise.map((e, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title">{e.title}</div>
                <p className="body-sm dcell-body">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section--ruled" id="team">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>The team</Eyebrow></div>
            <h2 className="statement b4-statement reveal">
              Built by practitioners <span className="tone2">from regulated financial environments.</span>
            </h2>
          </div>
          <p className="body" style={{ marginTop: '32px' }}>
            MSDK Labs is formed by engineers and delivery specialists with direct experience of FCA-regulated environments, audit processes, and section 166 reviews. The product is designed to meet the practical requirements of evidencing AI-driven decisions under regulatory scrutiny.
          </p>
          <div className="dgrid">
            {team.map((t, i) => (
              <div className="dcell reveal" key={i} style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}>
                <div className="cell-title">{t.title}</div>
                <p className="body-sm dcell-body">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section className="section section--ruled">
        <div className="container">
          <div className="grid12">
            <div className="b4-eyebrow reveal"><Eyebrow>Recognition</Eyebrow></div>
            <h2 className="statement b4-statement reveal">Recognition</h2>
          </div>
          <div style={{ marginTop: '64px' }}>
            <div className="prow grid12 reveal">
              <div className="mono-caption prow-label">Selected for the FCA AI Spotlight</div>
              <div className="prow-body"><p className="body">MSDK Labs has been selected for the FCA AI Spotlight, which showcases real-world case studies of how firms innovate with AI in financial services. This recognises Aegis Trace as a practical contribution to the FCA&#39;s understanding of AI governance.</p></div>
            </div>
            <div className="prow grid12 reveal">
              <div className="mono-caption prow-label">Built on Google Cloud</div>
              <div className="prow-body"><p className="body">Aegis Trace is built on Google Cloud infrastructure with UK and EU data residency.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="grid12">
            <div className="cta-text reveal">
              <h2 className="statement">Tell us your <span className="tone2">regulatory context.</span></h2>
              <p className="body body--on-band-muted cta-onboard">We are onboarding a select number of FCA-regulated wealth managers and fintechs.</p>
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
