// ItemContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                const data = await response.json();
                setProducts(data.products);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching items:', error);
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, isLoading }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useItems must be used within an ProductsProvider');
    }
    return context;
};
