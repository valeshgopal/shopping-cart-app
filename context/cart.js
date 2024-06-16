import React, { createContext, useContext, useReducer } from 'react';
import Toast from 'react-native-toast-message';

const CartContext = createContext();

const showBaseToast = () => {
    Toast.show({
        type: 'success',
        text1: 'Item added to cart',
    });
}

const showErrorToast = () => {
    Toast.show({
        type: 'error',
        text1: 'Item removed from cart',
    });
}

export const CartProvider = ({ children }) => {
    const initialState = {
        cartItems: [],
    };

    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                const existingItemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                );

                if (existingItemIndex !== -1) {
                    const updatedCartItems = [...state.cartItems];
                    updatedCartItems[existingItemIndex].quantity += 1;
                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                } else {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                    };
                }
            case 'REMOVE_FROM_CART':
                const removedItemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload
                );
                if (removedItemIndex !== -1) {
                    const updatedCartItems = [...state.cartItems];
                    const newQuantity = Math.max(
                        0,
                        updatedCartItems[removedItemIndex].quantity - 1
                    );

                    updatedCartItems[removedItemIndex].quantity = newQuantity;

                    if (newQuantity === 0) {
                        updatedCartItems.splice(removedItemIndex, 1);
                    }

                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                } else {
                    return state;
                }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
        showBaseToast()
    };

    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
        showErrorToast()
    };

    const quantity = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    const totalPrice = state.cartItems.reduce(
        (total, item) => total + item.quantity * item.attributes.price,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartState: state,
                addToCart,
                removeFromCart,
                quantity,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
