import { getProducts } from "@/lib/api"
import { FeaturedProductsClient } from "@/components/featured-products-client"

export async function FeaturedProducts() {
  const products = await getProducts()
  const featuredProducts = products.slice(0, 6)

  return <FeaturedProductsClient products={featuredProducts} />
}
