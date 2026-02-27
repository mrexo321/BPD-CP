import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Home,
  HeartHandshake,
  ArrowUpRight,
  Target,
  CheckCircle2,
} from "lucide-react";
import HomeLayout from "../layouts/HomeLayout";

const IslamicSocialImpact = () => {
  // Animasi Variabel
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <HomeLayout>
      <div className="min-h-screen bg-[#fcfcfc] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- HEADER SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-l-4 border-[#B2D766] pl-8"
          >
            <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-2">
              Pilar 01
            </h2>
            <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] mb-6 tracking-tighter">
              Islamic Social <span className="text-[#B2D766]">Impact</span>
            </h1>
            <p className="max-w-3xl text-lg text-slate-600 leading-relaxed font-medium">
              Pilar ini memastikan BaitulMaal Pondok Digital menjalankan program
              sosial dan ekonomi dengan tata kelola yang transparan,
              profesional, dan relevan dengan kebutuhan umat[cite: 137].
            </p>
          </motion.div>

          {/* --- STRATEGY BOX --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#064e3b] rounded-[40px] p-10 mb-20 text-white relative overflow-hidden shadow-2xl shadow-[#064e3b]/20"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="bg-[#B2D766] p-5 rounded-3xl text-[#064e3b]">
                <Target size={40} />
              </div>
              <div>
                <h3 className="text-[#B2D766] font-bold uppercase tracking-widest text-sm mb-2">
                  Tujuan Utama
                </h3>
                <p className="text-xl md:text-2xl font-light leading-snug">
                  "Menguatkan fungsi masjid sebagai pusat pendidikan Qur’ani,
                  sosial, dan pemberdayaan ekonomi umat melalui tata kelola yang
                  transparan dan profesional".
                </p>
              </div>
            </div>
            {/* Dekorasi Watermark */}
            <div className="absolute -bottom-10 -right-10 text-white/5 font-black text-9xl pointer-events-none">
              STRATEGY
            </div>
          </motion.div>

          {/* --- PROGRAM GRID --- */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl font-black text-[#064e3b]">
                Program Utama
              </h3>
              <div className="h-[2px] flex-grow bg-slate-100"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Indonesia Mengaji",
                  desc: "Pemberantasan buta huruf Al-Qur'an berbasis masjid melalui kelas literasi Qur'an yang terstandar dan mudah diakses[cite: 142].",
                  icon: <BookOpen />,
                  color: "#B2D766",
                },
                {
                  title: "Indonesia Berwakaf",
                  desc: "Pengembangan wakaf produktif dan edukasi wakaf modern untuk menghadirkan aset berkelanjutan dan berdampak ekonomi[cite: 143].",
                  color: "#d4af37",
                },
                {
                  title: "Indonesia Cetak Huffadz",
                  desc: "Pengembangan rumah tahfidz berbasis kawasan untuk mencetak generasi penghafal Al-Qur'an yang unggul dan berkarakter[cite: 144].",
                  icon: <Home />,
                  color: "#064e3b",
                },
                {
                  title: "Indonesia Berbagi",
                  desc: "Layanan sosial mencakup bantuan pangan, kesehatan, dan respon kebutuhan dasar masyarakat melalui filantropi Islam[cite: 145, 146].",
                  icon: <HeartHandshake />,
                  color: "#B2D766",
                },
              ].map((prog, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group bg-white p-8 rounded-[35px] border border-slate-100 hover:border-[#B2D766]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-slate-50 text-[#064e3b] group-hover:bg-[#B2D766] group-hover:text-[#064e3b] transition-colors">
                      {prog.icon}
                    </div>
                    <ArrowUpRight className="text-slate-300 group-hover:text-[#B2D766] transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-[#064e3b] mb-3">
                    {prog.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic">
                    "{prog.desc}"
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* --- PROYEKSI DAMPAK --- */}
          <section className="bg-white rounded-[50px] p-12 border border-slate-100 shadow-sm">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black text-[#064e3b] mb-4">
                Proyeksi Dampak
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">
                Target Perubahan Berkelanjutan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  label: "Literasi Qur'an",
                  value: "Bebas Buta Huruf",
                  sub: "Seluruh Masjid Indonesia [cite: 148]",
                },
                {
                  label: "Penghafal Qur'an",
                  value: "23 Juta",
                  sub: "Melalui Jejaring Rumah Tahfidz [cite: 149]",
                },
                {
                  label: "Kawasan Qur'ani",
                  value: "114 Titik",
                  sub: "Pusat Layanan Umat Terpadu [cite: 150]",
                },
                {
                  label: "Rumah Qur'ani",
                  value: "6.236 Unit",
                  sub: "Tersebar di Seluruh Indonesia [cite: 151]",
                },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-4 inline-block p-3 rounded-full bg-[#B2D766]/10 text-[#B2D766] group-hover:bg-[#B2D766] group-hover:text-white transition-all">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-1 tracking-tighter">
                    {stat.label}
                  </p>
                  <h5 className="text-3xl font-black text-[#064e3b] mb-2">
                    {stat.value}
                  </h5>
                  <p className="text-xs text-slate-500 font-medium leading-tight">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-[#fcfcfc] border-2 border-dashed border-[#B2D766]/30 text-center">
              <p className="text-[#064e3b] font-bold italic leading-relaxed">
                "Semua program ini secara langsung mendukung visi besar:
                menjadikan masjid sebagai pusat layanan umat yang modern,
                profesional, dan berdampak luas (Powered by SIDAQ)"[cite: 152].
              </p>
            </div>
          </section>
        </div>
      </div>
    </HomeLayout>
  );
};

export default IslamicSocialImpact;
