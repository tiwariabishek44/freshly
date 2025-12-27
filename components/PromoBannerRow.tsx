// PromoBannerRow: three horizontal promo banners
import Image from "next/image";

const banners = [
    {
        title: "Creamy Fruits baby Jem",
        price: "$12.99",
        button: "Shop Now",
        // Premium blue gradient
        bg: "from-[#7F9CF5] via-[#A3BFFA] to-[#E9D8FD]",
        img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
        text: "Only",
        textColor: "text-white",
    },
    {
        title: "Organic Fruits",
        price: "$14.99",
        button: "Shop Now",
        // Premium yellow-green gradient
        bg: "from-[#F6E05E] via-[#B9F5A1] to-[#F0FFF4]",
        img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
        text: "100% Organic",
        textColor: "text-gray-900",
    },
    {
        title: "Kids Car Toys",
        price: "$5.99",
        button: "Shop Now",
        // Premium purple-pink gradient
        bg: "from-[#B794F4] via-[#FBB6CE] to-[#F3E8FF]",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        text: "2023 Collections",
        textColor: "text-white",
    },
];

export default function PromoBannerRow() {
    return (
        <section className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 sm:px-8 mt-12">
            {banners.map((b, i) => (
                <div
                    key={b.title}
                    className={`flex-1 rounded-2xl bg-linear-to-r ${b.bg} p-4 sm:p-6 flex items-center min-h-[120px] sm:min-h-35 relative overflow-hidden shadow-lg`}
                >
                    <div className="flex-1 z-10">
                        <div className={`font-bold text-base sm:text-lg mb-1 ${b.textColor}`}>{b.title}</div>
                        <div className={`text-xs mb-2 font-medium ${b.textColor}`}>{b.text}</div>
                        <div className={`font-bold text-lg sm:text-xl mb-3 ${b.textColor}`}>Only {b.price}</div>
                        <button className="bg-white text-gray-700 font-semibold px-3 sm:px-4 py-1 rounded-full shadow hover:bg-gray-100 text-xs sm:text-sm">
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
