import HomeLayout from "./layouts/HomeLayout";

const ProgramPage = () => {
  return (
    <HomeLayout>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-4">
            Pilar Pergerakan
          </h2>
          <h1 className="text-5xl font-black text-[#B2D766] mb-16 tracking-tighter">
            Program Pemberdayaan
          </h1>

          {/* Pilar 1 Grid - Islamic Social Impact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                name: "Indonesia Mengaji",
                detail: "Pemberantasan buta huruf Al-Qur'an berbasis masjid.",
              },
              {
                name: "Indonesia Berwakaf",
                detail: "Pengembangan wakaf produktif & edukasi wakaf modern.",
              },
              {
                name: "Cetak Huffadz",
                detail:
                  "Mencetak generasi penghafal Al-Qur'an unggul & berdaya.",
              },
              {
                name: "Indonesia Berbagi",
                detail: "Layanan sosial bantuan pangan & kesehatan masyarakat.",
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="group p-8 rounded-[32px] bg-[#B2D766]/5 border border-[#B2D766]/10 hover:bg-[#B2D766] transition-all duration-300 cursor-default"
              >
                {/* Teks berganti ke hijau tua saat kartu di-hover agar terbaca jelas di atas hijau terang */}
                <h3 className="font-black text-[#064e3b] group-hover:text-[#064e3b] text-lg mb-3">
                  {prog.name}
                </h3>
                <p className="text-slate-500 group-hover:text-[#064e3b]/80 text-sm leading-relaxed">
                  {prog.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Pilar 2 - Academy Section */}
          {/* Box utama menggunakan B2D766 dengan teks gelap untuk aksesibilitas */}
          <div className="bg-[#B2D766] rounded-[50px] p-12 overflow-hidden relative text-[#064e3b]">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-[#064e3b] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Pilar 2: Digital Talent
                </span>
                <h2 className="text-4xl font-black mt-6 mb-6 leading-tight tracking-tighter">
                  Digital Fundraising & <br /> Pondok Academy
                </h2>
                <p className="text-[#064e3b]/70 mb-8 font-medium">
                  Program pembinaan talenta digital (desain, IT, media, konten)
                  untuk membangun kompetensi generasi muda berbasis masjid.
                </p>
                <button className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#d4af37] transition-all shadow-lg">
                  Daftar Academy
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/30 p-6 rounded-3xl backdrop-blur-md border border-white/20">
                  <p className="text-4xl font-black text-[#064e3b]">3.600</p>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#064e3b]/60">
                    Alumni Fundraiser/Thn
                  </p>
                </div>
                <div className="bg-white/30 p-6 rounded-3xl backdrop-blur-md border border-white/20">
                  <p className="text-4xl font-black text-[#064e3b]">500</p>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-[#064e3b]/60">
                    Santri Digital/Thn
                  </p>
                </div>
              </div>
            </div>

            {/* Elemen Dekoratif di Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProgramPage;
