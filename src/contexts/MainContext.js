import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    const location = [
        'welcome',
        'about',
        'skills',
        'wins',
        'work',
        'portfolio',
        'blog',
        'contact'
    ];

    const [previous, setPrevious] = useState('');
    const [current, setCurrent] = useState('welcome');

    const nextLocation = () => {
        let index = location.findIndex(route => route === current);
        if (index < location.length - 1) {
            setPrevious(current);
            setCurrent(location[index + 1]);
        }
    };
    const previousLocation = () => {
        let index = location.findIndex(route => route === current);
        if (index > 0) {
            setPrevious(current);
            setCurrent(location[index - 1]);
        }
    };

    return (
        <MainContext.Provider value={{ location, current, previous, nextLocation, previousLocation }}>
            {children}
        </MainContext.Provider>
    );
}
 
export default MainContextProvider;