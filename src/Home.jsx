import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Cpu,
  Users,
  Star,
  TrendingUp,
  ShieldCheck,
  Map,
  Target,
} from "lucide-react";
import HeroSection from "./components/HeroSection";
import HomeLayout from "./layouts/HomeLayout";
import { Link } from "react-router-dom";

const Home = () => {
  const colors = {
    brandGreen: "#B2D766",
    darkGreen: "#064e3b",
    gold: "#d4af37",
    lightGreen: "#B2D7661A",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <HomeLayout>
      {/* --- HERO SECTION --- */}
      <HeroSection />

      {/* --- NEW SECTION: VISIONARY IMPACT HIGHLIGHT --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* KIRI: Visual Composition */}
            <div className="relative">
              {/* Main Image Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[50px] overflow-hidden border-[12px] border-slate-50 shadow-2xl"
              >
                <img
                  src="/api/placeholder/600/800" // Ganti dengan foto santri digital atau aksi sosial
                  alt="BPD Impact"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/80 via-transparent to-transparent" />

                {/* Floating Stats on Image */}
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-5xl font-black mb-1">#1</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                    Ekosistem Digital Masjid
                  </p>
                </div>
              </motion.div>

              {/* Decorative Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 -top-12 z-20 hidden md:block"
              >
                <div className="bg-[#B2D766] p-8 rounded-[40px] shadow-xl rotate-12">
                  <div className="text-[#064e3b] font-black text-center">
                    <p className="text-4xl">100%</p>
                    <p className="text-[10px] uppercase tracking-widest mt-1">
                      Transparan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small Overlay Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-[40px] shadow-2xl max-w-[280px] border border-slate-100 hidden lg:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#064e3b]/5 rounded-2xl flex items-center justify-center">
                    <Star className="text-[#d4af37]" fill="#d4af37" size={24} />
                  </div>
                  <p className="font-black text-[#064e3b] leading-tight">
                    Terakreditasi A (Nasional)
                  </p>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  BaitulMaal Pondok Digital dikelola dengan standar audit
                  kepatuhan syariah yang ketat.
                </p>
              </motion.div>
            </div>

            {/* KANAN: Content & Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:pl-10"
            >
              <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-sm uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#d4af37]"></span>
                Tentang Gerakan Kami
              </h2>

              <h3 className="text-5xl md:text-6xl font-black text-[#064e3b] leading-[1.1] mb-8 tracking-tighter">
                Membangun Peradaban <br />
                <span className="text-[#B2D766]">Dimulai dari Masjid.</span>
              </h3>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#B2D766]/10 flex items-center justify-center text-[#064e3b] font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-[#064e3b] mb-2">
                      Transformasi Digital Dakwah
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Kami tidak hanya menyalurkan bantuan, tapi membangun
                      sistem. Digitalisasi masjid adalah kunci kemandirian
                      ekonomi umat masa depan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#B2D766]/10 flex items-center justify-center text-[#064e3b] font-bold">
                    02
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-[#064e3b] mb-2">
                      Pemberdayaan Berkelanjutan
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Melalui Digital Fundraising Academy, kami mencetak pejuang
                      ekonomi yang siap mengabdi di seluruh penjuru nusantara.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-slate-100 flex items-center gap-8">
                <div>
                  <p className="text-3xl font-black text-[#064e3b]">24/7</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Digital Support
                  </p>
                </div>
                <div className="w-[1px] h-10 bg-slate-200" />
                <div>
                  <p className="text-3xl font-black text-[#064e3b]">Audit</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Kemenag RI
                  </p>
                </div>
                <Link
                  to="/about"
                  className="ml-auto w-14 h-14 rounded-full bg-[#064e3b] flex items-center justify-center text-white hover:bg-[#B2D766] transition-colors group"
                >
                  <TrendingUp
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    size={20}
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- EKOSISTEM DAMPAK (3 PILLARS) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[#d4af37] font-bold tracking-[0.2em] text-xs uppercase mb-3">
                Ekosistem Dampak
              </h2>
              <p className="text-4xl md:text-5xl font-black text-[#B2D766] tracking-tighter">
                Tiga Pilar Pergerakan Kami
              </p>
            </div>
            <p className="text-slate-500 max-w-sm text-sm italic border-l-2 border-[#B2D766] pl-4">
              "Kami menggerakkan potensi umat melalui pendekatan teknologi yang
              terukur dan amanah."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Islamic Social Impact",
                desc: "Fokus pada penyaluran bantuan kemanusiaan, pembangunan masjid, dan pemberdayaan ekonomi umat secara transparan.",
                icon: <Heart size={32} />,
                link: "/pilar-1",
              },
              {
                title: "Technology & Digital Academy",
                desc: "Mencetak 3.600 alumni fundraiser profesional dan 500 santri digital setiap tahunnya untuk industri masa depan.",
                icon: <Cpu size={32} />,
                link: "/pilar-2",
              },
              {
                title: "Community Mobilization",
                desc: "Menggerakkan 20.000 relawan digital berbasis masjid di 1.000 titik aksi seluruh Indonesia.",
                icon: <Users size={32} />,
                link: "/pilar-3",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[45px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#B2D766]/20 transition-all group"
              >
                <Link
                  to={pillar.link}
                  className="mb-8 w-16 h-16 bg-[#B2D766]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#064e3b] transition-all duration-300"
                >
                  <span className="text-[#064e3b] group-hover:text-white transition-colors">
                    {pillar.icon}
                  </span>
                </Link>
                <Link
                  to={pillar.link}
                  className="text-xl font-black text-[#064e3b] mb-4 group-hover:text-[#B2D766] transition-colors block"
                >
                  {pillar.title}
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BPD DALAM ANGKA (STATISTICS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#064e3b] text-4xl md:text-5xl font-black tracking-tighter mb-4">
              BPD Dalam <span className="text-[#B2D766]">Angka</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Capaian yang menunjukkan pertumbuhan, kinerja, dan efektivitas
              program sebagai indikator transparansi kami.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Kedermanan Terhimpun",
                value: "174 M",
                icon: <TrendingUp className="text-[#B2D766]" />,
              },
              {
                label: "Transaksi Kebaikan",
                value: "514.818",
                icon: <ShieldCheck className="text-[#B2D766]" />,
              },
              {
                label: "Dermawan Terlibat",
                value: "115.672",
                icon: <Users className="text-[#B2D766]" />,
              },
              {
                label: "Penerima Manfaat",
                value: "1 Juta+",
                icon: <Target className="text-[#B2D766]" />,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                className="bg-white p-8 rounded-[35px] border border-slate-100 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-black text-[#064e3b] mb-1">
                  {stat.value}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-bold text-[#064e3b]">
            <span className="bg-[#B2D766]/10 px-6 py-2 rounded-full border border-[#B2D766]/20">
              20 Provinsi di Indonesia
            </span>
            <span className="bg-[#B2D766]/10 px-6 py-2 rounded-full border border-[#B2D766]/20">
              7 Negara Jangkauan
            </span>
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[#d4af37] font-bold tracking-[0.2em] text-xs uppercase mb-3">
                Kolaborasi & Kemitraan
              </h2>
              <p className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter">
                Partner, Mitra, &{" "}
                <span className="text-[#B2D766]">Big Family</span>
              </p>
            </div>
            <p className="text-slate-500 max-w-sm text-sm border-l-2 border-[#B2D766] pl-4">
              "Membangun ekosistem kebaikan melalui sinergi dengan berbagai
              sektor untuk dampak yang lebih luas dan berkelanjutan."
            </p>
          </div>

          {/* Value Prop Kemitraan - Menjelaskan Mengapa Bermitra */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {[
              { title: "Visi Terarah", desc: "Tiga pilar utama pemberdayaan." },
              { title: "Tata Kelola", desc: "Transparan & profesional." },
              { title: "Berpengalaman", desc: "Manajemen kompeten." },
              { title: "Komprehensif", desc: "Program saling terintegrasi." },
              { title: "Teknologi", desc: "Digital sebagai pengungkit." },
              {
                title: "Sinergi Masjid",
                desc: "Jejaring nasional masjid mitra.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center"
              >
                <h4 className="text-[#064e3b] font-bold text-xs mb-2 uppercase tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-[10px] leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Grid Logo (Placeholder untuk Logo Partner) */}
          <div className="bg-slate-50/50 rounded-[50px] p-12 border border-dashed border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Anda bisa memasukkan logo dari image_1b2dbd.jpg & image_1b29d5.jpg di sini */}
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  CORPORATE PARTNERS
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  SOCIAL AGENCIES
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  MEDIA PARTNERS
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  MASJID NETWORKS
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  GOVERNMENT
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[10px] font-bold text-slate-400">
                  COMMUNITIES
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-400 text-sm mb-6">
                Telah dipercaya oleh ratusan entitas di seluruh Indonesia
              </p>
              <Link
                to="/partnership"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#064e3b] text-white rounded-full font-bold text-sm hover:bg-[#B2D766] hover:text-[#064e3b] transition-all"
              >
                Jadilah Bagian dari Perubahan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOKOH PENGGERAK (LEADERSHIP) --- */}
      <section className="py-24 bg-[#064e3b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl font-black tracking-tighter mb-4">
              Tokoh Penggerak
            </h2>
            <p className="text-white/60">
              Sinergi para pemimpin dalam memadukan dakwah, sosial, dan
              teknologi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "KH. Adi Pratama Larisindo",
                role: "Inisiator SIDAQ",
                desc: "Inisiator gerakan SIDAQ yang memadukan dakwah, pemberdayaan sosial, dan teknologi.",
              },
              {
                name: "Imam Candra",
                role: "Direktur BPD",
                desc: "Memimpin integrasi teknologi dan strategi digital fundraising dalam tata kelola filantropi Islam.",
              },
              {
                name: "Kiki Supardi",
                role: "CEO Masjid Ismuhu Yahya",
                desc: "Tokoh kepemimpinan muda yang memfokuskan aktivitas masjid sebagai pusat layanan sosial inovatif.",
              },
            ].map((leader, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10"
              >
                <div className="w-20 h-20 bg-[#B2D766] rounded-2xl mb-6 flex items-center justify-center font-black text-[#064e3b] text-2xl">
                  {leader.name.charAt(0)}
                </div>
                <h4 className="text-white font-black text-xl mb-1">
                  {leader.name}
                </h4>
                <p className="text-[#B2D766] text-[10px] font-bold uppercase tracking-widest mb-4">
                  {leader.role}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUOTE SECTION --- */}
      <section className="py-32 bg-[#B2D766] text-[#064e3b] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[#064e3b]/40 mb-8 flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill="currentColor" stroke="none" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic font-medium leading-tight mb-10">
              "Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang
              berhak menerimanya..."
            </h2>
            <div className="inline-block px-6 py-2 bg-[#064e3b] rounded-full">
              <p className="text-[10px] font-bold tracking-[0.4em] text-white uppercase">
                QS. An-Nisa: 58
              </p>
            </div>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] font-black text-[#064e3b]/5 select-none -z-0 pointer-events-none">
          AMANAH
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
