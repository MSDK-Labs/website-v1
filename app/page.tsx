import ProblemSection from '@/components/home/ProblemSection'
import HeroSection from '@/components/home/HeroSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import IndustrySection from '@/components/home/IndustrySection'
import ProofSection from '@/components/home/ProofSection'
import RequestForm from '@/components/RequestForm'

export default function Home() {
  return (
    <main>
      {/* 01 — Why now */}
      <ProblemSection />
      {/* 02 — What Aegis Trace is */}
      <HeroSection />
      {/* 03 — How it works */}
      <HowItWorksSection />
      {/* 04 — Where it applies */}
      <IndustrySection />
      {/* 05 — Proof */}
      <ProofSection />
      {/* 06 — Get started */}
      <RequestForm />
    </main>
  )
}
