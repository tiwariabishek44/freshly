// TrendingProducts section: grid of product cards
import ProductCard from "./ProductCard";

const products = [
    {
        id: "1",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d67?auto=compress&w=400&q=80",
        category: "Fruits",
        title: "Fresh Organic Watermelon – Sweet & Juicy",
        price: "$30.00 – $38.00",
        discount: 16,
        rating: "5.00",
        options: ["1kg", "2kg"],
    },
    {
        id: "2",
        image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Red Beets – Fresh Root Vegetables",
        price: "$25.00 – $30.00",
        discount: 44,
        rating: "5.00",
        options: ["400g", "800g"],
    },
    {
        id: "3",
        image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Green Beans – Freshly Trimmed",
        price: "$3.00 – $8.00",
        discount: 77,
        rating: "5.00",
        options: ["250g", "500g"],
    },
    {
        id: "4",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=compress&w=400&q=80",
        category: "Fruits",
        title: "Organic Red Apples – Crisp & Sweet",
        price: "$10.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["1kg"],
    },
    {
        id: "5",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Bell Peppers – Colorful Mix",
        price: "$34.00",
        oldPrice: "$45.00",
        discount: 24,
        rating: "5.00",
        options: ["500g"],
    },
    {
        id: "6",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Fresh Organic Russet Potatoes – Farm Picked",
        price: "$30.00 – $38.00",
        discount: 16,
        rating: "5.00",
        options: ["1kg", "3kg"],
    },
    {
        id: "7",
        image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Carrots – Fresh & Crunchy",
        price: "$25.00 – $30.00",
        discount: 44,
        rating: "5.00",
        options: ["500g", "1kg"],
    },
    {
        id: "8",
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Broccoli – Nutrient Rich",
        price: "$3.00 – $8.00",
        discount: 77,
        rating: "5.00",
        options: ["500g", "1kg"],
    },
    {
        id: "9",
        image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Fresh Organic Romaine Lettuce – Crisp & Green",
        price: "$19.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["2 pcs"],
    },
    {
        id: "10",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=compress&w=400&q=80",
        category: "Fruits",
        title: "Organic Strawberries – Sweet & Fresh",
        price: "$34.00",
        oldPrice: "$45.00",
        discount: 24,
        rating: "5.00",
        options: ["250g", "500g"],
    },
];


export default function TrendingProducts() {
    return (
        <section className="px-2 sm:px-8 mt-10 sm:mt-16">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Trending Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
