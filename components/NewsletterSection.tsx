// Newsletter subscription section
"use client";
import { Mail, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                setEmail("");
                setIsSubmitted(false);
            }, 3000);
        }
    };

    return (
        <section className="px-4 sm:px-8 py-16 sm:py-20">
            <div className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-2xl shadow-purple-200/50">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-300/20 rounded-full translate-y-36 -translate-x-36 blur-2xl"></div>

                <div className="relative z-10 px-8 sm:px-16 py-12 sm:py-16 text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                        <Mail className="w-8 h-8 text-white" />
                    </div>

                    {/* Heading */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Subscribe to Newsletter
                        </h2>
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                    </div>

                    {/* Description */}
                    <p className="text-purple-100 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
                        Get exclusive deals, new product updates, and insider tips delivered straight to your inbox!
                    </p>

                    {/* Form */}
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full pl-12 pr-4 py-4 rounded-full bg-white border-2 border-transparent focus:border-purple-300 focus:ring-4 focus:ring-purple-200/50 outline-none text-gray-900 placeholder:text-gray-400 font-medium shadow-lg"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                                >
                                    <Send className="w-5 h-5" />
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-purple-100 text-sm mt-4">
                                Join 50,000+ subscribers. Unsubscribe anytime.
                            </p>
                        </form>
                    ) : (
                        <div className="max-w-xl mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                            <div className="flex items-center justify-center gap-2 text-white">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="font-bold text-lg">Thank you for subscribing!</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
