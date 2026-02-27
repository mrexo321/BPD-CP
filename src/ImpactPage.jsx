import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MapPin,
  Globe,
  CheckCircle2,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";
import HomeLayout from "./layouts/HomeLayout";

const ImpactPage = () => {
  const currentStats = [
    {
      label: "Kedermanwan Terhimpun",
      value: "174 M",
      icon: <TrendingUp className="text-[#B2D766]" />,
    },
    {
      label: "Transaksi Kebaikan",
      value: "514.818",
      icon: <CheckCircle2 className="text-[#B2D766]" />,
    },
    {
      label: "Dermawan Terlibat",
      value: "115.672",
      icon: <HeartHandshake className="text-[#B2D766]" />,
    },
    {
      label: "Penerima Manfaat",
      value: "1 Juta+",
      icon: <Users className="text-[#B2D766]" />,
    },
  ];

  const kawasanLogos = [
    { name: "Masjid Ismuhu Yahya", location: "Pontianak, Kalimantan Barat" },
    {
      name: "Masjid Ka'bah Indonesia",
      location: "Kubu Raya, Kalimantan Barat",
    },
    { name: "Masjid Rahmatan Lil 'Alamin", location: "Wonosari, DIY" },
    { name: "Masjid Sejuta Pemuda", location: "Sukabumi, Jawa Barat" },
    { name: "Masjid Baitul Huda", location: "Bandung, Jawa Barat" },
    { name: "Masjid Jalan Cahaya", location: "Lombok, NTB" },
    { name: "Masjid ASA", location: "Malang, Jawa Timur" },
    { name: "Masjid Alima", location: "Solo, Jawa Tengah" },
  ];

  return (
    <HomeLayout>
      <div className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- HERO IMPACT --- */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#B2D766] text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
            >
              BPD Dalam Angka
            </motion.h2>
            <div className="w-24 h-2 bg-[#d4af37] mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-500 font-medium leading-relaxed italic">
              "Setiap data merefleksikan bagaimana kolaborasi relawan,
              masyarakat, dan teknologi membentuk ekosistem sosial yang
              produktif dan berkelanjutan."
            </p>
          </div>

          {/* --- REAL-TIME DATA CARDS (BPD Dalam Angka) --- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {currentStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-[#B2D766]/10 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#064e3b] transition-colors">
                  {stat.icon}
                </div>
                <p className="text-4xl font-black text-[#064e3b] mb-1 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- JANGKAUAN GLOBAL & NASIONAL --- */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#064e3b] p-10 rounded-[50px] text-white flex items-center gap-8 group">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                <MapPin size={40} className="text-[#B2D766]" />
              </div>
              <div>
                <p className="text-5xl font-black text-[#B2D766]">20</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">
                  Provinsi di Indonesia
                </p>
              </div>
            </div>
            <div className="bg-[#d4af37] p-10 rounded-[50px] text-white flex items-center gap-8 group">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                <Globe size={40} />
              </div>
              <div>
                <p className="text-5xl font-black">7</p>
                <p className="text-sm font-bold uppercase tracking-widest opacity-70">
                  Negara Terjangkau
                </p>
              </div>
            </div>
          </div>

          {/* --- KAWASAN QUR'ANI TERBANGUN --- */}
          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-3xl font-black text-[#064e3b] tracking-tighter">
                8 Kawasan Qur'ani Terbangun
              </h3>
              <div className="h-[2px] flex-grow bg-slate-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kawasanLogos.map((kawasan, i) => (
                <div
                  key={i}
                  className="p-6 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#B2D766]/10 rounded-xl flex items-center justify-center mb-4 text-[#B2D766]">
                      <ArrowUpRight size={20} />
                    </div>
                    <p className="font-black text-[#064e3b] mb-1 group-hover:text-[#B2D766] transition-colors">
                      {kawasan.name}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {kawasan.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- PROYEKSI MASA DEPAN (Target Section) --- */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B2D766]/5 to-transparent rounded-[100px]" />
            <div className="relative z-10 py-16">
              <div className="text-center mb-16">
                <span className="px-6 py-2 bg-[#064e3b] text-[#B2D766] rounded-full text-[10px] font-black uppercase tracking-widest">
                  Target & Proyeksi
                </span>
                <h3 className="text-4xl font-black text-[#064e3b] mt-6 tracking-tighter">
                  Membangun Masa Depan Umat
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    value: "23 JT",
                    label: "Penghafal Al-Qur'an",
                    desc: "Target pencetakan Huffadz melalui jejaring nasional.",
                  },
                  {
                    value: "1.000",
                    label: "Titik Aksi Masjid",
                    desc: "Pusat layanan umat dan distribusi kebaikan di seluruh RI.",
                  },
                  {
                    value: "20.000",
                    label: "Relawan Digital",
                    desc: "Mesin penggerak dakwah digital strategis di ruang siber.",
                  },
                ].map((target, i) => (
                  <div
                    key={i}
                    className="bg-white p-12 rounded-[45px] shadow-sm text-center border-t-8 border-[#B2D766] hover:shadow-2xl transition-all"
                  >
                    <p className="text-5xl font-black text-[#064e3b] mb-2">
                      {target.value}
                    </p>
                    <p className="font-bold text-[#d4af37] text-xs uppercase tracking-[0.2em] mb-4">
                      {target.label}
                    </p>
                    <p className="text-sm text-slate-500 italic leading-relaxed">
                      {target.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Grid Mini Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { val: "114", lab: "Kawasan Qur'ani" },
                  { val: "6.236", lab: "Rumah Qur'ani" },
                  { val: "10.000", lab: "Konten Edukasi/Thn" },
                  { val: "5.000", lab: "Relawan Sosial" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white text-center shadow-sm"
                  >
                    <p className="text-2xl font-black text-[#064e3b]">
                      {item.val}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {item.lab}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ImpactPage;
