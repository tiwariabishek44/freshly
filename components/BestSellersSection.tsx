"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useCart } from "../context/CartContext";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface Product {
    id: number;
    name: string;
    image: string;
    discount: number;
    rating: number;
    reviews: number;
    salePrice: number;
    originalPrice: number;
    featured: boolean;
}

interface FeaturedProduct {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    price: number;
    description: string;
    stock: number;
    featured: boolean;
}

interface StarRatingProps {
    rating: number;
    reviews: number;
}

interface ProductCardProps {
    product: Product;
}

interface FeaturedProductCardProps {
    product: FeaturedProduct;
}

const BestSellersSection: React.FC = () => {
    // Timer state for countdown
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 21,
        hours: 16,
        minutes: 20,
        seconds: 20
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const products: Product[] = [
        {
            id: 1,
            name: "Mini Cinnamon Rolls – 12oz",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
            discount: 75,
            rating: 5,
            reviews: 2,
            salePrice: 0.50,
            originalPrice: 1.98,
            featured: false
        },
        {
            id: 2,
            name: "Whole Foods Market, Organic Trimmed",
            image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
            discount: 41,
            rating: 4,
            reviews: 2,
            salePrice: 2.45,
            originalPrice: 4.13,
            featured: false
        },

    ];

    const rightProducts: Product[] = [
        {
            id: 4,
            name: "Maxican Nature's Sweet Bounty Fresh Organic Giant Papaya",
            image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=400&fit=crop",
            discount: 75,
            rating: 4,
            reviews: 2,
            salePrice: 0.50,
            originalPrice: 1.98,
            featured: false
        },
        {
            id: 5,
            name: "Simply Orange Pulp Free Juice – 52 fl oz",
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop",
            discount: 41,
            rating: 4,
            reviews: 2,
            salePrice: 2.45,
            originalPrice: 4.13,
            featured: false
        },

    ];

    const featuredProduct: FeaturedProduct = {
        id: 7,
        name: "Aptamil Gold+ ProNutra Biotik Stage 1 Infant Formula– 31.7",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&h=500&fit=crop",
        rating: 4,
        reviews: 3,
        price: 9.99,
        description: "Vivamus adipiscing nisi ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisi ut dolor dignissim semper.",
        stock: 33,
        featured: true
    };

    const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => (
        <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3 h-3 ${i < rating ? 'fill-yellow-400' : 'fill-gray-200'}`} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
            <span className="text-gray-500 text-xs ml-1">{reviews}</span>
        </div>
    );

    const CountdownTimer: React.FC = () => (
        <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{timeLeft.days}</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{timeLeft.hours}</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{timeLeft.minutes}</span>
                <span className="text-xs font-medium">:</span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{timeLeft.seconds}</span>
            </div>
            <span className="text-xs text-gray-400">Remains until the end of the offer</span>
        </div>
    );

    const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
        const { dispatch } = useCart();
        const handleAddToCart = () => {
            dispatch({
                type: "ADD_ITEM",
                payload: {
                    id: product.id.toString(),
                    title: product.name,
                    price: `$${product.salePrice.toFixed(2)}`,
                    image: product.image,
                    quantity: 1,
                },
            });
            if (typeof window !== "undefined" && (window as any).showToast) {
                (window as any).showToast(`${product.name} added to cart!`);
            }
        };
        return (
            <div className="bg-white rounded-lg p-4 relative hover:shadow-lg transition-shadow">
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {product.discount}%
                </div>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                </button>

                <div className="relative w-full h-40 mb-4 mt-2 overflow-hidden rounded-md">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>


                <h3 className="text-sm text-gray-800 mb-2 line-clamp-2 min-h-10">{product.name}</h3>

                <StarRating rating={product.rating} reviews={product.reviews} />

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-orange-500 font-bold text-lg">${product.salePrice.toFixed(2)}</span>
                    <span className="text-gray-400 text-sm line-through">${product.originalPrice.toFixed(2)}</span>
                </div>

                <button onClick={handleAddToCart} className="w-full border border-gray-300 rounded-full py-2 px-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <span className="text-sm">Add to cart</span>
                    <Plus className="w-4 h-4" />
                </button>

                <CountdownTimer />
            </div>
        );
    };

    const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
        const { dispatch } = useCart();
        const handleAddToCart = () => {
            dispatch({
                type: "ADD_ITEM",
                payload: {
                    id: product.id.toString(),
                    title: product.name,
                    price: `$${product.price.toFixed(2)}`,
                    image: product.image,
                    quantity: 1,
                },
            });
        };
        return (
            <div className="bg-white rounded-lg p-6 border-2 border-purple-600 relative hover:shadow-xl transition-shadow">
                <button className="absolute top-6 right-6 text-gray-400 hover:text-red-500">
                    <Heart className="w-6 h-6" />
                </button>

                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                    />
                </div>


                <StarRating rating={product.rating} reviews={product.reviews} />

                <h3 className="text-base text-gray-800 mb-3">{product.name}</h3>

                <div className="text-2xl font-bold text-gray-900 mb-3">${product.price.toFixed(2)}</div>

                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

                <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">This product is about to run out</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: `${(product.stock / 100) * 100}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-700">available only: <span className="font-semibold">{product.stock}</span></p>
                </div>

                <button onClick={handleAddToCart} className="w-full bg-purple-600 text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-medium">Add to cart</span>
                </button>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
            <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Best Sellers</h2>
                <p className="text-gray-500">Don't miss this opportunity at a special discount just for this week.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Left Column */}
                <div className="space-y-4 sm:space-y-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Center Featured Product */}
                <div className="md:col-span-1">
                    <FeaturedProductCard product={featuredProduct} />
                </div>

                {/* Right Column */}
                <div className="space-y-4 sm:space-y-6">
                    {rightProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellersSection;