import React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  MapPin,
  Megaphone,
  Globe2,
  Zap,
  HeartHandshake,
  LayoutDashboard,
  MessageSquare,
  Building2,
} from "lucide-react";
import HomeLayout from "../layouts/HomeLayout";

const CommunityMobilization = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <HomeLayout>
      <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- HERO SECTION PILLAR --- */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-[#B2D766]/10 text-[#064e3b] px-4 py-2 rounded-full mb-6"
            >
              <Zap size={16} className="fill-[#B2D766] text-[#B2D766]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Pilar 03: Movement
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black text-[#064e3b] mb-6 tracking-tighter">
              Community <br />
              <span className="text-[#B2D766]">Mobilization</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Menggerakkan jaringan relawan, komunitas, dan masjid untuk
              memperluas jangkauan manfaat melalui kolaborasi aktif, aktivasi
              relawan, dan amplifikasi pesan kebaikan.
            </p>
          </div>

          {/* --- MAIN GOAL BOX --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#064e3b] rounded-[50px] p-10 md:p-16 mb-24 relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-[#B2D766] font-black text-3xl mb-6 uppercase tracking-tight">
                  Tujuan Pergerakan
                </h3>
                <p className="text-white text-xl font-medium leading-snug italic">
                  "Menggerakkan relawan Qur'ani & kemanusiaan berbasis teknologi
                  terbesar di Indonesia, berbasis masjid dan digital."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10 text-white">
                  <Building2 className="mb-3 text-[#B2D766]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    Fokus
                  </p>
                  <p className="font-black text-lg">Berbasis Masjid</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[30px] border border-white/10 text-white">
                  <LayoutDashboard className="mb-3 text-[#B2D766]" />
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                    Sistem
                  </p>
                  <p className="font-black text-lg">Digital Tracking</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B2D766]/10 rounded-full -mr-20 -mt-20 blur-3xl transition-all duration-700" />
          </motion.div>

          {/* --- SUB-UNIT: RELASI --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                  <h4 className="text-[#064e3b] text-4xl font-black mb-4 tracking-tighter italic">
                    Relasi
                  </h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                    Relawan SIDAQ
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Sub-unit strategis sebagai{" "}
                    <strong>community relationship builder</strong> yang
                    menghubungkan lembaga dengan relawan, komunitas, masjid, dan
                    jaringan influencer dakwah.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h5 className="font-black text-[#064e3b] uppercase text-sm tracking-widest flex items-center gap-2">
                    <HeartHandshake size={18} className="text-[#B2D766]" />{" "}
                    Peran Strategis
                  </h5>
                  <ul className="space-y-4">
                    {[
                      "Rekrutmen dan pembinaan relawan nasional",
                      "Aktivasi relawan sebagai Content Generator (VGC)",
                      "Front-liner edukasi publik & aktivasi program",
                      "Penghubung tokoh, masjid, dan mitra strategis",
                    ].map((peran, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-slate-500 font-medium"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B2D766] mt-1.5 shrink-0" />
                        {peran}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#B2D766]/5 p-8 rounded-[40px] border border-[#B2D766]/20">
                  <h5 className="font-black text-[#064e3b] uppercase text-sm tracking-widest mb-6">
                    Relasi dalam Angka
                  </h5>
                  <div className="space-y-4">
                    {[
                      { val: "120+", label: "Komunitas & Masjid Mitra" },
                      { val: "650+", label: "Relawan Terdaftar" },
                      { val: "18.000+", label: "Jangkauan Organik" },
                      { val: "20+", label: "Provinsi Sebaran Relawan" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center border-b border-[#064e3b]/10 pb-2"
                      >
                        <span className="text-[10px] font-bold text-slate-500 uppercase">
                          {item.label}
                        </span>
                        <span className="font-black text-[#064e3b]">
                          {item.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- PROGRAM RELAWAN --- */}
          <div className="grid md:grid-cols-2 gap-12 mb-28">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[50px] border border-slate-100 relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#064e3b] rounded-2xl flex items-center justify-center text-[#B2D766] shadow-xl">
                  <MapPin />
                </div>
                <h4 className="text-2xl font-black text-[#064e3b]">
                  Relasi (Field)
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Ujung tombak pelayanan umat di lapangan yang mengelola
                distribusi program sosial dan edukasi berbasis masjid di seluruh
                Indonesia.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[50px] border border-slate-100 relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#B2D766] rounded-2xl flex items-center justify-center text-[#064e3b] shadow-xl">
                  <Megaphone />
                </div>
                <h4 className="text-2xl font-black text-[#064e3b]">
                  Relawan Digital
                </h4>
              </div>
              <p className="text-slate-500 leading-relaxed mb-6">
                Gerakan dakwah digital yang mengamplifikasi pesan kebaikan
                melalui media sosial, mengelola isu kemanusiaan, dan membangun
                social awareness.
              </p>
            </motion.div>
          </div>

          {/* --- IMPACT PROJECTION --- */}
          <div className="bg-[#B2D766] rounded-[60px] p-12 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  label: "Relawan Sosial",
                  count: "5.000",
                  suffix: "Aktif Lapangan",
                },
                {
                  label: "Relawan Digital",
                  count: "20.000",
                  suffix: "Strategis Medsos",
                },
                {
                  label: "VGC Konten",
                  count: "10.000+",
                  suffix: "Edukasi / Tahun",
                },
                {
                  label: "Titik Aksi",
                  count: "1.000",
                  suffix: "Masjid Seluruh RI",
                },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <p className="text-[10px] font-black text-[#064e3b] uppercase tracking-[0.2em] mb-2 opacity-70">
                    {stat.label}
                  </p>
                  <h5 className="text-5xl font-black text-[#064e3b] mb-1 tracking-tighter">
                    {stat.count}
                  </h5>
                  <p className="text-xs text-[#064e3b]/60 font-bold uppercase tracking-tighter">
                    {stat.suffix}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mb-40 -mr-40" />
          </div>

          {/* --- CLOSING STATEMENT --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-28 bg-[#064e3b] p-12 rounded-[50px] text-center relative overflow-hidden"
          >
            <MessageSquare
              className="text-[#B2D766]/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[5]"
              size={100}
            />
            <div className="relative z-10">
              <p className="text-[#B2D766] font-bold italic text-2xl leading-relaxed max-w-3xl mx-auto tracking-tight">
                "Relawan menjadi mesin penggerak dampak Baitul Maal Movement di
                lapangan & dunia digital, memastikan setiap amanah sampai ke
                titik yang membutuhkan secara terukur dan transparan."
              </p>
              <div className="mt-8 w-20 h-1 bg-[#B2D766] mx-auto rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CommunityMobilization;
