// FeaturedProducts section with filter and product cards
import ProductCard from "./ProductCard";

const products = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Russet Idaho Potatoes Fresh Premium Fruit and Produce...",
        price: "$30.00 – $38.00",
        oldPrice: undefined,
        discount: 16,
        rating: "5.00",
        options: ["100gm", "500gm"],
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
        category: "Desserts",
        title: "Aptamil Gold+ ProNutra Biotik Stage 1 Infant...",
        price: "$25.00 – $30.00",
        oldPrice: undefined,
        discount: 44,
        rating: "5.00",
        options: ["100gm", "375ml"],
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Whole Foods Market, Organic Trimmed Green...",
        price: "$3.00 – $8.00",
        oldPrice: undefined,
        discount: 77,
        rating: "5.00",
        options: ["100gm", "500gm"],
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Whole Foods Market, Romaine Hearts Salad Bag...",
        price: "$19.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["100gm"],
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
        category: "Beverage",
        title: "Red Rock Deli Style Potato Chips, Lime & Cracked...",
        price: "$34.00",
        oldPrice: "$45.00",
        discount: 24,
        rating: "5.00",
        options: ["100gm"],
    },
];

const filters = ["All", "Desserts", "Vegetables", "Beverage"];

export default function FeaturedProducts() {
    return (
        <section className="px-4 sm:px-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Products</h2>
                <div className="flex gap-2 sm:gap-4 text-sm font-semibold flex-wrap">
                    {filters.map((f, i) => (
                        <button
                            key={f}
                            className={`${i === 0 ? 'text-green-600' : 'text-gray-500'} hover:text-green-700 transition-colors`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {products.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
