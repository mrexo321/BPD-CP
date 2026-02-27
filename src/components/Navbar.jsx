import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Tentang Kami", path: "/about" },
    { name: "Program", path: "/programs" },
    { name: "Impact", path: "/impact" },
    { name: "Kontak", path: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 shadow-[0_4px_20px_-5px_rgba(6,78,59,0.05)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-4 group relative z-[110]">
          <div className="relative">
            <div className="absolute -inset-1 bg-[#B2D766] rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative w-11 h-11 bg-[#064e3b] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500">
              <span className="text-[#B2D766] font-black text-xl">B</span>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-black text-[#064e3b] leading-none tracking-tight text-xl">
              BAITULMAAL
            </h1>
            <p className="text-[9px] font-black text-[#d4af37] tracking-[0.3em] uppercase mt-1">
              Pondok Digital
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#064e3b] transition-all duration-300 group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B2D766] to-[#d4af37] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="w-[1px] h-6 bg-slate-100 mx-2"></div>

          <Link
            to="/donate"
            className="group relative px-8 py-3 overflow-hidden rounded-xl bg-[#064e3b] transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(178,215,102,0.4)]"
          >
            <div className="absolute inset-0 w-0 bg-[#B2D766] transition-all duration-300 group-hover:w-full"></div>
            <span className="relative z-10 font-black text-[11px] uppercase tracking-widest text-white group-hover:text-[#064e3b] transition-colors duration-300">
              Mulai Berbagi
            </span>
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2 text-[#064e3b] hover:bg-slate-50 rounded-lg transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#064e3b]/20 backdrop-blur-sm z-[100] md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-[105] md:hidden pt-28 px-8 flex flex-col"
            >
              <div className="space-y-6">
                <p className="text-[10px] font-black text-[#d4af37] tracking-[0.4em] uppercase border-b border-slate-100 pb-4">
                  Navigasi Utama
                </p>

                <div className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between group"
                      >
                        <span className="text-xl font-black text-[#064e3b] group-hover:text-[#B2D766] transition-colors">
                          {link.name}
                        </span>
                        <ChevronRight className="text-[#B2D766] opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Mobile Section */}
              <div className="mt-auto mb-10 space-y-6">
                <Link
                  to="/donate"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-[#064e3b] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-[#064e3b]/20 active:scale-95 transition-transform"
                >
                  Mulai Berbagi
                  <Heart size={18} fill="#B2D766" className="text-[#B2D766]" />
                </Link>

                <p className="text-center text-[10px] text-slate-400 font-medium">
                  © 2026 BaitulMaal Pondok Digital <br />
                  Surgakan Indonesia dengan Al-Qur'an
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
