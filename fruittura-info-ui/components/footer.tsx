import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality Assurance" },
  { href: "/export", label: "Export Process" },
  { href: "/contact", label: "Contact" },
]

const products = ["Almonds", "Cashews", "Pistachios", "Walnuts", "Raisins", "Spices"]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/fruittura.jpg"
                alt="Fruittura Logo"
                width={50}
                height={50}
                className="rounded-full md:w-[60px] md:h-[60px]"
              />
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-gold-light">Fruittura</h3>
                <p className="text-xs md:text-sm text-background/70">Fresh Dry Fruit & Spices</p>
              </div>
            </Link>
            <p className="text-background/80 leading-relaxed text-sm md:text-base">
              Your trusted partner for premium quality dry fruits and spices. Exporting excellence worldwide since
              establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-gold-light mb-4 md:mb-5">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-gold-light transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-gold-light mb-4 md:mb-5">Our Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-background/70 hover:text-gold-light transition-colors duration-300 text-sm md:text-base"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Added second owner Naresh Thanvi */}
          <div>
            <h4 className="font-serif text-lg md:text-xl font-semibold text-gold-light mb-4 md:mb-5">Contact Us</h4>
            <div className="space-y-3 md:space-y-4">

              <div>
                <p className="text-background/70 text-sm">WhatsApp</p>
                <Link
                  href="https://wa.me/918446896952"
                  target="_blank"
                  className="text-gold-light hover:underline font-medium"
                >
                  +918446896952
                </Link>
              </div>
              <Link
                href="https://wa.me/918446896952?text=Hi%20Fruittura,%20I'm%20interested%20in%20your%20dry%20fruits"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gold text-foreground px-4 md:px-5 py-2.5 md:py-3 rounded-full font-medium hover:bg-gold-light transition-all duration-300 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Removed "Developed by Manthan Taak" */}
        <div className="border-t border-background/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-background/60 text-xs md:text-sm">
            © {new Date().getFullYear()} Fruittura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
