const body = document.body;
const header = document.querySelector(".lm-header");
const menuToggle = document.getElementById("menuToggle");
const drawer = document.querySelector(".lm-drawer");
const backToTop = document.querySelector(".back-to-top");
const productTrack = document.getElementById("productTrack");
const productDots = document.getElementById("productDots");
const prevBtn = document.querySelector(".product-showcase .nav-btn.prev");
const nextBtn = document.querySelector(".product-showcase .nav-btn.next");

// Comprehensive Product Database
const allProducts = [
  {
    id: "mt15000-turbo",
    name: "MT15000 Turbo",
    tag: "Top Seller",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "Dual-core turbo engine with adaptive airflow and 15,000 puff battery endurance.",
    fullDescription: "The MT15000 Turbo represents the pinnacle of Lost Mary's engineering excellence. Featuring a revolutionary dual-core power matrix, this device delivers maximum endurance with up to 15,000 puffs. The adaptive airflow control system ensures optimal vapour density, while the gradient housing provides a premium grip-friendly design. Equipped with Type-C recharge with pass-through capability, LED halo feedback, and QUAQ mesh 2.0 technology for consistent flavour from first puff to last.",
    features: [
      "Dual-core power matrix",
      "Up to 15,000 puffs",
      "Adaptive airflow control",
      "Gradient housing design",
      "Type-C recharge with pass-through",
      "LED halo feedback",
      "QUAQ mesh 2.0 technology"
    ],
    specifications: {
      output: "Dual-Core Turbo",
      puffs: "Up to 15,000",
      battery: "Built-in rechargeable",
      charging: "Type-C",
      dimensions: "85mm x 25mm x 20mm",
      weight: "65g"
    },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi", "Mango Peach", "Grape", "Tropical Mix"],
    inStock: true,
    stock: 150,
    image: "mt15000",
    theme: "mt",
    linkText: "View MT15000 Turbo",
    href: "products.html#mt15000-turbo",
  },
  {
    id: "lost-mary-4in1",
    name: "Lost Mary 4in1",
    tag: "Multi Flavour",
    category: "Multi Flavour",
    price: 34.99,
    originalPrice: 39.99,
    description: "Four magnetic pods, smart LED flavour cues and flavour-lock QUAQ heating.",
    fullDescription: "The Lost Mary 4in1 revolutionizes the vaping experience with its innovative multi-flavour platform. Instantly switch between four curated flavour pods with magnetic lock-in technology. Each pod features smart LED flavour cues that illuminate to indicate the active flavour. The flavour-lock QUAQ mesh heating system preserves each flavour's integrity, ensuring no cross-contamination. The leak-resistant pod architecture and ergonomic design make this the perfect device for flavour explorers who want variety without compromise.",
    features: [
      "Four swappable magnetic pods",
      "Smart LED flavour icons",
      "Leak-resistant pod architecture",
      "Flavour-lock QUAQ mesh",
      "Magnetic lock-in system",
      "Up to 8,000 puffs total",
      "40W mesh output"
    ],
    specifications: {
      output: "Mesh 40W",
      puffs: "Up to 8,000 (total)",
      battery: "Built-in rechargeable",
      charging: "Type-C",
      dimensions: "95mm x 30mm x 25mm",
      weight: "85g",
      pods: "4 included"
    },
    flavors: ["Variety Pack (4 flavours)", "Fruit Mix", "Ice Collection", "Tropical Paradise"],
    inStock: true,
    stock: 98,
    image: "4in1",
    theme: "multi",
    linkText: "Explore 4in1 Platform",
    href: "products.html#lost-mary-4in1",
  },
  {
    id: "bm600-pod",
    name: "BM600 Pod",
    tag: "Best Seller",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Pocket-ready favourite with precise mesh heating and balanced flavour output.",
    fullDescription: "The BM600 Pod is Lost Mary's everyday essential, designed for those who demand quality in a compact form. This pocket-ready device features QUAQ mesh micro heating technology that delivers precise temperature control and balanced vapour delivery. The lightweight gradient finish provides a premium feel while maintaining portability. With up to 600 puffs and a curated flavour palette, the BM600 is perfect for on-the-go vaping enthusiasts who value convenience without sacrificing flavour quality.",
    features: [
      "QUAQ mesh micro heating",
      "Lightweight gradient finish",
      "Up to 600 puffs",
      "Compact design",
      "Signature Lost Mary flavours",
      "Ready to use",
      "Ergonomic soft-touch housing"
    ],
    specifications: {
      output: "Mesh 18W",
      puffs: "Up to 600",
      battery: "Built-in",
      charging: "Disposable",
      dimensions: "75mm x 20mm x 15mm",
      weight: "35g"
    },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi", "Mango Peach", "Grape", "Pineapple", "Apple", "Peach Ice"],
    inStock: true,
    stock: 250,
    image: "bm600",
    theme: "bm",
    linkText: "Meet BM600 Pod",
    href: "products.html#bm600-pod",
  },
  {
    id: "cm15000-turbo",
    name: "CM15000 Turbo",
    tag: "Limited",
    category: "Turbo Series",
    price: 27.99,
    originalPrice: 32.99,
    description: "Statement colourways, turbo boost mode and gradient halo lighting.",
    fullDescription: "The CM15000 Turbo is a limited edition masterpiece that combines cutting-edge technology with stunning visual design. Featuring statement colourways that make a bold impression, this device includes turbo boost mode for enhanced vapour production when you need it most. The gradient halo lighting system provides dynamic visual feedback that responds to your usage patterns. With the same powerful dual-core engine as the MT15000, the CM15000 adds exclusive design elements and premium finishes that set it apart as a collector's item.",
    features: [
      "Statement colourways",
      "Turbo boost mode",
      "Gradient halo lighting",
      "Dual-core power matrix",
      "Up to 15,000 puffs",
      "Adaptive airflow control",
      "Type-C recharge",
      "Limited edition design"
    ],
    specifications: {
      output: "Dual-Core Turbo (Boost Mode)",
      puffs: "Up to 15,000",
      battery: "Built-in rechargeable",
      charging: "Type-C",
      dimensions: "85mm x 25mm x 20mm",
      weight: "68g"
    },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi", "Mango Peach", "Grape", "Tropical Mix", "Limited Edition Flavor"],
    inStock: true,
    stock: 45,
    image: "cm15000",
    theme: "cm",
    linkText: "Limited Edition Drop",
    href: "products.html#cm15000-turbo",
  },
  {
    id: "os5000",
    name: "OS5000",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "Sleek design with 5,000 puffs and premium flavour delivery.",
    fullDescription: "The OS5000 combines sleek modern design with impressive performance. This device delivers up to 5,000 puffs with consistent flavour quality throughout. The ergonomic design fits comfortably in hand, while the premium finish provides a sophisticated look. Powered by QUAQ mesh technology, the OS5000 ensures smooth, flavourful vapour from start to finish.",
    features: [
      "Up to 5,000 puffs",
      "QUAQ mesh technology",
      "Sleek modern design",
      "Ergonomic grip",
      "Premium finish",
      "Consistent flavour delivery"
    ],
    specifications: {
      output: "Mesh 25W",
      puffs: "Up to 5,000",
      battery: "Built-in rechargeable",
      charging: "Type-C",
      dimensions: "80mm x 22mm x 18mm",
      weight: "55g"
    },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi", "Mango Peach", "Grape"],
    inStock: true,
    stock: 120,
    image: "os5000",
    theme: "os",
    linkText: "View OS5000",
    href: "products.html#os5000",
  },
  {
    id: "mt15000-turbo-pro",
    name: "MT15000 Turbo Pro",
    tag: "Premium",
    category: "Turbo Series",
    price: 32.99,
    originalPrice: 37.99,
    description: "Professional-grade turbo device with advanced features and premium build quality.",
    fullDescription: "The MT15000 Turbo Pro is the professional-grade version of our flagship device. Featuring enhanced dual-core performance, advanced airflow customization, and premium materials throughout. The Pro model includes additional LED indicators, enhanced battery management, and a premium carrying case. Perfect for enthusiasts who demand the absolute best in performance and build quality.",
    features: [
      "Enhanced dual-core performance",
      "Advanced airflow customization",
      "Premium materials",
      "Additional LED indicators",
      "Enhanced battery management",
      "Premium carrying case included",
      "Up to 15,000 puffs",
      "Professional-grade build"
    ],
    specifications: {
      output: "Enhanced Dual-Core Turbo",
      puffs: "Up to 15,000",
      battery: "Advanced built-in rechargeable",
      charging: "Type-C fast charge",
      dimensions: "85mm x 25mm x 20mm",
      weight: "70g"
    },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Strawberry Kiwi", "Mango Peach", "Grape", "Tropical Mix", "Pro Exclusive Flavor"],
    inStock: true,
    stock: 75,
    image: "mt15000-pro",
    theme: "mt-pro",
    linkText: "View Turbo Pro",
    href: "products.html#mt15000-turbo-pro",
  },
  {
    id: "bm600-pod-pack",
    name: "BM600 Pod 5-Pack",
    tag: "Value",
    category: "Everyday Classic",
    price: 54.99,
    originalPrice: 64.99,
    description: "Value pack of 5 BM600 Pods in assorted flavours.",
    fullDescription: "Get the best value with our BM600 Pod 5-Pack. This bundle includes 5 BM600 devices in a variety of popular flavours, perfect for trying different options or stocking up. Each device delivers up to 600 puffs with the same quality and flavour you expect from Lost Mary.",
    features: [
      "5 BM600 devices included",
      "Assorted flavours",
      "Best value pricing",
      "Same quality as single units",
      "Perfect for variety or bulk purchase"
    ],
    specifications: {
      output: "Mesh 18W per device",
      puffs: "Up to 600 per device",
      battery: "Built-in per device",
      charging: "Disposable",
      quantity: "5 devices"
    },
    flavors: ["Assorted (5 different flavours)"],
    inStock: true,
    stock: 180,
    image: "bm600-pack",
    theme: "bm",
    linkText: "View 5-Pack",
    href: "products.html#bm600-pod-pack",
  },
  {
    id: "lost-mary-4in1-pods",
    name: "4in1 Replacement Pods",
    tag: "Accessory",
    category: "Accessories",
    price: 19.99,
    originalPrice: 24.99,
    description: "Replacement pods for Lost Mary 4in1 device in various flavour combinations.",
    fullDescription: "Keep your Lost Mary 4in1 device fresh with our replacement pod sets. Each set includes 4 pods in carefully curated flavour combinations. The pods feature the same magnetic lock-in technology and flavour-lock QUAQ mesh heating as the original device pods.",
    features: [
      "4 replacement pods",
      "Magnetic lock-in compatible",
      "Flavour-lock QUAQ mesh",
      "Various flavour combinations",
      "Leak-resistant design"
    ],
    specifications: {
      pods: "4 per pack",
      compatibility: "Lost Mary 4in1",
      puffs: "Up to 2,000 per pod"
    },
    flavors: ["Fruit Mix", "Ice Collection", "Tropical Paradise", "Classic Mix"],
    inStock: true,
    stock: 200,
    image: "4in1-pods",
    theme: "multi",
    linkText: "View Pods",
    href: "products.html#lost-mary-4in1-pods",
  },
  {
    id: "mt15000-blue-razz",
    name: "MT15000 Turbo - Blue Razz Ice",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "MT15000 Turbo device in Blue Razz Ice flavor with dual-core turbo engine.",
    fullDescription: "Experience the powerful MT15000 Turbo in the refreshing Blue Razz Ice flavor. This device combines the signature dual-core turbo engine with a cool, fruity taste that delivers up to 15,000 puffs of consistent flavor.",
    features: ["Dual-core power matrix", "Up to 15,000 puffs", "Blue Razz Ice flavor", "Adaptive airflow", "Type-C recharge"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Blue Razz Ice" },
    flavors: ["Blue Razz Ice"],
    inStock: true,
    stock: 120,
    image: "mt15000-blue",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-blue-razz",
  },
  {
    id: "mt15000-watermelon",
    name: "MT15000 Turbo - Watermelon Ice",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "MT15000 Turbo in refreshing Watermelon Ice flavor with maximum endurance.",
    fullDescription: "Cool down with the MT15000 Turbo in Watermelon Ice. This premium device delivers the perfect balance of sweet watermelon and icy freshness, powered by QUAQ mesh 2.0 technology.",
    features: ["Dual-core turbo", "15,000 puffs", "Watermelon Ice flavor", "LED halo feedback", "Gradient design"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Watermelon Ice" },
    flavors: ["Watermelon Ice"],
    inStock: true,
    stock: 95,
    image: "mt15000-watermelon",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-watermelon",
  },
  {
    id: "mt15000-strawberry-kiwi",
    name: "MT15000 Turbo - Strawberry Kiwi",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "Tropical blend of strawberry and kiwi in the powerful MT15000 Turbo device.",
    fullDescription: "Indulge in the exotic combination of sweet strawberry and tangy kiwi with the MT15000 Turbo. This flavor-packed device delivers consistent taste through every puff with adaptive airflow control.",
    features: ["Strawberry Kiwi flavor", "15,000 puffs", "Dual-core engine", "Type-C charging", "Premium build"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Strawberry Kiwi" },
    flavors: ["Strawberry Kiwi"],
    inStock: true,
    stock: 110,
    image: "mt15000-strawberry",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-strawberry-kiwi",
  },
  {
    id: "bm600-blue-razz",
    name: "BM600 Pod - Blue Razz Ice",
    tag: "Best Seller",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Compact BM600 Pod in the popular Blue Razz Ice flavor, perfect for on-the-go.",
    fullDescription: "The BM600 Pod in Blue Razz Ice is your perfect everyday companion. This pocket-ready device delivers up to 600 puffs of refreshing blue raspberry flavor with a cool ice finish.",
    features: ["Blue Razz Ice flavor", "600 puffs", "Compact design", "QUAQ mesh heating", "Ready to use"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Blue Razz Ice" },
    flavors: ["Blue Razz Ice"],
    inStock: true,
    stock: 300,
    image: "bm600-blue",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-blue-razz",
  },
  {
    id: "bm600-watermelon",
    name: "BM600 Pod - Watermelon Ice",
    tag: "Popular",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Refreshing Watermelon Ice flavor in the convenient BM600 Pod format.",
    fullDescription: "Stay refreshed with the BM600 Pod in Watermelon Ice. This compact device delivers the perfect summer flavor with every puff, featuring balanced vapor production and smooth throat hit.",
    features: ["Watermelon Ice flavor", "600 puffs", "Lightweight", "Ergonomic design", "Signature flavor"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Watermelon Ice" },
    flavors: ["Watermelon Ice"],
    inStock: true,
    stock: 280,
    image: "bm600-watermelon",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-watermelon",
  },
  {
    id: "bm600-mango-peach",
    name: "BM600 Pod - Mango Peach",
    tag: "Tropical",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Tropical Mango Peach flavor in the everyday BM600 Pod device.",
    fullDescription: "Escape to the tropics with the BM600 Pod in Mango Peach. This exotic flavor combination delivers sweet mango and juicy peach notes with every satisfying puff.",
    features: ["Mango Peach flavor", "600 puffs", "Tropical taste", "Compact size", "Soft-touch finish"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Mango Peach" },
    flavors: ["Mango Peach"],
    inStock: true,
    stock: 250,
    image: "bm600-mango",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-mango-peach",
  },
  {
    id: "bm600-grape",
    name: "BM600 Pod - Grape",
    tag: "Classic",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Classic Grape flavor in the reliable BM600 Pod format.",
    fullDescription: "Enjoy the timeless taste of grape with the BM600 Pod. This classic flavor delivers rich, fruity notes with consistent vapor production throughout its 600-puff lifespan.",
    features: ["Grape flavor", "600 puffs", "Classic taste", "Reliable performance", "Portable design"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Grape" },
    flavors: ["Grape"],
    inStock: true,
    stock: 220,
    image: "bm600-grape",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-grape",
  },
  {
    id: "bm600-pineapple",
    name: "BM600 Pod - Pineapple",
    tag: "Tropical",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Sweet Pineapple flavor in the compact BM600 Pod device.",
    fullDescription: "Taste the tropics with the BM600 Pod in Pineapple. This sweet and tangy flavor delivers authentic pineapple taste with smooth vapor and balanced nicotine delivery.",
    features: ["Pineapple flavor", "600 puffs", "Tropical blend", "Smooth vapor", "Balanced output"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Pineapple" },
    flavors: ["Pineapple"],
    inStock: true,
    stock: 200,
    image: "bm600-pineapple",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-pineapple",
  },
  {
    id: "bm600-apple",
    name: "BM600 Pod - Apple",
    tag: "Fresh",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Crisp Apple flavor in the everyday BM600 Pod.",
    fullDescription: "Experience the crisp, fresh taste of apple with the BM600 Pod. This clean flavor profile delivers authentic apple notes with every puff, perfect for all-day vaping.",
    features: ["Apple flavor", "600 puffs", "Fresh taste", "Clean profile", "All-day use"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Apple" },
    flavors: ["Apple"],
    inStock: true,
    stock: 180,
    image: "bm600-apple",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-apple",
  },
  {
    id: "bm600-peach-ice",
    name: "BM600 Pod - Peach Ice",
    tag: "Cool",
    category: "Everyday Classic",
    price: 12.99,
    originalPrice: 15.99,
    description: "Cool Peach Ice flavor in the portable BM600 Pod.",
    fullDescription: "Cool down with the BM600 Pod in Peach Ice. This refreshing combination of sweet peach and cooling ice delivers a satisfying vape experience in a compact package.",
    features: ["Peach Ice flavor", "600 puffs", "Cooling effect", "Sweet peach", "Portable"],
    specifications: { output: "Mesh 18W", puffs: "Up to 600", battery: "Built-in", charging: "Disposable", flavor: "Peach Ice" },
    flavors: ["Peach Ice"],
    inStock: true,
    stock: 190,
    image: "bm600-peach",
    theme: "bm",
    linkText: "View Product",
    href: "products.html#bm600-peach-ice",
  },
  {
    id: "4in1-fruit-mix",
    name: "Lost Mary 4in1 - Fruit Mix",
    tag: "Multi Flavour",
    category: "Multi Flavour",
    price: 34.99,
    originalPrice: 39.99,
    description: "4in1 device with Fruit Mix pod set featuring four different fruit flavors.",
    fullDescription: "Switch between four delicious fruit flavors with the Lost Mary 4in1 Fruit Mix edition. This multi-flavor system includes pods in Blue Razz, Watermelon, Mango Peach, and Grape for ultimate variety.",
    features: ["4 fruit flavors", "Magnetic pods", "LED indicators", "Flavor-lock technology", "8,000 total puffs"],
    specifications: { output: "Mesh 40W", puffs: "Up to 8,000", battery: "Built-in rechargeable", charging: "Type-C", pods: "4 fruit flavors" },
    flavors: ["Blue Razz", "Watermelon", "Mango Peach", "Grape"],
    inStock: true,
    stock: 85,
    image: "4in1-fruit",
    theme: "multi",
    linkText: "View Product",
    href: "products.html#4in1-fruit-mix",
  },
  {
    id: "4in1-ice-collection",
    name: "Lost Mary 4in1 - Ice Collection",
    tag: "Cool",
    category: "Multi Flavour",
    price: 34.99,
    originalPrice: 39.99,
    description: "4in1 device with Ice Collection featuring four cooling flavors.",
    fullDescription: "Stay cool with the Lost Mary 4in1 Ice Collection. This edition includes four ice-infused flavors: Blue Razz Ice, Watermelon Ice, Peach Ice, and Grape Ice for a refreshing vaping experience.",
    features: ["4 ice flavors", "Cooling sensation", "Smart LED cues", "Magnetic system", "Leak-resistant"],
    specifications: { output: "Mesh 40W", puffs: "Up to 8,000", battery: "Built-in rechargeable", charging: "Type-C", pods: "4 ice flavors" },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Peach Ice", "Grape Ice"],
    inStock: true,
    stock: 75,
    image: "4in1-ice",
    theme: "multi",
    linkText: "View Product",
    href: "products.html#4in1-ice-collection",
  },
  {
    id: "os5000-blue-razz",
    name: "OS5000 - Blue Razz Ice",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "OS5000 device in Blue Razz Ice flavor with 5,000 puffs capacity.",
    fullDescription: "The OS5000 in Blue Razz Ice combines sleek design with impressive performance. This device delivers up to 5,000 puffs of refreshing blue raspberry flavor with a cool ice finish.",
    features: ["5,000 puffs", "Blue Razz Ice", "QUAQ mesh", "Sleek design", "Type-C recharge"],
    specifications: { output: "Mesh 25W", puffs: "Up to 5,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Blue Razz Ice" },
    flavors: ["Blue Razz Ice"],
    inStock: true,
    stock: 100,
    image: "os5000-blue",
    theme: "os",
    linkText: "View Product",
    href: "products.html#os5000-blue-razz",
  },
  {
    id: "os5000-watermelon",
    name: "OS5000 - Watermelon Ice",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "OS5000 in Watermelon Ice flavor with extended battery life.",
    fullDescription: "Enjoy the refreshing taste of Watermelon Ice with the OS5000. This premium device delivers consistent flavor through 5,000 puffs with its advanced QUAQ mesh technology.",
    features: ["5,000 puffs", "Watermelon Ice", "Premium finish", "Ergonomic grip", "Consistent flavor"],
    specifications: { output: "Mesh 25W", puffs: "Up to 5,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Watermelon Ice" },
    flavors: ["Watermelon Ice"],
    inStock: true,
    stock: 95,
    image: "os5000-watermelon",
    theme: "os",
    linkText: "View Product",
    href: "products.html#os5000-watermelon",
  },
  {
    id: "cm15000-blue-razz",
    name: "CM15000 Turbo - Blue Razz Ice",
    tag: "Limited",
    category: "Turbo Series",
    price: 27.99,
    originalPrice: 32.99,
    description: "Limited edition CM15000 Turbo in Blue Razz Ice with exclusive design.",
    fullDescription: "Own the limited edition CM15000 Turbo in Blue Razz Ice. This exclusive device features statement colorways, turbo boost mode, and the refreshing Blue Razz Ice flavor in a collector's edition design.",
    features: ["Limited edition", "Blue Razz Ice", "Turbo boost", "Gradient lighting", "15,000 puffs"],
    specifications: { output: "Dual-Core Turbo (Boost)", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Blue Razz Ice" },
    flavors: ["Blue Razz Ice"],
    inStock: true,
    stock: 35,
    image: "cm15000-blue",
    theme: "cm",
    linkText: "View Product",
    href: "products.html#cm15000-blue-razz",
  },
  {
    id: "mt15000-pro-blue",
    name: "MT15000 Turbo Pro - Blue Razz Ice",
    tag: "Premium",
    category: "Turbo Series",
    price: 32.99,
    originalPrice: 37.99,
    description: "Professional-grade MT15000 Turbo Pro in Blue Razz Ice flavor.",
    fullDescription: "Experience professional-grade performance with the MT15000 Turbo Pro in Blue Razz Ice. This premium device includes enhanced features, premium materials, and a carrying case for the ultimate vaping experience.",
    features: ["Pro model", "Blue Razz Ice", "Enhanced performance", "Premium case", "15,000 puffs"],
    specifications: { output: "Enhanced Dual-Core Turbo", puffs: "Up to 15,000", battery: "Advanced rechargeable", charging: "Type-C fast charge", flavor: "Blue Razz Ice" },
    flavors: ["Blue Razz Ice"],
    inStock: true,
    stock: 60,
    image: "mt15000-pro-blue",
    theme: "mt-pro",
    linkText: "View Product",
    href: "products.html#mt15000-pro-blue",
  },
  {
    id: "bm600-10-pack",
    name: "BM600 Pod 10-Pack",
    tag: "Value",
    category: "Everyday Classic",
    price: 99.99,
    originalPrice: 129.99,
    description: "Value pack of 10 BM600 Pods in assorted flavors for maximum savings.",
    fullDescription: "Stock up with the BM600 Pod 10-Pack. This value bundle includes 10 devices in a variety of popular flavors, perfect for trying different options or ensuring you always have your favorite on hand.",
    features: ["10 devices", "Assorted flavors", "Best value", "Same quality", "Bulk savings"],
    specifications: { output: "Mesh 18W per device", puffs: "Up to 600 per device", battery: "Built-in per device", charging: "Disposable", quantity: "10 devices" },
    flavors: ["Assorted (10 different flavors)"],
    inStock: true,
    stock: 150,
    image: "bm600-10pack",
    theme: "bm",
    linkText: "View 10-Pack",
    href: "products.html#bm600-10-pack",
  },
  {
    id: "mt15000-bundle",
    name: "MT15000 Turbo Starter Bundle",
    tag: "Bundle",
    category: "Turbo Series",
    price: 49.99,
    originalPrice: 59.99,
    description: "Complete starter bundle with MT15000 Turbo device, charger, and case.",
    fullDescription: "Get everything you need to start with the MT15000 Turbo Starter Bundle. Includes the device, Type-C charging cable, premium carrying case, and user manual for the perfect introduction to Lost Mary's turbo series.",
    features: ["MT15000 device", "Charging cable", "Premium case", "User manual", "Complete starter kit"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C included", bundle: "Complete kit" },
    flavors: ["Choose your flavor"],
    inStock: true,
    stock: 80,
    image: "mt15000-bundle",
    theme: "mt",
    linkText: "View Bundle",
    href: "products.html#mt15000-bundle",
  },
  {
    id: "4in1-starter-kit",
    name: "Lost Mary 4in1 Starter Kit",
    tag: "Bundle",
    category: "Multi Flavour",
    price: 59.99,
    originalPrice: 69.99,
    description: "Complete 4in1 starter kit with device, extra pods, and accessories.",
    fullDescription: "Start your multi-flavor journey with the Lost Mary 4in1 Starter Kit. Includes the main device, two additional pod sets (8 pods total), charging cable, and premium storage case for organized flavor management.",
    features: ["4in1 device", "8 pods total", "Charging cable", "Storage case", "User guide"],
    specifications: { output: "Mesh 40W", puffs: "Up to 8,000", battery: "Built-in rechargeable", charging: "Type-C included", pods: "8 pods included" },
    flavors: ["Variety pack included"],
    inStock: true,
    stock: 65,
    image: "4in1-kit",
    theme: "multi",
    linkText: "View Kit",
    href: "products.html#4in1-starter-kit",
  },
  {
    id: "charging-cable",
    name: "Type-C Charging Cable",
    tag: "Accessory",
    category: "Accessories",
    price: 9.99,
    originalPrice: 14.99,
    description: "Premium Type-C charging cable compatible with all Lost Mary rechargeable devices.",
    fullDescription: "Keep your Lost Mary devices powered with this premium Type-C charging cable. Features fast-charging capability, durable construction, and compatibility with all Lost Mary rechargeable devices including MT15000, CM15000, OS5000, and 4in1.",
    features: ["Type-C connector", "Fast charging", "Durable build", "Universal compatibility", "1.5m length"],
    specifications: { type: "USB-C to USB-A", length: "1.5 meters", compatibility: "All Lost Mary devices", charging: "Fast charge supported" },
    flavors: [],
    inStock: true,
    stock: 500,
    image: "cable",
    theme: "accessory",
    linkText: "View Cable",
    href: "products.html#charging-cable",
  },
  {
    id: "premium-case",
    name: "Premium Carrying Case",
    tag: "Accessory",
    category: "Accessories",
    price: 19.99,
    originalPrice: 24.99,
    description: "Premium protective carrying case for Lost Mary devices with organized compartments.",
    fullDescription: "Protect and organize your Lost Mary devices with this premium carrying case. Features padded interior, multiple compartments for devices and pods, zippered closure, and sleek design that matches Lost Mary's aesthetic.",
    features: ["Padded protection", "Multiple compartments", "Zippered closure", "Sleek design", "Device organizer"],
    specifications: { material: "Premium PU leather", compartments: "Multiple", protection: "Padded interior", size: "Universal fit" },
    flavors: [],
    inStock: true,
    stock: 300,
    image: "case",
    theme: "accessory",
    linkText: "View Case",
    href: "products.html#premium-case",
  },
  {
    id: "pod-storage",
    name: "Pod Storage Organizer",
    tag: "Accessory",
    category: "Accessories",
    price: 14.99,
    originalPrice: 19.99,
    description: "Organized storage solution for Lost Mary 4in1 pods and accessories.",
    fullDescription: "Keep your Lost Mary 4in1 pods organized and protected with this dedicated storage organizer. Features individual slots for up to 8 pods, clear labeling, and compact design perfect for travel or home use.",
    features: ["8 pod slots", "Clear labeling", "Compact design", "Travel-friendly", "Protective storage"],
    specifications: { capacity: "8 pods", material: "Durable plastic", design: "Compact", protection: "Individual slots" },
    flavors: [],
    inStock: true,
    stock: 250,
    image: "pod-storage",
    theme: "accessory",
    linkText: "View Organizer",
    href: "products.html#pod-storage",
  },
  {
    id: "mt15000-mango",
    name: "MT15000 Turbo - Mango Peach",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "Tropical Mango Peach flavor in the powerful MT15000 Turbo device.",
    fullDescription: "Escape to the tropics with the MT15000 Turbo in Mango Peach. This exotic flavor combination delivers sweet mango and juicy peach notes with the power of dual-core turbo technology.",
    features: ["Mango Peach flavor", "15,000 puffs", "Dual-core turbo", "Tropical taste", "Type-C charge"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Mango Peach" },
    flavors: ["Mango Peach"],
    inStock: true,
    stock: 105,
    image: "mt15000-mango",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-mango",
  },
  {
    id: "mt15000-grape",
    name: "MT15000 Turbo - Grape",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "Classic Grape flavor in the high-performance MT15000 Turbo.",
    fullDescription: "Enjoy the timeless taste of grape with the MT15000 Turbo. This classic flavor delivers rich, fruity notes with maximum performance through 15,000 puffs of consistent flavor.",
    features: ["Grape flavor", "15,000 puffs", "Classic taste", "High performance", "Adaptive airflow"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Grape" },
    flavors: ["Grape"],
    inStock: true,
    stock: 100,
    image: "mt15000-grape",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-grape",
  },
  {
    id: "mt15000-tropical",
    name: "MT15000 Turbo - Tropical Mix",
    tag: "Flavor",
    category: "Turbo Series",
    price: 24.99,
    originalPrice: 29.99,
    description: "Exotic Tropical Mix flavor in the MT15000 Turbo device.",
    fullDescription: "Experience a tropical paradise with the MT15000 Turbo in Tropical Mix. This exotic blend combines pineapple, mango, and passion fruit for a refreshing vaping experience.",
    features: ["Tropical Mix flavor", "15,000 puffs", "Exotic blend", "Dual-core power", "LED feedback"],
    specifications: { output: "Dual-Core Turbo", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Tropical Mix" },
    flavors: ["Tropical Mix"],
    inStock: true,
    stock: 90,
    image: "mt15000-tropical",
    theme: "mt",
    linkText: "View Product",
    href: "products.html#mt15000-tropical",
  },
  {
    id: "os5000-strawberry",
    name: "OS5000 - Strawberry Kiwi",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "OS5000 in Strawberry Kiwi flavor with sleek modern design.",
    fullDescription: "Enjoy the perfect blend of sweet strawberry and tangy kiwi with the OS5000. This device delivers up to 5,000 puffs of consistent flavor with its advanced QUAQ mesh technology.",
    features: ["Strawberry Kiwi", "5,000 puffs", "Sleek design", "QUAQ mesh", "Type-C recharge"],
    specifications: { output: "Mesh 25W", puffs: "Up to 5,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Strawberry Kiwi" },
    flavors: ["Strawberry Kiwi"],
    inStock: true,
    stock: 88,
    image: "os5000-strawberry",
    theme: "os",
    linkText: "View Product",
    href: "products.html#os5000-strawberry",
  },
  {
    id: "os5000-mango",
    name: "OS5000 - Mango Peach",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "OS5000 in tropical Mango Peach flavor with premium finish.",
    fullDescription: "Taste the tropics with the OS5000 in Mango Peach. This premium device combines exotic mango and juicy peach flavors with impressive 5,000-puff capacity.",
    features: ["Mango Peach", "5,000 puffs", "Premium finish", "Tropical taste", "Ergonomic grip"],
    specifications: { output: "Mesh 25W", puffs: "Up to 5,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Mango Peach" },
    flavors: ["Mango Peach"],
    inStock: true,
    stock: 85,
    image: "os5000-mango",
    theme: "os",
    linkText: "View Product",
    href: "products.html#os5000-mango",
  },
  {
    id: "os5000-grape",
    name: "OS5000 - Grape",
    tag: "New",
    category: "Everyday Classic",
    price: 18.99,
    originalPrice: 22.99,
    description: "Classic Grape flavor in the OS5000 device with extended capacity.",
    fullDescription: "Experience the timeless taste of grape with the OS5000. This classic flavor delivers rich, fruity notes through 5,000 puffs with consistent quality.",
    features: ["Grape flavor", "5,000 puffs", "Classic taste", "Consistent quality", "Modern design"],
    specifications: { output: "Mesh 25W", puffs: "Up to 5,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Grape" },
    flavors: ["Grape"],
    inStock: true,
    stock: 82,
    image: "os5000-grape",
    theme: "os",
    linkText: "View Product",
    href: "products.html#os5000-grape",
  },
  {
    id: "cm15000-watermelon",
    name: "CM15000 Turbo - Watermelon Ice",
    tag: "Limited",
    category: "Turbo Series",
    price: 27.99,
    originalPrice: 32.99,
    description: "Limited edition CM15000 Turbo in refreshing Watermelon Ice flavor.",
    fullDescription: "Cool down with the limited edition CM15000 Turbo in Watermelon Ice. This exclusive device features statement colorways, turbo boost mode, and the refreshing watermelon flavor.",
    features: ["Limited edition", "Watermelon Ice", "Turbo boost", "Gradient lighting", "15,000 puffs"],
    specifications: { output: "Dual-Core Turbo (Boost)", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Watermelon Ice" },
    flavors: ["Watermelon Ice"],
    inStock: true,
    stock: 30,
    image: "cm15000-watermelon",
    theme: "cm",
    linkText: "View Product",
    href: "products.html#cm15000-watermelon",
  },
  {
    id: "cm15000-strawberry",
    name: "CM15000 Turbo - Strawberry Kiwi",
    tag: "Limited",
    category: "Turbo Series",
    price: 27.99,
    originalPrice: 32.99,
    description: "Limited edition CM15000 Turbo in Strawberry Kiwi flavor.",
    fullDescription: "Own the limited edition CM15000 Turbo in Strawberry Kiwi. This collector's item combines exotic flavor with exclusive design elements and turbo boost technology.",
    features: ["Limited edition", "Strawberry Kiwi", "Turbo boost", "Exclusive design", "15,000 puffs"],
    specifications: { output: "Dual-Core Turbo (Boost)", puffs: "Up to 15,000", battery: "Built-in rechargeable", charging: "Type-C", flavor: "Strawberry Kiwi" },
    flavors: ["Strawberry Kiwi"],
    inStock: true,
    stock: 28,
    image: "cm15000-strawberry",
    theme: "cm",
    linkText: "View Product",
    href: "products.html#cm15000-strawberry",
  },
  {
    id: "mt15000-pro-watermelon",
    name: "MT15000 Turbo Pro - Watermelon Ice",
    tag: "Premium",
    category: "Turbo Series",
    price: 32.99,
    originalPrice: 37.99,
    description: "Professional-grade MT15000 Turbo Pro in Watermelon Ice flavor.",
    fullDescription: "Experience professional-grade performance with the MT15000 Turbo Pro in Watermelon Ice. This premium device includes enhanced features and premium materials for the ultimate vaping experience.",
    features: ["Pro model", "Watermelon Ice", "Enhanced performance", "Premium materials", "15,000 puffs"],
    specifications: { output: "Enhanced Dual-Core Turbo", puffs: "Up to 15,000", battery: "Advanced rechargeable", charging: "Type-C fast charge", flavor: "Watermelon Ice" },
    flavors: ["Watermelon Ice"],
    inStock: true,
    stock: 55,
    image: "mt15000-pro-watermelon",
    theme: "mt-pro",
    linkText: "View Product",
    href: "products.html#mt15000-pro-watermelon",
  },
  {
    id: "mt15000-pro-strawberry",
    name: "MT15000 Turbo Pro - Strawberry Kiwi",
    tag: "Premium",
    category: "Turbo Series",
    price: 32.99,
    originalPrice: 37.99,
    description: "Professional-grade MT15000 Turbo Pro in Strawberry Kiwi flavor.",
    fullDescription: "Indulge in professional-grade performance with the MT15000 Turbo Pro in Strawberry Kiwi. This premium device delivers enhanced dual-core performance with exotic flavor.",
    features: ["Pro model", "Strawberry Kiwi", "Enhanced turbo", "Premium case", "15,000 puffs"],
    specifications: { output: "Enhanced Dual-Core Turbo", puffs: "Up to 15,000", battery: "Advanced rechargeable", charging: "Type-C fast charge", flavor: "Strawberry Kiwi" },
    flavors: ["Strawberry Kiwi"],
    inStock: true,
    stock: 50,
    image: "mt15000-pro-strawberry",
    theme: "mt-pro",
    linkText: "View Product",
    href: "products.html#mt15000-pro-strawberry",
  },
  {
    id: "4in1-tropical",
    name: "Lost Mary 4in1 - Tropical Paradise",
    tag: "Multi Flavour",
    category: "Multi Flavour",
    price: 34.99,
    originalPrice: 39.99,
    description: "4in1 device with Tropical Paradise pod set featuring exotic flavors.",
    fullDescription: "Escape to paradise with the Lost Mary 4in1 Tropical Paradise edition. This multi-flavor system includes pods in Pineapple, Mango, Passion Fruit, and Coconut for an exotic experience.",
    features: ["4 tropical flavors", "Magnetic pods", "LED cues", "Exotic blend", "8,000 total puffs"],
    specifications: { output: "Mesh 40W", puffs: "Up to 8,000", battery: "Built-in rechargeable", charging: "Type-C", pods: "4 tropical flavors" },
    flavors: ["Pineapple", "Mango", "Passion Fruit", "Coconut"],
    inStock: true,
    stock: 70,
    image: "4in1-tropical",
    theme: "multi",
    linkText: "View Product",
    href: "products.html#4in1-tropical",
  },
  {
    id: "4in1-classic-mix",
    name: "Lost Mary 4in1 - Classic Mix",
    tag: "Multi Flavour",
    category: "Multi Flavour",
    price: 34.99,
    originalPrice: 39.99,
    description: "4in1 device with Classic Mix pod set featuring timeless flavors.",
    fullDescription: "Enjoy classic flavors with the Lost Mary 4in1 Classic Mix edition. This collection includes Grape, Apple, Blue Razz, and Watermelon for a traditional vaping experience.",
    features: ["4 classic flavors", "Magnetic system", "Smart LED", "Traditional taste", "8,000 total puffs"],
    specifications: { output: "Mesh 40W", puffs: "Up to 8,000", battery: "Built-in rechargeable", charging: "Type-C", pods: "4 classic flavors" },
    flavors: ["Grape", "Apple", "Blue Razz", "Watermelon"],
    inStock: true,
    stock: 80,
    image: "4in1-classic",
    theme: "multi",
    linkText: "View Product",
    href: "products.html#4in1-classic-mix",
  },
  {
    id: "replacement-pods-fruit",
    name: "4in1 Replacement Pods - Fruit Mix",
    tag: "Accessory",
    category: "Accessories",
    price: 19.99,
    originalPrice: 24.99,
    description: "Replacement pod set with Fruit Mix flavors for Lost Mary 4in1 device.",
    fullDescription: "Refresh your Lost Mary 4in1 with this Fruit Mix replacement pod set. Includes 4 pods in Blue Razz, Watermelon, Mango Peach, and Grape with the same quality and technology as original pods.",
    features: ["4 fruit pods", "Magnetic compatible", "Flavor-lock QUAQ", "Same quality", "Leak-resistant"],
    specifications: { pods: "4 per pack", compatibility: "Lost Mary 4in1", puffs: "Up to 2,000 per pod", flavors: "Fruit Mix" },
    flavors: ["Blue Razz", "Watermelon", "Mango Peach", "Grape"],
    inStock: true,
    stock: 180,
    image: "pods-fruit",
    theme: "multi",
    linkText: "View Pods",
    href: "products.html#replacement-pods-fruit",
  },
  {
    id: "replacement-pods-ice",
    name: "4in1 Replacement Pods - Ice Collection",
    tag: "Accessory",
    category: "Accessories",
    price: 19.99,
    originalPrice: 24.99,
    description: "Replacement pod set with Ice Collection flavors for Lost Mary 4in1.",
    fullDescription: "Stay cool with this Ice Collection replacement pod set. Includes 4 pods in Blue Razz Ice, Watermelon Ice, Peach Ice, and Grape Ice for a refreshing vaping experience.",
    features: ["4 ice pods", "Cooling effect", "Magnetic lock", "Flavor-lock technology", "Leak-resistant"],
    specifications: { pods: "4 per pack", compatibility: "Lost Mary 4in1", puffs: "Up to 2,000 per pod", flavors: "Ice Collection" },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Peach Ice", "Grape Ice"],
    inStock: true,
    stock: 170,
    image: "pods-ice",
    theme: "multi",
    linkText: "View Pods",
    href: "products.html#replacement-pods-ice",
  },
  {
    id: "replacement-pods-tropical",
    name: "4in1 Replacement Pods - Tropical Paradise",
    tag: "Accessory",
    category: "Accessories",
    price: 19.99,
    originalPrice: 24.99,
    description: "Replacement pod set with Tropical Paradise flavors for Lost Mary 4in1.",
    fullDescription: "Escape to the tropics with this Tropical Paradise replacement pod set. Includes 4 pods in Pineapple, Mango, Passion Fruit, and Coconut for an exotic flavor journey.",
    features: ["4 tropical pods", "Exotic flavors", "Magnetic system", "QUAQ mesh", "Premium quality"],
    specifications: { pods: "4 per pack", compatibility: "Lost Mary 4in1", puffs: "Up to 2,000 per pod", flavors: "Tropical Paradise" },
    flavors: ["Pineapple", "Mango", "Passion Fruit", "Coconut"],
    inStock: true,
    stock: 160,
    image: "pods-tropical",
    theme: "multi",
    linkText: "View Pods",
    href: "products.html#replacement-pods-tropical",
  },
  {
    id: "device-stand",
    name: "Device Stand & Organizer",
    tag: "Accessory",
    category: "Accessories",
    price: 12.99,
    originalPrice: 17.99,
    description: "Premium stand and organizer for Lost Mary devices and accessories.",
    fullDescription: "Keep your Lost Mary devices organized and displayed with this premium stand and organizer. Features slots for multiple devices, pod storage, and a sleek design that complements your setup.",
    features: ["Multi-device slots", "Pod storage", "Sleek design", "Stable base", "Organized display"],
    specifications: { capacity: "Multiple devices", material: "Premium plastic", design: "Sleek", stability: "Weighted base" },
    flavors: [],
    inStock: true,
    stock: 400,
    image: "stand",
    theme: "accessory",
    linkText: "View Stand",
    href: "products.html#device-stand",
  },
  {
    id: "cleaning-kit",
    name: "Device Cleaning Kit",
    tag: "Accessory",
    category: "Accessories",
    price: 14.99,
    originalPrice: 19.99,
    description: "Complete cleaning kit for maintaining your Lost Mary devices.",
    fullDescription: "Keep your Lost Mary devices in perfect condition with this comprehensive cleaning kit. Includes cleaning solution, microfiber cloths, cotton swabs, and detailed instructions for proper device maintenance.",
    features: ["Cleaning solution", "Microfiber cloths", "Cotton swabs", "Instructions", "Complete kit"],
    specifications: { contents: "Multiple items", purpose: "Device maintenance", compatibility: "All devices", instructions: "Included" },
    flavors: [],
    inStock: true,
    stock: 350,
    image: "cleaning",
    theme: "accessory",
    linkText: "View Kit",
    href: "products.html#cleaning-kit",
  },
  {
    id: "travel-pouch",
    name: "Travel Pouch",
    tag: "Accessory",
    category: "Accessories",
    price: 16.99,
    originalPrice: 21.99,
    description: "Compact travel pouch for Lost Mary devices and pods on the go.",
    fullDescription: "Take your Lost Mary devices anywhere with this compact travel pouch. Features padded protection, multiple compartments, zippered closure, and a sleek design perfect for travel or daily use.",
    features: ["Padded protection", "Multiple compartments", "Zippered closure", "Compact design", "Travel-friendly"],
    specifications: { material: "Durable fabric", compartments: "Multiple", protection: "Padded", size: "Compact" },
    flavors: [],
    inStock: true,
    stock: 320,
    image: "pouch",
    theme: "accessory",
    linkText: "View Pouch",
    href: "products.html#travel-pouch",
  },
  {
    id: "flavor-sampler",
    name: "Flavor Sampler Pack",
    tag: "New",
    category: "Everyday Classic",
    price: 39.99,
    originalPrice: 49.99,
    description: "Try 3 different BM600 Pod flavors in one convenient sampler pack.",
    fullDescription: "Discover your favorite flavor with this BM600 Flavor Sampler Pack. Includes 3 devices in different flavors so you can try Blue Razz Ice, Watermelon Ice, and Mango Peach before committing to a full pack.",
    features: ["3 different flavors", "Try before you buy", "Same quality", "Convenient pack", "Value pricing"],
    specifications: { quantity: "3 devices", flavors: "Assorted", output: "Mesh 18W per device", puffs: "Up to 600 per device" },
    flavors: ["Blue Razz Ice", "Watermelon Ice", "Mango Peach"],
    inStock: true,
    stock: 200,
    image: "sampler",
    theme: "bm",
    linkText: "View Sampler",
    href: "products.html#flavor-sampler",
  },
  {
    id: "mt15000-twin-pack",
    name: "MT15000 Turbo Twin Pack",
    tag: "Bundle",
    category: "Turbo Series",
    price: 44.99,
    originalPrice: 54.99,
    description: "Get two MT15000 Turbo devices in your choice of flavors.",
    fullDescription: "Double your vaping power with the MT15000 Turbo Twin Pack. Includes two full MT15000 Turbo devices so you can have a backup or share with a friend. Choose your preferred flavors for maximum value.",
    features: ["2 devices", "Choose flavors", "Best value", "Backup device", "Share option"],
    specifications: { quantity: "2 devices", output: "Dual-Core Turbo per device", puffs: "Up to 15,000 per device", battery: "Built-in rechargeable" },
    flavors: ["Choose 2 flavors"],
    inStock: true,
    stock: 90,
    image: "mt15000-twin",
    theme: "mt",
    linkText: "View Twin Pack",
    href: "products.html#mt15000-twin-pack",
  },
  {
    id: "ultimate-bundle",
    name: "Ultimate Lost Mary Bundle",
    tag: "Premium",
    category: "Turbo Series",
    price: 129.99,
    originalPrice: 169.99,
    description: "Complete Lost Mary collection bundle with devices, accessories, and more.",
    fullDescription: "Get everything you need with the Ultimate Lost Mary Bundle. Includes MT15000 Turbo, Lost Mary 4in1, premium carrying case, charging cable, pod storage organizer, and cleaning kit - everything for the ultimate Lost Mary experience.",
    features: ["MT15000 Turbo", "Lost Mary 4in1", "Premium case", "Charging cable", "Storage organizer", "Cleaning kit"],
    specifications: { devices: "2 main devices", accessories: "Multiple", value: "Best bundle", savings: "Significant discount" },
    flavors: ["Choose flavors"],
    inStock: true,
    stock: 50,
    image: "ultimate",
    theme: "mt",
    linkText: "View Bundle",
    href: "products.html#ultimate-bundle",
  }
];

// Use products for homepage slider (first 4)
const products = allProducts.slice(0, 4);

let currentSlide = 0;

function markActiveNav() {
  const pageKey = body.dataset.page;
  const navLinks = document.querySelectorAll('[data-page]');
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === pageKey;
    if (isActive) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

function toggleDrawer(force) {
  const shouldOpen = typeof force === "boolean" ? force : !drawer.classList.contains("open");
  drawer.classList.toggle("open", shouldOpen);
  menuToggle?.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function buildProductSlider() {
  if (!productTrack) return;

  productTrack.innerHTML = "";
  productDots.innerHTML = "";

  products.forEach((product, index) => {
    const article = document.createElement("article");
    article.className = `showcase-card theme-${product.theme}`;
    article.innerHTML = `
      <span class="card-tag">${product.tag}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="card-actions">
        <button class="lm-btn solid" onclick="showProductDetails('${product.id}')">View Details</button>
        <button class="lm-btn outline" onclick="addToCart('${product.id}')">Add to Cart</button>
      </div>
    `;
    productTrack.appendChild(article);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${product.name} slide`);
    dot.dataset.index = index.toString();
    dot.addEventListener("click", () => goToSlide(index));
    productDots.appendChild(dot);
  });

  goToSlide(0);
}

function goToSlide(index) {
  if (!productTrack) return;
  const cards = productTrack.children;
  const total = cards.length;
  if (total === 0) return;
  currentSlide = (index + total) % total;

  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(productTrack).columnGap || "20");
  const offset = currentSlide * (cardWidth + gap);
  productTrack.scrollTo({ left: offset, behavior: "smooth" });

  [...productDots.children].forEach((dot, i) => {
    dot.setAttribute("aria-selected", i === currentSlide ? "true" : "false");
  });
}

function handleNavButtons() {
  prevBtn?.addEventListener("click", () => goToSlide(currentSlide - 1));
  nextBtn?.addEventListener("click", () => goToSlide(currentSlide + 1));
}

function enhanceHeader() {
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    const isScrolled = current > 30;
    header?.classList.toggle("is-scrolled", isScrolled);

    if (current > lastScroll && current > 120) {
      header?.classList.add("hide");
    } else {
      header?.classList.remove("hide");
    }
    lastScroll = current;
  });
}

function handleBackToTop() {
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initMenuToggle() {
  menuToggle?.addEventListener("click", () => toggleDrawer());
  drawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });
}

function init() {
  markActiveNav();
  buildProductSlider();
  handleNavButtons();
  enhanceHeader();
  handleBackToTop();
  initMenuToggle();
  initStoreLocator();
}

// Store Locator Functionality
function initStoreLocator() {
  const searchInput = document.getElementById("storeSearch");
  const searchClear = document.querySelector(".search-clear");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const storeCards = document.querySelectorAll(".store-card");
  const storeGrid = document.getElementById("storeGrid");
  const noResults = document.getElementById("noResults");
  const storeCount = document.getElementById("storeCount");

  if (!searchInput || !storeGrid) return;

  let currentRegion = "all";
  let currentSearch = "";

  function filterStores() {
    let visibleCount = 0;

    storeCards.forEach((card) => {
      const region = card.dataset.region;
      const name = (card.dataset.name || "").toLowerCase();
      const city = (card.dataset.city || "").toLowerCase();
      const country = (card.dataset.country || "").toLowerCase();

      const matchesRegion = currentRegion === "all" || region === currentRegion;
      const matchesSearch =
        !currentSearch ||
        name.includes(currentSearch) ||
        city.includes(currentSearch) ||
        country.includes(currentSearch);

      if (matchesRegion && matchesSearch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Update store count
    if (storeCount) {
      storeCount.textContent = visibleCount;
    }

    // Show/hide no results message
    if (noResults) {
      if (visibleCount === 0) {
        noResults.style.display = "block";
        storeGrid.style.display = "none";
      } else {
        noResults.style.display = "none";
        storeGrid.style.display = "grid";
      }
    }
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      if (searchClear) {
        searchClear.style.display = currentSearch ? "flex" : "none";
      }
      filterStores();
    });
  }

  // Clear search button
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        currentSearch = "";
        searchClear.style.display = "none";
        filterStores();
        searchInput.focus();
      }
    });
  }

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentRegion = btn.dataset.region || "all";
      filterStores();
    });
  });

  // Initial filter
  filterStores();
}

// Scroll Animation Observer
function initScrollAnimations() {
  // Remove no-js class if JavaScript is running
  document.body.classList.remove("no-js");
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with scroll animation classes
  const animatedElements = document.querySelectorAll(
    ".scroll-animate, .scroll-animate-fade, .scroll-animate-slide-left, .scroll-animate-slide-right, .scroll-animate-scale"
  );
  
  animatedElements.forEach((el) => {
    // If element is already in viewport, animate immediately
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      el.classList.add("animate-in");
    } else {
      observer.observe(el);
    }
  });
}

// Shopping Cart System
let cart = JSON.parse(localStorage.getItem('lostMaryCart')) || [];

function getProductById(id) {
  return allProducts.find(p => p.id === id);
}

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return false;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  updateCartUI();
  showCartNotification();
  return true;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateCartQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart();
      updateCartUI();
    }
  }
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartItemCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function saveCart() {
  localStorage.setItem('lostMaryCart', JSON.stringify(cart));
}

function updateCartUI() {
  // Update cart badge in header
  const cartBadge = document.getElementById('cartBadge');
  const cartCount = getCartItemCount();
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }
  
  // Update cart sidebar if open
  const cartSidebar = document.getElementById('cartSidebar');
  if (cartSidebar && cartSidebar.classList.contains('open')) {
    renderCartSidebar();
  }
  
  // Update cart page if on checkout
  if (document.getElementById('cartItems')) {
    renderCartPage();
  }
}

function showCartNotification() {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
    }, 100);
}

function toggleCartSidebar() {
  const cartSidebar = document.getElementById('cartSidebar');
  const cartOverlay = document.getElementById('cartOverlay');
  if (cartSidebar) {
    const isOpen = cartSidebar.classList.contains('open');
    cartSidebar.classList.toggle('open');
    if (cartOverlay) {
      if (!isOpen) {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    if (!isOpen) {
      renderCartSidebar();
    }
  }
}

function renderCartSidebar() {
  const cartItems = document.getElementById('cartItemsList');
  const cartTotal = document.getElementById('cartTotal');
  
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p><a href="products.html" class="lm-btn solid">Browse Products</a></div>';
    if (cartTotal) cartTotal.textContent = '$0.00';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => {
    const product = getProductById(item.id);
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
          <span class="cart-qty">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
          <button class="cart-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove">×</button>
        </div>
      </div>
    `;
  }).join('');
  
  if (cartTotal) {
    cartTotal.textContent = `$${getCartTotal().toFixed(2)}`;
  }
}

function renderCartPage() {
  const cartItems = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  
  if (!cartItems) return;
  
  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty-page"><h3>Your cart is empty</h3><p>Start shopping to add items to your cart</p><a href="products.html" class="lm-btn solid">Browse Products</a></div>';
    if (cartSummary) cartSummary.innerHTML = '';
    return;
  }
  
  cartItems.innerHTML = cart.map(item => {
    const product = getProductById(item.id);
    const subtotal = item.price * item.quantity;
    return `
      <div class="checkout-cart-item">
        <div class="checkout-item-info">
          <h4>${item.name}</h4>
          <p class="checkout-item-price">$${item.price.toFixed(2)} each</p>
        </div>
        <div class="checkout-item-controls">
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
          <span class="cart-qty">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
        </div>
        <div class="checkout-item-total">
          <strong>$${subtotal.toFixed(2)}</strong>
          <button class="cart-remove" onclick="removeFromCart('${item.id}')" aria-label="Remove">×</button>
        </div>
      </div>
    `;
  }).join('');
  
  if (cartSummary) {
    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    cartSummary.innerHTML = `
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Shipping</span>
        <span>${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
      </div>
      <div class="cart-summary-row">
        <span>Tax</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row cart-summary-total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    `;
  }
}

// Make functions available globally for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleCartSidebar = toggleCartSidebar;

function initCart() {
  updateCartUI();
  
  // Cart toggle button
  const cartToggle = document.getElementById('cartToggle');
  if (cartToggle) {
    cartToggle.addEventListener('click', toggleCartSidebar);
  }
  
  // Close cart sidebar on overlay click
  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => {
      const cartSidebar = document.getElementById('cartSidebar');
      if (cartSidebar) {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Close cart sidebar button
  const cartClose = document.getElementById('cartClose');
  if (cartClose) {
    cartClose.addEventListener('click', () => {
      const cartSidebar = document.getElementById('cartSidebar');
      if (cartSidebar) {
        cartSidebar.classList.remove('open');
        if (cartOverlay) {
          cartOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
      }
    });
  }
}

function init() {
  markActiveNav();
  buildProductSlider();
  handleNavButtons();
  enhanceHeader();
  handleBackToTop();
  initMenuToggle();
  initStoreLocator();
  initScrollAnimations();
  initCart();
  initProductDetails();
  initProductsPage();
}

// Product Details Modal
function showProductDetails(productId) {
  const product = getProductById(productId);
  if (!product) return;
  
  const modal = document.getElementById('productModal');
  if (!modal) return;
  
  const modalContent = modal.querySelector('.product-modal-content');
  if (!modalContent) return;
  
  modalContent.innerHTML = `
    <button class="modal-close" onclick="closeProductModal()" aria-label="Close">×</button>
    <div class="product-modal-grid">
      <div class="product-modal-image">
        <div class="product-image-placeholder theme-${product.theme}">
          <span>${product.name}</span>
        </div>
      </div>
      <div class="product-modal-info">
        <span class="product-tag">${product.tag}</span>
        <h2>${product.name}</h2>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <p class="product-description">${product.fullDescription}</p>
        
        <div class="product-features">
          <h3>Key Features</h3>
          <ul>
            ${product.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        
        <div class="product-specs-modal">
          <h3>Specifications</h3>
          <dl>
            ${Object.entries(product.specifications).map(([key, value]) => 
              `<dt>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</dt><dd>${value}</dd>`
            ).join('')}
          </dl>
        </div>
        
        <div class="product-flavors">
          <h3>Available Flavors</h3>
          <div class="flavor-tags">
            ${product.flavors.map(f => `<span class="flavor-tag">${f}</span>`).join('')}
          </div>
        </div>
        
        <div class="product-stock">
          ${product.inStock ? 
            `<span class="in-stock">✓ In Stock (${product.stock} available)</span>` : 
            '<span class="out-of-stock">Out of Stock</span>'
          }
        </div>
        
        <div class="product-actions">
          <button class="lm-btn solid" onclick="addToCart('${product.id}'); closeProductModal();" ${!product.inStock ? 'disabled' : ''}>
            Add to Cart
          </button>
          <button class="lm-btn outline" onclick="closeProductModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function initProductDetails() {
  // Close modal on overlay click
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
  
  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
    }
  });
  
  // Handle product detail links from URL hash
  if (window.location.hash) {
    const productId = window.location.hash.substring(1);
    if (getProductById(productId)) {
      setTimeout(() => showProductDetails(productId), 100);
    }
  }
}

window.showProductDetails = showProductDetails;
window.closeProductModal = closeProductModal;

// Products Page
function initProductsPage() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = allProducts.map(product => `
    <article class="product-card" data-category="${product.category}">
      <div class="product-card-image theme-${product.theme}">
        <span class="product-card-tag">${product.tag}</span>
        ${product.originalPrice ? `<span class="product-discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>` : ''}
      </div>
      <div class="product-card-info">
        <h3>${product.name}</h3>
        <p class="product-card-description">${product.description}</p>
        <div class="product-card-price">
          <span class="price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-card-actions">
          <button class="lm-btn solid" onclick="showProductDetails('${product.id}')">View Details</button>
          <button class="lm-btn outline" onclick="addToCart('${product.id}')" ${!product.inStock ? 'disabled' : ''}>
            Add to Cart
          </button>
        </div>
        ${product.inStock ? '' : '<p class="out-of-stock-badge">Out of Stock</p>'}
      </div>
    </article>
  `).join('');
  
  // Category filter
  const categoryFilters = document.querySelectorAll('.category-filter');
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.category;
      categoryFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      
      const cards = productsGrid.querySelectorAll('.product-card');
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", init);

