// Customer testimonials section
"use client";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Verified Buyer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        text: "Amazing quality products and super fast delivery! I've been shopping here for months and never been disappointed. Highly recommended!",
    },
    {
        name: "Michael Chen",
        role: "Regular Customer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        text: "The customer service is outstanding. They helped me with everything and the products exceeded my expectations. Will definitely shop again!",
    },
    {
        name: "Emily Davis",
        role: "Happy Shopper",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 5,
        text: "Best online shopping experience ever! Great prices, quality products, and the packaging was perfect. Five stars all the way!",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="px-4 sm:px-8 py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                    What Our Customers Say
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                    <p className="text-gray-600">Trusted by thousands of happy customers</p>
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-purple-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                    >
                        {/* Decorative gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10">
                            {/* Quote Icon */}
                            <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center opacity-50">
                                <Quote className="w-6 h-6 text-purple-600" />
                            </div>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* Customer Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all duration-300">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
