// Destinations data with detailed information and enhanced content
const DESTINATIONS = [
    {
        id: "agra",
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609920658906-8223bd289001?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "An eternal marble symphony of love, glowing golden at sunrise and silver under moonlight. The Taj Mahal is not just a monument, it's poetry in stone.",
        bestTime: "Oct–Mar (Pleasant weather, clear skies)",
        highlights: "Golden hour photography • Mehtab Bagh sunset • Yamuna riverfront • Full moon viewing • Agra Fort • Fatehpur Sikri",
        tags: ["UNESCO Heritage", "Iconic", "Romance", "Photography"],
        duration: "2-3 days",
        budget: "₹5,000 - ₹15,000 per person",
        didYouKnow: "The Taj Mahal changes color throughout the day - pinkish in the morning, milky white in the evening, and golden under moonlight. It took 22 years and 20,000 artisans to build.",
        detailedInfo: {
            history: "Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal stands as an eternal symbol of love. Construction began in 1632 and took 22 years to complete, employing over 20,000 artisans from across India, Persia, and Central Asia.",
            attractions: [
                "Main Mausoleum with intricate marble inlay work featuring 28 types of precious stones",
                "Charbagh (Mughal garden) with reflecting pools and cypress trees",
                "Red sandstone mosque and guest house flanking the main structure",
                "Mehtab Bagh for sunset views across the Yamuna River",
                "Agra Fort - UNESCO World Heritage Site with stunning architecture",
                "Fatehpur Sikri - abandoned Mughal city 40km from Agra"
            ],
            tips: [
                "Visit at sunrise for the best light and fewer crowds (gates open at 6 AM)",
                "Book tickets online in advance to skip long queues",
                "Photography is not allowed inside the main chamber",
                "Wear comfortable shoes - lots of walking involved",
                "Friday is closed for prayers",
                "Full moon night viewing requires special tickets (book 24 hours in advance)",
                "Hire a certified guide for rich historical insights"
            ],
            cuisine: "Try Agra's famous petha (sweet), bedai with aloo sabzi, Mughlai cuisine, tandoori chicken, and street food at Sadar Bazaar",
            activities: [
                "Sunrise photography at Taj Mahal",
                "Sunset view from Mehtab Bagh",
                "Explore Agra Fort's palaces and gardens",
                "Visit Itmad-ud-Daulah (Baby Taj)",
                "Shopping for marble inlay work and leather goods",
                "Food walk in old Agra"
            ]
        }
    },
    {
        id: "jaipur",
        name: "Pink City Jaipur",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603262110161-a4a6d9c5e1c3?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Royal palaces painted in terracotta dreams, where maharajas once ruled from jeweled thrones. Every corner tells a story of valor, romance, and architectural brilliance.",
        bestTime: "Nov–Feb (Cool and pleasant)",
        highlights: "Amber Fort elephant ride • Hawa Mahal architecture • City Palace museum • Johari Bazaar gems • Jantar Mantar observatory • Nahargarh Fort sunset",
        tags: ["Royal Heritage", "Architecture", "Shopping", "Culture"],
        duration: "3-4 days",
        budget: "₹8,000 - ₹20,000 per person",
        didYouKnow: "Jaipur was painted pink in 1876 to welcome Prince Albert and Queen Victoria. Pink represents hospitality in Rajasthani culture. It's India's first planned city with wide streets laid out in a grid pattern.",
        detailedInfo: {
            history: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city designed by architect Vidyadhar Bhattacharya. The entire city was painted pink in 1876 to welcome Prince Albert, and the tradition continues to this day.",
            attractions: [
                "Amber Fort - magnificent hilltop fortress with mirror palace (Sheesh Mahal)",
                "Hawa Mahal - Palace of Winds with 953 intricately carved windows",
                "City Palace - royal residence with museums showcasing royal artifacts",
                "Jantar Mantar - UNESCO World Heritage astronomical observatory",
                "Nahargarh Fort - panoramic city views, especially at sunset",
                "Jaigarh Fort - houses the world's largest cannon on wheels",
                "Albert Hall Museum - Indo-Saracenic architecture and artifacts",
                "Jal Mahal - palace in the middle of Man Sagar Lake"
            ],
            tips: [
                "Hire a knowledgeable guide to understand the rich history and architecture",
                "Bargain at local markets - start at 50% of quoted price",
                "Try block printing and blue pottery workshops",
                "Visit forts early morning to avoid heat and crowds",
                "Combo tickets available for multiple monuments",
                "Wear modest clothing when visiting temples",
                "Book elephant rides in advance at Amber Fort"
            ],
            cuisine: "Dal baati churma, laal maas, ghewar, pyaaz kachori, mirchi vada, traditional Rajasthani thali at Chokhi Dhani",
            activities: [
                "Elephant ride at Amber Fort",
                "Hot air balloon ride over the city",
                "Shopping at Johari Bazaar and Bapu Bazaar",
                "Light and sound show at Amber Fort",
                "Traditional Rajasthani dinner at Chokhi Dhani village resort",
                "Block printing workshop",
                "Vintage car museum visit"
            ]
        }
    },
    {
        id: "kerala",
        name: "Kerala Backwaters",
        location: "Alleppey, Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588408291098-162f2c935c6f?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618939304347-e91c4d0d2e86?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Emerald waterways threading through coconut groves, where time flows as gently as the tide. Experience tranquility like never before on traditional houseboats.",
        bestTime: "Sep–Mar (Post-monsoon freshness)",
        highlights: "Luxury houseboat stays • Traditional Kettuvallam cruises • Kumarakom bird sanctuary • Spice plantation tours • Ayurvedic treatments • Village life experiences",
        tags: ["Nature Cruise", "Wellness", "Ayurveda", "Relaxation"],
        duration: "3-5 days",
        budget: "₹10,000 - ₹25,000 per person",
        didYouKnow: "Kerala's backwaters span 900 km of interconnected canals, rivers, and lakes. The traditional houseboats (Kettuvallams) were originally used to transport rice and spices, now converted into floating luxury hotels.",
        detailedInfo: {
            history: "The backwaters of Kerala are a network of 900km of interconnected canals, rivers, and lakes. Historically used for trade and transport of spices and rice, they now offer serene tourism experiences. The region has been inhabited for over 2000 years.",
            attractions: [
                "Houseboat cruises through palm-fringed canals and lagoons",
                "Kumarakom Bird Sanctuary - home to migratory birds",
                "Vembanad Lake - largest lake in Kerala, perfect for sunset views",
                "Traditional village life experiences and coir-making demonstrations",
                "Ayurvedic spa treatments and wellness centers",
                "Pathiramanal Island - accessible only by boat",
                "Marari Beach - pristine coastline near Alleppey",
                "Spice plantations in nearby Thekkady"
            ],
            tips: [
                "Book houseboats in advance during peak season (Dec-Jan)",
                "Choose eco-friendly houseboats with solar panels",
                "Carry mosquito repellent and sunscreen",
                "Try overnight houseboat stays for full experience",
                "Negotiate prices, especially for multi-day trips",
                "Best time for bird watching is Nov-Feb",
                "Combine with Munnar hill station visit"
            ],
            cuisine: "Karimeen pollichathu (pearl spot fish), appam with stew, Kerala sadya (feast on banana leaf), fresh seafood, toddy (palm wine), and coconut-based curries",
            activities: [
                "Overnight houseboat cruise",
                "Ayurvedic massage and treatments",
                "Village cycling tours",
                "Canoe rides through narrow canals",
                "Kathakali dance performance",
                "Cooking class for Kerala cuisine",
                "Bird watching at Kumarakom"
            ]
        }
    },
    {
        id: "ladakh",
        name: "Ladakh Himalayas",
        location: "Jammu & Kashmir",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Moonscapes and turquoise lakes where the earth touches heaven's doorstep. A land of high passes, ancient monasteries, and breathtaking vistas that defy imagination.",
        bestTime: "Jun–Sep (Roads open, pleasant weather)",
        highlights: "Pangong Tso lake camping • Nubra Valley sand dunes • Ancient monasteries • Khardung La pass • Magnetic Hill • Leh Palace • Tso Moriri Lake",
        tags: ["High Altitude", "Adventure", "Motorcycling", "Spirituality"],
        duration: "7-10 days",
        budget: "₹25,000 - ₹50,000 per person",
        didYouKnow: "Ladakh is home to the world's highest motorable road - Khardung La at 17,582 feet. The region receives less than 100mm of rain annually, making it a cold desert. Monks here practice Buddhism in monasteries over 1000 years old.",
        detailedInfo: {
            history: "Known as the 'Land of High Passes', Ladakh was an important stopover on trade routes along the Indus valley between Tibet, India, and Central Asia. It's home to Tibetan Buddhist culture with monasteries dating back to the 10th century.",
            attractions: [
                "Pangong Tso - stunning blue lake at 14,000 ft (featured in 3 Idiots movie)",
                "Nubra Valley - double-humped Bactrian camels and sand dunes at 10,000 ft",
                "Thiksey Monastery - resembles Potala Palace in Lhasa",
                "Magnetic Hill - gravity-defying phenomenon on Leh-Kargil highway",
                "Khardung La - one of world's highest motorable passes at 17,582 ft",
                "Hemis Monastery - largest and wealthiest monastery in Ladakh",
                "Leh Palace - 9-story palace overlooking Leh town",
                "Tso Moriri Lake - high altitude lake with stunning mountain backdrop",
                "Zanskar Valley - remote valley with frozen river trek in winter"
            ],
            tips: [
                "Acclimatize in Leh for 2-3 days before heading to higher altitudes",
                "Carry altitude sickness medication (Diamox) and consult doctor",
                "Inner Line Permit required for some areas - arrange in advance",
                "Roads open only Jun-Sep, plan accordingly",
                "Carry warm clothing even in summer - temperatures drop at night",
                "Limited ATMs and internet - carry sufficient cash",
                "Respect local Buddhist culture and customs",
                "Book accommodations in advance during peak season"
            ],
            cuisine: "Thukpa (noodle soup), momos (dumplings), butter tea, tingmo (steamed bread), skyu (traditional pasta), and apricot jam",
            activities: [
                "Motorcycle road trip on Manali-Leh highway",
                "Camping beside Pangong Tso lake",
                "Monastery hopping and prayer wheel spinning",
                "River rafting in Zanskar River",
                "Camel safari in Nubra Valley",
                "Stargazing in clear mountain skies",
                "Chadar Trek on frozen Zanskar River (winter)",
                "Mountain biking on high altitude passes"
            ]
        }
    },
    {
        id: "goa",
        name: "Beaches of Goa",
        location: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Sun-kissed shores where Portuguese heritage meets Indian soul. From vibrant beach shacks to serene sunsets, Goa is India's ultimate coastal paradise.",
        bestTime: "Nov–Feb (Perfect beach weather)",
        highlights: "Beach hopping • Water sports • Portuguese churches • Night markets • Spice plantations • Dudhsagar Falls • Beach parties • Seafood delights",
        tags: ["Beach Paradise", "Nightlife", "Water Sports", "Heritage"],
        duration: "4-6 days",
        budget: "₹12,000 - ₹30,000 per person",
        didYouKnow: "Goa was a Portuguese colony for 450 years until 1961. It's India's smallest state but has the highest GDP per capita. The state has over 40 beaches, each with its unique character - from party hubs to serene hideaways.",
        detailedInfo: {
            history: "Goa was ruled by the Portuguese for 450 years (1510-1961), leaving behind a unique blend of Indian and European culture. The colonial architecture, cuisine, and laid-back lifestyle reflect this rich heritage.",
            attractions: [
                "Baga Beach - water sports and vibrant nightlife",
                "Anjuna Beach - famous flea market and trance parties",
                "Palolem Beach - serene crescent-shaped beach in South Goa",
                "Basilica of Bom Jesus - UNESCO World Heritage Site with St. Francis Xavier's relics",
                "Fort Aguada - 17th-century Portuguese fort with lighthouse",
                "Dudhsagar Falls - spectacular 4-tiered waterfall (310m high)",
                "Old Goa Churches - Se Cathedral, Church of St. Francis of Assisi",
                "Spice Plantations - guided tours with traditional lunch",
                "Saturday Night Market at Arpora",
                "Chapora Fort - famous 'Dil Chahta Hai' fort"
            ],
            tips: [
                "Rent a scooter/bike for easy beach hopping",
                "North Goa for parties, South Goa for peace",
                "Try beach shacks for authentic Goan food",
                "Book water sports packages for better deals",
                "Avoid peak season (Dec 20-Jan 5) for lower prices",
                "Respect local culture - dress modestly away from beaches",
                "Try sunset cruises on Mandovi River",
                "Carry sunscreen and stay hydrated"
            ],
            cuisine: "Fish curry rice, prawn balchão, bebinca (layered dessert), pork vindaloo, xacuti, feni (local spirit), and fresh seafood at beach shacks",
            activities: [
                "Parasailing and jet skiing",
                "Scuba diving and snorkeling",
                "Dolphin watching cruises",
                "Spice plantation tours",
                "Flea market shopping",
                "Beach parties and nightclubs",
                "Kayaking in backwaters",
                "Portuguese heritage walk in Old Goa"
            ]
        }
    },
    {
        id: "varanasi",
        name: "Varanasi Ghats",
        location: "Uttar Pradesh",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "The eternal city where life and death dance on sacred ghats. Witness the mesmerizing Ganga Aarti as bells chime and lamps float on the holy river.",
        bestTime: "Oct–Mar (Pleasant weather)",
        highlights: "Ganga Aarti ceremony • Boat ride at sunrise • Ancient temples • Sarnath Buddhist site • Silk weaving • Street food • Spiritual experiences",
        tags: ["Spiritual", "Ancient City", "Culture", "Photography"],
        duration: "2-3 days",
        budget: "₹5,000 - ₹12,000 per person",
        didYouKnow: "Varanasi is one of the world's oldest continuously inhabited cities, over 3000 years old. Mark Twain said, 'Varanasi is older than history, older than tradition, older even than legend.' The city has over 2000 temples.",
        detailedInfo: {
            history: "Also known as Kashi and Benares, Varanasi is one of the world's oldest living cities, dating back over 3000 years. It's the spiritual capital of India and one of Hinduism's seven holy cities. Buddha gave his first sermon at nearby Sarnath.",
            attractions: [
                "Dashashwamedh Ghat - main ghat with spectacular evening Aarti",
                "Assi Ghat - popular for morning yoga and boat rides",
                "Manikarnika Ghat - main cremation ghat (photography restricted)",
                "Kashi Vishwanath Temple - one of 12 Jyotirlingas",
                "Sarnath - where Buddha gave his first sermon",
                "Ramnagar Fort - 18th-century fort and museum",
                "Banaras Hindu University - one of Asia's largest residential universities",
                "Tulsi Manas Temple - where Tulsidas wrote Ramcharitmanas"
            ],
            tips: [
                "Take early morning boat ride (5-6 AM) for magical sunrise views",
                "Attend evening Ganga Aarti at Dashashwamedh Ghat (6:30 PM)",
                "Hire a knowledgeable local guide for ghat walks",
                "Respect cremation ghats - no photography",
                "Dress modestly when visiting temples",
                "Try street food but choose busy stalls",
                "Stay in heritage hotels near ghats for authentic experience",
                "Be prepared for crowds and narrow lanes"
            ],
            cuisine: "Banarasi paan, kachori sabzi, chaat, lassi, malaiyo (winter dessert), tamatar chaat, and traditional thali at Kashi Chat Bhandar",
            activities: [
                "Sunrise boat ride on Ganges",
                "Evening Ganga Aarti ceremony",
                "Walking tour of ancient ghats",
                "Visit to Sarnath Buddhist site",
                "Silk weaving workshop visit",
                "Classical music concert",
                "Street food tour in old city",
                "Yoga and meditation sessions"
            ]
        }
    },
    {
        id: "rishikesh",
        name: "Rishikesh",
        location: "Uttarakhand",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "The Yoga Capital of the World, where the Ganges flows crystal clear through the Himalayan foothills. Find your inner peace amidst ashrams, adventure, and spiritual awakening.",
        bestTime: "Sep–Nov, Mar–May (Pleasant weather)",
        highlights: "Yoga and meditation • White water rafting • Lakshman Jhula bridge • Ganga Aarti • Beatles Ashram • Bungee jumping • Trekking • Ayurveda",
        tags: ["Yoga Capital", "Adventure", "Spiritual", "Nature"],
        duration: "3-5 days",
        budget: "₹6,000 - ₹15,000 per person",
        didYouKnow: "The Beatles visited Maharishi Mahesh Yogi's ashram in Rishikesh in 1968, which inspired many of their songs. Rishikesh is a vegetarian and alcohol-free city. It's the gateway to the Char Dham pilgrimage.",
        detailedInfo: {
            history: "Rishikesh has been a spiritual center for thousands of years. The name means 'Lord of the Senses' (Hrishikesh is another name for Lord Vishnu). It gained international fame when The Beatles visited in 1968.",
            attractions: [
                "Lakshman Jhula - iconic 450-foot suspension bridge",
                "Ram Jhula - another suspension bridge with temple views",
                "Beatles Ashram (Chaurasi Kutia) - abandoned ashram with graffiti art",
                "Triveni Ghat - evening Ganga Aarti ceremony",
                "Neelkanth Mahadev Temple - ancient Shiva temple in mountains",
                "Parmarth Niketan Ashram - largest ashram in Rishikesh",
                "Rajaji National Park - elephant and tiger reserve nearby",
                "Kunjapuri Temple - sunrise trek with Himalayan views"
            ],
            tips: [
                "Book yoga retreats in advance, especially in peak season",
                "Rishikesh is alcohol and meat-free - respect local customs",
                "Wear modest clothing, especially near temples and ashrams",
                "Best rafting season is Sep-Nov and Mar-May",
                "Stay on the Lakshman Jhula side for better vibes",
                "Attend evening Ganga Aarti at Parmarth Niketan",
                "Try cafe hopping - great international food scene",
                "Book adventure activities through certified operators"
            ],
            cuisine: "Chole bhature, aloo puri, fresh fruit juices, herbal teas, organic cafe food, and traditional North Indian vegetarian thali",
            activities: [
                "White water rafting (Grade I to IV rapids)",
                "Bungee jumping (India's highest at 83m)",
                "Yoga and meditation courses",
                "Trekking to waterfalls and temples",
                "Camping by the Ganges",
                "Flying fox and giant swing",
                "Ayurvedic treatments and massages",
                "Attend Ganga Aarti ceremony"
            ]
        }
    },
    {
        id: "jaisalmer",
        name: "Jaisalmer Fort",
        location: "Rajasthan",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "The Golden City rising from the Thar Desert like a mirage. Experience camel safaris, sand dunes, and starlit desert nights in this living fort city.",
        bestTime: "Nov–Feb (Cool desert weather)",
        highlights: "Living fort • Camel safari • Sam Sand Dunes • Patwon Ki Haveli • Desert camping • Sunset at dunes • Cultural performances • Stargazing",
        tags: ["Desert", "Heritage", "Adventure", "Unique"],
        duration: "2-3 days",
        budget: "₹8,000 - ₹18,000 per person",
        didYouKnow: "Jaisalmer Fort is one of the very few 'living forts' in the world with about 3000 people residing within its walls. Built in 1156 AD, it's made of yellow sandstone that glows golden in sunlight, hence the name 'Golden City'.",
        detailedInfo: {
            history: "Founded in 1156 AD by Rawal Jaisal, Jaisalmer was a strategic trading post on the ancient Silk Route. The fort, also known as Sonar Quila, is one of the largest fully preserved fortified cities in the world.",
            attractions: [
                "Jaisalmer Fort - UNESCO World Heritage Site, living fort",
                "Patwon Ki Haveli - cluster of five havelis with intricate carvings",
                "Sam Sand Dunes - 40km from city, perfect for desert safari",
                "Gadisar Lake - artificial lake with temples and ghats",
                "Salim Singh Ki Haveli - distinctive peacock-shaped roof",
                "Nathmal Ki Haveli - carved by two brothers simultaneously",
                "Kuldhara - abandoned village with mysterious history",
                "Desert National Park - unique desert ecosystem"
            ],
            tips: [
                "Book desert camps in advance for best locations",
                "Carry warm clothes - desert nights are cold",
                "Sunset camel safari is a must-do experience",
                "Explore fort early morning to avoid crowds",
                "Bargain at local markets for textiles and handicrafts",
                "Try cultural evening with Rajasthani folk music and dance",
                "Stay in heritage hotels for authentic experience",
                "Respect fort residents' privacy - it's their home"
            ],
            cuisine: "Dal baati churma, ker sangri, gatte ki sabzi, pyaaz kachori, and traditional Rajasthani thali",
            activities: [
                "Camel safari to Sam Sand Dunes",
                "Desert camping under stars",
                "Jeep safari in Thar Desert",
                "Parasailing at sand dunes",
                "Fort and haveli exploration",
                "Cultural evening with folk performances",
                "Shopping for textiles and handicrafts",
                "Sunset photography at dunes"
            ]
        }
    },
    {
        id: "hampi",
        name: "Hampi Ruins",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Ancient ruins scattered across a surreal boulder-strewn landscape. Once the capital of the mighty Vijayanagara Empire, now a UNESCO World Heritage Site frozen in time.",
        bestTime: "Oct–Feb (Pleasant weather)",
        highlights: "Virupaksha Temple • Stone Chariot • Vittala Temple • Boulder climbing • Coracle rides • Sunset at Matanga Hill • Ancient bazaars • Hippie Island",
        tags: ["UNESCO Heritage", "History", "Adventure", "Photography"],
        duration: "2-3 days",
        budget: "₹5,000 - ₹12,000 per person",
        didYouKnow: "Hampi was one of the richest cities in the world during the 14th century. The Vijayanagara Empire controlled the spice trade. The site has over 1600 monuments spread across 26 square kilometers.",
        detailedInfo: {
            history: "Hampi was the capital of the Vijayanagara Empire from 1336 to 1565 AD. At its peak, it was one of the largest and richest cities in the world. The city was destroyed by Deccan sultanates in 1565.",
            attractions: [
                "Virupaksha Temple - active temple dedicated to Shiva",
                "Vittala Temple - famous for stone chariot and musical pillars",
                "Lotus Mahal - Indo-Islamic architecture",
                "Elephant Stables - housed royal elephants",
                "Matanga Hill - best sunrise/sunset viewpoint",
                "Hemakuta Hill - cluster of ancient temples",
                "Queen's Bath - royal bathing complex",
                "Underground Shiva Temple - partially submerged temple",
                "Tungabhadra River - coracle boat rides"
            ],
            tips: [
                "Rent a bicycle or scooter to explore the vast site",
                "Start early morning to avoid heat",
                "Carry water and snacks - limited options at monuments",
                "Climb Matanga Hill for sunrise (start at 5:30 AM)",
                "Hire a guide for first day to understand history",
                "Stay in Hampi Bazaar or Hippie Island (Virupapur Gaddi)",
                "Respect temple customs - remove footwear",
                "Best photography light is early morning and late afternoon"
            ],
            cuisine: "South Indian thali, dosas, idlis, local Karnataka cuisine, and international food at Hippie Island cafes",
            activities: [
                "Boulder climbing and bouldering",
                "Coracle boat rides on Tungabhadra",
                "Cycling through ruins",
                "Sunrise trek to Matanga Hill",
                "Temple exploration and photography",
                "Shopping for handicrafts",
                "Yoga and meditation sessions",
                "Sunset at Hippie Island"
            ]
        }
    },
    {
        id: "andaman",
        name: "Andaman Islands",
        location: "Andaman & Nicobar",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589192337831-d1d8e2e0e8e0?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589192337831-d1d8e2e0e8e0?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Pristine beaches with turquoise waters and vibrant coral reefs. India's tropical paradise offering world-class diving, snorkeling, and untouched natural beauty.",
        bestTime: "Oct–May (Calm seas, clear waters)",
        highlights: "Radhanagar Beach • Scuba diving • Cellular Jail • Havelock Island • Neil Island • Snorkeling • Sea walking • Limestone caves • Bioluminescence",
        tags: ["Beach Paradise", "Diving", "Islands", "Marine Life"],
        duration: "5-7 days",
        budget: "₹25,000 - ₹45,000 per person",
        didYouKnow: "Radhanagar Beach was named 'Asia's Best Beach' by TIME magazine. The islands are home to some of the world's oldest tribes. Only 36 of the 572 islands are inhabited. The waters have bioluminescent plankton that glow at night.",
        detailedInfo: {
            history: "The Andaman Islands were used as a penal colony by the British. The infamous Cellular Jail in Port Blair housed Indian freedom fighters. The islands were occupied by Japan during WWII.",
            attractions: [
                "Radhanagar Beach (Beach No. 7) - pristine white sand beach",
                "Cellular Jail - historic prison, light and sound show",
                "Havelock Island - diving and snorkeling paradise",
                "Neil Island - coral reefs and natural rock formations",
                "Ross Island - British administrative ruins",
                "Baratang Island - limestone caves and mud volcanoes",
                "North Bay Island - coral reefs and water sports",
                "Elephant Beach - shallow coral reefs perfect for snorkeling",
                "Chidiya Tapu - bird watching and sunset point"
            ],
            tips: [
                "Book ferry tickets in advance, especially to Havelock",
                "Get permits for restricted areas (free at Port Blair)",
                "Carry sufficient cash - limited ATMs on islands",
                "Book diving and water sports through certified operators",
                "Respect marine life - don't touch corals",
                "Carry reef-safe sunscreen",
                "Best diving visibility is Dec-April",
                "Book accommodations in advance during peak season"
            ],
            cuisine: "Fresh seafood (fish curry, grilled lobster), coconut-based curries, and South Indian cuisine",
            activities: [
                "Scuba diving (PADI certified centers)",
                "Snorkeling at coral reefs",
                "Sea walking at North Bay",
                "Island hopping by ferry",
                "Kayaking through mangroves",
                "Glass bottom boat rides",
                "Bioluminescence beach visit",
                "Cellular Jail light and sound show"
            ]
        }
    },
    {
        id: "coorg",
        name: "Coorg Coffee Estates",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589192337831-d1d8e2e0e8e0?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589192337831-d1d8e2e0e8e0?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "Misty hills carpeted with coffee plantations and spice gardens. The Scotland of India offers tranquil homestays, waterfalls, and aromatic coffee experiences.",
        bestTime: "Oct–Mar (Pleasant weather, post-monsoon freshness)",
        highlights: "Coffee plantation tours • Abbey Falls • Raja's Seat sunset • Dubare Elephant Camp • Trekking • Homestays • Coorg cuisine • River rafting",
        tags: ["Hill Station", "Coffee", "Nature", "Relaxation"],
        duration: "3-4 days",
        budget: "₹8,000 - ₹18,000 per person",
        didYouKnow: "Coorg produces 30% of India's coffee. The region is home to the Kodava people with unique culture and cuisine. Coorg is one of the few places in India where you can see wild elephants in their natural habitat.",
        detailedInfo: {
            history: "Coorg, officially known as Kodagu, was an independent kingdom until 1834. The Kodava people have a distinct culture, language, and martial tradition. Coffee was introduced by the British in the 19th century.",
            attractions: [
                "Abbey Falls - picturesque waterfall amidst coffee estates",
                "Raja's Seat - sunset viewpoint with musical fountain",
                "Dubare Elephant Camp - elephant interaction and bathing",
                "Talacauvery - birthplace of river Cauvery",
                "Namdroling Monastery - Golden Temple with Tibetan architecture",
                "Iruppu Falls - sacred waterfall in Brahmagiri range",
                "Mandalpatti - off-road jeep safari to hilltop viewpoint",
                "Nisargadhama - island formed by river Cauvery"
            ],
            tips: [
                "Stay in coffee estate homestays for authentic experience",
                "Book plantation tours to learn about coffee making",
                "Carry warm clothes - evenings can be chilly",
                "Try local Kodava cuisine at homestays",
                "Best time for waterfalls is post-monsoon (Sep-Nov)",
                "Hire a local driver for hilly terrain",
                "Visit during Kaveri Sankramana festival (Oct)",
                "Book elephant camp visits in advance"
            ],
            cuisine: "Pandi curry (pork curry), kadambuttu (rice dumplings), bamboo shoot curry, akki roti, and homemade wine",
            activities: [
                "Coffee plantation walking tours",
                "Waterfall trekking",
                "Elephant bathing at Dubare",
                "White water rafting in Barapole River",
                "Bird watching in forests",
                "Jeep safari to Mandalpatti",
                "Visit spice plantations",
                "Yoga and meditation retreats"
            ]
        }
    },
    {
        id: "kutch",
        name: "Rann of Kutch",
        location: "Gujarat",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "An endless white salt desert under infinite skies. Experience the magical Rann Utsav, witness flamingos, and sleep under a blanket of stars in luxury tents.",
        bestTime: "Nov–Feb (Rann Utsav season)",
        highlights: "White Rann full moon • Rann Utsav festival • Handicraft villages • Flamingo sanctuary • Stargazing • Cultural performances • Luxury tent stays • Kalo Dungar",
        tags: ["Unique Landscape", "Festival", "Culture", "Stargazing"],
        duration: "2-3 days",
        budget: "₹10,000 - ₹25,000 per person",
        didYouKnow: "The Rann of Kutch is the world's largest salt desert spanning 7,500 sq km. During monsoon, it's submerged under water. The full moon night at White Rann is a surreal experience with the salt desert glowing silver.",
        detailedInfo: {
            history: "The Rann was once part of the Arabian Sea. Geological shifts and tectonic activity created this unique salt marsh. The region has been home to various communities known for their handicrafts and textiles.",
            attractions: [
                "White Rann - vast white salt desert, magical at full moon",
                "Rann Utsav - 3-month cultural festival (Nov-Feb)",
                "Kalo Dungar (Black Hill) - highest point with panoramic views",
                "Flamingo Sanctuary - thousands of flamingos (Nov-Feb)",
                "Handicraft villages - Bhujodi, Nirona, Ajrakhpur",
                "Mandvi Beach - pristine beach with Vijay Vilas Palace",
                "Aina Mahal - palace with mirror work",
                "Wild Ass Sanctuary - Indian wild ass habitat"
            ],
            tips: [
                "Visit during Rann Utsav for best experience (Nov-Feb)",
                "Book tent accommodations well in advance",
                "Full moon nights are most popular - book early",
                "Carry warm clothes - desert nights are very cold",
                "Visit handicraft villages to buy authentic textiles",
                "Hire a guide for village tours",
                "Best stargazing due to zero light pollution",
                "Respect local artisan communities"
            ],
            cuisine: "Gujarati thali, dabeli, khakhra, fafda, dhokla, and traditional Kutchi cuisine",
            activities: [
                "Full moon walk on White Rann",
                "Cultural performances at Rann Utsav",
                "Handicraft village tours",
                "Camel cart rides",
                "Paramotoring over the Rann",
                "Stargazing and astrophotography",
                "Shopping for textiles and handicrafts",
                "Visit to Wild Ass Sanctuary"
            ]
        }
    },
    {
        id: "amritsar",
        name: "Golden Temple",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "The shimmering Golden Temple reflected in the sacred pool, where spirituality meets selfless service. Experience the world's largest free kitchen feeding 100,000 people daily.",
        bestTime: "Oct–Mar (Pleasant weather)",
        highlights: "Golden Temple • Langar (free kitchen) • Wagah Border ceremony • Jallianwala Bagh • Partition Museum • Punjabi cuisine • Heritage walk",
        tags: ["Spiritual", "Culture", "Heritage", "Food"],
        duration: "2-3 days",
        budget: "₹6,000 - ₹12,000 per person",
        didYouKnow: "The Golden Temple's langar serves free meals to 100,000 people daily regardless of religion, caste, or creed. The temple uses 750 kg gold for its dome. It has four entrances symbolizing openness to all directions and people.",
        detailedInfo: {
            history: "The Golden Temple (Harmandir Sahib) was built in 1604 by Guru Arjan Dev Ji. The gold plating was done by Maharaja Ranjit Singh in the 19th century. It's the holiest shrine in Sikhism.",
            attractions: [
                "Golden Temple (Harmandir Sahib) - holiest Sikh shrine",
                "Langar Hall - world's largest free kitchen",
                "Akal Takht - highest temporal seat of Sikhs",
                "Jallianwala Bagh - memorial of 1919 massacre",
                "Wagah Border - India-Pakistan border ceremony",
                "Partition Museum - documenting 1947 partition",
                "Gobindgarh Fort - historic fort with cultural shows",
                "Durgiana Temple - Hindu temple similar to Golden Temple"
            ],
            tips: [
                "Cover head and remove shoes before entering temple",
                "Visit early morning (4 AM) for Asa Di Var (morning prayer)",
                "Participate in langar service - washing dishes is humbling",
                "Wagah Border ceremony starts at 4:30 PM (reach by 3 PM)",
                "Free accommodation available at temple (book in advance)",
                "Respect Sikh customs and traditions",
                "Photography allowed but be respectful",
                "Try Punjabi food at local dhabas"
            ],
            cuisine: "Amritsari kulcha, chole bhature, lassi, makki di roti with sarson da saag, Amritsari fish, and langar food",
            activities: [
                "Golden Temple visit and prayers",
                "Volunteer at langar kitchen",
                "Wagah Border ceremony",
                "Heritage walking tour of old city",
                "Shopping at Hall Bazaar",
                "Food tour of Amritsari cuisine",
                "Visit Partition Museum",
                "Attend evening prayer ceremony"
            ]
        }
    },
    {
        id: "mysore",
        name: "Mysore Palace",
        location: "Karnataka",
        image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?q=80&w=1600&auto=format&fit=crop"
        ],
        description: "The City of Palaces illuminated by 100,000 lights. Experience royal grandeur, sandalwood fragrance, and the magnificent Dasara festival celebrations.",
        bestTime: "Oct–Feb (Dasara festival in Oct)",
        highlights: "Mysore Palace illumination • Dasara festival • Chamundi Hills • Brindavan Gardens • Silk sarees • Sandalwood products • Yoga • Devaraja Market",
        tags: ["Royal Heritage", "Festival", "Culture", "Shopping"],
        duration: "2-3 days",
        budget: "₹7,000 - ₹15,000 per person",
        didYouKnow: "Mysore Palace is illuminated by nearly 100,000 light bulbs every Sunday and during festivals. The Dasara festival here is a 10-day royal celebration dating back 400 years. Mysore is the yoga capital of India.",
        detailedInfo: {
            history: "Mysore was the capital of the Kingdom of Mysore ruled by the Wodeyar dynasty for nearly 600 years. The current palace was built in 1912 after the old palace was destroyed by fire.",
            attractions: [
                "Mysore Palace - Indo-Saracenic architecture, illuminated on Sundays",
                "Chamundi Hills - hilltop temple with city views",
                "Brindavan Gardens - musical fountain show",
                "St. Philomena's Cathedral - neo-gothic church",
                "Jaganmohan Palace - art gallery with royal paintings",
                "Devaraja Market - vibrant local market",
                "Mysore Zoo - one of India's oldest zoos",
                "Karanji Lake - bird sanctuary and butterfly park"
            ],
            tips: [
                "Visit palace on Sunday evening for illumination (7-8 PM)",
                "Attend Dasara festival in October for grand celebrations",
                "Book palace tickets online to avoid queues",
                "Try yoga classes at renowned institutes",
                "Shop for Mysore silk sarees and sandalwood products",
                "Visit Devaraja Market for local experience",
                "Brindavan Gardens fountain show at 7 PM",
                "Hire a guide for palace tour"
            ],
            cuisine: "Mysore masala dosa, Mysore pak (sweet), bisi bele bath, ragi mudde, and traditional Karnataka meals",
            activities: [
                "Palace tour and illumination viewing",
                "Dasara festival celebrations (October)",
                "Chamundi Hills temple visit",
                "Musical fountain show at Brindavan Gardens",
                "Yoga classes at Ashtanga institutes",
                "Shopping for silk and sandalwood",
                "Heritage walk in old Mysore",
                "Visit to Mysore Zoo"
            ]
        }
    }
];

// Hero slides for the main carousel
const HERO_SLIDES = [
    {
        img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop",
        tagline: "Where Love Becomes Eternal",
        place: "Taj Mahal — Agra"
    },
    {
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1920&auto=format&fit=crop",
        tagline: "Royal Dreams in Pink",
        place: "Jaipur — Rajasthan"
    },
    {
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1920&auto=format&fit=crop",
        tagline: "Serenity on Emerald Waters",
        place: "Kerala Backwaters"
    },
    {
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop",
        tagline: "Where Earth Touches Heaven",
        place: "Ladakh — Himalayas"
    },
    {
        img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1920&auto=format&fit=crop",
        tagline: "Sun, Sand & Soul",
        place: "Goa Beaches"
    },
    {
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1920&auto=format&fit=crop",
        tagline: "The Eternal City of Light",
        place: "Varanasi Ghats"
    },
    {
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1920&auto=format&fit=crop",
        tagline: "Yoga Capital of the World",
        place: "Rishikesh — Uttarakhand"
    },
    {
        img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1920&auto=format&fit=crop",
        tagline: "Tropical Paradise Awaits",
        place: "Andaman Islands"
    }
];