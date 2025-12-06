"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Dry Fruits", "Spices"]

export function ProductFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const initialCategory = searchParams.get("category")
        ? categories.find(c => c.toLowerCase().replace(/\s+/g, "") === searchParams.get("category")) || "All"
        : "All"

    const initialSearch = searchParams.get("search") || ""

    const [selectedCategory, setSelectedCategory] = useState(initialCategory)
    const [searchQuery, setSearchQuery] = useState(initialSearch)

    // Debounce search update
    useEffect(() => {
        const timer = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (searchQuery) {
                params.set("search", searchQuery)
            } else {
                params.delete("search")
            }

            router.push(`?${params.toString()}`, { scroll: false })
        }, 500)

        return () => clearTimeout(timer)
    }, [searchQuery, router, searchParams])

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        const params = new URLSearchParams(searchParams.toString())

        if (category && category !== "All") {
            params.set("category", category.toLowerCase().replace(/\s+/g, ""))
        } else {
            params.delete("category")
        }

        router.push(`?${params.toString()}`, { scroll: false })
    }

    return (
        <section className="py-3 md:py-8 bg-card border-y border-border sticky top-[56px] md:top-[72px] z-40">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-2 md:gap-4">
                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={cn(
                                    "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300",
                                    selectedCategory === category
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-background border border-border text-foreground hover:border-primary/50",
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
