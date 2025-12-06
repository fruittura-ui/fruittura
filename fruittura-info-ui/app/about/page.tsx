import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Image from "next/image"
import { Award, Globe, Heart, Leaf, Target, Eye, Gem } from "lucide-react"

const stats = [
  { number: "50+", label: "Countries Service" },
  { number: "20+", label: "Product Varieties" },
  { number: "10K+", label: "Happy Clients" },
]

const values = [
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "We source only the finest dry fruits and spices, ensuring every product meets our rigorous quality standards.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction drives everything we do. We build lasting relationships through trust and exceptional service.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to sustainable sourcing practices that support farmers and protect our environment.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "From India to the world, we deliver premium products to over 50 countries with reliable logistics.",
  },
]



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              About Fruittura
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Delivering Nature&apos;s Finest to Your Doorstep
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-2">
              Fruittura has been synonymous with premium quality dry fruits and spices. Our journey
              began with a simple mission: to bring the finest natural products from India&apos;s best farms to tables
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium text-xs md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                <Image
                  src="/premium-dry-fruits-warehouse-indian-spices.jpg"
                  alt="Fruittura warehouse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary text-primary-foreground p-4 md:p-6 rounded-lg md:rounded-xl shadow-xl">
                <div className="font-serif text-xl md:text-3xl font-bold">100%</div>
                <div className="font-serif text-2xl md:text-4xl font-bold">Trustable</div>
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                Our Story
              </span>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                A Legacy of Quality & Trust
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  Fruittura was born from a passion for premium quality and a deep understanding of the dry fruits and
                  spices industry. What started as a small trading business in Mumbai has grown into one of India&apos;s
                  most trusted exporters.
                </p>
                <p>
                  Our founder, Manish Vyaas and Naresh Thanvi, recognized the gap between exceptional Indian produce and international
                  markets. With dedication and an unwavering commitment to quality, he built relationships with the best
                  farmers.
                </p>
                <p>
                  Today, Fruittura serves customers across 50+ countries, delivering the same promise we started with:
                  uncompromising quality, authentic taste, and reliable service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-background p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-border">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Eye className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To be the world&apos;s most trusted source for premium dry fruits and spices, recognized for exceptional
                quality, sustainable practices, and customer satisfaction. We envision a future where every home enjoys
                the finest natural products from India.
              </p>
            </div>
            <div className="bg-background p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-border">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                To deliver premium quality dry fruits and spices to global markets while supporting sustainable farming
                communities. We commit to maintaining the highest standards of quality control, ethical sourcing, and
                customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              Our Values
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-serif text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
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
              Quality You Can Trust
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-8">
            {["FSSAI Certified", "ISO 22000:2018", "APEDA Registered", "HACCP Certified"].map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-4 bg-card rounded-full border border-border"
              >
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="font-medium text-foreground text-xs md:text-base">{cert}</span>
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
