"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Globe, Leaf, Shield, Truck, Users } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-selected dry fruits meeting international quality standards with rigorous quality checks.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Exporting to 20+ countries with reliable logistics and timely delivery worldwide.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial additives or preservatives. Pure, natural, and wholesome products.",
  },
  {
    icon: Shield,
    title: "Certified & Trusted",
    description: "FSSAI, ISO, and HACCP certified. Complete documentation for hassle-free import.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description: "Temperature-controlled shipping ensuring freshness from our warehouse to your doorstep.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal account manager for seamless communication and order tracking.",
  },
]

export function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Better mobile spacing */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">
            Why Partner With Us
          </span>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 md:mt-3 mb-3 md:mb-4 text-balance">
            The Fruittura Advantage
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg px-2">
            Experience unmatched quality, reliability, and service that sets us apart in the dry fruits export industry.
          </p>
        </div>

        {/* Features Grid - Fixed mobile grid to show 2 columns properly */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card p-4 md:p-8 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs md:text-base line-clamp-3 md:line-clamp-none">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
