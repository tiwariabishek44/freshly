import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Freshly</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Bringing farm-fresh organic produce directly to your doorstep
                </p>
            </div>

            {/* Our Story Section */}
            <div className="mb-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Freshly was founded with a simple mission: to make organic, locally-sourced produce accessible to everyone. We partner directly with local farmers who share our commitment to sustainable agriculture and quality.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Every item in our store is carefully selected to ensure you receive the freshest vegetables and fruits, grown without harmful pesticides or chemicals.
                        </p>
                    </div>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
                            alt="Fresh organic produce"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="text-5xl mb-4">🌱</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">100% Organic</h3>
                        <p className="text-gray-600 leading-relaxed">All our products are certified organic and free from harmful chemicals</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="text-5xl mb-4">🚜</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Local Farmers</h3>
                        <p className="text-gray-600 leading-relaxed">We support local farming communities and sustainable agriculture</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
                        <div className="text-5xl mb-4">✨</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Fresh Quality</h3>
                        <p className="text-gray-600 leading-relaxed">Handpicked daily to ensure maximum freshness and nutrition</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="mb-20 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-10 sm:p-12">
                <div className="grid sm:grid-cols-4 gap-8 text-center text-white">
                    <div>
                        <div className="text-4xl font-bold mb-2">50+</div>
                        <p className="text-green-100">Local Farms</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">1000+</div>
                        <p className="text-green-100">Happy Customers</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">100%</div>
                        <p className="text-green-100">Organic Certified</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">24hrs</div>
                        <p className="text-green-100">Fresh Delivery</p>
                    </div>
                </div>
            </div>

            {/* How We Work Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How We Work</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                        <Image
                            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                            alt="Farmer harvesting vegetables"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-center order-1 md:order-2">
                        <div className="mb-8 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Farm to Store</h3>
                                <p className="text-gray-700 leading-relaxed">We collect fresh produce from our partner farms every morning</p>
                            </div>
                        </div>
                        <div className="mb-8 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Check</h3>
                                <p className="text-gray-700 leading-relaxed">Each item is inspected to meet our high quality standards</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                                <p className="text-gray-700 leading-relaxed">Your order is delivered fresh to your doorstep within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Freshly?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors">
                        <div className="text-3xl mb-3">🥬</div>
                        <h3 className="font-bold text-gray-900 mb-2">Always Fresh</h3>
                        <p className="text-gray-600 text-sm">Harvested and delivered within 24 hours</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors">
                        <div className="text-3xl mb-3">💰</div>
                        <h3 className="font-bold text-gray-900 mb-2">Fair Prices</h3>
                        <p className="text-gray-600 text-sm">Competitive pricing without middlemen</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors">
                        <div className="text-3xl mb-3">🚚</div>
                        <h3 className="font-bold text-gray-900 mb-2">Free Delivery</h3>
                        <p className="text-gray-600 text-sm">On orders above $50</p>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-green-500 transition-colors">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
                        <p className="text-gray-600 text-sm">100% satisfaction guarantee</p>
                    </div>
                </div>
            </div>

            {/* Our Commitment Section */}
            <div className="mb-20 bg-gray-50 rounded-2xl p-10 sm:p-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Sustainability</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We believe in protecting our planet for future generations. That's why we use eco-friendly packaging, support regenerative farming practices, and minimize food waste through careful inventory management.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Every purchase you make with Freshly supports sustainable agriculture and helps build a healthier food system for everyone.
                    </p>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-10 sm:p-12 text-center text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                <p className="text-lg mb-8 text-green-50">
                    We'd love to hear from you. Get in touch with our team.
                </p>
                <button className="bg-white text-green-600 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg">
                    Contact Us
                </button>
            </div>
        </div>
    );
}