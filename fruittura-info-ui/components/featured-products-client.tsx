"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/lib/api"

interface FeaturedProductsClientProps {
    products: Product[]
}

export function FeaturedProductsClient({ products }: FeaturedProductsClientProps) {
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
        <section ref={sectionRef} className="py-12 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                {/* Section Header - Reduced spacing on mobile */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-xs md:text-sm">Our Collection</span>
                    <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 md:mt-3 mb-2 md:mb-4 text-balance">
                        Premium Dry Fruits & Spices
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-lg px-2">
                        Sourced from the finest farms, our products are selected for exceptional quality and authentic taste.
                    </p>
                </div>

                {/* Products Grid - Smaller cards on mobile */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className={`group bg-background rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Product Image - Reduced height on mobile */}
                            <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden bg-cream">
                                <Image
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Product Info - Reduced padding on mobile */}
                            <div className="p-2.5 md:p-5 space-y-1 md:space-y-3">
                                <h3 className="font-serif text-sm md:text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                    {product.name}
                                </h3>
                                {product.hindiName && (
                                    <p className="text-xs md:text-sm text-primary font-medium">{product.hindiName}</p>
                                )}
                                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-2 hidden sm:block">
                                    {product.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-8 md:mt-12">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base hover:gap-3 transition-all duration-300"
                    >
                        View All Products
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}
