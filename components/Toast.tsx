import { useEffect } from "react";

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

export default function Toast({ message, show, onClose }: ToastProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed top-6 right-6 z-50 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            {message}
        </div>
    );
}
