export interface Product {
    id: string
    name: string
    description: string
    category: string
    images: string[]
    image: string
    // Optional fields that might be in the API or were in the old static data
    hindiName?: string
    benefits?: string[]
    uses?: string[]
}

const API_URL = "https://fruittura.onrender.com/api"

export async function getProducts(category?: string, search?: string): Promise<Product[]> {
    const url = new URL(`${API_URL}/products/info`)

    if (category && category !== "All") {
        // Map UI category to API slug if needed, or assume they match
        // The user said: "Filter by category slug (e.g., dry-fruits, spices)"
        // The UI uses "Dry Fruits", "Spices"
        // We should probably convert to slug
        // The API expects "dryfruits" (no space, no hyphen)
        const slug = category.toLowerCase().replace(/\s+/g, "")
        url.searchParams.append("category", slug)
    }

    if (search) {
        url.searchParams.append("search", search)
    }

    try {
        const res = await fetch(url.toString(), {
            cache: "no-store", // Ensure fresh data
        })

        if (!res.ok) {
            console.error("Failed to fetch products:", res.status, res.statusText)
            return []
        }

        return res.json()
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}

export async function getProductById(id: string): Promise<Product | null> {
    // The user didn't explicitly give a "Get by ID" endpoint for the info site,
    // but usually it's /products/info/:id or we can filter the list.
    // Given the instructions, we might have to fetch all and find, or guess the endpoint.
    // Let's try to fetch all and find for now to be safe, or use the list endpoint with a search?
    // Actually, the user said: "Returns a list of simplified product objects."
    // And "Endpoint: GET /products/info"
    // It didn't mention a single product endpoint.
    // However, for a detail page, we need one.
    // Let's assume we can filter by ID from the full list for now if no specific endpoint exists.
    // OR, better, let's try to hit /products/info?search=NAME if ID is not supported?
    // But ID is "prod_123".
    // Let's try to fetch all and find. It's not efficient but safe if we don't know the endpoint.
    // Wait, if the ID is passed in the URL, we can try to fetch it.

    // Optimization: If we are on the detail page, we might want to fetch just one.
    // But without a documented endpoint, I'll fetch list and find.
    // UNLESS the user provided `id` in the response is the slug?
    // The example showed "id": "prod_123".

    const products = await getProducts()
    return products.find((p) => p.id === id) || null
}
