export interface Product {
  id: string
  name: string
  hindiName: string
  category: "Dry Fruits" | "Spices"
  image: string
  description: string
  benefits: string[]
  uses: string[]
}

export const products: Product[] = [
  // Dry Fruits (7)
  {
    id: "almond",
    name: "Almond",
    hindiName: "Badam",
    category: "Dry Fruits",
    image: "/premium-whole-almonds-nuts-close-up.jpg",
    description:
      "Premium quality almonds known for their rich flavor and exceptional nutritional value. Our almonds are carefully selected to ensure the best taste and texture.",
    benefits: ["Rich in Vitamin E", "High in protein", "Heart-healthy fats", "Boosts brain function"],
    uses: ["Snacking", "Baking", "Milk preparation", "Garnishing desserts"],
  },
  {
    id: "cashew",
    name: "Cashew",
    hindiName: "Kaju",
    category: "Dry Fruits",
    image: "/premium-white-cashew-nuts-close-up.jpg",
    description:
      "Hand-selected cashews with a rich buttery flavor and creamy texture. Perfect for snacking, cooking, and making delicious sweets.",
    benefits: ["Good source of copper", "Promotes heart health", "Supports bone health", "Rich in antioxidants"],
    uses: ["Sweets making", "Curries", "Snacking", "Cashew butter"],
  },
  {
    id: "pistachio",
    name: "Pistachio",
    hindiName: "Pista",
    category: "Dry Fruits",
    image: "/green-pistachios-nuts-close-up.jpg",
    description:
      "Naturally opened green pistachios with a distinctive sweet taste. Known as the 'smiling nut' for their naturally split shells.",
    benefits: ["High in antioxidants", "Supports eye health", "Aids weight management", "Good for gut health"],
    uses: ["Snacking", "Ice cream topping", "Baklava", "Kulfi making"],
  },
  {
    id: "walnut",
    name: "Walnut",
    hindiName: "Akhrot",
    category: "Dry Fruits",
    image: "/walnut-halves-kernels-close-up.jpg",
    description:
      "Premium walnut kernels known for their brain-boosting properties. Light halves perfect for baking and healthy snacking.",
    benefits: ["Omega-3 fatty acids", "Improves brain health", "Reduces inflammation", "Heart-healthy"],
    uses: ["Baking", "Salads", "Brain tonics", "Dessert garnishing"],
  },
  {
    id: "raisins",
    name: "Raisins",
    hindiName: "Kismis",
    category: "Dry Fruits",
    image: "/golden-raisins-dried-grapes-close-up.jpg",
    description:
      "Sweet and plump raisins, naturally sun-dried for optimal sweetness. Available in golden and black varieties.",
    benefits: ["Natural energy booster", "Rich in iron", "Aids digestion", "Good for bone health"],
    uses: ["Desserts", "Kheer", "Trail mix", "Baking"],
  },
  {
    id: "dates",
    name: "Dates",
    hindiName: "Khajoor",
    category: "Dry Fruits",
    image: "/medjool-dates-dried-fruit-close-up.jpg",
    description:
      "Naturally sweet dates with a soft, chewy texture. A perfect natural sweetener and energy booster packed with nutrients.",
    benefits: ["Natural sweetener", "High in fiber", "Rich in potassium", "Instant energy source"],
    uses: ["Snacking", "Smoothies", "Date syrup", "Religious offerings"],
  },
  {
    id: "figs",
    name: "Figs",
    hindiName: "Anjeer",
    category: "Dry Fruits",
    image: "/dried-figs-anjeer-close-up.jpg",
    description:
      "Premium dried figs with a honey-like sweetness. Rich in fiber and minerals, perfect for healthy snacking.",
    benefits: ["High in fiber", "Rich in calcium", "Supports digestive health", "Natural laxative"],
    uses: ["Snacking", "Milkshakes", "Desserts", "Energy bars"],
  },
  // Spices (22)
  {
    id: "black-pepper",
    name: "Black Pepper",
    hindiName: "Kali Mirch",
    category: "Spices",
    image: "/spices/black-pepper-kali-mirch.jpg",
    description:
      "Known as the 'King of Spices', our black pepper offers a sharp, pungent flavor that enhances any dish.",
    benefits: ["Aids digestion", "Rich in antioxidants", "Improves nutrient absorption", "Anti-inflammatory"],
    uses: ["Seasoning", "Marinades", "Soups", "Ayurvedic remedies"],
  },
  {
    id: "white-pepper",
    name: "White Pepper",
    hindiName: "Safed Mirch",
    category: "Spices",
    image: "/spices/white-pepper-safed-mirch.jpg",
    description:
      "Milder than black pepper with a subtle heat. Perfect for light-colored dishes where black specks are undesirable.",
    benefits: ["Aids digestion", "Milder flavor", "Rich in vitamins", "Antibacterial properties"],
    uses: ["White sauces", "Soups", "Chinese cuisine", "Baking"],
  },
  {
    id: "green-cardamom",
    name: "Green Cardamom",
    hindiName: "Chhoti Elaichi",
    category: "Spices",
    image: "/spices/green-cardamom-elaichi.jpg",
    description:
      "The 'Queen of Spices' with an intensely aromatic, sweet flavor. Essential for Indian desserts and chai.",
    benefits: ["Freshens breath", "Aids digestion", "Detoxifying", "Rich in antioxidants"],
    uses: ["Tea/Chai", "Desserts", "Biryani", "Mouth freshener"],
  },
  {
    id: "black-cardamom",
    name: "Black Cardamom",
    hindiName: "Badi Elaichi",
    category: "Spices",
    image: "/spices/black-cardamom-badi-elaichi.jpg",
    description:
      "Bold, smoky flavor perfect for savory dishes. An essential spice in garam masala and meat preparations.",
    benefits: ["Respiratory health", "Digestive aid", "Detoxifying", "Anti-inflammatory"],
    uses: ["Garam masala", "Meat curries", "Biryani", "Pulao"],
  },
  {
    id: "cloves",
    name: "Cloves",
    hindiName: "Long",
    category: "Spices",
    image: "/spices/cloves-long.jpg",
    description:
      "Intensely aromatic flower buds with a warm, sweet flavor. A staple in Indian cooking and traditional medicine.",
    benefits: ["Dental health", "Antibacterial", "Rich in antioxidants", "Aids digestion"],
    uses: ["Biryani", "Chai", "Meat dishes", "Dental care"],
  },
  {
    id: "cinnamon",
    name: "Cinnamon",
    hindiName: "Dalchini",
    category: "Spices",
    image: "/spices/cinnamon-dalchini.jpg",
    description:
      "Warm, sweet aromatic bark that adds depth to both sweet and savory dishes. A versatile spice loved worldwide.",
    benefits: ["Blood sugar control", "Anti-inflammatory", "Heart health", "Rich in antioxidants"],
    uses: ["Desserts", "Curries", "Tea", "Baking"],
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    hindiName: "Jaiphal",
    category: "Spices",
    image: "/spices/nutmeg-jaiphal.jpg",
    description: "Warm, nutty spice with a slightly sweet flavor. Used sparingly to add depth to dishes and beverages.",
    benefits: ["Aids sleep", "Brain health", "Digestive aid", "Pain relief"],
    uses: ["Desserts", "Bechamel sauce", "Garam masala", "Beverages"],
  },
  {
    id: "mace",
    name: "Mace",
    hindiName: "Javitri",
    category: "Spices",
    image: "/spices/mace-javitri.jpg",
    description:
      "The delicate outer covering of nutmeg with a lighter, more refined flavor. A premium spice for special dishes.",
    benefits: ["Digestive health", "Stress relief", "Skin health", "Anti-inflammatory"],
    uses: ["Biryani", "Korma", "Desserts", "Pickles"],
  },
  {
    id: "star-anise",
    name: "Star Anise",
    hindiName: "Chakra Phool",
    category: "Spices",
    image: "/spices/star-anise-chakra-phool.jpg",
    description:
      "Beautiful star-shaped spice with a distinct licorice flavor. Essential in Chinese five-spice and Indian cooking.",
    benefits: ["Antiviral properties", "Aids digestion", "Rich in antioxidants", "Respiratory health"],
    uses: ["Biryani", "Chai", "Chinese dishes", "Soup broths"],
  },
  {
    id: "bay-leaf",
    name: "Bay Leaf",
    hindiName: "Tej Patta",
    category: "Spices",
    image: "/spices/bay-leaf-tej-patta.jpg",
    description:
      "Aromatic leaves that add a subtle, herbal flavor to dishes. Essential for slow-cooked curries and rice dishes.",
    benefits: ["Digestive aid", "Blood sugar control", "Anti-inflammatory", "Respiratory health"],
    uses: ["Biryani", "Curries", "Rice dishes", "Soups"],
  },
  {
    id: "cumin",
    name: "Cumin",
    hindiName: "Jeera",
    category: "Spices",
    image: "/spices/cumin-jeera.jpg",
    description:
      "Earthy, warming spice essential to Indian cooking. The backbone of countless curry recipes and spice blends.",
    benefits: ["Aids digestion", "Iron-rich", "Boosts immunity", "Weight management"],
    uses: ["Tadka/Tempering", "Curries", "Rice dishes", "Chaas/Buttermilk"],
  },
  {
    id: "fennel",
    name: "Fennel",
    hindiName: "Saunf",
    category: "Spices",
    image: "/spices/fennel-saunf.jpg",
    description:
      "Sweet, licorice-flavored seeds often enjoyed as a mouth freshener. Adds a unique flavor to many dishes.",
    benefits: ["Freshens breath", "Aids digestion", "Rich in fiber", "Antioxidant properties"],
    uses: ["Mouth freshener", "Pickles", "Curries", "Tea"],
  },
  {
    id: "fenugreek",
    name: "Fenugreek",
    hindiName: "Methi",
    category: "Spices",
    image: "/spices/fenugreek-methi.jpg",
    description: "Slightly bitter seeds with a maple-like aroma. Essential for authentic Indian curries and pickles.",
    benefits: ["Blood sugar control", "Lactation support", "Hair health", "Digestive aid"],
    uses: ["Pickles", "Curries", "Tadka", "Hair treatments"],
  },
  {
    id: "mustard-seeds",
    name: "Mustard Seeds",
    hindiName: "Sarson",
    category: "Spices",
    image: "/spices/mustard-seeds-sarson.jpg",
    description:
      "Pungent seeds that pop and release flavor when tempered in hot oil. Essential for South Indian cuisine.",
    benefits: ["Rich in selenium", "Anti-inflammatory", "Digestive health", "Metabolism booster"],
    uses: ["Tempering", "Pickles", "South Indian dishes", "Mustard oil"],
  },
  {
    id: "nigella-seeds",
    name: "Nigella Seeds",
    hindiName: "Kalonji",
    category: "Spices",
    image: "/spices/nigella-seeds-kalonji.jpg",
    description: "Tiny black seeds with a slightly bitter, peppery flavor. Often sprinkled on naan bread and pickles.",
    benefits: ["Immune support", "Anti-inflammatory", "Digestive health", "Skin health"],
    uses: ["Naan bread", "Pickles", "Vegetable dishes", "Ayurvedic remedies"],
  },
  {
    id: "saffron",
    name: "Saffron",
    hindiName: "Kesar",
    category: "Spices",
    image: "/spices/saffron-kesar.jpg",
    description:
      "The world's most precious spice, known for its golden color and distinctive aroma. Hand-harvested with care.",
    benefits: ["Mood enhancer", "Rich in antioxidants", "Skin glow", "Improves memory"],
    uses: ["Biryani", "Kheer", "Saffron milk", "Desserts"],
  },
  {
    id: "carom-seeds",
    name: "Carom Seeds",
    hindiName: "Ajwain",
    category: "Spices",
    image: "/spices/carom-seeds-ajwain.jpg",
    description: "Powerful digestive seeds with a thyme-like flavor. A staple in Indian fried snacks and breads.",
    benefits: ["Digestive relief", "Respiratory health", "Acidity relief", "Anti-bacterial"],
    uses: ["Parathas", "Pakoras", "Digestive remedies", "Pickles"],
  },
  {
    id: "asafoetida",
    name: "Asafoetida",
    hindiName: "Hing",
    category: "Spices",
    image: "/spices/asafoetida-hing.jpg",
    description:
      "Pungent spice that transforms when cooked, adding an onion-garlic like flavor. Essential in vegetarian cooking.",
    benefits: ["Digestive aid", "Anti-flatulent", "Respiratory health", "Anti-inflammatory"],
    uses: ["Dal", "Vegetable dishes", "Pickles", "Digestive remedies"],
  },
  {
    id: "tamarind",
    name: "Tamarind",
    hindiName: "Imli",
    category: "Spices",
    image: "/spices/tamarind-imli.jpg",
    description:
      "Tangy, sweet-sour fruit pulp essential for South Indian and Thai cuisines. Adds depth to chutneys and curries.",
    benefits: ["Rich in antioxidants", "Digestive health", "Heart health", "Anti-inflammatory"],
    uses: ["Sambar", "Chutneys", "Candies", "Rasam"],
  },
  {
    id: "red-chilli",
    name: "Red Chilli",
    hindiName: "Lal Mirch",
    category: "Spices",
    image: "/spices/red-chilli-lal-mirch.jpg",
    description:
      "Fiery spice that adds heat and vibrant color to dishes. Available in various heat levels to suit all palates.",
    benefits: ["Metabolism booster", "Pain relief", "Rich in Vitamin C", "Digestive aid"],
    uses: ["Curries", "Pickles", "Chutneys", "Marinades"],
  },
  {
    id: "turmeric",
    name: "Turmeric",
    hindiName: "Haldi",
    category: "Spices",
    image: "/spices/turmeric-haldi.jpg",
    description:
      "The golden spice of India, known for its earthy flavor and powerful health benefits. A kitchen essential.",
    benefits: ["Anti-inflammatory", "Antioxidant", "Immune booster", "Skin health"],
    uses: ["Curries", "Golden milk", "Pickles", "Skincare"],
  },
  {
    id: "coriander",
    name: "Coriander",
    hindiName: "Dhaniya",
    category: "Spices",
    image: "/spices/coriander-dhaniya.jpg",
    description:
      "Citrusy, slightly sweet seeds essential for Indian spice blends. Forms the base of many curry powders.",
    benefits: ["Digestive health", "Blood sugar control", "Rich in antioxidants", "Skin health"],
    uses: ["Curry powder", "Chutneys", "Pickles", "Spice blends"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((p) => p.category === category)
}
