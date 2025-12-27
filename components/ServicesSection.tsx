// Services/Features section showcasing benefits
import { Truck, Shield, Headphones, Gift } from "lucide-react";

const services = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "Free shipping on all orders over $50",
        gradient: "from-blue-500 to-cyan-500",
        bg: "from-blue-50 to-cyan-50",
    },
    {
        icon: Shield,
        title: "Secure Payment",
        description: "100% secure payment guaranteed",
        gradient: "from-green-500 to-emerald-500",
        bg: "from-green-50 to-emerald-50",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Dedicated customer support anytime",
        gradient: "from-purple-500 to-pink-500",
        bg: "from-purple-50 to-pink-50",
    },
    {
        icon: Gift,
        title: "Special Offers",
        description: "Regular deals and exclusive discounts",
        gradient: "from-orange-500 to-red-500",
        bg: "from-orange-50 to-red-50",
    },
];

export default function ServicesSection() {
    return (
        <section className="px-4 sm:px-8 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
