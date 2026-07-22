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
  name: "Sugar Beige",
  description: "Elegant beige granite with soft natural textures, ideal for luxurious flooring, countertops, and wall cladding.",
  price: "$82.00 / Sq.Ft",
  image: "/Cat01_01 Sugar Beige.jpg",
  rating: 5.0
},
{
  id: "prod-102",
  categoryId: "1",
  name: "Ottaman Beige",
  description: "Premium beige stone featuring subtle veining that adds warmth and sophistication to modern interiors.",
  price: "$89.00 / Sq.Ft",
  image: "/Cat01_02 Ottaman Beige.jpg",
  rating: 4.9
},
{
  id: "prod-103",
  categoryId: "1",
  name: "Dyna Beige",
  description: "Classic beige granite with flowing natural patterns, perfect for elegant flooring and feature walls.",
  price: "$78.00 / Sq.Ft",
  image: "/Cat01_03 Dyna Beige.jpg",
  rating: 4.8
},
{
  id: "prod-104",
  categoryId: "1",
  name: "Regal Beige",
  description: "A timeless beige surface with refined textures, offering durability and a premium architectural finish.",
  price: "$84.00 / Sq.Ft",
  image: "/Cat01_04 Regal Beige.jpg",
  rating: 4.9
},
{
  id: "prod-105",
  categoryId: "1",
  name: "D-martino",
  description: "Distinctive granite with rich earthy tones and natural movement, suitable for both residential and commercial spaces.",
  price: "$91.00 / Sq.Ft",
  image: "/Cat01_05 D-martino.jpg",
  rating: 4.8
},
{
  id: "prod-106",
  categoryId: "1",
  name: "Crema Nuova",
  description: "Smooth cream-colored granite with elegant veining, creating a bright and luxurious atmosphere in any space.",
  price: "$86.00 / Sq.Ft",
  image: "/Cat01_06 Crema Nuova.jpg",
  rating: 5.0
},
{
  id: "prod-107",
  categoryId: "1",
  name: "Satuario",
  description: "Inspired by premium Italian marble, featuring bold grey veining on a pristine white background for a luxurious appearance.",
  price: "$99.00 / Sq.Ft",
  image: "/Cat01_07 Satuario.jpg",
  rating: 5.0
},
{
  id: "prod-108",
  categoryId: "1",
  name: "Vietnam White",
  description: "Pure white natural stone with a clean and elegant finish, ideal for modern interiors and premium flooring.",
  price: "$93.00 / Sq.Ft",
  image: "/Cat01_08 Vietnam White.jpg",
  rating: 4.9
},
{
  id: "prod-109",
  categoryId: "1",
  name: "Platino Grey",
  description: "Contemporary grey granite with fine mineral patterns, offering durability and timeless style for indoor and outdoor use.",
  price: "$80.00 / Sq.Ft",
  image: "/Cat01_09 Platino Grey.jpg",
  rating: 4.8
},
{
  id: "prod-110",
  categoryId: "1",
  name: "Velencia",
  description: "Elegant natural stone with warm neutral tones, perfect for stylish flooring, staircases, and decorative walls.",
  price: "$83.00 / Sq.Ft",
  image: "/Cat01_10 Velencia.jpg",
  rating: 4.7
},
{
  id: "prod-111",
  categoryId: "1",
  name: "Hilton Grey",
  description: "Sophisticated grey granite with subtle textures, designed to complement modern kitchens, bathrooms, and commercial spaces.",
  price: "$88.00 / Sq.Ft",
  image: "/Cat01_11 Hilton Grey.jpg",
  rating: 4.9
},
{
  id: "prod-112",
  categoryId: "1",
  name: "Galala Beige",
  description: "Natural beige stone with soft patterns and excellent durability, making it a versatile choice for interiors and exteriors.",
  price: "$79.00 / Sq.Ft",
  image: "/Cat01_12 Galala Beige.jpg",
  rating: 4.8
},
{
  id: "prod-113",
  categoryId: "1",
  name: "Botochino",
  description: "Luxury beige marble-inspired surface featuring delicate veining and a polished finish for premium architectural designs.",
  price: "$92.00 / Sq.Ft",
  image: "/Cat01_13 Botochino.jpg",
  rating: 5.0
},
{
  id: "prod-114",
  categoryId: "1",
  name: "Auroro Beige",
  description: "Warm beige granite with natural elegance and lasting strength, suitable for countertops, flooring, and wall applications.",
  price: "$87.00 / Sq.Ft",
  image: "/Cat01_14 Auroro Beige.jpg",
  rating: 4.9
},
{
  id: "prod-115",
  categoryId: "1",
  name: "Mocha Crema Leather",
  description: "Premium leather-finish granite in rich mocha tones, offering a unique textured surface for luxurious interiors and exterior facades.",
  price: "$96.00 / Sq.Ft",
  image: "/Cat01_15 Mocha Crema Leather.jpg",
  rating: 5.0
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

  // Slate Stone (Category ID: "3")
  {
    id: "prod-301",
    categoryId: "3",
    name: "Black Slate",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_01 Black Slate.jpg",
    rating: 4.6
  },
  {
    id: "prod-302",
    categoryId: "3",
    name: "Black Rustic",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_02 Black Rustic.jpg",
    rating: 4.6
  },
  {
    id: "prod-303",
    categoryId: "3",
    name: "Indian Autumn",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_03 Indian Autumn.jpg",
    rating: 4.6
  },
  {
    id: "prod-304",
    categoryId: "3",
    name: "Gold Rustic",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_04 Gold Rustic.jpg",
    rating: 4.6
  },
  {
    id: "prod-305",
    categoryId: "3",
    name: "California Gold",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_05 California Gold.jpg",
    rating: 4.6
  },
  {
    id: "prod-306",
    categoryId: "3",
    name: "SP Autumn",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_06 SP Autumn.jpg",
    rating: 4.6
  },
  {
    id: "prod-307",
    categoryId: "3",
    name: "Multi Colour",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_07 Multi Colour.jpg",
    rating: 4.6
  },
  {
    id: "prod-308",
    categoryId: "3",
    name: "Grey Slate",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_08 Grey Slate.jpg",
    rating: 4.6
  },
  {
    id: "prod-309",
    categoryId: "3",
    name: "Chocolate",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_09 Chocolate.jpg",
    rating: 4.6
  },
  {
    id: "prod-310",
    categoryId: "3",
    name: "Grey Quartz",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_10 Grey Quartz.jpg",
    rating: 4.6
  },
  {
    id: "prod-311",
    categoryId: "3",
    name: "M Green",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_11 M Green.jpg",
    rating: 4.6
  },
  {
    id: "prod-312",
    categoryId: "3",
    name: "N Green",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_12 N Green.jpg",
    rating: 4.6
  },
  {
    id: "prod-313",
    categoryId: "3",
    name: "S White 4x12",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_13 S White 4x12.jpg",
    rating: 4.6
  },
  {
    id: "prod-314",
    categoryId: "3",
    name: "Black Chipout",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_14 Black Chipout.jpg",
    rating: 4.6
  },
  {
    id: "prod-315",
    categoryId: "3",
    name: "Grey Quartz 4x12",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_15 Grey Quartz 4x12.jpg",
    rating: 4.6
  },
  {
    id: "prod-316",
    categoryId: "3",
    name: "Black Slate Random Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_16 Black Slate Random Panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-317",
    categoryId: "3",
    name: "Black Buching",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_17 Black Buching.jpg",
    rating: 4.6
  },
  {
    id: "prod-318",
    categoryId: "3",
    name: "N Green Buching",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_18 N Green Buching.jpg",
    rating: 4.6
  },
  {
    id: "prod-319",
    categoryId: "3",
    name: "Lime Green Buching",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_19 Lime Green Buching.jpg",
    rating: 4.6
  },
  {
    id: "prod-320",
    categoryId: "3",
    name: "Lime Pink Buching",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_20 Lime Pink Buching.jpg",
    rating: 4.6
  },
  {
    id: "prod-321",
    categoryId: "3",
    name: "Black Slate Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_21 Black Slate Panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-322",
    categoryId: "3",
    name: "Indian Autumn Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_22 Indian Autumn Panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-323",
    categoryId: "3",
    name: "SP Autumn Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_23 SP Autumn Panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-324",
    categoryId: "3",
    name: "Black Rustic Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_24 Black Rustic Panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-325",
    categoryId: "3",
    name: "Black Waterfall",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_25 Black Waterfall.jpg",
    rating: 4.6
  },
  {
    id: "prod-326",
    categoryId: "3",
    name: "Multi Colour Quarry Cut Panel",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_26 Multi Colour quarry cut panel.jpg",
    rating: 4.6
  },
  {
    id: "prod-327",
    categoryId: "3",
    name: "Multi Colour Waterfall",
    description: "",
    price: "$24.00 / Sq.Ft",
    image: "/Cat03_27 Multi Colour Waterfall.jpg",
    rating: 4.6
  },

  // Lime Stone (id: "4")
  // Limestone (Category ID: "4")
{
  id: "prod-401",
  categoryId: "4",
  name: "Kadapa Black Polish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_01 Kadapa Black Polish.jpg",
  rating: 4.5
},
{
  id: "prod-402",
  categoryId: "4",
  name: "Kadapa Black Honed Finish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_02 Kadapa Black Honed Finish.jpg",
  rating: 4.5
},
{
  id: "prod-403",
  categoryId: "4",
  name: "Kadapa Black Rough",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_03 Kadapa Black Rough.jpg",
  rating: 4.5
},
{
  id: "prod-404",
  categoryId: "4",
  name: "Kadapa Black Flaming",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_04 Kadapa  Black Flaming.jpg",
  rating: 4.5
},
{
  id: "prod-405",
  categoryId: "4",
  name: "Tandur Blue Rough",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_05 Tandur Blue Rough.jpg",
  rating: 4.5
},
{
  id: "prod-406",
  categoryId: "4",
  name: "Tandur Blue Polish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_06 Tandur Blue Polish.jpg",
  rating: 4.5
},
{
  id: "prod-407",
  categoryId: "4",
  name: "Tandur Blue Leather",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_07 Tandur Blue Leather.jpg",
  rating: 4.5
},
{
  id: "prod-408",
  categoryId: "4",
  name: "Tandur Blue Satin Finish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_08 Tandur Blue Satin Finish.jpg",
  rating: 4.5
},
{
  id: "prod-409",
  categoryId: "4",
  name: "Tandur Yellow Rough",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_09 Tandur Yellow Rough.jpg",
  rating: 4.5
},
{
  id: "prod-410",
  categoryId: "4",
  name: "Tandur Yellow Leather",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_10 Tandur Yellow Leather.jpg",
  rating: 4.5
},
{
  id: "prod-411",
  categoryId: "4",
  name: "Kurnool Grey Polish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_11 Kurnool Grey Polish.jpg",
  rating: 4.5
},
{
  id: "prod-412",
  categoryId: "4",
  name: "Kurnool Grey Satin Finish",
  description: "",
  price: "$19.50 / Sq.Ft",
  image: "/Cat04_12 Kurnool Grey Satin Finish.jpg",
  rating: 4.5
},

  // Sandstone (id: "5")
  // Cobbles (Category ID: "5")
// Cobbles (Category ID: "5")
{
  id: "prod-501",
  categoryId: "5",
  name: "White Granite Cobbles Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_01 White Granite Cobbles Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-502",
  categoryId: "5",
  name: "Black Granite Cobble Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_02 Black Granite Cobble Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-503",
  categoryId: "5",
  name: "Black Granite Cobbles Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_02 Black Granite Cobbles Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-504",
  categoryId: "5",
  name: "Yellow Granite Cobble Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_03 Yellow Granite Cobble Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-505",
  categoryId: "5",
  name: "Yellow Granite Cobbles Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_03 Yellow Granite Cobbles Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-506",
  categoryId: "5",
  name: "Pink Granite Cobble Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_04 Pink Granite Cobble Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-507",
  categoryId: "5",
  name: "Pink Granite Cobbles Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_04 Pink Granite Cobbles Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-508",
  categoryId: "5",
  name: "White Granite Cobble 1inch Machine Cut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_05 White Granite Cobble 1inch Machine cut.jpg",
  rating: 4.8
},
{
  id: "prod-509",
  categoryId: "5",
  name: "White Granite Cobbles 1inch Machine Cut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_05 White Granite Cobbles 1inch Machine cut.jpg",
  rating: 4.8
},
{
  id: "prod-510",
  categoryId: "5",
  name: "Black Granite Cobbles 1inch Machine Cut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_06 Black Granite Cobbles 1inch Machine cut.jpg",
  rating: 4.8
},
{
  id: "prod-511",
  categoryId: "5",
  name: "Black Granite 1inch Machine Cut Flaming",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_07 Black Granite 1inch Machine cut Flaming.jpg",
  rating: 4.8
},
{
  id: "prod-512",
  categoryId: "5",
  name: "White 1inch Machine Cut Flaming",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_08 White 1inch Machine cut Flaming.jpg",
  rating: 4.8
},
{
  id: "prod-513",
  categoryId: "5",
  name: "Black Granite Full Box Cut Flaming",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_09 Black Granite Full Box Cut Flaming.jpg",
  rating: 4.8
},
{
  id: "prod-514",
  categoryId: "5",
  name: "White Granite Full Box Cut Flaming",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_10 White Granite Full Box Cut Flaming.jpg",
  rating: 4.8
},
{
  id: "prod-515",
  categoryId: "5",
  name: "Black Granite 1inch Machine Cut Bush Hammered",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_11 Black Granite 1inch Machine cut Bush Hammered.jpg",
  rating: 4.8
},
{
  id: "prod-516",
  categoryId: "5",
  name: "Lime Black Cobbles Handcut",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_12 Lime Black cobbles Handcut.jpg",
  rating: 4.8
},
{
  id: "prod-517",
  categoryId: "5",
  name: "Lime Black Cobbles",
  description: "",
  price: "$28.00 / Sq.Ft",
  image: "/Cat05_12 Lime Black cobbles.jpg",
  rating: 4.8
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
