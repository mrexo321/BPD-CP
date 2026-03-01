import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white font-sans">
            {/* ===== LEFT PANEL: BRANDING ===== */}
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative lg:w-[480px] xl:w-[540px] shrink-0 bg-[#064e3b] overflow-hidden"
                style={{ backgroundColor: "var(--color-dark-green)" }}
            >
                {/* Decorative circles */}
                <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full border border-white/5" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-white/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]" />

                {/* Decorative gradient blobs */}
                <div className="absolute top-20 right-10 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: "color-mix(in srgb, var(--color-brand-green) 10%, transparent)" }} />
                <div className="absolute bottom-32 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: "color-mix(in srgb, var(--color-gold) 10%, transparent)" }} />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between h-full px-10 lg:px-14 py-12 lg:py-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <div
                                className="absolute -inset-1 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"
                                style={{ backgroundColor: "var(--color-brand-green)" }}
                            />
                            <div
                                className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500"
                                style={{ backgroundColor: "var(--color-brand-green)" }}
                            >
                                <span className="font-black text-2xl" style={{ color: "var(--color-dark-green)" }}>B</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-black text-white leading-none tracking-tight text-xl">
                                BAITULMAAL
                            </h1>
                            <p
                                className="text-[9px] font-black tracking-[0.3em] uppercase mt-1"
                                style={{ color: "var(--color-gold)" }}
                            >
                                Pondok Digital
                            </p>
                        </div>
                    </Link>

                    {/* Tagline - center area */}
                    <div className="my-auto py-16 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-10 h-[2px]" style={{ backgroundColor: "var(--color-brand-green)" }} />
                                <span
                                    className="font-bold tracking-[0.3em] text-[10px] uppercase"
                                    style={{ color: "var(--color-brand-green)" }}
                                >
                                    Portal Admin
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-6">
                                Kelola Dampak{" "}
                                <span style={{ color: "var(--color-brand-green)" }}>Digital.</span>
                            </h2>
                            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-medium">
                                Masuk ke dashboard untuk mengelola program, memantau donasi,
                                dan mengukur dampak sosial secara real-time.
                            </p>
                        </motion.div>

                        {/* Stats badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex gap-6 mt-10"
                        >
                            <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-xl font-black" style={{ color: "var(--color-brand-green)" }}>174M</p>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Terhimpun</p>
                            </div>
                            <div className="px-5 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-xl font-black" style={{ color: "var(--color-brand-green)" }}>115K+</p>
                                <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Dermawan</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em]">
                        © 2026 BaitulMaal Pondok Digital
                    </p>
                </div>
            </motion.div>

            {/* ===== RIGHT PANEL: FORM CONTENT ===== */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-0 bg-gradient-to-br from-white via-white to-slate-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-md"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default LoginLayout;
