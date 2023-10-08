export const vehicles = [
  {
    id: "VEH001",
    slug: "tesla-model-3",
    brand: { id: "b-tesla", name: "Tesla" },
    model: "Model 3",
    year: 2021,
    description:
      "The Tesla Model 3 is a compact executive sedan that is battery powered and produced by Tesla. The base Model 3 delivers an EPA-rated all-electric range of 272 miles (438 km) and the Long Range version delivers 358 miles (576 km). According to Tesla, the Model 3 carries full self-driving hardware, with periodic software updates adding functionality.",
    color: { id: "c-white", name: "white" },
    featured: true,
    price: {
      perDay: { retailPrice: 99, discountPrice: 79 },
    },
    details: {
      transmission: "automatic",
      capacity: "5 adults",
      bags: "3 bags",
      autonomy: "272 miles (EPA est.)",
    },
    features: [
      "3.1 s 0-60 mph Aceleration",
      "Autopilot",
      '15" Center Touchscreen',
      '20" wheels',
      "Dual Motor All-Wheel Drive",
      "Air Conditioning",
    ],
    images: [
      {
        type: "cover",
        alt: "White Tesla Model 3 on a road",
        urlPath: "./assets/images/vehicles/tesla-model-3.jpg",
      },
      {
        type: "display",
        alt: "White Tesla Model 3 on a road",
        urlPath: "./assets/images/vehicles/tesla-model-3.jpg",
      },
    ],
  },
  {
    id: "VEH002",
    slug: "White Nexon Ev",
    brand: { id: "b-porsche", name: "White" },
    model: "Nexon Ev",
    year: 2018,
    description:
      "The electric version of the Nexon was revealed on 19 December 2019. The Nexon EV uses components from Tata Motors' electric vehicle technology brand Ziptron. The electric motor produces 94.7 kW (127 hp; 129 PS) and 245 N⋅m (181 lbf⋅ft) of torque and 0 - 100 under 9.9 seconds. It has a 30.2 kWh battery with an ARAI-ratedrange of up to 312 km (194 mi)",
    color: { id: "c-white", name: "white" },
    featured: true,
    price: {
      perDay: { retailPrice: 1199, discountPrice: 899 },
    },
    details: {
      transmission: "Automatic",
      capacity: "5 adults",
      bags: "6 bag",
      autonomy: "EPA estimates not yet available",
    },
    features: [
      "Bi Functional Full LED Lamp",
      "Sequential LED DRLs",
      "Dual Tone Roof",
      "R16 Alloy Wheels With Aero inserts",
      "Air Conditioning",
      
    ],
    images: [
      {
        type: "cover",
        alt: "White Nexon Ev",
        urlPath: "./assets/images/vehicles/nexonev.png",
      },
      {
        type: "display",
        alt: "White Nexon Ev",
        urlPath: "./assets/images/vehicles/nexonev.png",
      },
    ],
  },
  {
    id: "VEH003",
    slug: "MG ZS EV",
    brand: { id: "b-toyota", name: "Mg" },
    model: "mgzsev",
    year: 2023,
    description:
      "The Toyota Highlander, also known as the Toyota Kluger (Japanese: トヨタ・クルーガー, Hepburn: Toyota Kurūgā), is a mid-size crossover SUV with three-row seating produced by Toyota since 2000. Announced in April 2000 at the New York International Auto Show and arriving in late 2000 in Japan and January 2001 in North America, the Highlander became one of the first car-based mid-size SUV or mid-size crossovers.",
    color: { id: "c-black", name: "black" },
    featured: true,
    price: {
      perDay: { retailPrice: 149, discountPrice: 109 },
    },
    details: {
      transmission: "Automtic",
      capacity: "6 adults",
      bags: "5 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "mgzsev",
        urlPath: "./assets/images/vehicles/mgzsev.png",
      },
      {
        type: "display",
        alt: "mgzsev",
        urlPath: "./assets/images/vehicles/mgzsev.png",
      },
    ],
  },
  
  
  {
    id: "VEH006",
    slug: "Hyundai-Kona",
    brand: { id: "b-hyundai", name: "Hyundai" },
    model: "Kona",
    year: -2018,
    description:
      "TThe Hyundai Kona (Korean: 현대 코나) is a subcompact crossover SUV produced by the South Korean manufacturer Hyundai.[1] The first-generation Kona debuted in June 2017 and the production version was revealed later that year.",
    color: { id: "c-cyan", name: "cyan" },
    featured: false,
    price: {
      perDay: { retailPrice: 56 },
    },
    details: {
      transmission: "Automatic",
      capacity: "5 adults",
      bags: "6 bags",
      autonomy: "",
    },
    features: [
      "Air Conditioning",
      "Cruise Control",
      "AM/FM Stereo Radio",
      "Bluetooth",
    ],
    images: [
      {
        type: "cover",
        alt: "Cyan Hyundai Kona",
        urlPath: "./assets/images/vehicles/Hyundai-Kona.png",
      },
      {
        type: "display",
        alt: "Cyan Hyundai Kona",
        urlPath: "./assets/images/vehicles/Hyundai-Kona.png",
      },
    ],
  },
  
];
