"use client";
// FeaturedBestSellerCard: large center card for best sellers section
import { Heart } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface FeaturedBestSellerCardProps {
    image: string;
    title: string;
    price: string;
    oldPrice?: string;
    rating: string;
    description: string;
    available: number;
}

export default function FeaturedBestSellerCard({
    image,
    title,
    price,
    oldPrice,
    rating,
    description,
    available,
}: FeaturedBestSellerCardProps) {
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
            },
        });
        if (typeof window !== "undefined" && (window as any).showToast) {
            (window as any).showToast(`${title} added to cart!`);
        }
    };
    return (
        <div className="bg-white rounded-2xl border-2 border-purple-300 p-6 flex flex-col items-center shadow-lg min-w-[320px] max-w-[380px] mx-auto relative">
            <button className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100">
                <Heart className="w-5 h-5 text-gray-300 hover:text-red-400" />
            </button>
            <div className="flex justify-center items-center mb-3 w-full">
                <div className="w-[120px] h-[120px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                    <Image src={image} alt={title} width={120} height={120} className="object-cover w-full h-full" />
                </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
                <span className="text-yellow-400 text-base">★</span>
                <span className="text-xs text-gray-600 font-medium">{rating}</span>
            </div>
            <div className="font-bold text-gray-900 text-lg mb-1 text-center">{title}</div>
            <div className="text-sm text-gray-500 mb-2 text-center line-clamp-2">{description}</div>
            <div className="flex items-end gap-2 mb-2">
                <span className="text-2xl font-bold text-gray-900 leading-none">{price}</span>
                {oldPrice && <span className="text-base line-through text-gray-400 leading-none">{oldPrice}</span>}
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
                <div className="h-2 bg-purple-400 rounded-full" style={{ width: `${Math.min(available, 100)}%` }} />
            </div>
            <div className="text-xs text-gray-500 mb-3 w-full text-left">Available only: <span className="text-purple-700 font-bold">{available}</span></div>
            <button onClick={handleAddToCart} className="w-full bg-purple-700 text-white font-semibold py-2 rounded-full hover:bg-purple-800 transition-colors text-base mt-auto">
                Add to cart
            </button>
        </div>
    );
}
