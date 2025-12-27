"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import {
    Search,
    ShoppingCart,
    Menu,
    ChevronDown,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const { state } = useCart ? useCart() : { state: { items: [] } };
    const cartCount =
        state?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

    const router = useRouter();

    const categories = ["All", "Fruits", "Vegetables", "Dairy"];
    const [dropdown, setDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const dropdownRef = useRef<HTMLDivElement>(null);

    /* Close dropdown on outside click */
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleCategorySelect = (cat: string) => {
        setSelectedCategory(cat);
        setDropdown(false);
        router.push(`/products?category=${encodeURIComponent(cat)}`);
    };

    return (
        <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
            {/* Top Bar */}
            <div className="bg-purple-700 text-white text-center text-xs sm:text-sm py-1 px-2">
                FREE delivery & 40% Discount for next 3 orders! Place your 1st order now
            </div>

            {/* Main Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-2 sm:px-6 py-2 sm:py-4 gap-2">
                {/* Mobile Header */}
                <div className="flex w-full items-center justify-between sm:hidden">
                    <Link href="/" className="text-xl font-bold text-purple-700">
                        Freshly
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link href="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full px-1.5">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>

                {/* Desktop Header */}
                <div className="hidden sm:flex w-full items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-bold text-purple-700">
                        Freshly
                    </Link>

                    {/* Search + Category */}
                    <div className="flex items-center flex-1 max-w-xl bg-gray-100 rounded-full px-2 py-1 mx-8">
                        {/* Category Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                type="button"
                                onClick={() => setDropdown((v) => !v)}
                                className="
                  flex items-center gap-2
                  px-4 py-2
                  bg-white border
                  rounded-full
                  text-sm font-medium text-gray-700
                  hover:border-purple-500
                  hover:text-purple-700
                  transition-all duration-200
                  shadow-sm
                "
                            >
                                <Menu className="w-4 h-4" />
                                <span>{selectedCategory}</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${dropdown ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {dropdown && (
                                <div
                                    className="
                    absolute left-0 top-full mt-3
                    w-56
                    bg-white
                    rounded-2xl
                    shadow-xl
                    border
                    z-50
                    overflow-hidden
                    animate-in fade-in slide-in-from-top-2
                  "
                                >
                                    <div className="px-4 py-3 text-xs font-semibold text-gray-400 uppercase">
                                        Browse Categories
                                    </div>

                                    {categories.map((cat) => (
                                        <button
                                            key={cat}
                                            onClick={() => handleCategorySelect(cat)}
                                            className="
                        group
                        w-full flex items-center
                        px-4 py-3
                        text-sm font-medium text-gray-700
                        hover:bg-purple-50
                        hover:text-purple-700
                        transition-all
                      "
                                        >
                                            <span
                                                className="
                          mr-3 h-2 w-2 rounded-full
                          bg-gray-300
                          group-hover:bg-purple-600
                          transition
                        "
                                            />
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Input */}
                        <input
                            className="flex-1 bg-transparent outline-none px-3 text-gray-700"
                            type="text"
                            placeholder="Search fresh products..."
                        />

                        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold ml-2 flex items-center gap-1">
                            Search <Search className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        <Link href="/cart" className="relative">
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs rounded-full px-1.5">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <Link
                            href="/order"
                            className="flex items-center gap-1 text-purple-700 font-semibold hover:underline"
                        >
                            Orders
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
