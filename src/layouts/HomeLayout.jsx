import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/Hero.png";
import {
  Heart,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle2,
  Compass,
  LayoutGrid,
  Mail,
  Instagram,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const HomeLayout = ({ children }) => {
  // Variabel Warna Spesifik
  const colors = {
    emerald: "#064e3b", // Hijau Tua sesuai PDF
    gold: "#d4af37", // Emas Premium
    lightGold: "#fdf6e3",
    softGreen: "#ecf3f0",
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#B2D766]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Box menggunakan warna hijau segar #B2D766 */}
            <div className="w-10 h-10 bg-[#B2D766] rounded-xl flex items-center justify-center shadow-lg shadow-[#B2D766]/20 group-hover:rotate-6 transition-transform">
              <span className="text-[#064e3b] font-black text-xl">B</span>
            </div>

            <div>
              {/* Teks Brand menggunakan Hijau Tua agar tegas */}
              <h1 className="font-black text-[#064e3b] leading-none tracking-tighter text-lg">
                BAITULMAAL
              </h1>
              <p className="text-[10px] font-bold text-[#B2D766] tracking-[0.2em] uppercase">
                Pondok Digital
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 font-bold text-[11px] uppercase tracking-widest text-slate-500">
            <Link
              to="/about"
              className="hover:text-[#B2D766] transition-colors relative group"
            >
              Tentang Kami
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B2D766] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/programs"
              className="hover:text-[#B2D766] transition-colors relative group"
            >
              Program
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B2D766] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/impact"
              className="hover:text-[#B2D766] transition-colors relative group"
            >
              Impact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B2D766] transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-[#B2D766] transition-colors relative group"
            >
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B2D766] transition-all group-hover:w-full"></span>
            </Link>

            {/* Button CTA menggunakan warna hijau segar dengan teks hijau tua agar kontras tinggi */}
            <button className="bg-[#B2D766] text-[#064e3b] px-8 py-3 rounded-2xl hover:bg-[#064e3b] hover:text-white transition-all shadow-lg shadow-[#B2D766]/20 font-black">
              Mulai Berbagi
            </button>
          </div>
        </div>
      </nav>

      {children}

      {/* --- FOOTER --- */}
      <footer className="bg-[#B2D766] text-[#064e3b] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-[#064e3b]/10 pb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Kotak logo dibuat gelap agar kontras dengan background hijau terang */}
              <div className="w-10 h-10 bg-[#064e3b] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-extrabold text-lg tracking-tighter uppercase text-[#064e3b]">
                Baitulmaal Pondok Digital
              </span>
            </div>
            {/* Paragraf menggunakan warna hijau yang sangat gelap agar tajam terbaca */}
            <p className="text-[#064e3b]/80 max-w-sm text-sm font-medium leading-relaxed">
              Membangun peradaban Islam melalui integrasi teknologi dan
              filantropi yang profesional, transparan, dan berdampak luas.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#064e3b] mb-6 uppercase text-xs tracking-[0.2em]">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li>
                <a
                  href="#"
                  className="text-[#064e3b]/70 hover:text-[#064e3b] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[2px] bg-[#064e3b] transition-all"></span>
                  Program Utama
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#064e3b]/70 hover:text-[#064e3b] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[2px] bg-[#064e3b] transition-all"></span>
                  Rekam Jejak
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#064e3b]/70 hover:text-[#064e3b] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[2px] bg-[#064e3b] transition-all"></span>
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#064e3b] mb-6 uppercase text-xs tracking-[0.2em]">
              Sosial Media
            </h4>
            <div className="flex gap-4">
              {/* Ikon menggunakan border gelap dan hover background gelap */}
              <div className="w-10 h-10 rounded-full border border-[#064e3b]/20 flex items-center justify-center text-[#064e3b] hover:bg-[#064e3b] hover:text-white transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#064e3b]/20 flex items-center justify-center text-[#064e3b] hover:bg-[#064e3b] hover:text-white transition-all cursor-pointer">
                <Mail size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 text-center">
          {/* Copyright menggunakan opacity rendah dari warna gelap */}
          <p className="text-[10px] text-[#064e3b]/50 font-bold uppercase tracking-[0.4em]">
            © 2026 Baitulmaal Pondok Digital. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Sub-komponen Star untuk dekorasi
const Star = ({ size, fill }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default HomeLayout;
