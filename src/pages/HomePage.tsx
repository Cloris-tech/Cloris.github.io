import CircularGallery from '../components/circularGallery'
import { ContactSection } from '../components/ContactSection'
import { HeroSection } from '../components/HeroSection'
import { SiteFooter } from '../components/SiteFooter'
import { SkillsSection } from '../components/SkillsSection'
import { WorksSection } from '../components/WorksSection'

export function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <section className="circular-gallery-section" aria-label="Circular gallery">
          <div style={{ height: '600px', position: 'relative', width: '100%' }}>
            <CircularGallery
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
        </section>
        <WorksSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
