import Image from "next/image";

const banners = [
    {
        title: "Fresh Organic Berries",
        price: "$12.99",
        button: "Shop Now",
        // Premium red-pink gradient
        bg: "from-[#FC8181] via-[#FBB6CE] to-[#FED7E2]",
        img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80",
        text: "Sweet & Fresh",
        textColor: "text-white",
    },
    {
        title: "Organic Root Vegetables",
        price: "$14.99",
        button: "Shop Now",
        // Premium orange-yellow gradient
        bg: "from-[#F6AD55] via-[#FBD38D] to-[#FEFCBF]",
        img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80",
        text: "Farm Fresh",
        textColor: "text-gray-900",
    },
    {
        title: "Leafy Green Vegetables",
        price: "$5.99",
        button: "Shop Now",
        // Premium green gradient
        bg: "from-[#68D391] via-[#9AE6B4] to-[#C6F6D5]",
        img: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=80",
        text: "Organic & Crisp",
        textColor: "text-gray-900",
    },
];

export default function PromoBannerRow() {
    return (
        <section className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 sm:px-8 mt-12">
            {banners.map((b, i) => (
                <div
                    key={b.title}
                    className={`flex-1 rounded-2xl bg-gradient-to-r ${b.bg} p-4 sm:p-6 flex items-center min-h-[120px] sm:min-h-[140px] relative overflow-hidden shadow-lg`}
                >
                    <div className="flex-1 z-10">
                        <div className={`font-bold text-base sm:text-lg mb-1 ${b.textColor}`}>{b.title}</div>
                        <div className={`text-xs mb-2 font-medium ${b.textColor}`}>{b.text}</div>
                        <div className={`font-bold text-lg sm:text-xl mb-3 ${b.textColor}`}>Only {b.price}</div>
                        <button className="bg-white text-gray-700 font-semibold px-3 sm:px-4 py-1 rounded-full shadow hover:bg-gray-100 transition-colors text-xs sm:text-sm">
                            {b.button}
                        </button>
                    </div>
                    <div className="absolute right-2 sm:right-4 bottom-2 w-16 sm:w-24 h-16 sm:h-24 z-0">
                        <Image src={b.img} alt={b.title} fill className="object-contain" />
                    </div>
                </div>
            ))}
        </section>
    );
}