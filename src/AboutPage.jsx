import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Zap,
  Quote,
  Calendar,
  ChevronRight,
  Heart,
  Globe,
  TrendingUp,
  Star,
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
      year: "2023",
      title: "Ekspansi Kawasan SIDAQ",
      points: ["Aktivasi kawasan SIDAQ di beberapa kota"],
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

  // MISI BERDASARKAN 4 PILAR GAMBAR
  const missions = [
    {
      title: "Islamic Social Impact",
      desc: "Menguatkan fungsi masjid sebagai pusat pendidikan Qur'ani, layanan sosial, dan pemberdayaan ekonomi umat melalui tata kelola yang transparan dan amanah.",
      icon: <Heart className="text-[#064e3b]" />,
      link: "pilar-1",
    },
    {
      title: "Technology & Digital Academy",
      desc: "Membangun ekosistem teknologi yang memperkuat edukasi, efisiensi fundraising, serta mencetak talenta digital umat untuk menghadapi industri masa depan.",
      icon: <Zap className="text-[#064e3b]" />,
      link: "pilar-2",
    },
    {
      title: "Community Mobilization",
      desc: "Menggerakkan jaringan relawan Qur'ani dan kemanusiaan berbasis teknologi terbesar di Indonesia untuk memperluas jangkauan manfaat secara nyata.",
      icon: <Globe className="text-[#064e3b]" />,
      link: "pilar-3",
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

        {/* 3. Misi Section (Updated with 4 Pillars) */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[#d4af37] font-bold tracking-[0.4em] text-xs uppercase mb-4">
                Misi Strategis
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-tight">
                Tiga Pilar <span className="text-[#B2D766]">Pergerakan</span>
              </h3>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                Langkah konkret kami dalam mentransformasi potensi umat menjadi
                kekuatan peradaban.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {missions.map((misi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-10 rounded-[45px] border border-transparent hover:border-[#B2D766]/30 hover:bg-white transition-all group shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-[#B2D766] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#B2D766]/20 group-hover:rotate-6 transition-transform">
                    {misi.icon}
                  </div>
                  <h3 className="font-black text-[#064e3b] text-lg mb-4 uppercase tracking-tighter leading-tight">
                    {misi.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {misi.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3.5 DETAILED STRATEGIC MISSIONS (NEW) --- */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-4">
                  Target Peradaban
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-tight">
                  Membangun Generasi <br />
                  <span className="text-[#B2D766]">Qur'ani & Digital</span>
                </h3>
              </div>
              <div className="bg-[#064e3b] px-6 py-4 rounded-3xl hidden lg:block">
                <p className="text-white text-xs font-medium italic opacity-80">
                  "Sebaik-baik kalian adalah yang belajar Al-Qur'an dan
                  mengajarkannya."
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {[
                {
                  number: "01",
                  title: "Mencetak 23 Juta Penghafal Al-Qur’an",
                  subtitle: "Indonesia Cetak Huffadz",
                  desc: "Program pembinaan hafidz/hafidzah melalui rumah-rumah tahfidz berbasis masjid. Dengan kurikulum sistematis dan pendampingan intensif, kami mencetak generasi penghafal Al-Qur’an yang kompeten dan siap berkontribusi bagi masyarakat.",
                  highlight: "Target: 23 Juta Huffadz",
                  icon: <Star className="text-white" size={24} />,
                  bg: "bg-[#064e3b]",
                },
                {
                  number: "02",
                  title: "Memberantas Buta Huruf Al-Quran",
                  subtitle: "Gerakan Indonesia Mengaji",
                  desc: "Gerakan nasional berbasis masjid dengan metode pembelajaran yang mudah, terstruktur, dan aksesibel untuk semua usia. Langkah nyata melahirkan generasi Qur'ani serta memberdayakan guru ngaji di seluruh penjuru Indonesia.",
                  highlight: "Metode Terstruktur",
                  icon: <Target className="text-white" size={24} />,
                  bg: "bg-[#d4af37]",
                },
                {
                  number: "03",
                  title: "Digital Talent Santri",
                  subtitle: "Akselerasi Ekonomi Digital",
                  desc: "Mencetak talenta digital dari kalangan santri yang ahli dalam bidang teknologi dan fundraising. Menggabungkan kekuatan iman dengan keahlian teknis untuk menjawab tantangan industri masa depan.",
                  highlight: "3.600+ Alumni",
                  icon: <Zap className="text-white" size={24} />,
                  bg: "bg-[#B2D766]",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white rounded-[50px] overflow-hidden border border-slate-100 p-8 md:p-12 shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Visual Number & Icon */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-24 h-24 ${item.bg} rounded-[30px] flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500`}
                      >
                        {item.icon}
                      </div>
                      <span className="absolute -bottom-4 -right-4 text-6xl font-black text-slate-100 -z-10 group-hover:text-[#B2D766]/20 transition-colors">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-slate-100 text-[#064e3b] text-[10px] font-bold uppercase tracking-widest rounded-full">
                          {item.subtitle}
                        </span>
                        <div className="h-[1px] flex-1 bg-slate-100" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-black text-[#064e3b] mb-4 tracking-tighter">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-3xl">
                        {item.desc}
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="shrink-0 lg:text-right">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#B2D766]/10 text-[#064e3b] rounded-2xl font-bold text-sm">
                        <TrendingUp size={16} />
                        {item.highlight}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. AZ-ZUMAR QUOTE SECTION (NEW) */}
        <section className="py-32 relative overflow-hidden bg-[#064e3b]">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B2D766]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[100px] -ml-64 -mb-64" />

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center gap-1 mb-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill="#B2D766"
                    className="text-[#B2D766]"
                  />
                ))}
              </div>

              <h4 className="text-[#B2D766] font-serif italic text-3xl md:text-5xl leading-tight mb-12 px-4">
                "...Adakah sama orang-orang yang mengetahui dengan orang-orang
                yang tidak mengetahui..."
              </h4>

              <div className="inline-block relative">
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#d4af37]/50" />
                <span className="text-[#d4af37] font-bold tracking-[0.5em] text-xs uppercase">
                  QS. AZ-ZUMAR: 9
                </span>
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#d4af37]/50" />
              </div>

              <div className="mt-16 max-w-2xl mx-auto border-t border-white/10 pt-10">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  Ayat ini menjadi pengingat bagi kami bahwa iman harus
                  berlandaskan ilmu, dan teknologi adalah wasilah bagi
                  orang-orang yang berakal untuk menebar kebermanfaatan yang
                  lebih luas.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5. ROADMAP SECTION */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-[#B2D766] font-bold tracking-[0.4em] text-xs uppercase mb-4">
                Rekam Jejak
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter">
                Napak Tilas Gerakan
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate-100 hidden md:block"></div>

              <div className="space-y-12 md:space-y-0">
                {roadmap.map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center w-full mb-16 ${
                      item.align === "right" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: item.align === "left" ? -50 : 50,
                      }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="w-full md:w-[45%] group"
                    >
                      <div
                        className={`p-8 rounded-[40px] border border-slate-100 transition-all duration-300 hover:border-[#B2D766]/50 hover:shadow-2xl hover:shadow-[#B2D766]/10 ${
                          item.align === "right"
                            ? "bg-slate-50/50 md:text-right"
                            : "bg-white md:text-left"
                        }`}
                      >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-[#064e3b] text-[#B2D766] font-black text-sm">
                          <Calendar size={14} /> {item.year}
                        </div>
                        <h4 className="text-xl font-black text-[#064e3b] mb-4">
                          {item.title}
                        </h4>
                        <ul
                          className={`space-y-3 ${item.align === "right" ? "md:items-end" : ""}`}
                        >
                          {item.points.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-slate-500 text-sm"
                            >
                              {item.align === "left" && (
                                <ChevronRight
                                  size={16}
                                  className="text-[#B2D766] mt-1"
                                />
                              )}
                              <span>{point}</span>
                              {item.align === "right" && (
                                <ChevronRight
                                  size={16}
                                  className="text-[#B2D766] mt-1 hidden md:block rotate-180"
                                />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#B2D766] border-4 border-white shadow-lg hidden md:block z-10"></div>
                    <div className="md:w-[45%]"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
};

export default AboutPage;
