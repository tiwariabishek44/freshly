"use client"
import { useCart } from "../../context/CartContext";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Header from "../../components/Header";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { state, dispatch } = useCart();
    const items = state.items;
    const router = useRouter();

    const handleRemove = (id: string, options?: string[]) => {
        dispatch({ type: "REMOVE_ITEM", payload: { id, options } });
    };

    const handleChangeQty = (id: string, quantity: number, options?: string[]) => {
        if (quantity < 1) return;
        dispatch({ type: "CHANGE_QUANTITY", payload: { id, quantity, options } });
    };

    const subtotal = items.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity, 0);

    return (
        <>
            <Header />
            <section className="relative px-2 sm:px-4 py-8 sm:py-12 max-w-4xl mx-auto min-h-[70vh]">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-10 text-center text-purple-700 tracking-tight">Your Cart</h2>
                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                        <ShoppingCart className="w-16 sm:w-20 h-16 sm:h-20 text-purple-300 mb-6" />
                        <div className="text-lg sm:text-2xl font-semibold text-gray-500 mb-2">Your cart is empty</div>
                        <div className="text-gray-400 mb-6">Add some products to get started!</div>
                        <a href="/" className="bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow hover:bg-purple-800 transition">Shop Now</a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                        <div className="md:col-span-2 flex flex-col gap-4 sm:gap-6">
                            {items.map((item, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 transition hover:shadow-xl">
                                    <div className="w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center bg-gradient-to-tr from-purple-100 to-purple-50 rounded-xl overflow-hidden mb-2 sm:mb-0">
                                        <Image src={item.image} alt={item.title} width={96} height={96} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex-1 w-full">
                                        <div className="font-bold text-gray-900 text-base sm:text-lg mb-1">{item.title}</div>
                                        <div className="text-xs text-gray-500 mb-2">{item.options?.join(", ")}</div>
                                        <div className="flex items-center gap-2 sm:gap-3 mt-2">
                                            <span className="text-lg sm:text-xl font-bold text-purple-700">{item.price}</span>
                                            <span className="text-xs text-gray-400">x</span>
                                            <div className="flex items-center gap-1">
                                                <button onClick={() => handleChangeQty(item.id, item.quantity - 1, item.options)} className="p-1 rounded-full bg-gray-100 hover:bg-purple-100 transition">
                                                    <Minus className="w-4 h-4 text-purple-700" />
                                                </button>
                                                <span className="px-2 sm:px-3 py-1 rounded bg-gray-50 border text-center font-semibold text-gray-700 min-w-[28px] sm:min-w-[32px]">{item.quantity}</span>
                                                <button onClick={() => handleChangeQty(item.id, item.quantity + 1, item.options)} className="p-1 rounded-full bg-gray-100 hover:bg-purple-100 transition">
                                                    <Plus className="w-4 h-4 text-purple-700" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => handleRemove(item.id, item.options)} className="p-2 rounded-full bg-red-50 hover:bg-red-100 transition ml-0 sm:ml-2 mt-2 sm:mt-0">
                                        <Trash2 className="w-5 h-5 text-red-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="sticky top-24 h-fit bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100 flex flex-col gap-4 sm:gap-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-lg sm:text-xl text-gray-800">Subtotal</span>
                                <span className="font-bold text-lg sm:text-xl text-purple-700">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm mb-4">Shipping and taxes calculated at checkout.</div>
                            <button onClick={() => router.push("/checkout")} className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold py-3 sm:py-4 rounded-full shadow hover:scale-105 hover:from-purple-800 transition text-base sm:text-lg">Checkout</button>
                            <div className="flex justify-center">
                                <span className="text-xs text-gray-400">Secure checkout &mdash; 100% satisfaction guaranteed</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
