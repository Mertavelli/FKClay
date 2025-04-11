import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useStripe } from '@stripe/react-stripe-js';
import { useCreateCheckoutSession } from "../../api/api";

const CheckoutButton = ({ children }) => {
    const stripe = useStripe();
    const { cartDetails } = useShoppingCart();
    const { mutate: createCheckoutSession, isLoading } = useCreateCheckoutSession();

    const handleCheckout = () => {
        const items = Object.values(cartDetails).map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
        }));

        createCheckoutSession(items, {
            onSuccess: async (data) => {
                const { id } = data;
                const result = await stripe.redirectToCheckout({ sessionId: id });
                if (result.error) {
                    console.error("Stripe error:", result.error.message);
                }
            },
            onError: (err) => {
                console.error("Checkout Error:", err);
            },
        });
    };

    return (
        <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="text-white bg-[#343339] rounded-full py-4 mt-5 w-full cursor-pointer"
        >
            {isLoading ? "Lädt..." : children}
        </button>
    );
};

export default CheckoutButton;
