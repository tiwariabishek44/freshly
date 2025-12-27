// Hero and promo section for homepage
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row gap-6 mt-8 px-8">
            {/* Main Hero Banner */}
            <div className="flex-1 bg-[#e9d8fd] rounded-3xl p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden shadow-lg">
                <span className="bg-purple-700 text-white text-xs px-4 py-1 rounded-full w-max mb-3 font-semibold tracking-wide">100% Farm Fresh Food</span>
                <h2 className="text-5xl font-cursive font-bold text-purple-800 mb-1 leading-tight">Fresh Organic</h2>
                <p className="text-lg text-gray-700 mb-2 font-medium">Food For All</p>
                <div className="text-4xl font-extrabold text-purple-700 mb-4">$59.00</div>
                <button className="bg-purple-700 text-white px-7 py-2.5 rounded-full font-bold w-max text-base shadow-md">Shop Now</button>
                <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Organic Soda" width={200} height={200} className="absolute right-6 bottom-2 rotate-[-15deg] drop-shadow-2xl" />
            </div>
            {/* Promo Cards - right side layout: 1 card on top row, 2 cards in bottom row */}
            <div className="flex flex-col gap-4 w-full md:w-[360px] justify-between">
                {/* Top row: single wide card */}
                <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md mb-2">
                    <span className="text-xs font-bold text-blue-700 mb-1">Creamy Fruits baby Jem</span>
                    <div className="text-xl font-extrabold text-blue-900 mb-2">Only $12.99</div>
                    <button className="bg-white text-blue-700 border border-blue-700 px-4 py-1.5 rounded-full font-bold w-max text-sm">Shop Now</button>
                </div>
                {/* Bottom row: two cards side by side */}
                <div className="flex gap-4">
                    <div className="bg-gradient-to-r from-blue-300 to-blue-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md w-1/2">
                        <span className="text-xs font-bold text-blue-900 mb-1">New Baby Diaper</span>
                        <div className="text-base text-blue-900 mb-2 font-semibold">Top Quality Product</div>
                        <button className="bg-white text-blue-700 border border-blue-700 px-4 py-1.5 rounded-full font-bold w-max text-sm">Shop Now</button>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md w-1/2">
                        <span className="text-xs font-bold text-yellow-700 mb-1">Dark wash FaceWash</span>
                        <div className="text-base text-yellow-900 mb-2 font-semibold">15% OFF</div>
                        <button className="bg-white text-yellow-700 border border-yellow-500 px-4 py-1.5 rounded-full font-bold w-max text-sm">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
