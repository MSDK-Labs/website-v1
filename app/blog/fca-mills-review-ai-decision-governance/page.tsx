import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The FCA Mills Review and What It Means for AI Decision Governance — Aegis Trace',
  description: 'The Mills Review launched January 2026 examines how AI will reshape retail financial services. What firms need to know about decision traceability.',
}

export default function MillsReviewPost() {
  return (
    <main>
      <article className="blog-post">
        <div className="blog-post-header">
          <Link href="/blog/" className="nav-back">&larr; Back to Insights</Link>
          <div className="blog-post-category">Regulatory</div>
          <h1 className="blog-post-title">The FCA Mills Review and What It Means for AI Decision Governance</h1>
          <div className="blog-post-meta">
            <span>Murilo</span>
            <span className="blog-post-meta-sep">&middot;</span>
            <span>Founder &amp; CEO, MSDK Labs</span>
            <span className="blog-post-meta-sep">&middot;</span>
            <span>6 April 2026</span>
          </div>
        </div>

        <div className="blog-post-body">
          <p>
            In January 2026, the FCA launched what it calls the Mills Review, a long-term examination of how artificial intelligence will reshape retail financial services in the United Kingdom. Led by Sheldon Mills, Executive Director of Consumers and Competition, the review looks toward 2030 and beyond. It covers agentic AI, autonomous systems, and what the FCA describes as the emerging &ldquo;proxy economy&rdquo;, where AI systems increasingly act on behalf of consumers.
          </p>
          <p>
            For firms already deploying AI in regulated contexts, the review is not a theoretical exercise. It signals the regulatory direction for the next five years. This article examines what the review is looking at, what it means for firms today, and where the evidence gap lies.
          </p>

          <h2>What the Mills Review is examining</h2>
          <p>
            The review is structured around four themes. First, the evolution of AI technology itself, including large language models, agentic systems, and multi-model architectures. Second, market structure implications: how AI changes the competitive dynamics between incumbents, challengers, and technology providers. Third, consumer behaviour, particularly how individuals interact with AI-driven financial tools. Fourth, how the regulatory framework itself needs to evolve.
          </p>
          <p>
            The Treasury Committee has recommended that the FCA publish comprehensive AI guidance by the end of 2026. The FCA Board expects to receive the review&rsquo;s initial recommendations in Summer 2026. This is not a distant policy discussion. It is an active regulatory workstream with near-term outputs.
          </p>

          <h2>The concept of the proxy economy</h2>
          <p>
            One of the most significant frameworks the FCA has introduced through this review is the concept of AI delegation levels. The FCA identifies three tiers.
          </p>
          <p>
            The first is <strong>assistive AI</strong>: systems that explain, compare, and surface information for human decision-makers. A chatbot that helps a customer understand their pension options falls into this category.
          </p>
          <p>
            The second is <strong>advisory AI</strong>: systems that nudge, recommend, and guide decisions. An AI suitability engine that recommends portfolio adjustments based on risk profile sits here.
          </p>
          <p>
            The third is <strong>autonomous AI</strong>: systems that act within defined boundaries without human intervention for each decision. An algorithmic trading system executing orders based on market signals, or an AI that automatically rebalances a portfolio, operates at this level.
          </p>
          <p>
            Each level of delegation increases the need for decision traceability. When an AI system is merely explaining options, the consequences of an incorrect output are limited. When an AI system is autonomously executing financial transactions on behalf of a consumer, the firm must be able to reconstruct, explain, and defend every decision the system made.
          </p>

          <h2>What this means for firms today</h2>
          <p>
            The FCA has made its position clear: it will not introduce AI-specific rules in the near term. Instead, firms must demonstrate compliance through existing frameworks. Consumer Duty requires that firms deliver good outcomes for retail customers. The Senior Managers and Certification Regime (SM&amp;CR) requires that individuals take personal responsibility for the activities they oversee. FCA SYSC 9 requires that firms maintain records sufficient to reconstruct regulated activities.
          </p>
          <p>
            The practical question for any firm deploying AI is straightforward. Can your firm reconstruct any AI decision made in the last seven years? Can you explain it? Can you demonstrate it was appropriate for the customer, the market conditions, and the regulatory context at the time?
          </p>
          <p>
            For most firms, the honest answer is no. Application logs exist. Model performance metrics exist. But a complete, structured, tamper-proof record of a specific AI decision, including inputs, outputs, model version, reasoning context, and regulatory mapping, does not.
          </p>

          <h2>The evidence gap</h2>
          <p>
            This is the core challenge. The regulatory expectation is clear: firms must be able to evidence their AI decision-making. The technical reality is that most firms cannot.
          </p>
          <p>
            AI systems in production generate thousands of decisions per day. A wealth management firm&rsquo;s suitability engine might produce hundreds of portfolio recommendations weekly. A credit scoring model processes applications continuously. An algorithmic trading system can execute dozens of decisions per minute during periods of market stress.
          </p>
          <p>
            Without a structured decision record for each of these outputs, the firm has no evidence base. When a regulator asks &ldquo;why did your AI recommend this action for this client on this date?&rdquo;, the firm must either reconstruct the decision from fragmentary logs, or acknowledge that the evidence does not exist.
          </p>
          <p>
            Neither answer is satisfactory under Consumer Duty, SM&amp;CR, or FCA SYSC 9.
          </p>

          <h2>EU AI Act context</h2>
          <p>
            The Mills Review does not exist in isolation. The EU AI Act enters enforcement for high-risk AI systems in August 2026. Financial services AI is explicitly covered. Credit scoring, risk assessment, and insurance pricing are classified as high-risk under the regulation.
          </p>
          <p>
            Article 12 of the EU AI Act requires automatic logging of AI system operations. Article 13 requires transparency measures. Article 14 requires human oversight capabilities. For firms operating across both UK and EU jurisdictions, the compliance requirements are converging.
          </p>
          <p>
            A firm that deploys AI in UK financial services and serves EU clients faces dual compliance requirements. The FCA expects evidence through existing frameworks. The EU AI Act mandates specific technical logging requirements. Both require the same fundamental capability: the ability to capture, store, and retrieve a complete record of every AI decision.
          </p>

          <h2>The regulatory direction is clear</h2>
          <p>
            Whether through the Mills Review, the Treasury Committee recommendations, or EU AI Act enforcement, firms will need to demonstrate AI decision governance. The question is not whether this capability will be required. It is whether firms choose to build it before or after the regulator asks.
          </p>
          <p>
            The firms that will be best positioned are those that treat decision traceability as infrastructure, not as a compliance project to be completed under deadline pressure. A single integration point that captures every AI decision, protects personal data, and produces regulator-ready evidence on demand is not a theoretical requirement. It is a practical necessity for any firm deploying AI at scale in regulated financial services.
          </p>
          <p>
            Aegis Trace was built for exactly this purpose. A single API call captures complete decision provenance for every AI output. Tamper-proof storage, configurable retention, and regulator-ready exports provide the evidence infrastructure that the Mills Review, the Treasury Committee, and the EU AI Act all point toward.
          </p>
        </div>

        <div className="blog-post-cta">
          <h3>Prepare for the regulatory direction.</h3>
          <p>Request early access to Aegis Trace and technical documentation.</p>
          <Link href="/request-access/" className="btn-primary">Request Access &rarr;</Link>
        </div>
      </article>
    </main>
  )
}
