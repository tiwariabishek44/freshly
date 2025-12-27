"use client";
import { useState } from "react";
import { Bell, CheckCircle2, XCircle } from "lucide-react";
export default function NotificationsPage() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: "order", message: "Your order #1234 has been shipped.", read: false },
        { id: 2, type: "promo", message: "Get 20% off on your next purchase!", read: true },
        { id: 3, type: "system", message: "Password changed successfully.", read: true },
    ]);
    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };
    const removeNotification = (id: number) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <div className="flex items-center gap-2 mb-6">
                    <Bell className="w-8 h-8 text-purple-700" />
                    <h1 className="text-2xl font-bold">Notifications</h1>
                </div>
                {notifications.length === 0 ? (
                    <p className="text-gray-600">No notifications.</p>
                ) : (
                    <ul className="space-y-4">
                        {notifications.map((n) => (
                            <li key={n.id} className={`flex items-center gap-3 p-4 rounded-lg border ${n.read ? "bg-gray-100" : "bg-yellow-50 border-yellow-400"}`}>
                                {n.read ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <XCircle className="w-6 h-6 text-yellow-500" />}
                                <span className="flex-1 text-gray-700">{n.message}</span>
                                {!n.read && <button onClick={() => markAsRead(n.id)} className="text-xs bg-yellow-400 text-white px-2 py-0.5 rounded-full mr-2">Mark as read</button>}
                                <button onClick={() => removeNotification(n.id)} className="text-xs bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full">Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
}