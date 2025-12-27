// Premium Footer Component
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-20">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            ShopHub
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Your one-stop destination for premium quality products at unbeatable prices. Shop with confidence!
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                                    About Us
                                </a>
                            </li>
                            {["Products", "My Orders", "Wishlist", "Cart"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-lg">Customer Service</h4>
                        <ul className="space-y-3">
                            {["Contact Us", "Shipping Info", "Returns & Exchanges", "FAQs", "Privacy Policy"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-4 text-lg">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    123 Shopping Street, NY 10001, United States
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">support@shophub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © 2025 ShopHub. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-1.5 flex-wrap justify-center">
                            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by
                            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Abinash Tiwari</span>
                            using <span className="font-semibold text-white">Next.js</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
