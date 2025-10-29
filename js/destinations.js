// Destinations data with detailed information
const DESTINATIONS = [
    {
        id: "agra",
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
        description: "An eternal marble symphony of love, glowing golden at sunrise and silver under moonlight.",
        bestTime: "Oct–Mar",
        highlights: "Golden hour photography • Mehtab Bagh sunset • Yamuna riverfront • Full moon viewing",
        tags: ["UNESCO Heritage", "Iconic", "Romance"],
        detailedInfo: {
            history: "Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal stands as an eternal symbol of love. Construction began in 1632 and took 22 years to complete, employing over 20,000 artisans.",
            attractions: [
                "Main Mausoleum with intricate marble inlay work",
                "Charbagh (Mughal garden) with reflecting pools",
                "Red sandstone mosque and guest house",
                "Mehtab Bagh for sunset views across the Yamuna"
            ],
            tips: [
                "Visit at sunrise for the best light and fewer crowds",
                "Book tickets online in advance",
                "Photography is not allowed inside the main chamber",
                "Wear comfortable shoes for walking"
            ],
            cuisine: "Try Agra's famous petha (sweet), bedai with aloo sabzi, and Mughlai cuisine"
        }
    },
    {
        id: "jaipur",
        name: "Pink City Jaipur",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",
        description: "Royal palaces painted in terracotta dreams, where maharajas once ruled from jeweled thrones.",
        bestTime: "Nov–Feb",
        highlights: "Amber Fort elephant ride • Hawa Mahal architecture • City Palace museum • Johari Bazaar gems",
        tags: ["Royal Heritage", "Architecture", "Shopping"],
        detailedInfo: {
            history: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city. The entire city was painted pink in 1876 to welcome Prince Albert, and the tradition continues.",
            attractions: [
                "Amber Fort - magnificent hilltop fortress",
                "Hawa Mahal - Palace of Winds with 953 windows",
                "City Palace - royal residence with museums",
                "Jantar Mantar - astronomical observatory",
                "Nahargarh Fort - panoramic city views"
            ],
            tips: [
                "Hire a guide to understand the rich history",
                "Bargain at local markets",
                "Try block printing workshops",
                "Visit forts early morning to avoid heat"
            ],
            cuisine: "Dal baati churma, laal maas, ghewar, and traditional Rajasthani thali"
        }
    },
    {
        id: "kerala",
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
        description: "Emerald waterways threading through coconut groves, where time flows as gently as the tide.",
        bestTime: "Sep–Mar",
        highlights: "Luxury houseboat stays • Traditional Kettuvallam cruises • Kumarakom bird sanctuary • Spice plantation tours",
        tags: ["Nature Cruise", "Wellness", "Ayurveda"],
        detailedInfo: {
            history: "The backwaters of Kerala are a network of 900km of interconnected canals, rivers, and lakes. Historically used for trade and transport, they now offer serene tourism experiences.",
            attractions: [
                "Houseboat cruises through palm-fringed canals",
                "Kumarakom Bird Sanctuary",
                "Vembanad Lake - largest lake in Kerala",
                "Traditional village life experiences",
                "Ayurvedic spa treatments"
            ],
            tips: [
                "Book houseboats in advance during peak season",
                "Choose eco-friendly houseboats",
                "Carry mosquito repellent",
                "Try overnight houseboat stays for full experience"
            ],
            cuisine: "Karimeen pollichathu, appam with stew, Kerala sadya, and fresh seafood"
        }
    },
    {
        id: "ladakh",
        name: "Ladakh Himalayas",
        location: "Jammu & Kashmir",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
        description: "Moonscapes and turquoise lakes where the earth touches heaven's doorstep.",
        bestTime: "Jun–Sep",
        highlights: "Pangong Tso lake camping • Nubra Valley sand dunes • Ancient monasteries • Khardung La pass",
        tags: ["High Altitude", "Adventure", "Motorcycling"],
        detailedInfo: {
            history: "Known as the 'Land of High Passes', Ladakh was an important stopover on trade routes along the Indus valley. It's home to Tibetan Buddhist culture and ancient monasteries.",
            attractions: [
                "Pangong Tso - stunning blue lake at 14,000 ft",
                "Nubra Valley - double-humped camels and sand dunes",
                "Thiksey Monastery - resembles Potala Palace",
                "Magnetic Hill - gravity-defying phenomenon",
                "Khardung La - one of world's highest motorable passes"
            ],
            tips: [
                "Acclimatize for 2-3 days in Leh before high altitude trips",
                "Carry warm clothing even in summer",
                "Inner Line Permit required for some areas",
                "Stay hydrated and avoid alcohol initially"
            ],
            cuisine: "Thukpa, momos, butter tea, tingmo, and skyu"
        }
    },
    {
        id: "varanasi",
        name: "Sacred Varanasi",
        location: "Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
        description: "The eternal city where souls seek liberation and the Ganges carries prayers to infinity.",
        bestTime: "Nov–Mar",
        highlights: "Dawn Ganga Aarti ceremony • Kashi Vishwanath temple • Sunrise boat rides • Classical music concerts",
        tags: ["Spiritual Journey", "Ancient Culture", "River Rituals"],
        detailedInfo: {
            history: "One of the world's oldest continuously inhabited cities, Varanasi has been a center of learning and spirituality for over 3,000 years. It's considered the spiritual capital of India.",
            attractions: [
                "Ganga Aarti at Dashashwamedh Ghat",
                "Kashi Vishwanath Temple",
                "Sunrise boat ride on the Ganges",
                "Sarnath - where Buddha gave his first sermon",
                "Narrow lanes of old city"
            ],
            tips: [
                "Attend evening Ganga Aarti - arrive early for good spots",
                "Hire a boat for sunrise Ganges tour",
                "Respect local customs and dress modestly",
                "Be prepared for crowds and narrow lanes"
            ],
            cuisine: "Banarasi paan, kachori sabzi, lassi, chaat, and traditional sweets"
        }
    },
    {
        id: "kutch",
        name: "White Rann Desert",
        location: "Gujarat",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
        description: "An infinite canvas of white salt, painted silver by moonbeams and gold by sunrise.",
        bestTime: "Nov–Feb",
        highlights: "Rann Utsav cultural festival • Full moon desert walks • Traditional handicraft villages • Camel safaris",
        tags: ["Desert Festival", "Full Moon", "Handicrafts"],
        detailedInfo: {
            history: "The Great Rann of Kutch is a seasonal salt marsh in the Thar Desert. During monsoon it fills with water, and in winter it transforms into a vast white desert.",
            attractions: [
                "Rann Utsav - 3-month cultural festival",
                "White Desert under full moon",
                "Kala Dungar (Black Hill) - highest point",
                "Traditional craft villages (Bhujodi, Nirona)",
                "Wild Ass Sanctuary"
            ],
            tips: [
                "Visit during Rann Utsav for best experience",
                "Book tent accommodations in advance",
                "Carry warm clothes for cold desert nights",
                "Full moon nights are magical"
            ],
            cuisine: "Gujarati thali, dhokla, khandvi, and traditional Kutchi cuisine"
        }
    },
    {
        id: "hampi",
        name: "Ancient Hampi",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
        description: "Stone temples rise from boulder dreams, where Vijayanagara emperors left their eternal mark.",
        bestTime: "Nov–Feb",
        highlights: "Virupaksha Temple complex • Stone chariot at Vittala • Lotus Mahal palace • Elephant stables",
        tags: ["UNESCO Heritage", "Ancient Ruins", "Photography"],
        detailedInfo: {
            history: "Hampi was the capital of the Vijayanagara Empire in the 14th century. At its peak, it was one of the richest cities in the world with over 500,000 inhabitants.",
            attractions: [
                "Virupaksha Temple - still active temple",
                "Vittala Temple - famous stone chariot",
                "Lotus Mahal - Indo-Islamic architecture",
                "Royal Enclosure and Elephant Stables",
                "Matanga Hill for sunrise views"
            ],
            tips: [
                "Rent a bicycle or scooter to explore",
                "Wear comfortable shoes for walking",
                "Carry water and sun protection",
                "Hire a guide to understand the history"
            ],
            cuisine: "South Indian thali, dosas, idlis, and local Karnataka cuisine"
        }
    },
    {
        id: "rishikesh",
        name: "Yoga Capital Rishikesh",
        location: "Uttarakhand",
        image: "https://images.unsplash.com/photo-1720819029162-8500607ae232?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        description: "Sacred bridges span the holy Ganges, where ancient wisdom meets adventure seekers.",
        bestTime: "Oct–Mar",
        highlights: "Lakshman Jhula suspension bridge • Evening Ganga Aarti • White water rafting • Yoga ashrams",
        tags: ["Yoga Retreats", "River Adventure", "Spiritual"],
        detailedInfo: {
            history: "Rishikesh is known as the 'Yoga Capital of the World' and 'Gateway to the Himalayas'. The Beatles visited Maharishi Mahesh Yogi's ashram here in 1968.",
            attractions: [
                "Lakshman Jhula and Ram Jhula bridges",
                "Triveni Ghat evening aarti",
                "Beatles Ashram (Chaurasi Kutia)",
                "Neelkanth Mahadev Temple",
                "White water rafting on Ganges"
            ],
            tips: [
                "Book yoga courses in advance",
                "Try river rafting - various difficulty levels available",
                "Visit Beatles Ashram for unique graffiti art",
                "Rishikesh is alcohol and meat-free"
            ],
            cuisine: "Sattvic vegetarian food, chole bhature, aloo puri, and fresh fruit juices"
        }
    },
    {
        id: "goa",
        name: "Tropical Goa",
        location: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
        description: "Portuguese heritage meets endless beaches, where every sunset paints the sky in celebration.",
        bestTime: "Nov–Feb",
        highlights: "Palolem beach paradise • Old Goa churches • Anjuna flea markets • Dudhsagar waterfalls",
        tags: ["Beach Paradise", "Portuguese Heritage", "Music Festivals"],
        detailedInfo: {
            history: "Goa was a Portuguese colony for 450 years, which has left a unique cultural blend. It's known for its beaches, churches, and vibrant nightlife.",
            attractions: [
                "Palolem and Agonda beaches",
                "Basilica of Bom Jesus - UNESCO site",
                "Anjuna Flea Market",
                "Dudhsagar Waterfalls",
                "Fort Aguada"
            ],
            tips: [
                "Rent a scooter to explore at your own pace",
                "Try water sports at major beaches",
                "Visit spice plantations",
                "Experience beach shacks for seafood"
            ],
            cuisine: "Fish curry rice, vindaloo, bebinca, feni, and Portuguese-influenced dishes"
        }
    },
    {
        id: "andaman",
        name: "Pristine Andaman",
        location: "Bay of Bengal",
        image: "https://images.unsplash.com/photo-1721834058855-b9d0570722b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJpc3RpbmUlMjBBbmRhbWFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        description: "Untouched coral kingdoms beneath crystal waters, where nature reigns supreme.",
        bestTime: "Nov–May",
        highlights: "Radhanagar Beach sunsets • Scuba diving at Neil Island • Cellular Jail history • Mangrove kayaking",
        tags: ["Pristine Beaches", "Scuba Diving", "Marine Life"],
        detailedInfo: {
            history: "The Andaman Islands have a rich history including indigenous tribes, colonial rule, and the infamous Cellular Jail where Indian freedom fighters were imprisoned.",
            attractions: [
                "Radhanagar Beach - Asia's best beach",
                "Cellular Jail and Light & Sound Show",
                "Scuba diving and snorkeling",
                "Ross Island ruins",
                "Limestone caves at Baratang"
            ],
            tips: [
                "Book ferry tickets in advance",
                "Get permits for restricted areas",
                "Try scuba diving - excellent visibility",
                "Respect tribal areas - photography prohibited"
            ],
            cuisine: "Fresh seafood, coconut-based curries, and South Indian cuisine"
        }
    },
    {
        id: "jaisalmer",
        name: "Golden Jaisalmer",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1754410264635-02ec86bea58b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdvbGRlbiUyMGphaXNhbG1lcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "A living fort city rising from golden sands, where desert dreams come to life under starlit skies.",
        bestTime: "Nov–Feb",
        highlights: "Living Jaisalmer Fort • Sam Sand Dunes camping • Patwon Ki Haveli intricate carvings • Desert safari",
        tags: ["Desert Fort", "Camel Safari", "Stargazing"],
        detailedInfo: {
            history: "Founded in 1156 AD, Jaisalmer was a major trading center on the ancient Silk Route. The golden sandstone fort is one of the few 'living forts' with residents still living inside.",
            attractions: [
                "Jaisalmer Fort - living fort with shops and homes",
                "Patwon Ki Haveli - ornate merchant mansion",
                "Sam Sand Dunes - desert camping",
                "Gadisar Lake",
                "Kuldhara - abandoned village"
            ],
            tips: [
                "Stay overnight in desert camps",
                "Camel safari at sunset is magical",
                "Explore the fort's narrow lanes",
                "Visit during Desert Festival for cultural programs"
            ],
            cuisine: "Dal baati churma, ker sangri, gatte ki sabzi, and traditional Rajasthani sweets"
        }
    },
    {
        id: "coorg",
        name: "Misty Coorg",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1704079347465-e8489ea5e8fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlzdHklMjBDb29yZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Emerald coffee plantations cascade down misty hills, where every breath carries the aroma of fresh beans.",
        bestTime: "Oct–Mar",
        highlights: "Coffee plantation walks • Abbey Falls cascades • Dubare Elephant Camp • Madikeri Fort views",
        tags: ["Coffee Plantations", "Hill Station", "Wildlife"],
        detailedInfo: {
            history: "Coorg (Kodagu) is known as the 'Scotland of India'. It's famous for coffee plantations, misty hills, and the warrior Kodava community.",
            attractions: [
                "Coffee plantation tours and stays",
                "Abbey Falls",
                "Raja's Seat viewpoint",
                "Dubare Elephant Camp",
                "Talacauvery - source of river Cauvery"
            ],
            tips: [
                "Stay in a coffee estate for authentic experience",
                "Try plantation walks and coffee tasting",
                "Carry warm clothes - it can get chilly",
                "Visit during coffee harvest season"
            ],
            cuisine: "Pandi curry (pork), kadambuttu, bamboo shoot curry, and Coorgi coffee"
        }
    },
    {
        id: "amritsar",
        name: "Golden Temple Amritsar",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1651910031161-7c75098bce75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29sZGVuJTIwVGVtcGxlJTIwQW1yaXRzYXJ8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
        description: "The golden reflection of divine architecture mirrors in sacred waters, feeding souls and spirits alike.",
        bestTime: "Oct–Mar",
        highlights: "Golden Temple serenity • Langar community kitchen • Jallianwala Bagh memorial • Wagah Border ceremony",
        tags: ["Sacred Temple", "Sikh Heritage", "Community Service"],
        detailedInfo: {
            history: "The Golden Temple (Harmandir Sahib) was built in 1604 by Guru Arjan Dev. It's the holiest shrine in Sikhism and welcomes people of all faiths.",
            attractions: [
                "Golden Temple - stunning gold-plated shrine",
                "Langar - world's largest free kitchen",
                "Jallianwala Bagh memorial",
                "Wagah Border ceremony",
                "Partition Museum"
            ],
            tips: [
                "Cover your head and remove shoes before entering",
                "Visit early morning for peaceful experience",
                "Participate in langar (free community meal)",
                "Attend Wagah Border ceremony in evening"
            ],
            cuisine: "Amritsari kulcha, lassi, chole bhature, makki di roti with sarson da saag"
        }
    },
    {
        id: "mysore",
        name: "Royal Mysore",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
        description: "Illuminated palaces tell tales of Tipu Sultan's valor and royal grandeur that once ruled the South.",
        bestTime: "Oct–Mar",
        highlights: "Mysore Palace light show • Chamundi Hills temple • Devaraja Market spices • Brindavan Gardens",
        tags: ["Royal Palace", "Cultural Heritage", "Gardens"],
        detailedInfo: {
            history: "Mysore was the capital of the Kingdom of Mysore ruled by the Wodeyar dynasty. The city is known for its palaces, silk sarees, and sandalwood products.",
            attractions: [
                "Mysore Palace - illuminated on Sundays",
                "Chamundi Hills and Temple",
                "Brindavan Gardens with musical fountain",
                "Devaraja Market",
                "St. Philomena's Cathedral"
            ],
            tips: [
                "Visit palace on Sunday evening for illumination",
                "Try Mysore silk shopping",
                "Attend Dasara festival if possible",
                "Visit Brindavan Gardens for evening fountain show"
            ],
            cuisine: "Mysore pak, masala dosa, bisi bele bath, and traditional Karnataka meals"
        }
    }
];

// Hero slides data
const HERO_SLIDES = [
    {
        place: "Taj Mahal — Agra",
        tagline: "Where Love Becomes Eternal",
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-rose-500/20 to-amber-500/20"
    },
    {
        place: "Pink City — Jaipur",
        tagline: "Royal Dreams Come Alive",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-pink-500/20 to-orange-500/20"
    },
    {
        place: "Backwaters — Kerala",
        tagline: "Nature's Serene Symphony",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
        place: "Himalayas — Ladakh",
        tagline: "Touch the Sky's Edge",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
        place: "Sacred Ghats — Varanasi",
        tagline: "Where Souls Find Light",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
        place: "White Desert — Kutch",
        tagline: "Moonlit Infinity Awaits",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-gray-500/20 to-blue-500/20"
    },
    {
        place: "Golden Temple — Amritsar",
        tagline: "Divine Golden Reflection",
        img: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-yellow-400/20 to-amber-500/20"
    },
    {
        place: "Mysore Palace — Karnataka",
        tagline: "Architectural Marvel Unveiled",
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1920&auto=format&fit=crop",
        gradient: "from-purple-500/20 to-pink-500/20"
    }
];