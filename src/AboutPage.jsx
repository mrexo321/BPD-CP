import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Zap,
  Quote,
  Calendar,
  ChevronRight,
} from "lucide-react";
import HomeLayout from "./layouts/HomeLayout";

const AboutPage = () => {
  const leaders = [
    {
      name: "KH. Adi Pratama Larisindo",
      role: "Inisiator SIDAQ & Pengasuh Masjid Ismuhu Yahya",
      desc: "Inisiator gerakan nasional SIDAQ – Surgakan Indonesia dengan Al-Qur'an, gerakan yang memadukan dakwah, pemberdayaan sosial, dan teknologi.",
      image: "/abi-een.jpg",
      color: "#d4af37",
    },
    {
      name: "Imam Candra",
      role: "Direktur Baitul Maal Pondok Digital (BPD)",
      desc: "Memimpin integrasi teknologi dan strategi digital fundraising. Menginisiasi Ekosistem Edukasi Fundraiser Digital terbesar melalui Digital Fundraising Academy (DFA).",
      image: "/imam-candra.jpg",
      color: "#B2D766",
    },
    {
      name: "Kiki Supardi",
      role: "CEO Masjid Ismuhu Yahya",
      desc: "Tokoh kepemimpinan muda yang memfokuskan aktivitas masjid sebagai pusat layanan sosial melalui program inovatif seperti Pasar Bahagia dan Masjid Makan-Makan.",
      image: "/kiki-supardi.jpg",
      color: "#064e3b",
    },
  ];

  const roadmap = [
    {
      year: "2020",
      title: "Pondok Digital Berdiri",
      points: ["Peletakan batu pertama Masjid Ismuhu Yahya"],
      align: "left",
    },
    {
      year: "2021",
      title: "Lahirnya Narasi SIDAQ",
      points: [
        "Mulai membangun gerakan Sosial Dakwah",
        "Aktivasi Kawasan SIDAQ Pontianak (Masjid Ismuhu Yahya)",
      ],
      align: "right",
    },
    {
      year: "2022",
      title: "Kolaborasi Multi-Stakeholder",
      points: ["Aktivasi berbagai program spiritual berbasis Masjid"],
      align: "left",
    },
    {
      year: "2023",
      title: "Ekspansi Kawasan SIDAQ",
      points: ["Aktivasi kawasan SIDAQ di beberapa kota"],
      align: "right",
    },
    {
      year: "2024",
      title: "Membangun Ekosistem Digital",
      points: [
        "Launching Digital Fundraising Academy",
        "Edukasi Digital Fundraising terstruktur",
      ],
      align: "left",
    },
    {
      year: "2025",
      title: "Aktivasi Gerakan Kerelawanan",
      points: [
        "Kaderisasi Da'i Digital",
        "Launching PONDOK.DIGITAL dan RELASI (Relawan SIDAQ)",
      ],
      align: "right",
    },
  ];

  return (
    <HomeLayout>
      <div className="pt-24 bg-white">
        {/* 1. Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-sm mb-4 uppercase">
                Pendahuluan
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] leading-tight mb-8 tracking-tighter">
                Ilmu, Iman, dan Teknologi <br />
                <span className="text-[#B2D766]">
                  Tidak Boleh Berjalan Sendiri.
                </span>
              </h1>
              <p className="text-slate-600 leading-relaxed mb-6 italic border-l-4 border-[#B2D766] pl-6">
                "Umat membutuhkan lembaga filantropi yang bukan hanya amanah,
                tapi juga relevan, mampu memahami perubahan zaman."
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                BaitulMaal Pondok Digital berkomitmen membangun ekosistem
                pemberdayaan yang berfokus pada penguatan kapasitas umat secara
                berkelanjutan.
              </p>
            </motion.div>
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl border-8 border-white">
                <img
                  src="/hero-about.jpg"
                  alt="BPD Movement"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#B2D766] text-[#064e3b] p-8 rounded-3xl shadow-xl z-20">
                <p className="text-xs font-black uppercase tracking-widest opacity-70">
                  Visi Utama
                </p>
                <p className="text-xl font-serif italic font-bold">
                  #1 Pusat Filantropi Masjid
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Dewan Kepemimpinan Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[#B2D766] font-bold tracking-[0.3em] text-sm mb-4 uppercase">
                  Kepemimpinan
                </h2>
                <h3 className="text-4xl font-black text-[#064e3b] tracking-tighter">
                  Digerakkan oleh Visi <br />
                  Para <span className="text-[#d4af37]">Mujahid Digital</span>
                </h3>
              </div>
              <p className="text-slate-500 text-sm max-w-xs italic leading-relaxed">
                Kolaborasi antara spiritualitas, aksi nyata pemberdayaan, dan
                teknologi modern.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-white rounded-[45px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-slate-100"
                >
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#064e3b] to-transparent">
                      <p className="text-white font-black text-xl leading-tight">
                        {leader.name}
                      </p>
                      <p className="text-[#B2D766] text-[10px] font-bold uppercase tracking-widest mt-1">
                        {leader.role}
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <Quote className="text-[#B2D766]/20 mb-4" size={32} />
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {leader.desc}
                    </p>
                    <div
                      className="h-1 w-12 rounded-full"
                      style={{ backgroundColor: leader.color }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ROADMAP / TRACK RECORD SECTION (NEW) */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-[#B2D766] font-bold tracking-[0.4em] text-xs uppercase mb-4">
                Rekam Jejak
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter">
                Napak Tilas Gerakan
              </h3>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto italic">
                "Perjalanan kebaikan yang dimulai dari langkah sederhana, tumbuh
                melalui teknologi dan kolaborasi umat."
              </p>
            </div>

            <div className="relative">
              {/* Central Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#B2D766]/0 via-[#B2D766] to-[#B2D766]/0 hidden md:block"></div>

              <div className="space-y-12 md:space-y-0">
                {roadmap.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center w-full mb-16 ${item.align === "right" ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Content Box */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: item.align === "left" ? -50 : 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="w-full md:w-[45%] group"
                    >
                      <div
                        className={`p-8 rounded-[40px] border border-slate-100 transition-all duration-300 hover:border-[#B2D766]/50 hover:shadow-2xl hover:shadow-[#B2D766]/10 ${item.align === "right" ? "bg-slate-50/50 md:text-right" : "bg-white md:text-left"}`}
                      >
                        <div
                          className={`inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#064e3b] text-[#B2D766] font-black text-sm`}
                        >
                          <Calendar size={14} /> {item.year}
                        </div>
                        <h4 className="text-xl font-black text-[#064e3b] mb-4 group-hover:text-[#B2D766] transition-colors">
                          {item.title}
                        </h4>
                        <ul
                          className={`space-y-3 ${item.align === "right" ? "md:flex md:flex-col md:items-end" : ""}`}
                        >
                          {item.points.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed"
                            >
                              {item.align === "left" && (
                                <ChevronRight
                                  size={16}
                                  className="text-[#B2D766] mt-1 shrink-0"
                                />
                              )}
                              <span>{point}</span>
                              {item.align === "right" && (
                                <ChevronRight
                                  size={16}
                                  className="text-[#B2D766] mt-1 shrink-0 hidden md:block rotate-180"
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Dot in Middle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#B2D766] border-4 border-white shadow-lg hidden md:block z-10"></div>

                    {/* Spacer for empty side */}
                    <div className="md:w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Visi & Misi Section */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#064e3b] tracking-tighter">
                Tiga Pilar <span className="text-[#B2D766]">Pergerakan</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Islamic Social Impact",
                  desc: "Menguatkan fungsi masjid sebagai pusat pendidikan Qur’ani, sosial, dan ekonomi dengan tata kelola transparan.",
                  icon: <Shield className="text-[#064e3b]" />,
                },
                {
                  title: "Tech Ecosystem",
                  desc: "Membangun ekosistem digital untuk edukasi, fundraising, dan mencetak talenta digital umat.",
                  icon: <Zap className="text-[#064e3b]" />,
                },
                {
                  title: "Community Mobilization",
                  desc: "Menggerakkan relawan Qur'ani & kemanusiaan berbasis teknologi terbesar di Indonesia.",
                  icon: <Target className="text-[#064e3b]" />,
                },
              ].map((misi, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-[40px] border border-transparent hover:border-[#B2D766]/30 transition-all group shadow-sm"
                >
                  <div className="w-14 h-14 bg-[#B2D766] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#B2D766]/20 group-hover:scale-110 transition-transform">
                    {misi.icon}
                  </div>
                  <h3 className="font-bold text-[#064e3b] text-lg mb-4 uppercase tracking-widest">
                    {misi.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {misi.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutPage;
