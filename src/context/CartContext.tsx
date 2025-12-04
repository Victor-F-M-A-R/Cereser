'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products';

interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    toggleCart: () => void;
    favorites: number[];
    toggleFavorite: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);

    // Load from local storage
    useEffect(() => {
        const savedFavs = localStorage.getItem('casaCereser_favorites');
        if (savedFavs) setFavorites(JSON.parse(savedFavs));

        // Could also load cart if we wanted persistence
    }, []);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const toggleCart = () => setIsCartOpen(prev => !prev);

    const toggleFavorite = (id: number) => {
        setFavorites(prev => {
            const newFavs = prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id];
            localStorage.setItem('casaCereser_favorites', JSON.stringify(newFavs));
            return newFavs;
        });
    };

    return (
        <CartContext.Provider value={{ cart, isCartOpen, addToCart, removeFromCart, toggleCart, favorites, toggleFavorite }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
