"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23B8860B' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={heroRef} className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-24 h-24 animate-float opacity-20">
          <Image src="/golden-almond-illustration.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 animate-float-delayed opacity-20">
          <Image src="/golden-cashew-illustration.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-40 left-20 w-16 h-16 animate-float-slow opacity-20">
          <Image src="/golden-pistachio-illustration.jpg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-40 w-28 h-28 animate-float opacity-20">
          <Image src="/golden-walnut-illustration.jpg" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6 animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
              Premium Quality Since Establishment
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight text-balance">
              Premium <span className="text-primary">Dry Fruits</span> & Spices Export
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Sourcing the finest quality dry fruits from trusted farms and delivering excellence to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Link
                href="https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20getting%20a%20quote%20for%20dry%20fruits"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get Quote on WhatsApp
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-secondary/80 transition-all duration-300 border-2 border-primary/20"
              >
                Explore Products
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start pt-4 md:pt-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">100+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="w-px bg-border h-10 md:h-12" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">20+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="w-px bg-border h-10 md:h-12" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">6+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Products</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              {/* Decorative circles - smaller on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-gold-light/20 rounded-full blur-2xl md:blur-3xl" />
              <div className="absolute inset-6 md:inset-8 bg-gradient-to-tr from-gold-light/30 to-primary/30 rounded-full blur-xl md:blur-2xl animate-pulse" />

              {/* Main image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-primary/20 shadow-xl md:shadow-2xl">
                <Image
                  src="/premium-dry-fruits-bowl-with-almonds-cashews-pista.jpg"
                  alt="Premium Dry Fruits Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-card p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Certified</p>
                    <p className="font-semibold text-xs md:text-sm text-foreground">FSSAI Approved</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-card p-2 md:p-4 rounded-lg md:rounded-xl shadow-lg md:shadow-xl animate-float-delayed">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-muted-foreground">Shipping</p>
                    <p className="font-semibold text-xs md:text-sm text-foreground">Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
