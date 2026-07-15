import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextFunction = ({children}) => {

    const [myTheme,setMyTheme] =useState( {
        isDarkTheme: true,
        light: {
            syntax: "#555", ui: "#ddd", bg: "#eee"
        },
        dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
    })

    return (
        <>
            <ThemeContext.Provider value={myTheme} >
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeContextFunction;