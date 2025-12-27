"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import { SlidersHorizontal, X, Tag, DollarSign, Star, Package, ChevronRight } from "lucide-react";


// Demo product data - expandedaz
const PRODUCTS = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
        category: "Fruits",
        brand: "FreshMart",
        title: "Organic Red Apples - Premium Quality",
        price: "4.99",
        oldPrice: "6.99",
        discount: 29,
        rating: "4.7",
        inStock: true,
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=80",
        category: "Fruits",
        brand: "Organic Valley",
        title: "Organic Bananas - Naturally Sweet",
        price: "2.99",
        oldPrice: "3.99",
        discount: 25,
        rating: "4.5",
        inStock: true,
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Broccoli - Rich in Nutrients",
        price: "1.99",
        oldPrice: "2.49",
        discount: 20,
        rating: "4.6",
        inStock: true,
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Bell Peppers - Colorful Mix",
        price: "3.49",
        oldPrice: "4.49",
        discount: 22,
        rating: "4.8",
        inStock: true,
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Carrots - Fresh & Crunchy",
        price: "2.49",
        oldPrice: "3.29",
        discount: 24,
        rating: "4.7",
        inStock: true,
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&q=80",
        category: "Fruits",
        brand: "Tropical Farms",
        title: "Organic Oranges - Vitamin C Rich",
        price: "5.99",
        oldPrice: "7.99",
        discount: 25,
        rating: "4.6",
        inStock: true,
    },
    {
        id: "7",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
        category: "Vegetables",
        brand: "FreshMart",
        title: "Organic Cherry Tomatoes - Sweet & Juicy",
        price: "3.99",
        discount: 0,
        rating: "4.5",
        inStock: true,
    },
    {
        id: "8",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Cucumber - Fresh & Crisp",
        price: "4.99",
        oldPrice: "6.49",
        discount: 23,
        rating: "4.9",
        inStock: true,
    },
    {
        id: "9",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80",
        category: "Fruits",
        brand: "Organic Valley",
        title: "Organic Strawberries - 1lb Pack",
        price: "6.99",
        oldPrice: "8.99",
        discount: 22,
        rating: "4.8",
        inStock: false,
    },
    {
        id: "10",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Baby Spinach - 300g",
        price: "2.99",
        discount: 0,
        rating: "4.4",
        inStock: true,
    },
    {
        id: "11",
        image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&q=80",
        category: "Vegetables",
        brand: "Green Fields",
        title: "Organic Lettuce - Fresh & Crispy",
        price: "3.49",
        oldPrice: "4.49",
        discount: 22,
        rating: "4.6",
        inStock: true,
    },
    {
        id: "12",
        image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80",
        category: "Fruits",
        brand: "Organic Valley",
        title: "Organic Blueberries - Premium 500g",
        price: "8.99",
        oldPrice: "11.99",
        discount: 25,
        rating: "4.7",
        inStock: true,
    },
];

const CATEGORIES = [
    { name: "Fruits", count: PRODUCTS.filter(p => p.category === "Fruits").length },
    { name: "Vegetables", count: PRODUCTS.filter(p => p.category === "Vegetables").length },
];

const BRANDS = ["All Brands", "FreshMart", "Organic Valley", "Green Fields", "Tropical Farms",];

const PRICE_RANGES = [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under $3", min: 0, max: 3 },
    { label: "$3 - $5", min: 3, max: 5 },
    { label: "$5 - $8", min: 5, max: 8 },
    { label: "$8 & Above", min: 8, max: Infinity },
];

const RATING_FILTERS = [
    { label: "All Ratings", min: 0 },
    { label: "4★ & Above", min: 4 },
    { label: "4.5★ & Above", min: 4.5 },
];
function ProductsPage() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "All Categories";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedBrand, setSelectedBrand] = useState("All Brands");
    const [selectedPriceRange, setSelectedPriceRange] = useState(PRICE_RANGES[0]);
    const [selectedRating, setSelectedRating] = useState(RATING_FILTERS[0]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat) setSelectedCategory(cat);
    }, [searchParams]);

    // Apply filters
    let filtered = PRODUCTS.filter(p => {
        const categoryMatch = selectedCategory === "All Categories" || p.category === selectedCategory;
        const brandMatch = selectedBrand === "All Brands" || p.brand === selectedBrand;
        const priceValue = parseFloat(p.price);
        const priceMatch = priceValue >= selectedPriceRange.min && priceValue <= selectedPriceRange.max;
        const ratingMatch = parseFloat(p.rating) >= selectedRating.min;
        const stockMatch = !inStockOnly || p.inStock;

        return categoryMatch && brandMatch && priceMatch && ratingMatch && stockMatch;
    });

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return parseFloat(a.price) - parseFloat(b.price);
            case "price-high":
                return parseFloat(b.price) - parseFloat(a.price);
            case "rating":
                return parseFloat(b.rating) - parseFloat(a.rating);
            case "name":
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });

    const resetFilters = () => {
        setSelectedCategory("All Categories");
        setSelectedBrand("All Brands");
        setSelectedPriceRange(PRICE_RANGES[0]);
        setSelectedRating(RATING_FILTERS[0]);
        setInStockOnly(false);
    };

    const FilterSidebar = () => (
        <aside className="w-80 bg-gradient-to-b from-white to-gray-50/30 border-r border-gray-200/80 overflow-y-auto shadow-sm sticky top-0 h-screen">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200/80 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <SlidersHorizontal className="w-5 h-5 text-purple-600" />
                        <h2 className="text-lg font-bold text-gray-900 tracking-tight">Filters</h2>
                    </div>
                    <button
                        onClick={resetFilters}
                        className="text-xs font-semibold text-purple-600 hover:text-purple-700 hover:bg-purple-50 px-3 py-1.5 rounded-full transition-all duration-200"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="px-6 py-6 border-b border-gray-200/60">
                <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Categories</h3>
                </div>
                <div className="space-y-1.5">
                    {CATEGORIES.map(cat => (
                        <label
                            key={cat.name}
                            className={`flex items-center justify-between cursor-pointer group px-3 py-2.5 rounded-xl transition-all duration-200 ${selectedCategory === cat.name
                                ? 'bg-gradient-to-r from-purple-600 to-purple-500 shadow-md shadow-purple-200'
                                : 'hover:bg-gray-100/80'
                                }`}
                        >
                            <div className="flex items-center gap-3 flex-1">
                                <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedCategory === cat.name
                                    ? 'border-white bg-white'
                                    : 'border-gray-300 group-hover:border-purple-400'
                                    }`}>
                                    {selectedCategory === cat.name && (
                                        <div className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-scale-in"></div>
                                    )}
                                </div>
                                <span className={`text-sm font-medium transition-colors duration-200 ${selectedCategory === cat.name
                                    ? 'text-white'
                                    : 'text-gray-700 group-hover:text-gray-900'
                                    }`}>
                                    {cat.name}
                                </span>
                            </div>

                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === cat.name}
                                onChange={() => setSelectedCategory(cat.name)}
                                className="sr-only"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="px-6 py-6 border-b border-gray-200/60">
                <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Price Range</h3>
                </div>
                <div className="space-y-1.5">
                    {PRICE_RANGES.map(range => (
                        <label
                            key={range.label}
                            className={`flex items-center cursor-pointer group px-3 py-2.5 rounded-xl transition-all duration-200 ${selectedPriceRange.label === range.label
                                ? 'bg-gradient-to-r from-purple-600 to-purple-500 shadow-md shadow-purple-200'
                                : 'hover:bg-gray-100/80'
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedPriceRange.label === range.label
                                ? 'border-white bg-white'
                                : 'border-gray-300 group-hover:border-purple-400'
                                }`}>
                                {selectedPriceRange.label === range.label && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-scale-in"></div>
                                )}
                            </div>
                            <span className={`ml-3 text-sm font-medium transition-colors duration-200 ${selectedPriceRange.label === range.label
                                ? 'text-white'
                                : 'text-gray-700 group-hover:text-gray-900'
                                }`}>
                                {range.label}
                            </span>
                            <input
                                type="radio"
                                name="price"
                                checked={selectedPriceRange.label === range.label}
                                onChange={() => setSelectedPriceRange(range)}
                                className="sr-only"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div className="px-6 py-6 border-b border-gray-200/60">
                <div className="flex items-center gap-2 mb-4">
                    <Package className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Brands</h3>
                </div>
                <div className="space-y-1.5 max-h-56 overflow-y-auto custom-scrollbar pr-1">
                    {BRANDS.map(brand => (
                        <label
                            key={brand}
                            className={`flex items-center cursor-pointer group px-3 py-2.5 rounded-xl transition-all duration-200 ${selectedBrand === brand
                                ? 'bg-gradient-to-r from-purple-600 to-purple-500 shadow-md shadow-purple-200'
                                : 'hover:bg-gray-100/80'
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedBrand === brand
                                ? 'border-white bg-white'
                                : 'border-gray-300 group-hover:border-purple-400'
                                }`}>
                                {selectedBrand === brand && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-scale-in"></div>
                                )}
                            </div>
                            <span className={`ml-3 text-sm font-medium transition-colors duration-200 ${selectedBrand === brand
                                ? 'text-white'
                                : 'text-gray-700 group-hover:text-gray-900'
                                }`}>
                                {brand}
                            </span>
                            <input
                                type="radio"
                                name="brand"
                                checked={selectedBrand === brand}
                                onChange={() => setSelectedBrand(brand)}
                                className="sr-only"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="px-6 py-6 border-b border-gray-200/60">
                <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Customer Rating</h3>
                </div>
                <div className="space-y-1.5">
                    {RATING_FILTERS.map(rating => (
                        <label
                            key={rating.label}
                            className={`flex items-center cursor-pointer group px-3 py-2.5 rounded-xl transition-all duration-200 ${selectedRating.label === rating.label
                                ? 'bg-gradient-to-r from-purple-600 to-purple-500 shadow-md shadow-purple-200'
                                : 'hover:bg-gray-100/80'
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all duration-200 ${selectedRating.label === rating.label
                                ? 'border-white bg-white'
                                : 'border-gray-300 group-hover:border-purple-400'
                                }`}>
                                {selectedRating.label === rating.label && (
                                    <div className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-scale-in"></div>
                                )}
                            </div>
                            <span className={`ml-3 text-sm font-medium flex items-center gap-1.5 transition-colors duration-200 ${selectedRating.label === rating.label
                                ? 'text-white'
                                : 'text-gray-700 group-hover:text-gray-900'
                                }`}>
                                {rating.label}
                                {rating.min > 0 && (
                                    <span className={`text-sm ${selectedRating.label === rating.label ? 'text-yellow-200' : 'text-yellow-400'
                                        }`}>
                                        ★
                                    </span>
                                )}
                            </span>
                            <input
                                type="radio"
                                name="rating"
                                checked={selectedRating.label === rating.label}
                                onChange={() => setSelectedRating(rating)}
                                className="sr-only"
                            />
                        </label>
                    ))}
                </div>
            </div>

            {/* Availability */}
            <div className="px-6 py-6">
                <div className="flex items-center gap-2 mb-4">
                    <ChevronRight className="w-4 h-4 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Availability</h3>
                </div>
                <label
                    className={`flex items-center cursor-pointer group px-3 py-3 rounded-xl transition-all duration-200 ${inStockOnly
                        ? 'bg-gradient-to-r from-green-600 to-green-500 shadow-md shadow-green-200'
                        : 'hover:bg-gray-100/80 border border-gray-200'
                        }`}
                >
                    <div className={`relative flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200 ${inStockOnly
                        ? 'border-white bg-white'
                        : 'border-gray-300 group-hover:border-green-400'
                        }`}>
                        {inStockOnly && (
                            <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                    <span className={`ml-3 text-sm font-medium transition-colors duration-200 ${inStockOnly
                        ? 'text-white'
                        : 'text-gray-700 group-hover:text-gray-900'
                        }`}>
                        In Stock Only
                    </span>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="sr-only"
                    />
                </label>
            </div>

            {/* Premium Badge */}
            <div className="px-6 pb-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50 rounded-2xl p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full mb-2">
                        <Star className="w-5 h-5 text-white fill-white" />
                    </div>
                    <p className="text-xs font-semibold text-purple-900 mb-1">Premium Filters</p>
                    <p className="text-xs text-purple-700/80">Find exactly what you need</p>
                </div>
            </div>
        </aside>
    );

    return (
        <>
            <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block">
                    <FilterSidebar />
                </div>

                {/* Mobile Filter Overlay */}
                {showMobileFilters && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
                            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <FilterSidebar />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    s

                    {/* Product Grid/List */}
                    <div className="p-6 sm:p-10">
                        {sorted.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Found</h3>
                                <p className="text-gray-500 mb-6">No products match your current filters.</p>
                                <button
                                    onClick={resetFilters}
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
                                >
                                    Reset All Filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={viewMode === "grid"
                                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8"
                                    : "flex flex-col gap-6"
                                }>
                                    {sorted.map((product) => (
                                        <ProductCard key={product.id} {...product} />
                                    ))}
                                </div>

                                {/* Pagination hint */}
                                {sorted.length > 0 && (
                                    <div className="mt-12 text-center">
                                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm">
                                            <span className="text-sm text-gray-600">Showing all {sorted.length} products</span>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
}

const ProductPage = () => {
    return (
        <Suspense>
            <ProductsPage />
        </Suspense>

    );
};

export default ProductPage;