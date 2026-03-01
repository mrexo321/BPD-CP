/**
 * Centralized Color Configuration
 * ================================
 * Semua warna brand didefinisikan di sini.
 * Admin panel bisa memanggil applyTheme(newColors)
 * untuk mengganti warna secara runtime.
 * 
 * Mapping:
 *   primary   = warna utama situs (default: #B2D766 brand green)
 *   secondary = warna pendukung (default: #064e3b dark green)  
 *   accent    = warna aksen (default: #d4af37 gold)
 */

export const defaultColors = {
    primary: "#B2D766",      // Hijau Segar (brand green)
    secondary: "#064e3b",    // Hijau Tua (dark green)
    accent: "#d4af37",       // Emas Premium (gold)
    lightAccent: "#fdf6e3",  // Emas Terang
    softBg: "#ecf3f0",       // Background lembut
    footerBg: "#B2D766",     // Footer background
};

/**
 * Apply theme colors as CSS custom properties on :root
 * @param {object} colors - Object with color key-value pairs
 */
export function applyTheme(colors = defaultColors) {
    const root = document.documentElement;
    const merged = { ...defaultColors, ...colors };

    root.style.setProperty("--color-primary", merged.primary);
    root.style.setProperty("--color-secondary", merged.secondary);
    root.style.setProperty("--color-accent", merged.accent);
    root.style.setProperty("--color-light-accent", merged.lightAccent);
    root.style.setProperty("--color-soft-bg", merged.softBg);
    root.style.setProperty("--color-footer-bg", merged.footerBg);

    // Backward compatibility aliases
    root.style.setProperty("--color-brand-green", merged.primary);
    root.style.setProperty("--color-dark-green", merged.secondary);
    root.style.setProperty("--color-gold", merged.accent);
}

/**
 * Get current stored colors from localStorage
 */
export function getStoredColors() {
    try {
        const stored = localStorage.getItem("bpd-theme-colors");
        if (stored) {
            return { ...defaultColors, ...JSON.parse(stored) };
        }
    } catch {
        // ignore parse errors
    }
    return { ...defaultColors };
}

/**
 * Save colors to localStorage
 * @param {object} colors
 */
export function saveColors(colors) {
    localStorage.setItem("bpd-theme-colors", JSON.stringify(colors));
}
