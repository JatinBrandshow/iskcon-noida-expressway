const festivalsData = [
    {
        id: 1,
        title: "Maha Shivratri",
        date: "February 15, 2026",
        description: "A sacred festival dedicated to Lord Shiva, observed with fasting, night vigil, and prayers.",
        image: "/img/main-section.webp",
        color: "from-gray-900 to-black",
    },
    {
        id: 2,
        title: "Holika Dahan",
        date: "March 13, 2026",
        description: "Celebrates the victory of good over evil by burning Holika in a ceremonial bonfire.",
        image: "/img/main-section.webp",
        color: "from-orange-700 to-red-900",
    },
    {
        id: 3,
        title: "Holi",
        date: "March 14, 2026",
        description: "Festival of colors symbolizing joy, love, and the arrival of spring.",
        image: "/img/main-section.webp",
        color: "from-pink-500 to-yellow-500",
    },
    {
        id: 4,
        title: "Chaitra Navratri Begins",
        date: "March 19, 2026",
        description: "Nine-day festival dedicated to Goddess Durga, starting with Maa Shailputri.",
        image: "/img/main-section.webp",
        color: "from-red-800 to-orange-600",
    },
    {
        id: 5,
        title: "Ram Navami",
        date: "March 27, 2026",
        description: "Celebrates the birth of Lord Rama, observed with prayers and bhajans.",
        image: "/img/main-section.webp",
        color: "from-yellow-600 to-orange-700",
    },
    {
        id: 6,
        title: "Hanuman Jayanti",
        date: "April 4, 2026",
        description: "Marks the birth of Lord Hanuman, known for strength and devotion.",
        image: "/img/main-section.webp",
        color: "from-orange-600 to-red-700",
    },
    {
        id: 7,
        title: "Akshaya Tritiya",
        date: "May 10, 2026",
        description: "A highly auspicious day for new beginnings, investments, and gold purchases.",
        image: "/img/main-section.webp",
        color: "from-yellow-400 to-amber-600",
    },
    {
        id: 8,
        title: "Guru Purnima",
        date: "July 21, 2026",
        description: "A day to honor teachers and spiritual gurus for their guidance.",
        image: "/img/main-section.webp",
        color: "from-indigo-700 to-purple-800",
    },
    {
        id: 9,
        title: "Nag Panchami",
        date: "August 9, 2026",
        description: "Dedicated to serpent gods, worshipped for protection and prosperity.",
        image: "/img/main-section.webp",
        color: "from-green-700 to-emerald-900",
    },
    {
        id: 10,
        title: "Raksha Bandhan",
        date: "August 18, 2026",
        description: "Celebrates the bond between brothers and sisters with sacred threads.",
        image: "/img/main-section.webp",
        color: "from-pink-500 to-red-500",
    },
    {
        id: 11,
        title: "Krishna Janmashtami",
        date: "August 25, 2026",
        description: "Celebrates the birth of Lord Krishna with fasting, bhajans, and midnight celebrations.",
        image: "/img/main-section.webp",
        color: "from-blue-800 to-indigo-900",
    },
    {
        id: 12,
        title: "Ganesh Chaturthi",
        date: "September 5, 2026",
        description: "Honors Lord Ganesha, remover of obstacles, with grand celebrations.",
        image: "/img/main-section.webp",
        color: "from-orange-500 to-red-600",
    },
    {
        id: 13,
        title: "Sharad Navratri Begins",
        date: "October 9, 2026",
        description: "Nine nights of worship dedicated to Goddess Durga with Garba and Dandiya.",
        image: "/img/main-section.webp",
        color: "from-red-900 to-pink-700",
    },
    {
        id: 14,
        title: "Dussehra (Vijayadashami)",
        date: "October 18, 2026",
        description: "Celebrates the victory of Lord Rama over Ravana, symbolizing good over evil.",
        image: "/img/main-section.webp",
        color: "from-orange-600 to-yellow-500",
    },
    {
        id: 15,
        title: "Karva Chauth",
        date: "October 24, 2026",
        description: "Married women fast for the long life and prosperity of their husbands.",
        image: "/img/main-section.webp",
        color: "from-red-700 to-pink-600",
    },
    {
        id: 16,
        title: "Diwali",
        date: "November 8, 2026",
        description: "Festival of lights celebrating the return of Lord Rama to Ayodhya.",
        image: "/img/main-section.webp",
        color: "from-yellow-500 to-orange-600",
    },
    {
        id: 17,
        title: "Bhai Dooj",
        date: "November 10, 2026",
        description: "Celebrates the bond between brothers and sisters after Diwali.",
        image: "/img/main-section.webp",
        color: "from-purple-600 to-pink-500",
    },
    {
        id: 18,
        title: "Makar Sankranti",
        date: "January 14, 2026",
        description: "Marks the transition of the sun into Capricorn and the harvest season.",
        image: "/img/main-section.webp",
        color: "from-yellow-400 to-orange-500",
    },
];

const Festivals = () => {
    return (
        <>
            <div className="bg-temple-gradient text-white min-h-screen p-4 md:p-10 font-serif relative overflow-hidden">
                {/* Header Section */}
                <header className="max-w-6xl mx-auto mb-14 text-center">
                    <div className="inline-block px-14 py-5 bg-primary rounded-xl shadow-[0_0_40px_rgba(255,215,0,0.2)] border border-tertiary/30">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-widest bg-linear-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                            INDIAN FESTIVALS & MUHURAT
                        </h1>
                    </div>
                </header>

                {/* Festival Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {festivalsData.map((festival) => (
                        <div
                            key={festival.id}
                            className="group flex flex-col md:flex-row rounded-2xl overflow-hidden bg-linear-to-br from-[#2b0606] via-[#3d0909] to-[#1a0505] border border-yellow-500/20 hover:border-yellow-400/60 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(255,140,0,0.3)] transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative w-full md:w-2/5 h-52 md:h-auto overflow-hidden">
                                <img
                                    src={festival.image}
                                    alt={festival.title}
                                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                                />

                                {/* Better overlay (lighter) */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Button */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                                    <button className="bg-secondary hover:bg-tertiary text-black text-xs font-bold py-2 px-5 rounded-full shadow-lg transition-all">
                                        Read More
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:w-3/5 flex flex-col justify-between">
                                <div>
                                    <span
                                        className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider 
        text-yellow-300 bg-yellow-500/10 border border-yellow-500/30 rounded-md shadow-sm"
                                    >
                                        {festival.date}
                                    </span>

                                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">
                                        {festival.title}
                                    </h2>

                                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                                        {festival.description}
                                    </p>
                                </div>

                                {/* Decorative glow */}
                                <div className="flex justify-end mt-4">
                                    <span className="text-yellow-500 text-lg opacity-40 group-hover:opacity-100 transition">
                                        ✿
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Festivals;
