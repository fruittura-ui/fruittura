import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { getProductById, getProducts } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, MessageCircle, Check, Sparkles } from "lucide-react"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductById(id)
  if (!product) return { title: "Product Not Found" }

  return {
    title: `${product.name} ${product.hindiName ? `(${product.hindiName})` : ""} | Fruittura`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductById(id)

  if (!product) {
    notFound()
  }

  const whatsappMessage = `Hi Fruittura, I'm interested in ${product.name} ${product.hindiName ? `(${product.hindiName})` : ""}. Please share more details about pricing and availability.`
  const whatsappUrl = `https://wa.me/918446896952?text=${encodeURIComponent(whatsappMessage)}`

  // Get related products from same category
  // We need to fetch all products first to filter related ones, or use a specific API if available.
  // For now, we'll fetch a list (maybe filtered by category if API supported it efficiently, 
  // but getProducts(category) fetches by category slug.
  // We have product.category (e.g. "Spices"). We need to convert to slug or pass as is if getProducts handles it.
  // My getProducts implementation handles "Dry Fruits" -> "dry-fruits".
  const relatedProductsRaw = await getProducts(product.category)
  const relatedProducts = relatedProductsRaw
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Back Button */}
      <div className="pt-20 md:pt-24 pb-2 md:pb-4">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-card border border-border">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-3 md:top-4 md:left-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-medium rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 md:space-y-6">
              <div>
                <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">
                  {product.name}
                </h1>
                {product.hindiName && (
                  <p className="text-lg md:text-xl text-primary font-medium">{product.hindiName}</p>
                )}
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Benefits */}
              {product.benefits && product.benefits.length > 0 && (
                <div>
                  <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    Health Benefits
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Uses */}
              {product.uses && product.uses.length > 0 && (
                <div>
                  <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                    Common Uses
                  </h3>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {product.uses.map((use, index) => (
                      <span
                        key={index}
                        className="px-2.5 md:px-3 py-1 bg-muted text-muted-foreground text-xs md:text-sm rounded-full"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-2 md:pt-4">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 text-sm md:text-base"
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Enquiry Now on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-8">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2 md:p-3">
                    <h3 className="font-serif text-xs md:text-sm font-semibold text-foreground line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    {relatedProduct.hindiName && (
                      <p className="text-[10px] md:text-xs text-muted-foreground">{relatedProduct.hindiName}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
