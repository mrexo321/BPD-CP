import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, TrendingUp, Heart, Settings, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";

const AdminDashboard = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
        }),
    };

    const quickStats = [
        { label: "Total Donasi", value: "Rp 174 Juta", icon: TrendingUp, color: "var(--color-primary)" },
        { label: "Dermawan", value: "115.672", icon: Users, color: "var(--color-accent)" },
        { label: "Transaksi", value: "514.818", icon: Heart, color: "var(--color-primary)" },
        { label: "Penerima", value: "1 Juta+", icon: LayoutDashboard, color: "var(--color-accent)" },
    ];

    const quickLinks = [
        { label: "Site Settings", desc: "Kelola nama situs, tagline, dan informasi", path: "/admin/site-settings", icon: Settings },
        { label: "Color Settings", desc: "Ubah warna tema website secara real-time", path: "/admin/color-settings", icon: Palette },
    ];

    return (
        <AdminLayout>
            {/* Welcome Card */}
            <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="rounded-3xl p-8 mb-8 text-white relative overflow-hidden"
                style={{ backgroundColor: "var(--color-secondary)" }}
            >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "var(--color-primary)" }} />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: "var(--color-primary)" }} />
                <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "var(--color-primary)" }}>
                        Selamat Datang
                    </p>
                    <h1 className="text-2xl lg:text-3xl font-black mb-2">
                        Admin Dashboard 👋
                    </h1>
                    <p className="text-white/50 text-sm max-w-lg">
                        Kelola dan pantau semua aspek website Baitulmaal Pondok Digital dari sini.
                    </p>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {quickStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={i}
                            custom={i + 1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: stat.color + "1A" }}>
                                <Icon size={20} style={{ color: stat.color }} />
                            </div>
                            <p className="text-2xl font-black" style={{ color: "var(--color-secondary)" }}>{stat.value}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Quick Links */}
            <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <h3 className="text-sm font-bold mb-4" style={{ color: "var(--color-secondary)" }}>
                    Aksi Cepat
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    {quickLinks.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={i}
                                to={link.path}
                                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-secondary)" }}>
                                    <Icon size={20} style={{ color: "var(--color-primary)" }} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-sm" style={{ color: "var(--color-secondary)" }}>{link.label}</p>
                                    <p className="text-xs text-slate-400">{link.desc}</p>
                                </div>
                                <div className="text-slate-300 group-hover:translate-x-1 transition-transform">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </motion.div>
        </AdminLayout>
    );
};

export default AdminDashboard;
