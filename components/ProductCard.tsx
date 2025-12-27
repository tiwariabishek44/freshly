"use client";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
    id: string;
    image: string;
    title: string;
    category: string;
    price: string;
    oldPrice?: string;
    rating: string;
    discount?: number;
    inStock?: boolean;
}

export default function ProductCard({
    id,
    image,
    title,
    category,
    price,
    oldPrice,
    rating,
    discount,
    inStock = true,
}: ProductCardProps) {
    const { dispatch } = useCart();
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);
        dispatch({
            type: "ADD_ITEM",
            payload: { id, title, price: price.toString(), image, quantity: 1 },
        });
        setTimeout(() => setIsAdding(false), 600);
    };

    return (
        <div className="group relative">

            {/* Image Container - Card Style */}
            <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-gray-50/50 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 mb-4">

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none z-20"></div>

                {/* Image */}
                <div className="relative h-[260px] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                    {/* Discount Badge */}
                    {discount && discount > 0 && (
                        <div className="absolute top-3 left-3 z-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-sm opacity-75"></div>
                                <span className="relative flex items-center gap-1 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                    <Sparkles className="w-3 h-3" />
                                    {discount}% OFF
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Stock Badge */}
                    {!inStock && (
                        <div className="absolute top-3 right-3 z-10 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                            Out of Stock
                        </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                        onClick={() => setIsWishlisted(!isWishlisted)}
                        className={`absolute top-3 right-3 z-10 rounded-full p-2.5 backdrop-blur-md transition-all duration-300 transform hover:scale-110 ${isWishlisted
                            ? 'bg-red-500 text-white shadow-lg shadow-red-200'
                            : 'bg-white/90 text-gray-600 hover:bg-white shadow-md'
                            }`}
                    >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                    </button>

                    {/* Product Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-100/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section - Flat/Minimal */}
            <div className="space-y-3">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider">
                        {category}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-50 to-orange-50 px-2 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold text-gray-900">{rating}</span>
                    </div>
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-gray-900 line-clamp-2 text-base leading-snug group-hover:text-purple-700 transition-colors duration-300">
                    {title}
                </h3>

                {/* Price Section */}
                <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                        ${price}
                    </span>
                    {oldPrice && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400 line-through font-medium">
                                ${oldPrice}
                            </span>
                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                Save ${(parseFloat(oldPrice) - parseFloat(price)).toFixed(2)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    disabled={!inStock || isAdding}
                    className={`mt-4 flex items-center justify-center gap-2 w-full rounded-full font-semibold text-sm py-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md ${!inStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isAdding
                            ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-green-200'
                            : 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-xl hover:shadow-purple-200'
                        }`}
                >
                    {isAdding ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Added!
                        </>
                    ) : (
                        <>
                            <ShoppingCart className="w-4 h-4" />
                            {inStock ? 'Add to Cart' : 'Out of Stock'}
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
