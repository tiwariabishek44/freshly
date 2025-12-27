// Placeholder for cart context
"use client";
import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";

// Cart item type
export interface CartItem {
    id: string;
    title: string;
    price: string;
    image: string;
    quantity: number;
    options?: string[];
}

interface CartState {
    items: CartItem[];
}

type CartAction =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: { id: string; options?: string[] } }
    | { type: "CHANGE_QUANTITY"; payload: { id: string; quantity: number; options?: string[] } }
    | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD_ITEM": {
            // Check if item (with same options) exists
            const idx = state.items.findIndex(
                (item) => item.id === action.payload.id && JSON.stringify(item.options) === JSON.stringify(action.payload.options)
            );
            if (idx > -1) {
                // Increase quantity
                const items = [...state.items];
                items[idx].quantity += action.payload.quantity;
                return { items };
            }
            return { items: [...state.items, action.payload] };
        }
        case "REMOVE_ITEM": {
            return {
                items: state.items.filter(
                    (item) => !(item.id === action.payload.id && JSON.stringify(item.options) === JSON.stringify(action.payload.options))
                ),
            };
        }
        case "CHANGE_QUANTITY": {
            return {
                items: state.items.map((item) =>
                    item.id === action.payload.id && JSON.stringify(item.options) === JSON.stringify(action.payload.options)
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        }
        case "CLEAR_CART":
            return { items: [] };
        default:
            return state;
    }
}

const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    // On mount, load cart from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("cart");
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
        // eslint-disable-next-line
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}
