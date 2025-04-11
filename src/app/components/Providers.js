"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <Elements stripe={stripePromise}>
            <CartProvider
                mode="checkout-session"
                cartMode="client-only"
                currency="EUR"
                shouldPersist
            >
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </CartProvider>
        </Elements>
    );
}
