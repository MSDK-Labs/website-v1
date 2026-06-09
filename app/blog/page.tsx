import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Insights · Aegis Trace | AI Governance, Compliance, Decision Traceability',
  description: 'AI governance, compliance, and decision traceability insights from MSDK Labs.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Blog() {
  return (
    <main>
      <PageHeader
        eyebrow="Insights"
        head="AI governance, compliance, and"
        tail="decision traceability."
      />

      <section className="section">
        <div className="container">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}/`}
              className="grid12 reveal"
              key={post.slug}
              style={{ borderTop: '1px dotted var(--dot)', paddingBlock: '56px' }}
            >
              <div className="splitrow-label">
                <div className="mono-caption">{formatDate(post.date)}</div>
                <div className="mono-caption" style={{ marginTop: '8px' }}>{post.category}</div>
              </div>
              <div className="splitrow-body">
                <h2 className="statement" style={{ fontSize: '1.6rem', lineHeight: 1.25, marginBottom: '16px' }}>{post.title}</h2>
                <p className="body-sm body-sm--muted">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
