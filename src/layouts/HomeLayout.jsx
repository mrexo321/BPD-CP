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
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#064e3b] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="font-black text-[#064e3b] leading-none tracking-tighter text-lg">
                BAITULMAAL
              </h1>
              <p className="text-[10px] font-bold text-[#d4af37] tracking-[0.2em] uppercase">
                Pondok Digital
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-bold text-[11px] uppercase tracking-widest text-slate-500">
            <Link
              to="/about"
              className="hover:text-[#064e3b] transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              to="/programs"
              className="hover:text-[#064e3b] transition-colors"
            >
              Program
            </Link>
            <Link
              to="/impact"
              className="hover:text-[#064e3b] transition-colors"
            >
              Impact
            </Link>
            <button className="bg-[#d4af37] text-white px-6 py-3 rounded-full hover:bg-[#b8962d] transition-all shadow-md">
              Mulai Berbagi
            </button>
          </div>
        </div>
      </nav>

      {children}

      {/* --- FOOTER --- */}
      <footer className="bg-[#064e3b] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#064e3b] font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-lg tracking-tighter uppercase">
                Baitulmaal Pondok Digital
              </span>
            </div>
            <p className="text-emerald-100/60 max-w-sm text-sm leading-relaxed">
              Membangun peradaban Islam melalui integrasi teknologi dan
              filantropi yang profesional, transparan, dan berdampak luas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#d4af37] mb-6 uppercase text-xs tracking-widest">
              Navigasi
            </h4>
            <ul className="space-y-4 text-sm text-emerald-100/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Program Utama
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rekam Jejak
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#d4af37] mb-6 uppercase text-xs tracking-widest">
              Sosial Media
            </h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] transition-all cursor-pointer">
                <Mail size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-10 text-center">
          <p className="text-[10px] text-emerald-100/30 uppercase tracking-[0.3em]">
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
