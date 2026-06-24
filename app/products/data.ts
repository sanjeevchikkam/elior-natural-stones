export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    name: "ITALIAN MARBLE",
    slug: "italian-marble",
    description: "Exquisite, hand-picked Italian marble known for its high-gloss mirror finish and natural crystalline patterns that bring unmatched grandeur to interiors."
  },
  {
    id: "2",
    name: "GRANITES",
    slug: "granites",
    description: "Highly durable, scratch-resistant volcanic rock offering premium natural patterns, perfect for high-traffic countertops and luxury flooring."
  },
  {
    id: "3",
    name: "SLATE STONE",
    slug: "slate-stone",
    description: "Foliated metamorphic stone featuring a natural rustic split face. Excellent for textured interior wall cladding and non-slip outdoor pathways."
  },
  {
    id: "4",
    name: "LIME STONE",
    slug: "lime-stone",
    description: "Sedimentary natural limestone featuring subtle, warm organic tones and high durability for exterior paving and classic wall facades."
  },
  {
    id: "5",
    name: "SANDSTONE",
    slug: "sandstone",
    description: "Warm desert-hued natural sandstone with elegant sedimentary layering and premium grip. Perfect for pool decks, patios, and landscaping."
  },
  {
    id: "6",
    name: "QUARTZ",
    slug: "quartz",
    description: "Engineered high-performance stone comprising pure quartz crystals, offering a non-porous surface, stain-resistance, and magnificent patterns."
  },
  {
    id: "7",
    name: "PEBBLES",
    slug: "pebbles",
    description: "Tumbled and naturally polished premium river stones. Perfect for garden landscaping, water fountains, and creating soothing Zen pathways."
  },
  {
    id: "8",
    name: "COBBLE STONES",
    slug: "cobble-stones",
    description: "Robust, historical-grade cobblestones providing a solid, rustic paving solution for royal driveways, garden entries, and heavy-use pathways."
  }
];

export const PRODUCTS: Product[] = [
  // Italian Marble (id: "1")
  {
    id: "prod-101",
    categoryId: "1",
    name: "Statuario White Marble",
    description: "Premium pure white base with dramatic, bold grey veining. The absolute epitome of luxury.",
    price: "$85.00 / Sq.Ft",
    image: "/cat01_01.png",
    rating: 5.0
  },
  {
    id: "prod-102",
    categoryId: "1",
    name: "Calacatta Gold Premium",
    description: "Rare Italian marble featuring warm gold and grey veins on a magnificent milky-white canvas.",
    price: "$98.00 / Sq.Ft",
    image: "/cat01_02.png",
    rating: 4.9
  },
  {
    id: "prod-103",
    categoryId: "1",
    name: "Carrara Classic White",
    description: "Elegant and soft blue-grey feathered veining on a light grey background, a classic Italian favorite.",
    price: "$65.00 / Sq.Ft",
    image: "/cat01_03.png",
    rating: 4.8
  },

  // Granites (id: "2")
  {
    id: "prod-201",
    categoryId: "2",
    name: "Absolute Black Forest",
    description: "Deep obsidian black granite adorned with stunning snowy white and silver swirls and waves.",
    price: "$45.00 / Sq.Ft",
    image: "/cat02_01.png",
    rating: 4.9
  },
  {
    id: "prod-202",
    categoryId: "2",
    name: "Imperial Red Granite",
    description: "Vibrant rich red field with micro-crystals of black and white, highly durable and slip-resistant.",
    price: "$38.00 / Sq.Ft",
    image: "/cat02_02.png",
    rating: 4.7
  },
  {
    id: "prod-203",
    categoryId: "2",
    name: "Kashmir White Granite",
    description: "Elegant off-white and cream base with burgundy spots and soft grey clouds of crystals.",
    price: "$42.00 / Sq.Ft",
    image: "/cat02_03.png",
    rating: 4.8
  },

  // Slate Stone (id: "3")
  {
    id: "prod-301",
    categoryId: "3",
    name: "Multi-Color Himachal Slate",
    description: "Stunning cleft-face slate with a kaleidoscope of rustic gold, bronze, grey, and copper tones.",
    price: "$24.00 / Sq.Ft",
    image: "/cat03_01.png",
    rating: 4.6
  },
  {
    id: "prod-302",
    categoryId: "3",
    name: "Silver Grey Slate Planks",
    description: "Contemporary silver-charcoal tone with a delicate natural cleft texture, great for accent walls.",
    price: "$26.50 / Sq.Ft",
    image: "/cat03_02.png",
    rating: 4.7
  },

  // Lime Stone (id: "4")
  {
    id: "prod-401",
    categoryId: "4",
    name: "Kota Blue Limestone",
    description: "Cool steel blue-grey natural limestone with extreme hardness, ideal for durable outdoor decking.",
    price: "$19.50 / Sq.Ft",
    image: "/cat04_01.png",
    rating: 4.5
  },
  {
    id: "prod-402",
    categoryId: "4",
    name: "Tandur Yellow Limestone",
    description: "Warm golden-yellow limestone with a hand-cut texture that brings an ancient rustic charm.",
    price: "$21.00 / Sq.Ft",
    image: "/cat04_02.png",
    rating: 4.6
  },

  // Sandstone (id: "5")
  {
    id: "prod-501",
    categoryId: "5",
    name: "Teakwood Sandstone",
    description: "Features a beautiful wood-like natural banding pattern in warm yellow, tan, and brown tones.",
    price: "$28.00 / Sq.Ft",
    image: "/cat05_01.png",
    rating: 4.8
  },
  {
    id: "prod-502",
    categoryId: "5",
    name: "Rainbow Sandstone Slabs",
    description: "Stunning sedimentary layers of purples, pinks, and golds, giving a grand landscape look.",
    price: "$32.00 / Sq.Ft",
    image: "/cat05_02.png",
    rating: 4.9
  },

  // Quartz (id: "6")
  {
    id: "prod-601",
    categoryId: "6",
    name: "Carrara Crystal Quartz",
    description: "Premium engineered quartz surface mimicking Italian marble with ultra-durable non-porous tech.",
    price: "$55.00 / Sq.Ft",
    image: "/cat06_01.png",
    rating: 4.9
  },
  {
    id: "prod-602",
    categoryId: "6",
    name: "Sparkling Black Quartz",
    description: "Intense black engineered quartz surface embedded with thousands of reflective mirror flecks.",
    price: "$58.00 / Sq.Ft",
    image: "/cat06_02.png",
    rating: 4.8
  },

  // Pebbles (id: "7")
  {
    id: "prod-701",
    categoryId: "7",
    name: "Snow White Pebbles",
    description: "Naturally tumbled smooth marble pebbles of brilliant white color. Ideal for decorative planters.",
    price: "$12.00 / Bag",
    image: "/cat07_01.png",
    rating: 4.8
  },
  {
    id: "prod-702",
    categoryId: "7",
    name: "Polished Mixed River Pebbles",
    description: "High-gloss, hand-sorted smooth river pebbles in earthy black, yellow, and brown tones.",
    price: "$14.50 / Bag",
    image: "/cat07_02.png",
    rating: 4.7
  },

  // Cobble Stones (id: "8")
  {
    id: "prod-801",
    categoryId: "8",
    name: "Granite Grey Cobbles",
    description: "Classic hand-split paving cobblestones offering extreme strength for gorgeous driveways.",
    price: "$3.50 / Piece",
    image: "/cat08_01.png",
    rating: 4.9
  },
  {
    id: "prod-802",
    categoryId: "8",
    name: "Basalt Black Cobbles",
    description: "Prestige dark charcoal and charcoal black basalt cobblestones, naturally elegant and heavy-duty.",
    price: "$4.20 / Piece",
    image: "/cat08_02.png",
    rating: 4.9
  }
];
