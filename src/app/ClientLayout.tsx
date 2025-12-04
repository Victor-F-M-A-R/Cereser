'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { toggleCart } = useCart();

    return (
        <>
            <Header onOpenCart={toggleCart} />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
        </>
    );
}
