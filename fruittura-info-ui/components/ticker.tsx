export function Ticker() {
  const items = [
    "Premium Quality Dry Fruits",
    "Authentic Indian Spices",
    "Best Prices Guaranteed",
    "FSSAI Certified",
    "Trusted Supplier",
    "Worldwide Shipping",
    "100% Natural Products",
  ]

  return (
    <div className="bg-primary py-2.5 md:py-4 overflow-hidden">
      <div className="animate-ticker-fast flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-4 md:mx-8 text-primary-foreground font-medium flex items-center gap-2 md:gap-3 text-xs md:text-base"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-foreground/50 rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
