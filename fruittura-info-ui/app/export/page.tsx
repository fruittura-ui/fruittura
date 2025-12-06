import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Image from "next/image"
import Link from "next/link"
import {
  Globe,
  Ship,
  Plane,
  Package,
  FileText,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Truck,
  Clock,
  Shield,
} from "lucide-react"

const exportSteps = [
  {
    step: 1,
    title: "Inquiry & Quote",
    description: "Share your requirements and receive a detailed quotation within 24 hours.",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Sample Approval",
    description: "We send product samples for your quality verification before bulk orders.",
    icon: Package,
  },
  {
    step: 3,
    title: "Order Confirmation",
    description: "Finalize quantities, pricing, and delivery terms with our export team.",
    icon: CheckCircle2,
  },
  {
    step: 4,
    title: "Production & Packing",
    description: "Products are processed and packed according to your specifications.",
    icon: Package,
  },
  {
    step: 5,
    title: "Documentation",
    description: "We handle all export documentation including certificates and customs papers.",
    icon: FileText,
  },
  {
    step: 6,
    title: "Shipping & Delivery",
    description: "Products are shipped via sea or air with real-time tracking updates.",
    icon: Ship,
  },
]

const shippingModes = [
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective option for bulk shipments with transit time of 15-35 days.",
    features: ["FCL & LCL Options", "Temperature Controlled", "All Major Ports"],
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast delivery for urgent orders with transit time of 7-10 days.",
    features: ["Express Delivery", "Fresh Produce", "Global Network"],
  },
  {
    icon: Truck,
    title: "Land Transport",
    description: "Door-to-door delivery for neighboring countries via road network.",
    features: ["Border Countries", "Refrigerated Trucks", "Competitive Rates"],
  },
]

const regions = [
  { name: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Iraq, Jordan" },
  { name: "Europe", countries: "UK, Germany, France, Netherlands, Belgium, Italy, Spain, Poland" },
  { name: "North America", countries: "USA, Canada, Mexico" },
  { name: "Asia Pacific", countries: "Singapore, Malaysia, Australia, Japan, Korea, Thailand, Vietnam" },
  { name: "Africa", countries: "South Africa, Kenya, Nigeria, Egypt, Morocco, Ghana" },
  { name: "South Asia", countries: "Nepal, Sri Lanka, Bangladesh, Maldives" },
  { name: "South America", countries: "Brazil, Argentina, Chile, Colombia" },
]

const features = [
  { icon: Clock, title: "Quick Turnaround", description: "Fast order processing and dispatch" },
  { icon: Shield, title: "Secure Packaging", description: "Export-grade packaging standards" },
  { icon: FileText, title: "Complete Documentation", description: "All certificates and papers handled" },
  { icon: Globe, title: "Global Network", description: "Reliable logistics partners worldwide" },
]

export default function ExportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              Export Services
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Global Export Excellence
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              From India to the world – we export premium dry fruits and spices to customers worldwide. Our experienced
              export team ensures smooth, hassle-free international trade.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 md:py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground">50+</div>
              <p className="text-primary-foreground/80 text-xs md:text-base">Countries Served</p>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground">1000+</div>
              <p className="text-primary-foreground/80 text-xs md:text-base">Shipments/Year</p>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground">98%</div>
              <p className="text-primary-foreground/80 text-xs md:text-base">On-Time Delivery</p>
            </div>
            <div>
              <div className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground">24hr</div>
              <p className="text-primary-foreground/80 text-xs md:text-base">Quote Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              How It Works
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Simple Export Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {exportSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-base md:text-lg">
                    {step.step}
                  </div>
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{step.description}</p>
                {index < exportSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Modes */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Shipping Options
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Flexible Shipping Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {shippingModes.map((mode, index) => (
              <div
                key={index}
                className="p-5 md:p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <mode.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                  {mode.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">{mode.description}</p>
                <ul className="space-y-2">
                  {mode.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                Global Reach
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                Delivering Across the Globe
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Our products reach customers in every corner of the world. Whether you&apos;re a retailer, distributor,
                wholesaler, or business owner anywhere on the planet, we have the expertise and logistics network to
                serve your market with premium quality dry fruits and spices. No destination is too far for Fruittura.
              </p>
              <div className="space-y-3 md:space-y-4">
                {regions.map((region, index) => (
                  <div key={index} className="p-3 md:p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">{region.name}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{region.countries}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] order-1 lg:order-2">
              <Image
                src="/worlwideshipping.jpg"
                alt="Worldwide export shipping"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-card/95 backdrop-blur-sm p-3 md:p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  <div>
                    <p className="font-serif text-lg md:text-xl font-bold text-foreground">Worldwide Shipping</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Delivering to every corner of the world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-4 md:p-6 bg-background rounded-xl border border-border text-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
            Ready to Import from India?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-2">
            Get in touch with our export team to discuss your requirements. We offer competitive pricing, reliable
            shipping, and exceptional service.
          </p>
          <Link
            href="https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20importing%20dry%20fruits"
            target="_blank"
            className="inline-flex items-center gap-2 bg-card text-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 text-sm md:text-base"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            Start Export Inquiry
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
