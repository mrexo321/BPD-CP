import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/Hero.png";

// Variabel Warna Dioptimalkan
const COLORS = {
  brandGreen: "#B2D766", // Hijau Segar
  darkGreen: "#064e3b", // Hijau Tua untuk kontras teks
  gold: "#d4af37", // Emas metalik
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
      {/* --- LAYER 1: BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          className="w-full h-full object-cover object-center opacity-60"
          alt="Masjid Background"
        />
        {/* Gradient disesuaikan agar sisi kiri tetap bersih untuk teks hijau terang */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      {/* --- LAYER 2: DEKORASI LINGKARAN --- */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[600px] h-[600px] border-[1px] border-[#B2D766]/20 rounded-full flex items-center justify-center"
        >
          <div className="w-[450px] h-[450px] border-[1px] border-[#B2D766]/10 rounded-full" />
        </motion.div>
      </div>

      {/* --- LAYER 3: KONTEN UTAMA --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Badge atas menggunakan warna hijau tua agar "menjangkar" pandangan */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-[#B2D766]"></span>
            <span className="text-[#064e3b] font-bold tracking-[0.4em] text-[11px] uppercase">
              Foundation Profile
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn}
            className="text-6xl md:text-[85px] font-black text-[#B2D766] leading-[0.9] mb-8 tracking-tighter"
          >
            Filantropi <br />
            <span className="text-[#064e3b] italic font-serif font-light">
              Masa Depan.
            </span>
          </motion.h1>

          {/* Deskripsi menggunakan border hijau tua agar kontras */}
          <motion.p
            variants={fadeIn}
            className="text-lg text-[#064e3b]/70 mb-10 leading-relaxed max-w-md border-l-[3px] border-[#064e3b] pl-6 font-medium"
          >
            Menggabungkan nilai Qur'ani dengan teknologi digital untuk
            menciptakan dampak sosial yang berkelanjutan bagi umat.
          </motion.p>

          <motion.div variants={fadeIn}>
            {/* Tombol dengan warna brand utama, teks menggunakan warna hijau tua agar terbaca */}
            <button className="relative overflow-hidden px-10 py-5 bg-[#B2D766] text-[#064e3b] font-black rounded-2xl flex items-center gap-3 hover:shadow-[0_20px_40px_rgba(178,215,102,0.4)] transition-all group">
              <span className="relative z-10 uppercase tracking-widest text-sm">
                Donasi Sekarang
              </span>
              <ArrowRight
                className="relative z-10 group-hover:translate-x-2 transition-transform"
                size={20}
              />
              <div className="absolute inset-0 bg-[#064e3b] opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </motion.div>
        </motion.div>

        {/* SISI KANAN: FLOATING IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:flex justify-end"
        >
          <div className="relative group">
            <div className="bg-white p-4 rounded-[45px] shadow-[0_50px_100px_-20px_rgba(178,215,102,0.2)] border border-[#B2D766]/10 overflow-hidden">
              <img
                src="AOI_d__dJQriBSxGlAaYAyrLx5kA86yJvsOAI1kaWW8HooC1KCKWUQr8K_clibzpasLrX9Ttaz-KBo91r7XddwVTnNKt6eZKgcri_rakXS_uAAnZjqiB5YMd6a5AihxhW3ons_7o3eWBfv3qV36F9V0BQYjE4CGOtEfCJBxdvIrFTqcr4t2dyQs1024-rj.jpg"
                className="rounded-[35px] w-[380px] h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Activities"
              />
            </div>

            {/* Floating Stats Badge dengan warna Hijau Tua agar Pop Out */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-8 -left-12 bg-[#064e3b] p-8 rounded-[35px] shadow-2xl flex flex-col gap-1"
            >
              <span className="text-4xl font-black text-[#B2D766]">25K+</span>
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                Relawan Aktif
              </span>
              <div className="absolute top-6 right-6 w-2 h-2 bg-[#B2D766] rounded-full animate-ping" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#064e3b]/40">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#B2D766] to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
