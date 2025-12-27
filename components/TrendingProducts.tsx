// TrendingProducts section: grid of product cards
import ProductCard from "./ProductCard";

const products = [
    {
        id: "1",
        image: "https://images.pexels.com/photos/5945659/pexels-photo-5945659.jpeg?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Fresh Organic Watermelon – Sweet & Juicy",
        price: "$30.00 – $38.00",
        discount: 16,
        rating: "5.00",
        options: ["1kg", "2kg"],
    },
    {
        id: "2",
        image: "https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&w=400&q=80",
        category: "Baby Food",
        title: "Aptamil Gold+ ProNutra Biotik Stage 1 Formula",
        price: "$25.00 – $30.00",
        discount: 44,
        rating: "5.00",
        options: ["400g", "800g"],
    },
    {
        id: "3",
        image: "https://images.pexels.com/photos/4110239/pexels-photo-4110239.jpeg?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Organic Green Beans – Freshly Trimmed",
        price: "$3.00 – $8.00",
        discount: 77,
        rating: "5.00",
        options: ["250g", "500g"],
    },
    {
        id: "4",
        image: "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&w=400&q=80",
        category: "Beverages",
        title: "100% Pure Apple Juice – No Added Sugar",
        price: "$10.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["1L"],
    },
    {
        id: "5",
        image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&w=400&q=80",
        category: "Snacks",
        title: "Deli Style Potato Chips – Lime & Black Pepper",
        price: "$34.00",
        oldPrice: "$45.00",
        discount: 24,
        rating: "5.00",
        options: ["150g"],
    },
    {
        id: "6",
        image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Fresh Russet Idaho Potatoes – Farm Picked",
        price: "$30.00 – $38.00",
        discount: 16,
        rating: "5.00",
        options: ["1kg", "3kg"],
    },
    {
        id: "7",
        image: "https://images.pexels.com/photos/4110244/pexels-photo-4110244.jpeg?auto=compress&w=400&q=80",
        category: "Baby Food",
        title: "Aptamil Gold+ ProNutra Biotik Stage 2 Formula",
        price: "$25.00 – $30.00",
        discount: 44,
        rating: "5.00",
        options: ["400g", "800g"],
    },
    {
        id: "8",
        image: "https://images.pexels.com/photos/5945620/pexels-photo-5945620.jpeg?auto=compress&w=400&q=80",
        category: "Frozen Vegetables",
        title: "Frozen Mixed Vegetables – Preserved Freshness",
        price: "$3.00 – $8.00",
        discount: 77,
        rating: "5.00",
        options: ["500g", "1kg"],
    },
    {
        id: "9",
        image: "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?auto=compress&w=400&q=80",
        category: "Vegetables",
        title: "Fresh Romaine Lettuce Hearts – Crisp & Green",
        price: "$19.00",
        oldPrice: "$22.00",
        discount: 14,
        rating: "5.00",
        options: ["2 pcs"],
    },
    {
        id: "10",
        image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&w=400&q=80",
        category: "Dry Fruits",
        title: "Premium Whole Almonds – Healthy & Natural",
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
