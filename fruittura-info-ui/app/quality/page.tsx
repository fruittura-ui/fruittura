import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Image from "next/image"
import {
  Shield,
  CheckCircle2,
  Package,
  ThermometerSun,
  Award,
  FileCheck,
  Sparkles,
  Leaf,
  Heart,
  Users,
  Truck,
  Eye,
} from "lucide-react"

const qualitySteps = [
  {
    icon: Leaf,
    title: "Farm Selection",
    description: "We partner with certified farms that follow sustainable and ethical farming practices.",
  },
  {
    icon: CheckCircle2,
    title: "Raw Material Inspection",
    description: "Every batch undergoes rigorous inspection for quality, freshness, and authenticity.",
  },
  {
    icon: Eye,
    title: "Visual & Manual Sorting",
    description: "Our trained experts carefully sort and select only the finest quality products.",
  },
  {
    icon: Sparkles,
    title: "Processing & Cleaning",
    description: "Hygienic processing ensures products are clean, fresh, and ready for packaging.",
  },
  {
    icon: Package,
    title: "Quality Packaging",
    description: "Vacuum-sealed packaging preserves freshness and extends shelf life.",
  },
  {
    icon: ThermometerSun,
    title: "Temperature Control",
    description: "Proper storage conditions maintain optimal quality throughout the supply chain.",
  },
]

const certifications = [
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description: "Licensed by India's apex food regulator ensuring safety and quality standards.",
    icon: FileCheck,
  },
  {
    name: "ISO 22000:2018",
    fullName: "Food Safety Management System",
    description: "International certification for food safety management across the supply chain.",
    icon: Shield,
  },
  {
    name: "APEDA",
    fullName: "Agricultural Products Export Development Authority",
    description: "Registered exporter with India's agricultural export promotion body.",
    icon: Award,
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis Critical Control Points",
    description: "Systematic approach to food safety addressing physical, chemical, and biological hazards.",
    icon: CheckCircle2,
  },
]

const qualityCommitments = [
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "We prioritize your satisfaction with every order, ensuring products meet your expectations.",
  },
  {
    icon: Users,
    title: "Trusted Suppliers",
    description: "Long-standing relationships with reliable farmers and suppliers who share our quality values.",
  },
  {
    icon: Truck,
    title: "Careful Handling",
    description: "Products are handled with care at every step to maintain their natural freshness and taste.",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "We stand behind our products with a commitment to replace any items that don't meet standards.",
  },
]

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              Quality Assurance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Uncompromising Quality at Every Step
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              Quality isn&apos;t just a standard at Fruittura – it&apos;s our promise. From farm to your doorstep, every
              product is selected and handled with utmost care.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Our Process
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              6-Step Quality Assurance
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {qualitySteps.map((step, index) => (
              <div
                key={index}
                className="relative p-4 md:p-6 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm md:text-lg">
                  {index + 1}
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 md:mb-4 mt-2">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                Our Commitment
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Quality You Can Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                At Fruittura, quality is more than just a process – it&apos;s a commitment we make to every customer. We
                carefully select each product, working directly with trusted farmers and suppliers who share our passion
                for excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {qualityCommitments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 md:p-4 bg-card rounded-lg border border-border"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/qualitypage.jpg"
                alt="Quality dry fruits selection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="bg-card/95 backdrop-blur-sm p-3 md:p-4 rounded-xl">
                  <p className="font-serif text-lg md:text-xl font-bold text-foreground">100% Quality Assured</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Every product handpicked for excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-video relative rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/whychooseus.jpg"
                alt="Premium dry fruits variety"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                Why Choose Us
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                What Sets Our Products Apart
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                We take pride in offering only the finest dry fruits and spices. Our selection process ensures that
                every product delivers exceptional taste, freshness, and nutritional value.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  "Fresh & Natural",
                  "No Preservatives",
                  "Hand Selected",
                  "Premium Grade",
                  "Rich in Nutrients",
                  "Authentic Taste",
                  "Carefully Packed",
                  "Long Shelf Life",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                    <span className="text-foreground text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Certifications
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Internationally Recognized Standards
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <cert.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-serif text-base md:text-xl font-bold text-primary mb-1">{cert.name}</h3>
                <p className="text-xs md:text-sm font-medium text-foreground mb-2 md:mb-3 line-clamp-2">
                  {cert.fullName}
                </p>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed hidden sm:block">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
