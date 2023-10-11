import { create } from 'zustand';
import { CartType, ActionTypes } from './../types/types';

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create<CartType & ActionTypes>((set) => ({
    ...INITIAL_STATE,
    addToCart: (item) =>
        set((state) => ({
            ...state,
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
        })),
    removeFromCart: (item) =>
        set((state) => ({
            ...state,
            products: state.products.filter((product) => product.id !== item.id),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price,
        }),
        ),
}));