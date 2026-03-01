import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultColors, applyTheme, getStoredColors, saveColors } from "../config/colors";

const ThemeContext = createContext();

/**
 * ThemeProvider
 * Menyediakan warna ke seluruh aplikasi via React Context.
 * - Inisialisasi dari localStorage (jika ada) atau default
 * - Menyediakan updateColors() untuk admin panel
 * - Otomatis apply CSS custom properties saat warna berubah
 */
export const ThemeProvider = ({ children }) => {
    const [colors, setColors] = useState(() => getStoredColors());

    // Apply theme saat pertama kali mount
    useEffect(() => {
        applyTheme(colors);
    }, [colors]);

    const updateColors = (newColors) => {
        const merged = { ...colors, ...newColors };
        setColors(merged);
        saveColors(merged);
        applyTheme(merged);
    };

    const resetColors = () => {
        setColors({ ...defaultColors });
        saveColors(defaultColors);
        applyTheme(defaultColors);
    };

    return (
        <ThemeContext.Provider value={{ colors, updateColors, resetColors, defaultColors }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * Hook untuk mengakses colors dan fungsi update
 * Usage: const { colors, updateColors, resetColors } = useTheme();
 */
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export default ThemeProvider;
