import React from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Rocket,
  TrendingUp,
  Globe,
  Code2,
  Cpu,
  Settings,
  ShieldCheck,
  Zap,
  BookOpen,
  CheckCircle2,
  Award,
} from "lucide-react";
import HomeLayout from "../layouts/HomeLayout";

const DigitalAcademyPillar = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardHover = {
    rest: { scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <HomeLayout>
      <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- HEADER SECTION --- */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <h2 className="text-[#B2D766] font-bold tracking-[0.4em] text-xs uppercase mb-3">
                Pilar 02
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-[#064e3b] mb-6 tracking-tighter leading-[0.9]">
                Technology & <br />
                <span className="text-[#B2D766]">Digital Academy</span>
              </h1>
              <p className="text-[#064e3b] font-bold text-xl mb-6 italic">
                “Empowering People, Enabling Impact.”
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 border-l-4 border-[#B2D766] pl-6">
                Unit pengembangan digital **BaitulMaal Pondok Digital** yang
                bertugas membangun ekosistem teknologi untuk memperkuat edukasi,
                pemberdayaan, dan kinerja fundraising modern melalui integrasi
                platform dan penguatan talenta digital umat.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#064e3b] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-lg shadow-[#064e3b]/20">
                  <ShieldCheck size={16} className="text-[#B2D766]" />{" "}
                  Transformasi Digital
                </div>
                <div className="flex items-center gap-2 bg-slate-100 text-[#064e3b] px-5 py-2.5 rounded-full font-bold text-xs">
                  <Zap size={16} className="text-[#d4af37]" /> Tech-Driven
                  Dakwah
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#B2D766]/20 rounded-full blur-[100px]" />
              <div className="relative bg-white p-2 border border-slate-100 rounded-[50px] shadow-2xl">
                <div className="bg-[#064e3b] p-10 md:p-14 rounded-[45px] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(#fff 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <Cpu
                    className="text-[#B2D766] mb-6 relative z-10"
                    size={48}
                  />
                  <h3 className="text-white font-black text-2xl mb-4 relative z-10 uppercase tracking-tight">
                    Tujuan Strategis
                  </h3>
                  <p className="text-white/80 text-lg font-light italic leading-relaxed relative z-10">
                    "Membangun ekosistem digital terintegrasi untuk edukasi,
                    pemberdayaan, fundraising, dan mencetak talenta digital
                    umat."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- FOKUS JALUR UTAMA --- */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            <div className="bg-slate-50 p-10 rounded-[45px] border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#B2D766] rounded-2xl flex items-center justify-center font-black text-[#064e3b]">
                  1
                </div>
                <h4 className="text-[#064e3b] text-xl font-black uppercase">
                  Kapasitas SDM
                </h4>
              </div>
              <p className="text-slate-600 italic">
                Pelatihan digital intensif mulai dari skill dasar hingga level
                profesional yang siap bersaing di era digital.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[45px] border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#064e3b] rounded-2xl flex items-center justify-center font-black text-white">
                  2
                </div>
                <h4 className="text-[#064e3b] text-xl font-black uppercase">
                  Sistem Teknologi
                </h4>
              </div>
              <p className="text-slate-600 italic">
                Pengembangan sistem fundraising, platform edukasi, dan aplikasi
                pendukung operasional lembaga yang andal.
              </p>
            </div>
          </div>

          {/* --- PROGRAM DETAIL: DFA --- */}
          <div className="grid lg:grid-cols-12 gap-12 mb-24 items-start">
            <div className="lg:col-span-7">
              <motion.div
                whileHover="hover"
                variants={cardHover}
                className="bg-[#f8fafc] p-12 rounded-[50px] border border-slate-200 relative overflow-hidden"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8">
                  <Rocket className="text-[#064e3b]" size={32} />
                </div>
                <h3 className="text-3xl font-black text-[#064e3b] mb-4 tracking-tighter">
                  DFA — Digital Fundraising Academy
                </h3>
                <p className="text-slate-500 text-lg mb-8">
                  Program pengembangan kompetensi fundraiser modern dengan
                  penguasaan strategi campaign, data, dan automasi sistem.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-black text-[#064e3b] text-sm uppercase mb-4 flex items-center gap-2">
                      <BookOpen size={16} className="text-[#B2D766]" /> Fokus
                      Pembelajaran
                    </h5>
                    <ul className="space-y-2">
                      {[
                        "Islamic Fundraising",
                        "Storytelling Strategy",
                        "CRM & Donor Management",
                        "Digital Marketing for NGO",
                      ].map((i) => (
                        <li
                          key={i}
                          className="text-xs font-bold text-slate-500 flex items-center gap-2 italic"
                        >
                          <CheckCircle2 size={12} className="text-[#B2D766]" />{" "}
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/50 p-6 rounded-3xl border border-white">
                    <h5 className="font-black text-[#064e3b] text-sm uppercase mb-3">
                      Alumni & Impact
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-black text-[#064e3b]">
                          12.000+
                        </p>
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                          Peserta Zoominar
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-[#B2D766]">
                          300
                        </p>
                        <p className="text-[10px] uppercase font-bold text-slate-400">
                          Lulusan Bootcamp
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* --- PROGRAM DETAIL: PONDOK DIGITAL --- */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover="hover"
                variants={cardHover}
                className="bg-[#064e3b] p-12 rounded-[50px] text-white relative overflow-hidden shadow-2xl"
              >
                <div className="bg-[#B2D766] w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-8">
                  <Laptop className="text-[#064e3b]" size={32} />
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter">
                  Pondok Digital Academy
                </h3>
                <p className="text-white/70 mb-8">
                  Ekosistem pendidikan talenta digital berbasis masjid untuk
                  mencetak Da'i Digital yang ahli teknologi & ekonomi kreatif.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-bold text-[#B2D766] text-xs uppercase mb-4">
                      Output Lulusan
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Digital Fundraiser",
                        "Advertiser",
                        "Content Creator",
                        "Video Creator",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm font-bold italic text-white/60 mb-2">
                      Mitra Pendampingan:
                    </p>
                    <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest leading-relaxed">
                      Hijrah Bersama UAS • Ruang Kehidupan • Healthy Mastery •
                      Teman Sakinah • Belajar Jadi Suami
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- STATS SECTION --- */}
          <div className="bg-[#B2D766] rounded-[60px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 text-center">
              <h3 className="text-[#064e3b] text-4xl font-black mb-16 tracking-tighter uppercase">
                Proyeksi Dampak Tahunan
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  {
                    value: "3.600",
                    label: "Alumni Fundraiser",
                    sub: "Profesional/Tahun",
                  },
                  {
                    value: "500",
                    label: "Santri Digital",
                    sub: "Lulusan/Tahun",
                  },
                  {
                    value: "1.000",
                    label: "Kampanye Aktif",
                    sub: "Platform Digital",
                  },
                  {
                    value: "1.000",
                    label: "Lulusan Kerja",
                    sub: "Sektor Komersial/Sosial",
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <h4 className="text-5xl md:text-6xl font-black text-[#064e3b] mb-3 tracking-tighter">
                      {stat.value}
                    </h4>
                    <p className="text-[#064e3b] font-black text-xs uppercase tracking-widest mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[#064e3b]/60 text-[10px] font-bold uppercase">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          </div>

          {/* --- FOOTER VISION --- */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center max-w-4xl mx-auto"
          >
            <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 relative group">
              <Award
                className="text-[#B2D766] absolute -top-5 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-sm"
                size={40}
              />
              <p className="text-[#064e3b] text-2xl font-black italic tracking-tight leading-relaxed">
                "Mengokohkan posisi BaitulMaal Pondok Digital sebagai pusat
                filantropi Islam modern yang ditopang oleh teknologi dan SDM
                digital berkualitas."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default DigitalAcademyPillar;
