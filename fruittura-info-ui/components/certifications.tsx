"use client"

import { useEffect, useRef, useState } from "react"

const certifications = [
  {
    name: "FSSAI",
    fullName: "Food Safety and Standards Authority of India",
    description: "Licensed for food safety and quality standards",
  },
  {
    name: "ISO 22000",
    fullName: "International Organization for Standardization",
    description: "Food safety management systems certification",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis Critical Control Points",
    description: "Systematic preventive approach to food safety",
  },
  {
    name: "APEDA",
    fullName: "Agricultural & Processed Food Products Export",
    description: "Registered exporter of agricultural products",
  },
]

export function Certifications() {
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
    <section ref={sectionRef} className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Quality Assurance</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Certified Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            Our products meet the highest international quality and safety standards, backed by prestigious
            certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`bg-card p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                <span className="text-primary group-hover:text-primary-foreground font-bold text-lg transition-colors">
                  {cert.name}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-2">{cert.fullName}</h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
