import React, { createContext, useContext, useState, useEffect } from "react";
import { defaultContent, getStoredContent, saveContent } from "../config/content";

const ContentContext = createContext();

/**
 * ContentProvider
 * Menyediakan konten teks ke seluruh aplikasi via React Context.
 * Admin panel bisa memanggil updateContent() untuk mengubah teks.
 */
export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(() => getStoredContent());

    const updateContent = (newContent) => {
        const merged = { ...content, ...newContent };
        setContent(merged);
        saveContent(merged);
    };

    const resetContent = () => {
        setContent({ ...defaultContent });
        localStorage.removeItem("bpd-content");
    };

    const get = (key) => content[key] || defaultContent[key] || "";

    return (
        <ContentContext.Provider value={{ content, updateContent, resetContent, get, defaultContent }}>
            {children}
        </ContentContext.Provider>
    );
};

/**
 * Hook: useContent
 * Usage: const { get, updateContent, resetContent } = useContent();
 *        get("HeroSection_Title1") → "Filantropi"
 */
export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }
    return context;
};

export default ContentProvider;
