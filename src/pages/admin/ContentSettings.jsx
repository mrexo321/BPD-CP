import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Save, RotateCcw, FileText, ChevronRight, ArrowRight, Eye } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { useContent } from "../../context/ContentProvider";
import { sectionDefinitions, defaultContent } from "../../config/content";

// Group sections by category
const groupedSections = sectionDefinitions.reduce((acc, sec) => {
    if (!acc[sec.category]) acc[sec.category] = [];
    acc[sec.category].push(sec);
    return acc;
}, {});

// Preview Components per section
const SectionPreview = ({ sectionId, content }) => {
    const c = (key) => content[key] || "";
    const previews = {
        hero: (
            <div className="relative rounded-2xl overflow-hidden p-6" style={{ background: "linear-gradient(135deg, #fff 60%, #f0f0f0)" }}>
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px]" style={{ backgroundColor: "var(--color-primary)" }} />
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: "var(--color-secondary)" }}>{c("HeroSection_BadgeText")}</span>
                </div>
                <h2 className="text-2xl font-black leading-none mb-1" style={{ color: "var(--color-primary)" }}>{c("HeroSection_Title1")}</h2>
                <h2 className="text-2xl font-light italic font-serif mb-3" style={{ color: "var(--color-secondary)" }}>{c("HeroSection_Title2")}</h2>
                <p className="text-[10px] mb-3 border-l-2 pl-2 leading-relaxed" style={{ color: "var(--color-secondary)", opacity: 0.6, borderColor: "var(--color-secondary)" }}>{c("HeroSection_Description")}</p>
                <button className="px-4 py-1.5 rounded-lg text-[10px] font-bold" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}>
                    {c("HeroSection_ButtonText")} →
                </button>
                <div className="mt-3 inline-block rounded-xl p-2 text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
                    <span className="text-sm font-black" style={{ color: "var(--color-primary)" }}>{c("HeroSection_StatValue")}</span>
                    <span className="text-[8px] block font-bold opacity-50">{c("HeroSection_StatLabel")}</span>
                </div>
            </div>
        ),
        visionary: (
            <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-[1px]" style={{ backgroundColor: "var(--color-accent)" }} />
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--color-accent)" }}>{c("HomeVisionary_BadgeText")}</span>
                </div>
                <h3 className="text-lg font-black mb-0.5" style={{ color: "var(--color-secondary)" }}>{c("HomeVisionary_Title1")}</h3>
                <h3 className="text-lg font-black mb-3" style={{ color: "var(--color-primary)" }}>{c("HomeVisionary_Title2")}</h3>
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full text-[8px] flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)", opacity: 0.2 }}>01</span>
                        <div>
                            <p className="text-[10px] font-bold" style={{ color: "var(--color-secondary)" }}>{c("HomeVisionary_Feature1Title")}</p>
                            <p className="text-[8px] text-slate-400 leading-tight">{c("HomeVisionary_Feature1Desc").slice(0, 60)}...</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <span className="w-6 h-6 rounded-full text-[8px] flex items-center justify-center font-bold shrink-0" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)", opacity: 0.2 }}>02</span>
                        <div>
                            <p className="text-[10px] font-bold" style={{ color: "var(--color-secondary)" }}>{c("HomeVisionary_Feature2Title")}</p>
                            <p className="text-[8px] text-slate-400 leading-tight">{c("HomeVisionary_Feature2Desc").slice(0, 60)}...</p>
                        </div>
                    </div>
                </div>
            </div>
        ),
        pillars: (
            <div className="p-5">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--color-accent)" }}>{c("HomePillars_BadgeText")}</span>
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--color-primary)" }}>{c("HomePillars_Title")}</h3>
                <p className="text-[10px] italic border-l-2 pl-2" style={{ color: "var(--color-secondary)", opacity: 0.5, borderColor: "var(--color-primary)" }}>"{c("HomePillars_Quote")}"</p>
            </div>
        ),
        stats: (
            <div className="p-5 text-center rounded-xl" style={{ backgroundColor: "#f8fafc" }}>
                <h3 className="text-lg font-black" style={{ color: "var(--color-secondary)" }}>{c("HomeStats_Title1")} <span style={{ color: "var(--color-primary)" }}>{c("HomeStats_Title2")}</span></h3>
                <p className="text-[10px] text-slate-400 mt-1">{c("HomeStats_Subtitle")}</p>
            </div>
        ),
        partnership: (
            <div className="p-5">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "var(--color-accent)" }}>{c("HomePartnership_BadgeText")}</span>
                <h3 className="text-lg font-black mb-2" style={{ color: "var(--color-secondary)" }}>{c("HomePartnership_Title")}</h3>
                <p className="text-[10px] italic border-l-2 pl-2 mb-3" style={{ color: "var(--color-secondary)", opacity: 0.5, borderColor: "var(--color-primary)" }}>"{c("HomePartnership_Quote")}"</p>
                <button className="px-3 py-1.5 rounded-lg text-[10px] font-bold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>{c("HomePartnership_CTAText")}</button>
            </div>
        ),
        leaders: (
            <div className="p-5 text-center rounded-xl text-white" style={{ backgroundColor: "var(--color-secondary)" }}>
                <h3 className="text-lg font-black">{c("HomeLeaders_Title")}</h3>
                <p className="text-[10px] opacity-50">{c("HomeLeaders_Subtitle")}</p>
            </div>
        ),
        quote: (
            <div className="p-5 text-center rounded-xl" style={{ backgroundColor: "var(--color-primary)" }}>
                <h3 className="text-sm font-serif italic font-medium mb-2" style={{ color: "var(--color-secondary)" }}>"{c("HomeQuote_Text")}"</h3>
                <span className="px-3 py-1 rounded-full text-[9px] font-bold text-white" style={{ backgroundColor: "var(--color-secondary)" }}>{c("HomeQuote_Source")}</span>
            </div>
        ),
    };

    // Generic preview for sections without custom preview
    const genericPreview = (fields) => (
        <div className="p-5 space-y-2">
            {fields.map(f => (
                <div key={f.key}>
                    <span className="text-[8px] text-slate-400 uppercase font-bold">{f.label}</span>
                    <p className="text-[10px] font-semibold" style={{ color: "var(--color-secondary)" }}>{(c(f.key) || "").slice(0, 80)}{(c(f.key) || "").length > 80 ? "..." : ""}</p>
                </div>
            ))}
        </div>
    );

    const section = sectionDefinitions.find(s => s.id === sectionId);
    return previews[sectionId] || genericPreview(section?.fields || []);
};

const ContentSettings = () => {
    const { content, updateContent, resetContent } = useContent();
    const [localContent, setLocalContent] = useState({ ...content });
    const [activeSection, setActiveSection] = useState("hero");
    const [saved, setSaved] = useState(false);

    const currentSection = sectionDefinitions.find(s => s.id === activeSection);

    const handleChange = (key, value) => {
        const updated = { ...localContent, [key]: value };
        setLocalContent(updated);
        setSaved(false);
    };

    const handleSave = () => {
        updateContent(localContent);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const handleReset = () => {
        setLocalContent({ ...defaultContent });
        resetContent();
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <AdminLayout>
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>
                            Content Settings
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">Kelola teks dan konten halaman website</p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleReset} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors">
                            <RotateCcw size={14} /> Reset
                        </button>
                        <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:shadow-lg" style={{ backgroundColor: "var(--color-secondary)" }}>
                            <Save size={14} /> {saved ? "Tersimpan ✓" : "Simpan"}
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                    {/* Sidebar Sections */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden sticky top-24">
                            {Object.entries(groupedSections).map(([category, sections]) => (
                                <div key={category}>
                                    <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-100">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">{category}</span>
                                    </div>
                                    {sections.map(sec => (
                                        <button
                                            key={sec.id}
                                            onClick={() => setActiveSection(sec.id)}
                                            className={`w-full text-left px-4 py-3 text-sm font-medium transition-all flex items-center gap-2 border-b border-slate-50 ${activeSection === sec.id
                                                    ? "font-bold"
                                                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                                                }`}
                                            style={activeSection === sec.id ? { color: "var(--color-secondary)", backgroundColor: "var(--color-primary)" + "15" } : {}}
                                        >
                                            <FileText size={14} className={activeSection === sec.id ? "" : "text-slate-300"} />
                                            <span className="truncate">{sec.label}</span>
                                            {activeSection === sec.id && <ChevronRight size={12} className="ml-auto" />}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Editor + Preview */}
                    <div className="lg:col-span-9 space-y-6">
                        {/* Preview */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Eye size={14} style={{ color: "var(--color-accent)" }} />
                                <h3 className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--color-accent)" }}>
                                    Preview: {currentSection?.label}
                                </h3>
                            </div>
                            <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden min-h-[140px]">
                                <SectionPreview sectionId={activeSection} content={localContent} />
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <FileText size={14} style={{ color: "var(--color-accent)" }} />
                                <h3 className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "var(--color-accent)" }}>
                                    Edit: {currentSection?.label}
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {currentSection?.fields.map(field => (
                                    <div key={field.key} className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: "var(--color-secondary)" }}>
                                            {field.label}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                value={localContent[field.key] || ""}
                                                onChange={(e) => handleChange(field.key, e.target.value)}
                                                rows={3}
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:border-slate-300 transition-colors resize-none"
                                                style={{ color: "var(--color-secondary)" }}
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                value={localContent[field.key] || ""}
                                                onChange={(e) => handleChange(field.key, e.target.value)}
                                                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:border-slate-300 transition-colors"
                                                style={{ color: "var(--color-secondary)" }}
                                            />
                                        )}
                                        {localContent[field.key] !== defaultContent[field.key] && (
                                            <p className="text-[9px] text-amber-500 font-bold">
                                                ⚠ Diubah dari default: "{(defaultContent[field.key] || "").slice(0, 50)}..."
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AdminLayout>
    );
};

export default ContentSettings;
