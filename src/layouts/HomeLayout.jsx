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
import Navbar from "../components/Navbar";

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
      <Navbar />

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
