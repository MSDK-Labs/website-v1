export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorTitle: string
  category: 'Regulatory' | 'Technical' | 'Industry' | 'Guide'
  tags: string[]
  featured: boolean
}

export const posts: BlogPost[] = [
  {
    slug: 'fca-mills-review-ai-decision-governance',
    title: 'The FCA Mills Review and What It Means for AI Decision Governance',
    description: 'The Mills Review launched January 2026 examines how AI will reshape retail financial services. What firms need to know about decision traceability.',
    date: '2026-04-06',
    author: 'Murilo',
    authorTitle: 'Founder & CEO, MSDK Labs',
    category: 'Regulatory',
    tags: ['FCA', 'EU AI Act', 'AI governance', 'Mills Review'],
    featured: true,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return posts
  return posts.filter(p => p.category === category)
}
