// Category navigation bar for homepage

import { Carrot, Apple, CupSoda, GlassWater, Fish, PawPrint, CakeSlice } from "lucide-react";

const categories = [
    { icon: <Carrot className="w-6 h-6 text-purple-600" />, name: "Vegetables", count: 6 },
    { icon: <Apple className="w-6 h-6 text-green-600" />, name: "Fresh Fruits", count: 8 },
    { icon: <CakeSlice className="w-6 h-6 text-pink-500" />, name: "Desserts", count: 9 },
    { icon: <GlassWater className="w-6 h-6 text-blue-500" />, name: "Drinks & Juice", count: 6 },
    { icon: <Fish className="w-6 h-6 text-blue-700" />, name: "Fish & Meats", count: 6 },
    { icon: <PawPrint className="w-6 h-6 text-yellow-600" />, name: "Pets & Animals", count: 4 },
];

export default function CategoryNav() {
    return (
        <nav className="flex gap-4 sm:gap-8 px-3 sm:px-10 py-3 sm:py-5 overflow-x-auto bg-white rounded-2xl shadow-md mt-6 border border-gray-100 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {categories.map((cat, i) => (
                <div key={cat.name} className="flex flex-col items-center min-w-[80px] sm:min-w-[120px]">
                    <div className="bg-white shadow p-2 sm:p-3 rounded-full mb-1 sm:mb-2 flex items-center justify-center border border-gray-200">
                        {cat.icon}
                    </div>
                    <span className="font-semibold text-xs sm:text-[15px] text-gray-900 mb-0.5">{cat.name}</span>
                    <span className="text-[10px] sm:text-xs text-gray-500">{cat.count} Products</span>
                </div>
            ))}
        </nav>
    );
}
