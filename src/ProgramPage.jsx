import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Cpu, Users } from "lucide-react";
import HomeLayout from "./layouts/HomeLayout";
import { Link } from "react-router-dom"; // Pastikan menggunakan react-router-dom

const ProgramPage = () => {
  const pilars = [
    {
      id: "pilar-1",
      title: "Islamic Social Impact",
      subtitle: "Pemberdayaan Sosial & Ekonomi",
      desc: "Menguatkan fungsi masjid sebagai pusat pendidikan Qur’ani, sosial, dan pemberdayaan ekonomi umat melalui tata kelola yang transparan.",
      icon: <Heart size={32} />,
      color: "bg-emerald-50",
      accent: "text-emerald-600",
      border: "border-emerald-100",
      link: "/pilar-1",
    },
    {
      id: "pilar-2",
      title: "Technology & Digital Academy",
      subtitle: "Akselerasi Talenta Digital",
      desc: "Membangun ekosistem teknologi untuk memperkuat edukasi dan kinerja fundraising modern guna mencetak talenta digital umat yang kompeten.",
      icon: <Cpu size={32} />,
      color: "bg-blue-50",
      accent: "text-blue-600",
      border: "border-blue-100",
      link: "/pilar-2",
    },
    {
      id: "pilar-3",
      title: "Community Mobilization",
      subtitle: "Gerakan Relawan & Kemanusiaan",
      desc: "Menggerakkan jaringan relawan berbasis teknologi terbesar di Indonesia untuk memperluas jangkauan manfaat Baitul Maal secara nyata.",
      icon: <Users size={32} />,
      color: "bg-amber-50",
      accent: "text-amber-600",
      border: "border-amber-100",
      link: "/pilar-3",
    },
  ];

  return (
    <HomeLayout>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-4">
              Konsep Pergerakan
            </h2>
            <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] mb-6 tracking-tighter leading-none">
              List Program <br />
              <span className="text-[#B2D766]">Baitul Maal Movement</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Visi besar kami diwujudkan melalui tiga fokus utama yang saling
              terintegrasi untuk menciptakan dampak berkelanjutan bagi umat dan
              bangsa.
            </p>
          </div>

          {/* Pillars List Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pilars.map((pilar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative group p-10 rounded-[45px] border ${pilar.border} ${pilar.color} flex flex-col justify-between h-full transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2`}
              >
                <div>
                  {/* Icon & Label */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center ${pilar.accent} mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {pilar.icon}
                  </div>

                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] ${pilar.accent} opacity-70`}
                  >
                    Pilar 0{i + 1}
                  </span>

                  <h3 className="text-2xl font-black text-[#064e3b] mt-2 mb-4 leading-tight">
                    {pilar.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {pilar.desc}
                  </p>
                </div>

                {/* Footer Link */}
                <Link
                  to={pilar.link}
                  className="inline-flex items-center gap-3 font-bold text-[#064e3b] group/btn"
                >
                  <span className="text-sm underline underline-offset-4 decoration-2 decoration-[#B2D766]">
                    Eksplor Program
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center group-hover/btn:bg-[#B2D766] group-hover/btn:text-[#064e3b] transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </Link>

                {/* Decorative Number background */}
                <span className="absolute top-10 right-10 text-8xl font-black text-white/40 pointer-events-none group-hover:text-white/80 transition-colors">
                  {i + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ... Sisa konten program Anda (Pilar 1 Detail Grid, Academy Section, dll) ... */}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProgramPage;
