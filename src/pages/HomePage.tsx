import { CareerTimelineSection } from '../components/CareerTimelineSection'
import { HeroSection } from '../components/HeroSection'
import { SkillsSection } from '../components/SkillsSection'
import { SiteFooter } from '../components/SiteFooter'
import { WorksSection } from '../components/WorksSection'

export function HomePage() {
  return (
    <>
      <main className="main-v3">
        <div className="main-v3__container">
          <HeroSection />
          <CareerTimelineSection />
          <WorksSection />
          <SkillsSection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
