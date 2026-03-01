import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Settings,
    Palette,
    FileText,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Home,
} from "lucide-react";

const menuItems = [
    {
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
    },
    {
        label: "Content Settings",
        path: "/admin/content-settings",
        icon: FileText,
    },
    {
        label: "Site Settings",
        path: "/admin/site-settings",
        icon: Settings,
    },
    {
        label: "Color Settings",
        path: "/admin/color-settings",
        icon: Palette,
    },
];

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        if (path === "/admin") return location.pathname === "/admin";
        return location.pathname.startsWith(path);
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-6 py-6 border-b border-white/10">
                <Link to="/admin" className="flex items-center gap-3 group">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all"
                        style={{ backgroundColor: "var(--color-primary)" }}
                    >
                        <span className="font-black text-lg" style={{ color: "var(--color-secondary)" }}>B</span>
                    </div>
                    <div>
                        <h1 className="font-black text-white text-sm tracking-tight">BAITULMAAL</h1>
                        <p className="text-[8px] font-bold tracking-[0.25em] uppercase" style={{ color: "var(--color-primary)" }}>
                            Admin Panel
                        </p>
                    </div>
                </Link>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                <p className="px-3 mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">
                    Menu Utama
                </p>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.path);
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setSidebarOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${active
                                ? "text-white shadow-lg"
                                : "text-white/50 hover:text-white hover:bg-white/5"
                                }`}
                            style={active ? { backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" } : {}}
                        >
                            <Icon size={18} className={active ? "" : "group-hover:scale-110 transition-transform"} />
                            <span>{item.label}</span>
                            {active && <ChevronRight size={14} className="ml-auto" />}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="px-4 py-6 border-t border-white/10 space-y-2">
                <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-white/40 hover:text-white hover:bg-white/5 transition-all"
                >
                    <Home size={18} />
                    <span>Lihat Website</span>
                </Link>
                <Link
                    to="/login"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                    <LogOut size={18} />
                    <span>Keluar</span>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex">
            {/* Desktop Sidebar */}
            <aside
                className="hidden lg:flex flex-col w-[260px] shrink-0 fixed left-0 top-0 bottom-0 z-40"
                style={{ backgroundColor: "var(--color-secondary)" }}
            >
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 bottom-0 w-[280px] z-50 lg:hidden shadow-2xl"
                            style={{ backgroundColor: "var(--color-secondary)" }}
                        >
                            <SidebarContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-[260px] min-h-screen">
                {/* Top Bar */}
                <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-100 px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden p-2 hover:bg-slate-100 rounded-xl transition-colors"
                            style={{ color: "var(--color-secondary)" }}
                        >
                            <Menu size={22} />
                        </button>
                        <div>
                            <h2 className="text-sm font-bold" style={{ color: "var(--color-secondary)" }}>
                                {menuItems.find((m) => isActive(m.path))?.label || "Admin"}
                            </h2>
                            <p className="text-[10px] text-slate-400 font-medium">
                                Baitulmaal Pondok Digital
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }}>
                            A
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
