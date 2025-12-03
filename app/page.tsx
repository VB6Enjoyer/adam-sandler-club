import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DiscographySection } from "@/components/discography-section"
import { TourSection } from "@/components/tour-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DiscographySection />
      <TourSection />
      <ContactSection />
    </main>
  )
}
