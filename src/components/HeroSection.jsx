import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/Hero.png";

// Variabel Warna Persis Gambar & PDF
const COLORS = {
  emerald: "#064e3b", // Hijau botol gelap
  gold: "#d4af37", // Emas metalik
  slate: "#475569", // Abu-abu teks
};

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-white">
      {/* --- LAYER 1: BACKGROUND IMAGE (PERSIS GAMBAR) --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          className="w-full h-full object-cover object-center"
          alt="Masjid Background"
        />
        {/* Overlay Putih untuk membuat teks di kiri terbaca jelas (UX) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
      </div>

      {/* --- LAYER 2: DEKORASI LINGKARAN EMAS (PERSIS GAMBAR) --- */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[600px] h-[600px] border-[1px] border-[#d4af37]/30 rounded-full flex items-center justify-center"
        >
          <div className="w-[450px] h-[450px] border-[1px] border-[#d4af37]/20 rounded-full" />
        </motion.div>
      </div>

      {/* --- LAYER 3: KONTEN UTAMA --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* SISI KIRI: TEKS & CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#d4af37]"></span>
            <span className="text-[#d4af37] font-bold tracking-[0.4em] text-[11px] uppercase">
              Foundation Profile
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-[85px] font-black text-[#064e3b] leading-[0.9] mb-8 tracking-tighter"
          >
            Filantropi <br />
            <span className="text-[#d4af37] italic font-serif font-light">
              Masa Depan.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md border-l-[3px] border-[#064e3b] pl-6"
          >
            Menggabungkan nilai Qur'ani dengan teknologi digital untuk
            menciptakan dampak sosial yang berkelanjutan bagi umat.
          </motion.p>

          <motion.div variants={fadeIn}>
            <button className="relative overflow-hidden px-10 py-5 bg-[#064e3b] text-white font-bold rounded-2xl flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(6,78,59,0.3)] transition-all group">
              <span className="relative z-10 uppercase tracking-widest text-sm">
                Donasi Sekarang
              </span>
              <ArrowRight
                className="relative z-10 group-hover:translate-x-2 transition-transform"
                size={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-800 to-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </motion.div>

        {/* SISI KANAN: FLOATING IMAGE CARD (PERSIS GAMBAR KEDUA) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:flex justify-end"
        >
          <div className="relative group">
            {/* Bingkai Putih Tebal */}
            <div className="bg-white p-4 rounded-[45px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden">
              <img
                src="AOI_d__dJQriBSxGlAaYAyrLx5kA86yJvsOAI1kaWW8HooC1KCKWUQr8K_clibzpasLrX9Ttaz-KBo91r7XddwVTnNKt6eZKgcri_rakXS_uAAnZjqiB5YMd6a5AihxhW3ons_7o3eWBfv3qV36F9V0BQYjE4CGOtEfCJBxdvIrFTqcr4t2dyQs1024-rj.jpg"
                className="rounded-[35px] w-[380px] h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Activities"
              />
            </div>

            {/* Floating Stats Badge (UX: Memberikan Bukti Nyata Langsung) */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-8 -left-12 bg-white p-7 rounded-[30px] shadow-2xl border border-emerald-50 flex flex-col gap-1"
            >
              <span className="text-4xl font-black text-[#064e3b]">25K+</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Relawan Aktif
              </span>
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#d4af37] rounded-full animate-ping" />
            </motion.div>

            {/* Ornament Emas Kecil */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-tr from-[#d4af37] to-amber-200 rounded-3xl -z-10 rotate-12 blur-sm opacity-20" />
          </div>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#064e3b]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#064e3b] to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
