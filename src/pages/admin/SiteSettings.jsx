import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RotateCcw, Globe, Type, FileText, Share2 } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";

const defaultSiteSettings = {
    siteName: "Baitulmaal Pondok Digital",
    tagline: "Surgakan Indonesia dengan Al-Qur'an",
    description: "Membangun peradaban Islam melalui integrasi teknologi dan filantropi yang profesional, transparan, dan berdampak luas.",
    footerText: "© 2026 Baitulmaal Pondok Digital. All Rights Reserved.",
    contactEmail: "info@bpd.id",
    contactPhone: "08115903330",
    socialInstagram: "@bpd.id",
    socialWebsite: "https://bpd.id",
};

const SiteSettings = () => {
    const [settings, setSettings] = useState(defaultSiteSettings);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem("bpd-site-settings");
            if (stored) setSettings({ ...defaultSiteSettings, ...JSON.parse(stored) });
        } catch { /* ignore */ }
    }, []);

    const handleChange = (key, value) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
        setSaved(false);
    };

    const handleSave = () => {
        localStorage.setItem("bpd-site-settings", JSON.stringify(settings));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleReset = () => {
        setSettings({ ...defaultSiteSettings });
        localStorage.removeItem("bpd-site-settings");
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const Field = ({ label, icon: Icon, name, type = "text", multiline = false }) => (
        <div className="space-y-2">
            <label className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--color-secondary)" }}>
                <Icon size={14} className="text-slate-400" />
                {label}
            </label>
            {multiline ? (
                <textarea
                    value={settings[name]}
                    onChange={(e) => handleChange(name, e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:border-slate-300 transition-colors resize-none"
                    style={{ color: "var(--color-secondary)" }}
                />
            ) : (
                <input
                    type={type}
                    value={settings[name]}
                    onChange={(e) => handleChange(name, e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:border-slate-300 transition-colors"
                    style={{ color: "var(--color-secondary)" }}
                />
            )}
        </div>
    );

    return (
        <AdminLayout>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>
                            Site Settings
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Kelola informasi dasar website</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
                        >
                            <RotateCcw size={14} />
                            Reset
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

                {/* Form Sections */}
                <div className="space-y-6">
                    {/* Informasi Umum */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-slate-100" style={{ color: "var(--color-accent)" }}>
                            Informasi Umum
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Nama Situs" icon={Globe} name="siteName" />
                            <Field label="Tagline" icon={Type} name="tagline" />
                        </div>
                        <Field label="Deskripsi" icon={FileText} name="description" multiline />
                        <Field label="Footer Text" icon={FileText} name="footerText" />
                    </div>

                    {/* Kontak */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-slate-100" style={{ color: "var(--color-accent)" }}>
                            Kontak
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Email" icon={Globe} name="contactEmail" type="email" />
                            <Field label="Telepon / WhatsApp" icon={Globe} name="contactPhone" />
                        </div>
                    </div>

                    {/* Sosial Media */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8 space-y-6">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] pb-3 border-b border-slate-100" style={{ color: "var(--color-accent)" }}>
                            Sosial Media
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Field label="Instagram" icon={Share2} name="socialInstagram" />
                            <Field label="Website" icon={Globe} name="socialWebsite" type="url" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </AdminLayout>
    );
};

export default SiteSettings;
