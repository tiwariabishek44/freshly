// FeaturedProducts section with filter and product cards
import ProductCard from "./ProductCard";

const products = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Organic Russet Potatoes - Fresh Premium Quality...",
        price: "$30.00 – $38.00",
        oldPrice: undefined,
        discount: 16,
        rating: "5.00",
        options: ["100gm", "500gm"],
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Organic Red Beets - Fresh Root Vegetables Bundle...",
        price: "$25.00 – $30.00",
        oldPrice: undefined,
        discount: 44,
        rating: "5.00",
        options: ["100gm", "500gm"],
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Organic Trimmed Green Beans - Farm Fresh...",
        price: "$3.00 – $8.00",
        oldPrice: undefined,
        discount: 77,
        rating: "5.00",
        options: ["100gm", "500gm"],
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Organic Romaine Lettuce Hearts - Fresh Salad Greens...",
        price: "$19.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["100gm"],
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784l63?auto=format&fit=crop&w=400&q=80",
        category: "Vegetables",
        title: "Organic Bell Peppers Mix - Red, Yellow & Green...",
        price: "$34.00",
        oldPrice: "$45.00",
        discount: 24,
        rating: "5.00",
        options: ["100gm", "500gm"],
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
