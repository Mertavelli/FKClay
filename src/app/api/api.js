import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// API-Endpunkte
const API_ROUTES_URL = `${process.env.NEXT_PUBLIC_API_URL}/routes`;

// GET ALL PRODUCTS HOOK
export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch(API_ROUTES_URL);
            if (!response.ok) throw new Error("Failed to fetch products");
            return response.json();
        },
    });
};

// GET PRODUCT BY ID HOOK
export const useProductById = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: async () => {
            const response = await fetch(`${API_ROUTES_URL}/${id}`);
            if (!response.ok) throw new Error("Produkt nicht gefunden");
            return response.json();
        },
        enabled: !!id, // Verhindert das Abrufen, wenn `id` nicht existiert
    });
};

// POST PRODUCT HOOK
export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (newProduct) => {
            const formData = new FormData();
            formData.append("name", newProduct.name);
            formData.append("price", newProduct.price);
            formData.append("shortDescription", newProduct.shortDescription);
            formData.append("longDescription", newProduct.longDescription);
            formData.append("image", newProduct.image);
            formData.append("category", newProduct.category);
            formData.append("sale", newProduct.sale);

            const response = await fetch(`${API_ROUTES_URL}`, {
                method: "POST",
                body: formData, // FormData statt JSON
                // KEINE Content-Type setzen → Browser macht das automatisch für `FormData`
            });

            if (!response.ok) throw new Error("Fehler beim Erstellen des Produkts");
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });
};

// STRIPE CHECKOUT HOOK
export const useCreateCheckoutSession = () => {
    return useMutation({
        mutationFn: async (cartItems) => {
            const response = await fetch(`${API_ROUTES_URL}/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ items: cartItems }),
            });

            if (!response.ok) throw new Error("Checkout-Session konnte nicht erstellt werden");
            return response.json(); // Erwartet { id: "stripe_session_id" }
        },
    });
};
