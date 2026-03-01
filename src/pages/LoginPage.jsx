import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, LogIn, ArrowRight } from "lucide-react";
import LoginLayout from "../layouts/LoginLayout";

const LoginPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Placeholder: replace with actual auth logic
        console.log("Login attempt:", { email: form.email, rememberMe });

        setTimeout(() => {
            setIsLoading(false);
            alert("Login berhasil! (placeholder)");
        }, 1500);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 15 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <LoginLayout>
            {/* Header */}
            <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-10"
            >
                <h2 className="text-3xl font-black text-[#064e3b] tracking-tight mb-2" style={{ color: "var(--color-dark-green)" }}>
                    Selamat Datang 👋
                </h2>
                <p className="text-slate-400 text-sm font-medium">
                    Masukkan kredensial Anda untuk mengakses dashboard
                </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <motion.div
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <label
                        htmlFor="email"
                        className="block text-[11px] font-bold text-[#064e3b] uppercase tracking-[0.15em] mb-2"
                        style={{ color: "var(--color-dark-green)" }}
                    >
                        Email atau Username
                    </label>
                    <div className="relative group">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="admin@baitulmaal.id"
                            required
                            className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl text-[#064e3b] font-semibold text-sm placeholder:text-slate-300 focus:outline-none focus:border-[#B2D766] focus:bg-white transition-all duration-300"
                        />
                        <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#B2D766] to-[#d4af37] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                    </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <label
                        htmlFor="password"
                        className="block text-[11px] font-bold text-[#064e3b] uppercase tracking-[0.15em] mb-2"
                        style={{ color: "var(--color-dark-green)" }}
                    >
                        Password
                    </label>
                    <div className="relative group">
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                            className="w-full px-5 py-4 pr-14 bg-slate-50 border-2 border-slate-100 rounded-2xl text-[#064e3b] font-semibold text-sm placeholder:text-slate-300 focus:outline-none focus:border-[#B2D766] focus:bg-white transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#064e3b] transition-colors"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                        <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#B2D766] to-[#d4af37] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 rounded-full" />
                    </div>
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="flex items-center justify-between pt-1"
                >
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="sr-only peer"
                            />
                            <div
                                className="w-5 h-5 rounded-lg border-2 border-slate-200 transition-all duration-300 flex items-center justify-center"
                                style={rememberMe ? { borderColor: "var(--color-brand-green)", backgroundColor: "var(--color-brand-green)" } : {}}
                            >
                                {rememberMe && (
                                    <svg className="w-3 h-3" style={{ color: "var(--color-dark-green)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-[#064e3b] transition-colors">
                            Ingat saya
                        </span>
                    </label>

                    <a
                        href="#"
                        className="text-xs font-bold transition-colors"
                        style={{ color: "var(--color-gold)" }}
                    >
                        Lupa Password?
                    </a>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="pt-3"
                >
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="group relative w-full overflow-hidden px-8 py-4 bg-[#064e3b] rounded-2xl transition-all duration-300 hover:shadow-[0_15px_30px_-5px_rgba(178,215,102,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ backgroundColor: "var(--color-dark-green)" }}
                    >
                        <div
                            className="absolute inset-0 w-0 transition-all duration-500 group-hover:w-full"
                            style={{ backgroundColor: "var(--color-brand-green)" }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <LogIn size={18} className="text-white group-hover:text-[#064e3b] transition-colors duration-300" />
                            )}
                            <span className="font-black text-sm uppercase tracking-widest text-white group-hover:text-[#064e3b] transition-colors duration-300">
                                {isLoading ? "Memproses..." : "Masuk"}
                            </span>
                            {!isLoading && (
                                <ArrowRight
                                    size={16}
                                    className="text-white group-hover:text-[#064e3b] group-hover:translate-x-1 transition-all duration-300"
                                />
                            )}
                        </span>
                    </button>
                </motion.div>
            </form>

            {/* Divider */}
            <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="flex items-center gap-4 my-8"
            >
                <div className="flex-1 h-[1px] bg-slate-100" />
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                    atau
                </span>
                <div className="flex-1 h-[1px] bg-slate-100" />
            </motion.div>

            {/* Back to Home */}
            <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-center"
            >
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#064e3b] transition-colors group"
                >
                    <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Halaman Utama
                </a>
            </motion.div>
        </LoginLayout>
    );
};

export default LoginPage;
