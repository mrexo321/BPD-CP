import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  Landmark,
  Copy,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Zap,
} from "lucide-react";
import HomeLayout from "../layouts/HomeLayout";
import BSI from "../assets/bsi_logo.png";

const DonatePage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const bankAccounts = [
    {
      label: "Infaq Sidaq",
      no: "2022100435",
      icon: <Zap className="text-amber-500" />,
    },
    {
      label: "Wakaf Sidaq",
      no: "2022100427",
      icon: <Landmark className="text-blue-500" />,
    },
    {
      label: "Pondok Digital Aghnia",
      no: "7271460656",
      icon: <ShieldCheck className="text-emerald-500" />,
    },
    {
      label: "Zakat Sidaq",
      no: "2022100443",
      icon: <Heart className="text-red-500" />,
    },
    {
      label: "Operasional Sidaq",
      no: "2022100419",
      icon: <Wallet className="text-purple-500" />,
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <HomeLayout>
      <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#B2D766] font-black tracking-[0.3em] uppercase text-xs mb-4"
            >
              Investasi Akhirat
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#064e3b] mb-6 tracking-tighter"
            >
              Salurkan ZISWAF <br className="hidden md:block" /> Terbaik Anda
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1.5 w-24 bg-[#d4af37] mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Trust Badges & Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#064e3b] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B2D766] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />

                <h3 className="text-2xl font-black mb-4 relative z-10">
                  Kenapa Melalui Kami?
                </h3>
                <p className="text-emerald-100/80 leading-relaxed mb-8 text-sm italic">
                  "Adakah sama orang-orang yang mengetahui dengan orang-orang
                  yang tidak mengetahui?" — QS. Az Zumar: 9
                </p>

                <div className="space-y-6 relative z-10">
                  {[
                    {
                      title: "Legalitas Resmi",
                      desc: "Yayasan Pondok Digital Aghnia",
                      icon: <CheckCircle2 size={20} />,
                    },
                    {
                      title: "Transparan",
                      desc: "Laporan penyaluran rutin & akuntabel",
                      icon: <CheckCircle2 size={20} />,
                    },
                    {
                      title: "Dampak Nyata",
                      desc: "Mencetak 23 Juta Penghafal Al-Qur'an",
                      icon: <CheckCircle2 size={20} />,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-[#B2D766] mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-emerald-100/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 border border-slate-200 rounded-[2rem] bg-white flex items-center gap-6 shadow-sm">
                <img src={BSI} alt="BSI" className="h-10 opacity-80" />
                <div className="h-10 w-[1px] bg-slate-200" />
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight">
                  Seluruh Transaksi Melalui <br /> Bank Syariah Indonesia (451)
                </p>
              </div>
            </div>

            {/* Right Side: Bank List */}
            <div className="lg:col-span-7 space-y-4">
              {bankAccounts.map((bank, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="group bg-white border border-slate-100 hover:border-[#B2D766]/30 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#064e3b]/5 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {bank.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-[#d4af37] uppercase tracking-widest leading-none mb-1 block">
                        Rekening Tujuan
                      </span>
                      <h4 className="font-black text-[#064e3b] text-lg uppercase tracking-tight leading-none">
                        {bank.label}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-xl">
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-400 mb-0.5">
                        Nomor Rekening
                      </p>
                      <p className="font-mono text-xl font-black text-[#064e3b] tracking-wider">
                        {bank.no}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopy(bank.no, index)}
                      className={`p-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                        copiedIndex === index
                          ? "bg-emerald-500 text-white"
                          : "bg-[#B2D766]/10 text-[#064e3b] hover:bg-[#B2D766] hover:text-[#064e3b]"
                      }`}
                    >
                      {copiedIndex === index ? (
                        <CheckCircle2 size={20} />
                      ) : (
                        <Copy size={20} />
                      )}
                      <span className="text-[10px] font-black uppercase">
                        {copiedIndex === index ? "Copied" : "Salin"}
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-amber-600 font-bold text-lg">!</span>
                </div>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  <strong>Konfirmasi Donasi:</strong> Mohon lampirkan bukti
                  transfer melalui WhatsApp untuk pendataan yang lebih akurat.
                  Keikhlasan Anda adalah bahan bakar perjuangan kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default DonatePage;
