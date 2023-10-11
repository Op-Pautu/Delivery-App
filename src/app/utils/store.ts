import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartType, ActionTypes } from './../types/types';

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create(persist<CartType & ActionTypes>((set, get) => ({
    ...INITIAL_STATE,
    addToCart: (item) => {
        set((state) => {
            const existingProduct = state.products.find((product) => product.id === item.id);

            if (existingProduct) {
                // Update the existing product in the cart
                existingProduct.quantity += item.quantity;
                existingProduct.price += item.price;
            } else {
                // Add the item to the cart
                state.products.push(item);
            }

            // Calculate the updated total items and total price
            const updatedTotalItems = state.totalItems + item.quantity;
            const updatedTotalPrice = state.totalPrice + item.price;

            return {
                ...state,
                totalItems: updatedTotalItems,
                totalPrice: updatedTotalPrice,
            };
        });
    },

    removeFromCart: (item) =>
        set((state) => ({
            ...state,
            products: state.products.filter((product) => product.id !== item.id),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price,
        }),
        ),
}), { name: "cart", skipHydration: true }));

// Old version
// addToCart: (item) => {
//     const products = get().products
//     const productInState = products.find(product => product.id === item.id)

//     if (productInState) {
//         const updatedProducts = products.map(product => product.id === productInState.id ? {
//             ...item,
//             quantity: item.quantity + product.quantity,
//             price: item.price + product.price
//         } : item
//         )
//         set((state) => ({
//             products: updatedProducts,
//             totalItems: state.totalItems + item.quantity,
//             totalPrice: state.totalPrice + item.price,
//         }))
//     } else {
//         set((state) => ({
//             ...state,
//             products: [...state.products, item],
//             totalItems: state.totalItems + item.quantity,
//             totalPrice: state.totalPrice + item.price,
//         }))
//     }


// },