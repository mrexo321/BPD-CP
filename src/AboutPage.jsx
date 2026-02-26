import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";
import HomeLayout from "./layouts/HomeLayout";

const AboutPage = () => {
  return (
    <HomeLayout>
      <div className="pt-24 bg-white">
        {/* Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-sm mb-4 uppercase">
                Pendahuluan
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] leading-tight mb-8">
                Ilmu, Iman, dan Teknologi Tidak Boleh Berjalan Sendiri[cite:
                247, 248].
              </h1>
              <p className="text-slate-600 leading-relaxed mb-6 italic border-l-4 border-[#d4af37] pl-6">
                "Umat membutuhkan lembaga filantropi yang bukan hanya amanah,
                tapi juga relevan, mampu memahami perubahan zaman." [cite: 249]
              </p>
              <p className="text-slate-600 mb-8">
                BaitulMaal Pondok Digital berkomitmen membangun ekosistem
                pemberdayaan yang berfokus pada penguatan kapasitas umat secara
                berkelanjutan[cite: 250].
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
                <div>
                  <p className="font-bold text-[#064e3b]">Imam Candra</p>
                  <p className="text-xs text-[#d4af37] font-bold">
                    DIREKTUR BPD [cite: 260]
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img
                src="/direktur-img.jpg"
                className="rounded-[40px] shadow-2xl"
                alt="Imam Candra"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#064e3b] text-white p-8 rounded-3xl">
                <p className="text-sm font-bold uppercase tracking-widest">
                  Visi Utama
                </p>
                <p className="text-xl font-serif italic">
                  #1 Pusat Filantropi Masjid [cite: 295]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="bg-[#fcfaf2] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#064e3b]">
                Visi & Misi Kami [cite: 277]
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Islamic Social Impact",
                  desc: "Program sosial & ekonomi berbasis filantropi Islam dengan tata kelola transparan[cite: 297].",
                  icon: <Shield className="text-[#d4af37]" />,
                },
                {
                  title: "Tech Ecosystem",
                  desc: "Membangun ekosistem digital untuk edukasi, fundraising, dan mencetak talenta digital[cite: 298].",
                  icon: <Zap className="text-[#d4af37]" />,
                },
                {
                  title: "Community Mobilization",
                  desc: "Menggerakkan relawan Qur'ani & kemanusiaan berbasis teknologi di seluruh Indonesia[cite: 299].",
                  icon: <Target className="text-[#d4af37]" />,
                },
              ].map((misi, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-[#fdf6e3] rounded-2xl flex items-center justify-center mb-6">
                    {misi.icon}
                  </div>
                  <h3 className="font-bold text-[#064e3b] text-xl mb-4 uppercase tracking-tighter">
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
