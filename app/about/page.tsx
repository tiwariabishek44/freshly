import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Target, Eye, Users, Award, Zap, Shield, Heart, TrendingUp, Code, Palette, Layers } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full translate-y-36 -translate-x-36 blur-2xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32 text-center z-10">
                    <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
                        About ShopHub
                    </h1>
                    <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                        Your trusted destination for quality products, exceptional service, and an unmatched shopping experience.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-6 justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold mb-1">50K+</div>
                            <div className="text-purple-100">Happy Customers</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold mb-1">10K+</div>
                            <div className="text-purple-100">Products</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold mb-1">99%</div>
                            <div className="text-purple-100">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 sm:py-24 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                                Our Story
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-6"></div>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Founded with a vision to revolutionize online shopping, ShopHub has grown from a small startup to a trusted e-commerce platform serving thousands of customers worldwide.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                We believe that shopping should be more than just transactions – it should be an experience. That's why we've built a platform that combines cutting-edge technology with a human touch.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Every product, every interaction, and every delivery is crafted with care to ensure you have the best possible experience.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 p-8 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🛍️</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 2020</h3>
                                    <p className="text-gray-600">Serving customers with excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                            Mission & Vision
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To provide an exceptional online shopping experience by offering high-quality products, competitive prices, and outstanding customer service. We're committed to making shopping convenient, enjoyable, and accessible to everyone.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To become the world's most customer-centric e-commerce platform, where people can discover, explore, and purchase anything they desire with confidence and ease. We envision a future where shopping is seamless and delightful.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-24 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                            Our Core Values
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Users,
                                title: "Customer First",
                                description: "Your satisfaction is our top priority. We listen, adapt, and continuously improve to serve you better.",
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Award,
                                title: "Quality Excellence",
                                description: "We partner with trusted brands and rigorously verify every product to ensure top-notch quality.",
                                gradient: "from-purple-500 to-pink-500"
                            },
                            {
                                icon: Zap,
                                title: "Innovation",
                                description: "We embrace cutting-edge technology to create seamless shopping experiences that delight our customers.",
                                gradient: "from-yellow-500 to-orange-500"
                            },
                            {
                                icon: Shield,
                                title: "Trust & Security",
                                description: "Your privacy and security are paramount. We use industry-leading measures to protect your information.",
                                gradient: "from-green-500 to-emerald-500"
                            },
                            {
                                icon: Heart,
                                title: "Community Impact",
                                description: "We believe in giving back and making a positive difference in the communities we serve.",
                                gradient: "from-red-500 to-pink-500"
                            },
                            {
                                icon: TrendingUp,
                                title: "Continuous Growth",
                                description: "We're always learning, evolving, and striving to be better for our customers and partners.",
                                gradient: "from-indigo-500 to-purple-500"
                            }
                        ].map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technology & Development */}
            <section className="py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                            Built with Modern Technology
                        </h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto mb-4"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Powered by cutting-edge web technologies for the best performance
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-300/20 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {[
                                { icon: Code, title: "Next.js Framework", desc: "React-based framework for optimal performance" },
                                { icon: Palette, title: "Modern Design", desc: "Beautiful UI with Tailwind CSS" },
                                { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your needs" }
                            ].map((tech, idx) => {
                                const Icon = tech.icon;
                                return (
                                    <div key={idx} className="text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                                        <p className="text-purple-100">{tech.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="relative z-10 text-center pt-8 border-t border-white/20">
                            <p className="text-xl mb-2">Crafted with passion by</p>
                            <h3 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2 flex-wrap">
                                <Heart className="w-8 h-8 text-red-300 fill-red-300 animate-pulse" />
                                <span className="bg-white text-purple-600 px-6 py-2 rounded-full">Abinash Tiwari</span>
                            </h3>
                            <p className="text-purple-100 text-lg">
                                Full-stack developer passionate about creating exceptional web experiences
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 sm:py-24 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Start Shopping?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Join thousands of satisfied customers and discover amazing products at unbeatable prices.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/products"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Browse Products
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-bold hover:bg-purple-50 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
