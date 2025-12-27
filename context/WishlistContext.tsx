"use client";
import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";

export interface WishlistItem {
    id: string;
    title: string;
    price: string;
    image: string;
}

interface WishlistState {
    items: WishlistItem[];
}

type WishlistAction =
    | { type: "ADD_ITEM"; payload: WishlistItem }
    | { type: "REMOVE_ITEM"; payload: { id: string } }
    | { type: "CLEAR_WISHLIST" };

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
    switch (action.type) {
        case "ADD_ITEM": {
            if (state.items.find(item => item.id === action.payload.id)) {
                return state;
            }
            return { items: [...state.items, action.payload] };
        }
        case "REMOVE_ITEM": {
            return {
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        }
        case "CLEAR_WISHLIST":
            return { items: [] };
        default:
            return state;
    }
}

const WishlistContext = createContext<{
    state: WishlistState;
    dispatch: React.Dispatch<WishlistAction>;
} | undefined>(undefined);

interface WishlistProviderProps {
    children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    useEffect(() => {
        const stored = localStorage.getItem("wishlist");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (parsed && Array.isArray(parsed.items)) {
                    parsed.items.forEach((item: any) => {
                        dispatch({ type: "ADD_ITEM", payload: { ...item } });
                    });
                }
            } catch { }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(state));
    }, [state]);

    return <WishlistContext.Provider value={{ state, dispatch }}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) throw new Error("useWishlist must be used within a WishlistProvider");
    return context;
}
