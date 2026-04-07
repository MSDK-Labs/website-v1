import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Insights — Aegis Trace | AI Governance, Compliance, Decision Traceability',
  description: 'AI governance, compliance, and decision traceability insights from MSDK Labs.',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  return (
    <main>
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>Insights</span></div>
          <h1 className="section-title reveal" style={{ fontSize: '42px' }}>
            AI governance, compliance, and decision traceability.
          </h1>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}/`} className="blog-card reveal" key={post.slug}>
                <div className="blog-card-category">{post.category}</div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-desc">{post.description}</p>
                <div className="blog-card-meta">
                  <span>{formatDate(post.date)}</span>
                  <span className="blog-card-read">Read &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
