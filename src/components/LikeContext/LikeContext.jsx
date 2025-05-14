// context/LikeContext.js
import { createContext, useState, useEffect } from 'react';

export const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState(() => {
        const stored = localStorage.getItem('likedItems');
        return stored ? JSON.parse(stored) : [];
    });


    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLike = (item) => {
        setLikedItems((prev) =>
            prev.find((p) => p.id === item.id)
                ? prev.filter((p) => p.id !== item.id)
                : [...prev, item]
        );
    };

    return (
        <LikeContext.Provider value={{ likedItems, toggleLike }}>
            {children}
        </LikeContext.Provider>
    );
};
