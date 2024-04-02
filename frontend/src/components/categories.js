const categories = [
    {
      type: "MEN",
      subType: [
        {
          title: "Topwear",
          category: ["t-shirt", "casual shirt", "formal shirt"]
        },
        {
          title: "Bottoms",
          category: ["jeans", "chinos", "trousers", "shorts", "joggers", "cargo pants", "suit pants", "track pants", "denim shorts"]
        },
        {
          title: "Outerwear",
          category: ["jacket", "coat", "blazer", "hoodie", "windbreaker", "parka", "leather jacket", "vest", "trench coat"]
        },
        {
          title: "Activewear",
          category: ["sports t-shirt", "athletic shorts", "hoodie", "running jacket", "compression pants", "track jacket", "training shorts", "athletic socks", "tank top"]
        },
        {
          title: "Sleepwear",
          category: ["pajamas", "nightshirt", "robe", "sleep shorts", "loungewear", "onesie", "sleep mask", "slippers", "socks"]
        },
        {
          title: "Accessories",
          category: ["ties", "belts", "hats", "watches", "cufflinks", "sunglasses", "wallets", "scarves", "gloves"]
        }
      ]
    },
    {
      type: "WOMEN",
      subType: [
        {
          title: "Dresses",
          category: ["casual dress", "evening gown", "maxi dress", "summer dress", "cocktail dress", "party dress", "bodycon dress", "wrap dress", "shift dress"]
        },
        {
          title: "Tops",
          category: ["blouse", "tank top", "sweater", "tunic", "crop top", "hoodie", "peplum top", "button-up shirt", "off-the-shoulder top"]
        },
        {
          title: "Bottoms",
          category: ["jeans", "skirt", "leggings", "shorts", "trousers", "palazzo pants", "culottes", "jumpsuit", "overalls"]
        },
        {
          title: "Outerwear",
          category: ["jacket", "coat", "blazer", "poncho", "cape", "vest", "windbreaker", "parka", "trench coat"]
        },
        {
          title: "Activewear",
          category: ["sports bra", "leggings", "tank top", "hoodie", "joggers", "shorts", "sports jacket", "athletic shorts", "athletic socks"]
        },
        {
          title: "Swimwear",
          category: ["bikini", "one-piece swimsuit", "tankini", "cover-up", "swim shorts", "rash guard", "board shorts", "swim dress", "swim skirt"]
        },
        {
          title: "Sleepwear",
          category: ["pajamas", "nightgown", "robe", "sleep shirt", "onesie", "shorts set", "nightdress", "sleep romper", "loungewear"]
        }
      ]
    },
    {
      type: "BEAUTY",
      subType: [
        {
          title: "Skincare",
          category: ["cleanser", "moisturizer", "serum", "toner", "exfoliator", "mask", "sunscreen", "eye cream", "lip balm"]
        },
        {
          title: "Makeup",
          category: ["foundation", "eyeshadow", "lipstick", "mascara", "blush", "eyeliner", "bronzer", "concealer", "highlighter"]
        },
        {
          title: "Haircare",
          category: ["shampoo", "conditioner", "hair mask", "hair oil", "styling gel", "hair spray", "dry shampoo", "heat protectant", "hair serum"]
        },
        {
          title: "Fragrance",
          category: ["perfume", "cologne", "body mist", "scented lotion", "fragrance oil", "roll-on perfume", "solid perfume", "room spray", "candle"]
        },
        {
          title: "Tools & Accessories",
          category: ["makeup brushes", "hairbrush", "hair dryer", "flat iron", "curling iron", "nail polish", "tweezers", "mirrors", "sponges"]
        },
        {
          title: "Personal Care",
          category: ["body wash", "body lotion", "hand cream", "deodorant", "shaving cream", "razor", "toothpaste", "floss", "mouthwash"]
        },
        {
          title: "Wellness",
          category: ["vitamins", "supplements", "essential oils", "aromatherapy", "meditation aids", "skincare tools", "massage oil", "facial roller", "candles"]
        }
      ]
    },
    {
      type: "KIDS",
      subType: [
        {
          title: "Clothing",
          category: ["tops", "bottoms", "dresses", "outerwear", "activewear", "sleepwear", "swimwear", "costumes", "socks"]
        },
        {
          title: "Shoes",
          category: ["sneakers", "sandals", "boots", "slippers", "athletic shoes", "dress shoes", "rain boots", "flip flops", "hiking shoes"]
        },
        {
          title: "Accessories",
          category: ["hats", "scarves", "gloves", "sunglasses", "jewelry", "backpacks", "belts", "watches", "hair accessories"]
        },
        {
          title: "Toys & Games",
          category: ["action figures", "dolls", "building blocks", "board games", "puzzles", "stuffed animals", "arts and crafts", "educational toys", "remote control toys"]
        },
        {
          title: "Baby Gear",
          category: ["strollers", "car seats", "baby carriers", "diaper bags", "cribs", "bouncers", "high chairs", "baby monitors", "changing tables"]
        },
        {
          title: "Baby Clothing",
          category: ["onesies", "rompers", "bodysuits", "hats", "socks", "pants", "dresses", "sleepers", "swaddle blankets"]
        },
        {
          title: "School Supplies",
          category: ["backpacks", "notebooks", "pencils", "crayons", "markers", "lunch boxes", "water bottles", "rulers", "scissors"]
        }
      ]
    },
    {
      type: "HOME & LIVING",
      subType: [
        {
          title: "Furniture",
          category: ["sofas", "chairs", "tables", "beds", "cabinets", "shelves", "desks", "dressers", "mirrors"]
        },
        {
          title: "Bedding",
          category: ["bed sheets", "comforters", "duvet covers", "pillows", "blankets", "mattress toppers", "throws", "quilt sets", "bedskirts"]
        },
        {
          title: "Bath",
          category: ["towels", "shower curtains", "bath mats", "robes", "toothbrush holders", "soap dispensers", "shower caddies", "vanity mirrors", "bathroom sets"]
        },
        {
          title: "Kitchen",
          category: ["cookware", "cutlery", "dinnerware", "drinkware", "kitchen utensils", "storage containers", "kitchen linens", "baking sheets", "small appliances"]
        },
        {
          title: "Home Decor",
          category: ["wall art", "vases", "candles", "mirrors", "clocks", "decorative pillows", "rugs", "curtains", "throw blankets"]
        },
        {
          title: "Lighting",
          category: ["pendant lights", "chandeliers", "table lamps", "floor lamps", "wall sconces", "string lights", "ceiling fans", "candle holders", "lamp shades"]
        },
        {
          title: "Organization",
          category: ["storage bins", "baskets", "shelving units", "drawers", "closet organizers", "garage storage", "shoe racks", "hangers", "storage furniture"]
        }
      ]
    }
  ];
  
  export default categories;
  