import React, { createContext, useContext, useReducer } from 'react';
import Toast from 'react-native-toast-message';

const showBaseToast = () => {
    Toast.show({
        type: 'success',
        text1: 'Item added to favorites',
    });
};

const showErrorToast = () => {
    Toast.show({
        type: 'error',
        text1: 'Item removed from favorites',
    });
};

const FavoriteContext = createContext();

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return [...state, { ...action.payload, isFavorite: true }];
        case 'REMOVE_FROM_FAVORITES':
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};

export const FavoriteProvider = ({ children }) => {
    const [favorites, dispatch] = useReducer(favoriteReducer, []);

    const addToFavorites = (item) => {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
        showBaseToast();
    };

    const removeFromFavorites = (item) => {
        dispatch({
            type: 'REMOVE_FROM_FAVORITES',
            payload: { ...item, isFavorite: false },
        });
        showErrorToast();
    };

    return (
        <FavoriteContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorites }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoriteProvider');
    }
    return context;
};
