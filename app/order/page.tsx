"use client";
import { useEffect, useState } from "react";
import { ShoppingCart, Trash2, Package, Calendar, Mail, MapPin, Download, Eye } from "lucide-react";
import Header from "../../components/Header";

export default function OrderPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("orders");
        if (stored) setOrders(JSON.parse(stored));
    }, []);

    const handleDelete = (idx: number) => {
        const updated = orders.filter((_, i) => i !== idx);
        setOrders(updated);
        localStorage.setItem("orders", JSON.stringify(updated));
    };

    const getStatusColor = (status: string = "Processing") => {
        switch (status) {
            case "Delivered": return "bg-green-100 text-green-700 border-green-200";
            case "Shipped": return "bg-blue-100 text-blue-700 border-blue-200";
            case "Processing": return "bg-yellow-100 text-yellow-700 border-yellow-200";
            default: return "bg-purple-100 text-purple-700 border-purple-200";
        }
    };

    return (
        <>
            <Header />

            {/* Background decoration */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 -z-10"></div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Order History Section */}
                <div className="w-full">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                                Order History
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                                <p className="text-sm text-gray-500">{orders.length} {orders.length === 1 ? "order" : "orders"} found</p>
                            </div>
                        </div>
                        {orders.length > 0 && (
                            <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                                <Download className="w-4 h-4" />
                                Export All
                            </button>
                        )}
                    </div>

                    {orders.length === 0 ? (
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 sm:p-16 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
                                <Package className="w-10 h-10 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">No Orders Yet</h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                                You haven't placed any orders yet. Start shopping to see your order history here!
                            </p>
                            <a
                                href="/products"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300"
                            >
                                Browse Products
                            </a>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {orders.map((order, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Order Header */}
                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-gray-900 text-lg">{order.name}</span>
                                                    <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${getStatusColor(order.status)}`}>
                                                        {order.status || "Processing"}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{order.date}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleDelete(idx)}
                                                className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-500 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Order Details */}
                                    <div className="p-6 space-y-4">
                                        {/* Contact Info */}
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-start gap-2 text-gray-600">
                                                <Mail className="w-4 h-4 mt-0.5 text-purple-500" />
                                                <span>{order.email}</span>
                                            </div>
                                            <div className="flex items-start gap-2 text-gray-600">
                                                <MapPin className="w-4 h-4 mt-0.5 text-purple-500" />
                                                <span>{order.address}</span>
                                            </div>
                                        </div>

                                        {/* Order Items */}
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                <ShoppingCart className="w-4 h-4 text-purple-600" />
                                                Items ({order.items.length})
                                            </h4>
                                            <div className="space-y-2">
                                                {order.items.map((item: any, i: number) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                                <Package className="w-5 h-5 text-purple-600" />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-gray-900 text-sm">{item.title}</div>
                                                                <div className="text-xs text-gray-500">Qty: {item.quantity}</div>
                                                            </div>
                                                        </div>
                                                        <span className="font-semibold text-gray-900">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Order Total */}
                                        <div className="pt-4 border-t border-gray-200">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-lg font-bold text-gray-900">Total Amount</span>
                                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                                    ${order.total.toFixed(2)}
                                                </span>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-2">
                                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all duration-300">
                                                    <Eye className="w-4 h-4" />
                                                    View Details
                                                </button>
                                                <button className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <Download className="w-4 h-4 text-gray-600" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
