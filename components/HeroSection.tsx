import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col md:flex-row gap-6 mt-8 px-8">
            {/* Main Hero Banner */}
            <div className="flex-1 bg-[#ffffff] rounded-3xl p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=800&q=80"
                    alt="Fresh Organic Vegetables"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="relative z-10">
                    <span className="bg-green-700 text-white text-xs px-4 py-1 rounded-full w-max mb-3 font-semibold tracking-wide inline-block">100% Farm Fresh Food</span>
                    <h2 className="text-5xl font-cursive font-bold text-green-800 mb-1 leading-tight">Fresh Organic</h2>
                    <p className="text-lg text-gray-700 mb-2 font-medium">Vegetables & Fruits</p>
                    <div className="text-4xl font-extrabold text-green-700 mb-4">$59.00</div>
                    <button className="bg-green-700 text-white px-7 py-2.5 rounded-full font-bold w-max text-base shadow-md hover:bg-green-800 transition-colors">Shop Now</button>
                </div>
            </div>
            {/* Promo Cards - right side layout: 1 card on top row, 2 cards in bottom row */}
            <div className="flex flex-col gap-4 w-full md:w-[360px] justify-between">
                {/* Top row: single wide card */}
                <div className="bg-gradient-to-r from-orange-200 to-orange-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md mb-2 relative overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80"
                        alt="Fresh Oranges"
                        fill
                        className="object-cover opacity-50"
                    />
                    <div className="relative z-10">
                        <span className="text-xs font-bold text-orange-700 mb-1 inline-block">Fresh Organic Citrus Fruits</span>
                        <div className="text-xl font-extrabold text-orange-900 mb-2">Only $12.99</div>
                        <button className="bg-white text-orange-700 border border-orange-700 px-4 py-1.5 rounded-full font-bold w-max text-sm hover:bg-orange-50 transition-colors">Shop Now</button>
                    </div>
                </div>
                {/* Bottom row: two cards side by side */}
                <div className="flex gap-4">
                    <div className="bg-gradient-to-r from-red-300 to-red-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md w-1/2 relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80"
                            alt="Fresh Strawberries"
                            fill
                            className="object-cover opacity-50"
                        />
                        <div className="relative z-10">
                            <span className="text-xs font-bold text-red-900 mb-1 inline-block">Organic Strawberries</span>
                            <div className="text-base text-red-900 mb-2 font-semibold">Premium Quality</div>
                            <button className="bg-white text-red-700 border border-red-700 px-4 py-1.5 rounded-full font-bold w-max text-sm hover:bg-red-50 transition-colors">Shop Now</button>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-200 to-green-100 rounded-2xl p-5 flex flex-col justify-between min-h-[110px] shadow-md w-1/2 relative overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80"
                            alt="Fresh Leafy Greens"
                            fill
                            className="object-cover opacity-50"
                        />
                        <div className="relative z-10">
                            <span className="text-xs font-bold text-green-700 mb-1 inline-block">Fresh Leafy Greens</span>
                            <div className="text-base text-green-900 mb-2 font-semibold">15% OFF</div>
                            <button className="bg-white text-green-700 border border-green-500 px-4 py-1.5 rounded-full font-bold w-max text-sm hover:bg-green-50 transition-colors">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}