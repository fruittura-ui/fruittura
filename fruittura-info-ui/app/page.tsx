import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Ticker } from "@/components/ticker"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ExportSection } from "@/components/export-section"
import { Certifications } from "@/components/certifications"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

import { TopBanner } from "@/components/top-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <Ticker />
      <FeaturedProducts />
      <WhyChooseUs />
      <ExportSection />
      <Certifications />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
