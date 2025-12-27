"use client";
// BestSellerCard: small card for best sellers section
import { Heart } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface BestSellerCardProps {
    image: string;
    title: string;
    price: string;
    oldPrice?: string;
    discount?: number;
    rating: string;
    options?: string[];
}

export default function BestSellerCard({
    image,
    title,
    price,
    oldPrice,
    discount,
    rating,
    options = [],
}: BestSellerCardProps) {
    const { dispatch } = useCart();
    const handleAddToCart = () => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: title,
                title,
                price: typeof price === "string" ? price.split("–")[0].trim() : price,
                image,
                quantity: 1,
                options,
            },
        });
        if (typeof window !== "undefined" && (window as any).showToast) {
            (window as any).showToast(`${title} added to cart!`);
        }
    };
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-3 flex flex-col relative shadow-sm hover:shadow-lg transition-shadow min-w-[180px] max-w-[220px]">
            {/* Top row: discount and favorite */}
            <div className="flex justify-between items-center mb-1">
                {discount !== undefined && (
                    <span className="bg-red-100 text-red-600 text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">-{discount}%</span>
                )}
                <button className="p-1 rounded-full hover:bg-gray-100 ml-auto">
                    <Heart className="w-4 h-4 text-gray-300 hover:text-red-400" />
                </button>
            </div>
            {/* Product image */}
            <div className="flex justify-center items-center mb-1 w-full">
                {/* Product image */}
                {/* Product image */}
                <div className="flex justify-center items-center mb-1 w-full">
                    <div className="relative w-[56px] h-[56px] bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="56px"
                        />
                    </div>
                </div>


            </div>
            {/* Options */}
            <div className="flex gap-1 flex-wrap mb-1">
                {options.map((opt) => (
                    <span key={opt} className="bg-gray-100 text-[11px] px-1.5 py-0.5 rounded-full font-medium text-gray-600 border border-gray-200">
                        {opt}
                    </span>
                ))}
            </div>
            {/* Price and old price */}
            <div className="flex items-end gap-2 mb-0.5">
                <span className="text-[15px] font-bold text-gray-900 leading-none">{price}</span>
                {oldPrice && <span className="text-xs line-through text-gray-400 leading-none">{oldPrice}</span>}
            </div>
            {/* Title */}
            <div className="text-xs font-semibold text-gray-800 line-clamp-2 min-h-[28px] mb-0.5">{title}</div>
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-xs text-gray-600 font-medium">{rating}</span>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-2" />
            {/* Add to cart button */}
            <button onClick={handleAddToCart} className="w-full bg-white border border-purple-200 text-purple-700 font-semibold py-1 rounded-full hover:bg-purple-50 transition-colors text-xs mt-auto">
                Add to cart
            </button>
        </div>
    );
}
