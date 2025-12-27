"use client";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, CreditCard, User, Home } from "lucide-react";

export default function CheckoutPage() {
    const { state, dispatch } = useCart();
    const router = useRouter();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const subtotal = state.items.reduce((sum, item) => sum + parseFloat(item.price.replace(/[^\d.]/g, "")) * item.quantity, 0);

    const handleOrder = (e: React.FormEvent) => {
        e.preventDefault();
        // Save order to localStorage
        const order = {
            name,
            address,
            email,
            items: state.items,
            total: subtotal,
            date: new Date().toLocaleString(),
        };
        const prevOrders = JSON.parse(localStorage.getItem("orders") || "[]");
        localStorage.setItem("orders", JSON.stringify([order, ...prevOrders]));
        dispatch({ type: "CLEAR_CART" });
        router.push("/order?name=" + encodeURIComponent(name));
    };

    return (
        <>
            <section className="max-w-xl mx-auto px-2 sm:px-6 py-8 sm:py-12">
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center text-purple-700 tracking-tight flex items-center justify-center gap-2">
                    <CreditCard className="w-7 sm:w-8 h-7 sm:h-8 text-purple-400" /> Checkout
                </h2>
                <form className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col gap-4 sm:gap-6 border border-gray-100" onSubmit={handleOrder}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-2">
                            <label className="text-xs text-gray-500 font-semibold flex items-center gap-1"><User className="w-4 h-4" /> Full Name</label>
                            <input required value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" className="px-4 py-3 rounded border focus:outline-purple-700" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <label className="text-xs text-gray-500 font-semibold flex items-center gap-1"><Home className="w-4 h-4" /> Address</label>
                            <textarea required value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" className="px-4 py-3 rounded border focus:outline-purple-700 resize-none min-h-[48px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs text-gray-500 font-semibold flex items-center gap-1"><CreditCard className="w-4 h-4" /> Email</label>
                        <input required value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="px-4 py-3 rounded border focus:outline-purple-700" />
                    </div>
                    <div className="flex justify-between items-center font-bold text-base sm:text-lg mt-4">
                        <span>Order Total</span>
                        <span className="text-purple-700">${subtotal.toFixed(2)}</span>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold py-3 sm:py-4 rounded-full hover:scale-105 hover:from-purple-800 transition text-base sm:text-lg mt-2 shadow-lg">Place Order</button>
                </form>
            </section>
        </>
    );
}
