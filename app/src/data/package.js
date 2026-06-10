export const packages = [
  {
    id: 1,
    slug: "beach-paradise-maldives",
    name: "Beach Paradise",
    description:
      "Enjoy a relaxing week at a tropical beach resort with all-inclusive amenities.",
    shortDescription:
      "A luxury beach escape with snorkeling, spa time, and sunset cruises.",
    price: 1500,
    duration: "7 days",
    location: "Maldives",
    destination: "Maldives",
    country: "Maldives",
    category: "Relaxation",
    travelerType: "traveler",
    rating: 4.5,
    reviewCount: 120,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: ["All-inclusive resort", "Sunset cruise", "Guided snorkeling"],
    includes: [
      "Hotel stay",
      "Airport transfer",
      "Breakfast and dinner",
      "Island tour",
    ],
    availableSlots: 14,
    inWishlist: false,
    inCart: false,
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and check-in at the resort",
          "Welcome dinner with traditional cuisine",
        ],
      },
      {
        day: 2,
        activities: [
          "Morning yoga session on the beach",
          "Snorkeling excursion to explore vibrant coral reefs",
          "Sunset cruise with cocktails",
        ],
      },
      {
        day: 3,
        activities: [
          "Island hopping tour to nearby islands",
          "Beach volleyball tournament",
          "Evening bonfire with live music",
        ],
      },
      {
        day: 4,
        activities: [
          "Spa day with massages and wellness treatments",
          "Cooking class to learn local recipes",
          "Stargazing session on the beach",
        ],
      },
      {
        day: 5,
        activities: [
          "Kayaking adventure through mangroves",
          "Beachside picnic with gourmet food",
          "Nighttime beach party with DJ",
        ],
      },
      {
        day: 6,
        activities: [
          "Scuba diving experience to explore underwater wonders",
          "Sunset yoga session on the beach",
          "Farewell dinner with live entertainment",
        ],
      },
      {
        day: 7,
        activities: ["Breakfast at the resort", "Check-out and departure"],
      },
    ],
  },
  {
    id: 2,
    slug: "rocky-mountain-adventure",
    name: "Mountain Adventure",
    description:
      "Experience thrilling mountain activities and breathtaking views in the Rockies.",
    shortDescription:
      "A short but intense hiking and rafting getaway for adventure lovers.",
    price: 1200,
    duration: "3 days",
    location: "Rocky Mountains",
    destination: "Rocky Mountains",
    country: "Canada",
    category: "Adventure",
    travelerType: "traveler",
    rating: 4.7,
    reviewCount: 88,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: ["Guided summit hike", "River rafting", "Cabin stay"],
    includes: [
      "Cabin accommodation",
      "Professional guide",
      "Safety gear",
      "Breakfast",
    ],
    availableSlots: 9,
    inWishlist: true,
    inCart: false,
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival at the mountain lodge",
          "Sunset trail walk",
          "Campfire dinner",
        ],
      },
      {
        day: 2,
        activities: [
          "Early summit hike",
          "Picnic lunch with panoramic views",
          "River rafting adventure",
        ],
      },
      {
        day: 3,
        activities: [
          "Nature photography session",
          "Check-out and return transfer",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "new-york-city-explorer",
    name: "City Explorer",
    description:
      "Discover the vibrant culture and iconic landmarks of a bustling city.",
    shortDescription:
      "A curated city break covering museums, food spots, and landmarks.",
    price: 1000,
    duration: "4 days",
    location: "New York City",
    destination: "New York City",
    country: "USA",
    category: "City Break",
    travelerType: "traveler",
    rating: 4.3,
    reviewCount: 156,
    image:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: ["Times Square", "Broadway night", "Food market tour"],
    includes: ["Boutique hotel", "Metro pass", "Museum entry", "Walking guide"],
    availableSlots: 20,
    inWishlist: false,
    inCart: true,
    itinerary: [
      {
        day: 1,
        activities: [
          "Hotel check-in",
          "Central Park walk",
          "Skyline dinner cruise",
        ],
      },
      {
        day: 2,
        activities: [
          "Statue of Liberty visit",
          "Financial District tour",
          "Broadway show",
        ],
      },
      {
        day: 3,
        activities: ["Museum hopping", "SoHo shopping", "Rooftop dinner"],
      },
      {
        day: 4,
        activities: ["Chelsea Market brunch", "Free time", "Departure"],
      },
    ],
  },
  {
    id: 4,
    slug: "serengeti-safari-expedition",
    name: "Safari Expedition",
    description:
      "Embark on an unforgettable safari adventure and witness the majestic wildlife of Africa.",
    shortDescription:
      "A wildlife-focused premium safari with expert guides and luxury tents.",
    price: 2000,
    duration: "10 days",
    location: "Serengeti National Park",
    destination: "Serengeti National Park",
    country: "Tanzania",
    category: "Wildlife",
    travelerType: "traveler",
    rating: 4.9,
    reviewCount: 64,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: ["Big Five safari", "Luxury tent stay", "Sunrise game drive"],
    includes: ["Full-board lodging", "Safari jeep", "Guide", "Park fees"],
    availableSlots: 6,
    inWishlist: true,
    inCart: false,
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival in Arusha",
          "Transfer to camp",
          "Welcome briefing",
        ],
      },
      {
        day: 2,
        activities: [
          "Full-day game drive",
          "Bush lunch",
          "Evening wildlife talk",
        ],
      },
      {
        day: 3,
        activities: ["Sunrise safari", "Village visit", "Campfire dinner"],
      },
    ],
  },
  {
    id: 5,
    slug: "kyoto-cultural-immersion",
    name: "Cultural Immersion",
    description:
      "Immerse yourself in the rich culture and traditions of a vibrant destination.",
    shortDescription:
      "A calm cultural trip with temples, tea ceremonies, and local craft workshops.",
    price: 800,
    duration: "6 days",
    location: "Kyoto, Japan",
    destination: "Kyoto",
    country: "Japan",
    category: "Culture",
    travelerType: "traveler",
    rating: 4.6,
    reviewCount: 101,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: ["Tea ceremony", "Temple pass", "Local cooking class"],
    includes: ["Ryokan stay", "Breakfast", "Train card", "Guide sessions"],
    availableSlots: 11,
    inWishlist: false,
    inCart: false,
    itinerary: [
      {
        day: 1,
        activities: ["Ryokan check-in", "Gion evening walk"],
      },
      {
        day: 2,
        activities: ["Temple tour", "Tea ceremony", "Seasonal kaiseki dinner"],
      },
      {
        day: 3,
        activities: [
          "Arashiyama bamboo grove",
          "Craft workshop",
          "Riverfront free time",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "caribbean-cruise-getaway",
    name: "Cruise Getaway",
    description:
      "Set sail on a luxurious cruise and explore multiple destinations in one trip.",
    shortDescription:
      "A multi-stop cruise package with island excursions and onboard entertainment.",
    price: 2500,
    duration: "7 days",
    location: "Caribbean",
    destination: "Caribbean Islands",
    country: "Multiple",
    category: "Luxury",
    travelerType: "traveler",
    rating: 4.4,
    reviewCount: 73,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    ],
    highlights: [
      "Island excursions",
      "Ocean-view cabin",
      "Onboard entertainment",
    ],
    includes: ["Cabin stay", "All meals", "Port transfers", "Evening shows"],
    availableSlots: 18,
    inWishlist: true,
    inCart: false,
    itinerary: [
      {
        day: 1,
        activities: [
          "Boarding and welcome lunch",
          "Safety briefing",
          "Sail-away party",
        ],
      },
      {
        day: 2,
        activities: [
          "Island beach excursion",
          "Pool deck relaxation",
          "Live music show",
        ],
      },
      {
        day: 3,
        activities: ["Snorkeling stop", "Spa session", "Captain's dinner"],
      },
    ],
  },
];
