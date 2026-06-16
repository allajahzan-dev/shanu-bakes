export type MenuItem = {
  name: string;
  description: string;
  tag: string;
  icon: string;
};

export type MenuTab = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU_TABS: MenuTab[] = [
  {
    id: "bakery",
    label: "Bakery & Pastries",
    items: [
      {
        name: "Bespoke Theme Cakes",
        description:
          "Crafted by master bakers for birthdays, anniversaries, and every milestone worth celebrating.",
        tag: "Signature",
        icon: "Cake",
      },
      {
        name: "Choco Oreo & Red Vancho Pastries",
        description:
          "Indulgent multi-layered slices with premium chocolate and velvety cream finishes.",
        tag: "Bestseller",
        icon: "Star",
      },
      {
        name: "Mango Alphonso & Pineapple Cakes",
        description:
          "Vibrant, fruit-forward seasonal bakes — a summer favourite across all our branches.",
        tag: "Seasonal",
        icon: "Sun",
      },
      {
        name: "Artisanal Burger Buns & Loaves",
        description:
          "Baked in-house daily and supplied to local kitchens across Tamil Nadu.",
        tag: "Daily Fresh",
        icon: "Wheat",
      },
    ],
  },
  {
    id: "savory",
    label: "Live Savory Food",
    items: [
      {
        name: "Signature Bread Omelette",
        description:
          "Our most-ordered live-counter classic — cooked fresh on demand, every time.",
        tag: "Live Counter",
        icon: "Flame",
      },
      {
        name: "Chicken Club Sandwich",
        description:
          "Grilled bread, shredded chicken, house dressing. Simple. Honest. Addictive.",
        tag: "Bestseller",
        icon: "Sandwich",
      },
      {
        name: "Veg & Mushroom Puffs",
        description:
          "Crispy, golden, flaky pastry shells with a spiced vegetable-mushroom heart.",
        tag: "Anytime Snack",
        icon: "Layers",
      },
      {
        name: "Gourmet Burgers",
        description:
          "Loaded patties, crisp veggies, and our signature sauce. Made fresh to order.",
        tag: "Made to Order",
        icon: "Beef",
      },
    ],
  },
  {
    id: "drinks",
    label: "Hot & Cool Drinks",
    items: [
      {
        name: "Signature Falooda",
        description:
          "Rose milk, vermicelli, basil seeds, ice cream, and dry fruits layered in a single glass.",
        tag: "Signature",
        icon: "GlassWater",
      },
      {
        name: "Thick Milkshakes & Brownie Shakes",
        description:
          "Creamy, rich, blended indulgence that doubles as dessert.",
        tag: "Cool",
        icon: "Droplets",
      },
      {
        name: "Fresh Juices & Mojitos",
        description:
          "Pressed daily from seasonal fruits. Cold, clean, and thirst-destroying.",
        tag: "Fresh Pressed",
        icon: "Leaf",
      },
      {
        name: "Premium Chai & Coffee",
        description:
          "Aromatic pitstop brews crafted the way South India intended.",
        tag: "Hot",
        icon: "Coffee",
      },
    ],
  },
];

export type Outlet = {
  name: string;
  tag: string;
  badge?: string;
  features: string[];
};

export const OUTLETS: Outlet[] = [
  {
    name: "Ulundurpet — Seekampattu Toll Gate",
    tag: "Highway Pitstop",
    badge: "Open 24/7",
    features: [
      "Free parking & drive-through access",
      "Dine-in with live cooking stations",
      "Ideal stop for highway travellers",
    ],
  },
  {
    name: "Ariyalur — Min Nagar",
    tag: "Family Favourite",
    features: [
      "Full bakery & café menu daily",
      "Registered micro-enterprise outlet",
      "Community hub since 2010",
    ],
  },
  {
    name: "Chennai — Medavakkam",
    tag: "City Outlet",
    features: [
      "Premium bakery & café",
      "Custom cake walk-in orders",
      "Quick live savory counter",
    ],
  },
  {
    name: "Chennai — Sholinganallur",
    tag: "Suburban Hub",
    features: [
      "Daily fresh bakes & pastries",
      "Full Hot & Cool beverages",
      "Walk-in & advance orders",
    ],
  },
  {
    name: "Chennai — Perumbakkam",
    tag: "Suburban Hub",
    features: [
      "Neighbourhood bakery format",
      "Hot & Cool drinks counter",
      "Take-away focused",
    ],
  },
  {
    name: "Villupuram — Opposite GH",
    tag: "High-Traffic Zone",
    features: [
      "High-volume daily outlet",
      "Full savory + drinks menu",
      "Popular with commuters",
    ],
  },
  {
    name: "Virudhachalam",
    tag: "Regional Favourite",
    features: [
      "Daily fresh bakes & beverages",
      "Growing community outlet",
      "Warm neighbourhood presence",
    ],
  },
  {
    name: "Perambalur",
    tag: "Regional Network",
    features: [
      "Fresh bakes + refreshments daily",
      "Core expansion branch",
      "Trusted by local families",
    ],
  },
];

export const STATS = [
  { number: "25+", label: "Branches Across Tamil Nadu", target: 25, suffix: "+" },
  { number: "15+", label: "Years of Baking Excellence", target: 15, suffix: "+" },
  { number: "4.3★", label: "Rated on Google & Justdial", target: 4.3, suffix: "★", decimals: 1 },
  { number: "100%", label: "Freshly Baked Every Day", target: 100, suffix: "%" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Custom Cakes", href: "#custom", id: "custom" },
  { label: "Outlets", href: "#outlets", id: "outlets" },
  { label: "Contact", href: "#contact", id: "contact" },
];