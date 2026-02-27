import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageCircle,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import HomeLayout from "../layouts/HomeLayout";

const ContactUs = () => {
  const colors = {
    brandGreen: "#B2D766",
    darkGreen: "#064e3b",
    softGreen: "#B2D7661A",
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-[#B2D766]" size={24} />,
      label: "Kantor Pusat",
      value:
        "Kawasan Masjid Ismuhu Yahya, Jln. Parit Nomor Dua, RT. 07 RW. 09, Ds. Parit Baru, Kec. Sungai Raya, Kab. Kubu Raya, Kalimantan Barat",
      link: "https://maps.google.com",
    },
    {
      icon: <Phone className="text-[#B2D766]" size={24} />,
      label: "Telepon / WhatsApp",
      value: "08115903330",
      link: "https://wa.me/628115903330",
    },
    {
      icon: <Mail className="text-[#B2D766]" size={24} />,
      label: "Email Resmi",
      value: "info@bpd.id",
      link: "mailto:info@bpd.id",
    },
    {
      icon: <Instagram className="text-[#B2D766]" size={24} />,
      label: "Media Sosial",
      value: "@bpd.id",
      link: "https://instagram.com/bpd.id",
    },
  ];

  return (
    <HomeLayout>
      <div className="bg-white min-h-screen pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* --- HERO HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-4">
                Connect With Us
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-[#064e3b] tracking-tighter leading-none mb-6">
                Mari Berkolaborasi dalam{" "}
                <span className="text-[#B2D766]">Kebaikan.</span>
              </h1>
              <p className="text-slate-500 text-lg max-w-lg leading-relaxed">
                Punya pertanyaan tentang program kami atau ingin menjalin
                kemitraan strategis? Tim kami siap melayani Anda dengan amanah
                dan profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-[#064e3b] p-8 rounded-[40px] text-white hidden lg:block w-72 h-72 relative overflow-hidden shadow-2xl shadow-[#064e3b]/20"
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Clock size={40} className="text-[#B2D766]" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B2D766] font-bold mb-1">
                    Jam Operasional
                  </p>
                  <p className="text-xl font-medium">Senin — Jumat</p>
                  <p className="text-sm opacity-60">08:00 - 16:00 WIB</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* --- CONTACT FORM (LEFT) --- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-slate-50 p-10 md:p-16 rounded-[50px] border border-slate-100 shadow-sm"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b] ml-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#B2D766] transition-all shadow-sm outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b] ml-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#B2D766] transition-all shadow-sm outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b] ml-2">
                    Topik Kepentingan
                  </label>
                  <select className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#B2D766] transition-all shadow-sm outline-none appearance-none">
                    <option>Kemitraan Strategis</option>
                    <option>Informasi Donasi</option>
                    <option>Digital Fundraising Academy</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#064e3b] ml-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                    className="w-full bg-white border-none rounded-3xl px-6 py-6 focus:ring-2 focus:ring-[#B2D766] transition-all shadow-sm outline-none resize-none"
                  ></textarea>
                </div>

                <button className="group w-full md:w-auto bg-[#064e3b] text-white px-12 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#B2D766] hover:text-[#064e3b] transition-all duration-300 shadow-xl shadow-[#064e3b]/10">
                  Kirim Pesan{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>

            {/* --- INFO CARDS (RIGHT) --- */}
            <div className="lg:col-span-5 space-y-6">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.4 }}
                  className="flex items-start gap-6 p-8 bg-white rounded-[35px] border border-slate-100 hover:border-[#B2D766] hover:shadow-xl hover:shadow-[#B2D766]/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#064e3b] transition-colors duration-300 shrink-0">
                    <span className="group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-[#064e3b] font-bold text-lg leading-snug group-hover:text-[#B2D766] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* --- QR / CTA --- */}
              <div className="mt-12 p-10 bg-[#B2D766] rounded-[45px] relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-[#064e3b] font-black text-2xl mb-2">
                    Konsultasi Cepat?
                  </h3>
                  <p className="text-[#064e3b]/70 text-sm mb-6 max-w-[200px]">
                    Hubungi tim customer service kami via WhatsApp untuk respon
                    instan.
                  </p>
                  <a
                    href="https://wa.me/628115903330"
                    className="inline-flex items-center gap-2 bg-[#064e3b] text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                  >
                    <MessageCircle size={18} /> Chat Sekarang
                  </a>
                </div>
                <Globe className="absolute -right-10 -bottom-10 text-[#064e3b]/10 w-48 h-48 rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* --- DECORATIVE WATERMARK --- */}
        <div className="fixed bottom-0 left-0 w-full h-1/2 pointer-events-none -z-10 opacity-[0.02]">
          <h1 className="text-[20vw] font-black text-[#064e3b] leading-none text-center select-none">
            BPD.ID
          </h1>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;
