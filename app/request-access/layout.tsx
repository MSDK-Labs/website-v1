import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Access | Aegis Trace | Early Access for Regulated Firms',
  description: 'Request early access to Aegis Trace. AI decision traceability for FCA-regulated wealth managers and fintechs.',
  openGraph: {
    title: 'Request Access | Aegis Trace',
    description: 'Request early access to Aegis Trace for regulated financial services.',
  },
}

export default function RequestAccessLayout({ children }: { children: React.ReactNode }) {
  return children
}
