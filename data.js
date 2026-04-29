const products = [
  {
    id: "p1",
    name: "Premium California Almonds",
    category: "Nuts",
    basePrice: 850,
    isFeatured: true,
    imageUrls: ["https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&q=80"],
    description: "Crunchy, sweet, and packed with nutrition. Our premium California almonds are perfect for snacking, baking, or gifting.",
    healthBenefits: ["High in Vitamin E", "Good for heart health", "Rich in antioxidants"],
    pricingOptions: [
      { weight: "250g", price: 250 },
      { weight: "500g", price: 450 },
      { weight: "1kg", price: 850 }
    ],
    stock: 50
  },
  {
    id: "p2",
    name: "Jumbo Golden Raisins",
    category: "Dried Fruits",
    basePrice: 400,
    isFeatured: true,
    imageUrls: ["https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"],
    description: "Naturally sweet and perfectly chewy, these jumbo golden raisins are a delicious energy booster.",
    healthBenefits: ["Aids in digestion", "Good source of iron", "Rich in calcium"],
    pricingOptions: [
      { weight: "250g", price: 120 },
      { weight: "500g", price: 220 },
      { weight: "1kg", price: 400 }
    ],
    stock: 100
  },
  {
    id: "p3",
    name: "Roasted W240 Cashews",
    category: "Nuts",
    basePrice: 950,
    isFeatured: true,
    imageUrls: ["https://images.unsplash.com/photo-1599598425947-330026e637fc?w=600&q=80"],
    description: "Large, buttery cashews roasted to perfection. A truly premium snacking experience.",
    healthBenefits: ["Boosts immune system", "Excellent source of healthy fats", "Good for bone health"],
    flavors: ["Salted", "Black Pepper", "Plain Roasted"],
    pricingOptions: [
      { weight: "250g", price: 280 },
      { weight: "500g", price: 500 },
      { weight: "1kg", price: 950 }
    ],
    stock: 40
  },
  {
    id: "p4",
    name: "Organic Dried Figs (Anjeer)",
    category: "Dried Fruits",
    basePrice: 1200,
    isFeatured: true,
    imageUrls: ["https://images.unsplash.com/photo-1601379327628-bdd2b9e69196?w=600&q=80"],
    description: "Soft, sweet, and incredibly nutritious. These premium organic figs are sun-dried to preserve their natural goodness.",
    healthBenefits: ["High in dietary fiber", "Rich in minerals like calcium and potassium", "Promotes reproductive health"],
    pricingOptions: [
      { weight: "250g", price: 350 },
      { weight: "500g", price: 650 },
      { weight: "1kg", price: 1200 }
    ],
    stock: 30
  },
  {
    id: "p5",
    name: "Iranian Pistachios",
    category: "Nuts",
    basePrice: 1400,
    isFeatured: true,
    imageUrls: ["https://images.unsplash.com/photo-1563200928-1b2c45cecf43?w=600&q=80"],
    description: "Slightly salted, roasted pistachios in shell. Crack open for a burst of rich, nutty flavor.",
    healthBenefits: ["Low in calories", "High in protein", "Supports eye health"],
    flavors: ["Lightly Salted", "Spicy"],
    pricingOptions: [
      { weight: "250g", price: 400 },
      { weight: "500g", price: 750 },
      { weight: "1kg", price: 1400 }
    ],
    stock: 60
  }
];

function getFeaturedProducts() {
  return products.filter(p => p.isFeatured);
}

function getProductsByCategory(category) {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function filterProducts(category, searchTerm) {
  let filtered = getProductsByCategory(category);
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(term) || 
      p.description.toLowerCase().includes(term)
    );
  }
  return filtered;
}
