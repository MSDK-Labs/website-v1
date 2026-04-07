import HeroSection from '@/components/home/HeroSection'
import SocialProofBar from '@/components/home/SocialProofBar'
import ProblemSection from '@/components/home/ProblemSection'
import ValuePropSection from '@/components/home/ValuePropSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import KPISection from '@/components/home/KPISection'
import IndustrySection from '@/components/home/IndustrySection'
import DeploymentSection from '@/components/home/DeploymentSection'
import ComplianceSection from '@/components/home/ComplianceSection'
import TrustSection from '@/components/home/TrustSection'
import RequestForm from '@/components/RequestForm'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <ValuePropSection />
      <HowItWorksSection />
      <KPISection />
      <IndustrySection />
      <DeploymentSection />
      <ComplianceSection />
      <TrustSection />
      <RequestForm />
    </main>
  )
}
