import React from "react";
import { motion } from "framer-motion";
import HeroImage from "./assets/Hero.png";
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
import HeroSection from "./components/HeroSection";
import { Link } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";

const App = () => {
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
    <HomeLayout>
      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- EKOSISTEM DAMPAK (3 PILLARS) --- */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[#d4af37] font-bold tracking-[0.2em] text-xs uppercase mb-3">
                Ekosistem Dampak
              </h2>
              <p className="text-4xl font-black text-[#064e3b]">
                Tiga Pilar Pergerakan Kami
              </p>
            </div>
            <p className="text-slate-500 max-w-sm text-sm italic">
              "Kami menggerakkan potensi umat melalui pendekatan teknologi yang
              terukur dan amanah."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Islamic Social Impact",
                desc: "Fokus pada penyaluran bantuan kemanusiaan, pembangunan masjid, dan pemberdayaan ekonomi umat secara transparan.",
                icon: <Heart size={32} className="text-[#d4af37]" />,
              },
              {
                title: "Technology & Digital Academy",
                desc: "Mencetak 3.600 alumni fundraiser profesional dan 500 santri digital setiap tahunnya untuk industri masa depan.",
                icon: <Cpu size={32} className="text-[#d4af37]" />,
              },
              {
                title: "Community Mobilization",
                desc: "Menggerakkan 20.000 relawan digital berbasis masjid di 1.000 titik aksi seluruh Indonesia.",
                icon: <Users size={32} className="text-[#d4af37]" />,
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-emerald-100 transition-all group"
              >
                <div className="mb-8 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#064e3b] transition-colors">
                  <span className="group-hover:text-white transition-colors">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#064e3b] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="py-32 bg-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-[#d4af37] mb-8 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#064e3b] leading-snug mb-10">
              "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang
              berhak menerimanya..."
            </h2>
            <p className="text-sm font-bold tracking-[0.4em] text-[#d4af37] uppercase">
              QS. An-Nisa: 58
            </p>
          </motion.div>
        </div>
        {/* Dekoratif Watermark */}
        <div className="absolute -bottom-20 -right-20 text-[200px] font-black text-slate-50 select-none -z-10">
          AMANAH
        </div>
      </section>
    </HomeLayout>
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

export default App;
