import React, { useState } from "react";
import { motion } from "framer-motion";
import { Save, RotateCcw, Palette, Eye } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { useTheme } from "../../context/ThemeProvider";

const colorFields = [
    { key: "primary", label: "Primary Color", desc: "Warna utama brand (tombol, aksen, highlight)" },
    { key: "secondary", label: "Secondary Color", desc: "Warna pendukung (header, sidebar, teks utama)" },
    { key: "accent", label: "Accent Color", desc: "Warna aksen (badge, label, dekorasi)" },
    { key: "footerBg", label: "Footer Background", desc: "Warna background footer" },
    { key: "lightAccent", label: "Light Accent", desc: "Warna latar aksen terang" },
    { key: "softBg", label: "Soft Background", desc: "Warna background lembut" },
];

const ColorSettings = () => {
    const { colors, updateColors, resetColors, defaultColors } = useTheme();
    const [localColors, setLocalColors] = useState({ ...colors });
    const [saved, setSaved] = useState(false);

    const handleColorChange = (key, value) => {
        const updated = { ...localColors, [key]: value };
        setLocalColors(updated);
        // Live preview: apply immediately
        updateColors(updated);
        setSaved(false);
    };

    const handleSave = () => {
        updateColors(localColors);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleReset = () => {
        setLocalColors({ ...defaultColors });
        resetColors();
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <AdminLayout>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>
                            Color Settings
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            Ubah warna tema website secara real-time
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
                        >
                            <RotateCcw size={14} />
                            Reset Default
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg"
                            style={{ backgroundColor: "var(--color-secondary)" }}
                        >
                            <Save size={14} />
                            {saved ? "Tersimpan ✓" : "Simpan"}
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* Color Pickers */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <Palette size={16} style={{ color: "var(--color-accent)" }} />
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
                                    Konfigurasi Warna
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {colorFields.map((field) => (
                                    <div
                                        key={field.key}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                                    >
                                        {/* Color Swatch + Picker */}
                                        <div className="relative group shrink-0">
                                            <div
                                                className="w-12 h-12 rounded-xl shadow-inner border-2 border-white cursor-pointer group-hover:scale-110 transition-transform"
                                                style={{ backgroundColor: localColors[field.key] }}
                                            />
                                            <input
                                                type="color"
                                                value={localColors[field.key] || "#000000"}
                                                onChange={(e) => handleColorChange(field.key, e.target.value)}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                        </div>

                                        {/* Label + Description */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold" style={{ color: "var(--color-secondary)" }}>
                                                {field.label}
                                            </p>
                                            <p className="text-[11px] text-slate-400 truncate">{field.desc}</p>
                                        </div>

                                        {/* Hex Input */}
                                        <input
                                            type="text"
                                            value={localColors[field.key] || ""}
                                            onChange={(e) => handleColorChange(field.key, e.target.value)}
                                            className="w-24 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono font-bold text-center focus:outline-none focus:border-slate-400 transition-colors"
                                            style={{ color: "var(--color-secondary)" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Live Preview */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-6">
                                <Eye size={16} style={{ color: "var(--color-accent)" }} />
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
                                    Live Preview
                                </h3>
                            </div>

                            {/* Mini Preview Components */}
                            <div className="space-y-4">
                                {/* Navbar Preview */}
                                <div className="rounded-xl overflow-hidden border border-slate-100">
                                    <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: localColors.secondary }}>
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: localColors.primary }}>
                                                <span className="text-[10px] font-black" style={{ color: localColors.secondary }}>B</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-white">BPD</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="text-[8px] text-white/50 font-bold">Menu</span>
                                            <div className="px-2 py-0.5 rounded text-[8px] font-bold" style={{ backgroundColor: localColors.primary, color: localColors.secondary }}>
                                                CTA
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Button Preview */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Buttons</p>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: localColors.secondary }}>
                                            Secondary
                                        </button>
                                        <button className="px-4 py-2 rounded-lg text-[10px] font-bold" style={{ backgroundColor: localColors.primary, color: localColors.secondary }}>
                                            Primary
                                        </button>
                                        <button className="px-4 py-2 rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: localColors.accent }}>
                                            Accent
                                        </button>
                                    </div>
                                </div>

                                {/* Text Preview */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typography</p>
                                    <h4 className="text-lg font-black" style={{ color: localColors.secondary }}>Heading Text</h4>
                                    <p className="text-sm" style={{ color: localColors.primary }}>Primary accent text</p>
                                    <p className="text-xs font-bold" style={{ color: localColors.accent }}>Accent label</p>
                                </div>

                                {/* Card Preview */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Card</p>
                                    <div className="p-4 rounded-xl border" style={{ borderColor: localColors.primary + "30" }}>
                                        <div className="w-8 h-8 rounded-lg mb-2 flex items-center justify-center" style={{ backgroundColor: localColors.primary + "1A" }}>
                                            <Palette size={14} style={{ color: localColors.primary }} />
                                        </div>
                                        <p className="text-xs font-bold" style={{ color: localColors.secondary }}>Sample Card</p>
                                        <p className="text-[10px] text-slate-400">Preview element</p>
                                    </div>
                                </div>

                                {/* Footer Preview */}
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Footer</p>
                                    <div className="px-4 py-3 rounded-xl" style={{ backgroundColor: localColors.footerBg }}>
                                        <p className="text-[10px] font-bold" style={{ color: localColors.secondary }}>
                                            © 2026 BPD
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AdminLayout>
    );
};

export default ColorSettings;
