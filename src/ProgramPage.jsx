import HomeLayout from "./layouts/HomeLayout";

const ProgramPage = () => {
  return (
    <HomeLayout>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase mb-4">
            Pilar Pergerakan
          </h2>
          <h1 className="text-5xl font-black text-[#064e3b] mb-16">
            Program Pemberdayaan [cite: 339, 362]
          </h1>

          {/* Pilar 1 Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                name: "Indonesia Mengaji",
                detail:
                  "Pemberantasan buta huruf Al-Qur'an berbasis masjid[cite: 340].",
              },
              {
                name: "Indonesia Berwakaf",
                detail:
                  "Pengembangan wakaf produktif & edukasi wakaf modern[cite: 341].",
              },
              {
                name: "Cetak Huffadz",
                detail:
                  "Mencetak generasi penghafal Al-Qur'an unggul & berdaya[cite: 342].",
              },
              {
                name: "Indonesia Berbagi",
                detail:
                  "Layanan sosial bantuan pangan & kesehatan masyarakat[cite: 343, 344].",
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="group p-8 rounded-[32px] bg-[#ecf3f0] border border-emerald-100 hover:bg-[#064e3b] transition-all cursor-default"
              >
                <h3 className="font-black text-[#064e3b] group-hover:text-white text-lg mb-3">
                  {prog.name}
                </h3>
                <p className="text-slate-500 group-hover:text-emerald-100/70 text-sm leading-relaxed">
                  {prog.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Pilar 2 - Academy Section */}
          <div className="bg-[#064e3b] rounded-[50px] p-12 overflow-hidden relative text-white">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="bg-[#d4af37] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Pilar 2: Digital Talent [cite: 353, 355]
                </span>
                <h2 className="text-4xl font-black mt-6 mb-6 leading-tight">
                  Digital Fundraising & Pondok Academy [cite: 363, 365]
                </h2>
                <p className="text-emerald-100/70 mb-8">
                  Program pembinaan talenta digital (desain, IT, media, konten)
                  untuk membangun kompetensi generasi muda berbasis masjid[cite:
                  366].
                </p>
                <button className="bg-white text-[#064e3b] px-8 py-4 rounded-2xl font-bold hover:bg-[#d4af37] hover:text-white transition-all">
                  Daftar Academy
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md">
                  <p className="text-3xl font-black text-[#d4af37]">3.600</p>
                  <p className="text-[10px] uppercase font-bold tracking-tighter">
                    Alumni Fundraiser/Thn [cite: 368]
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md">
                  <p className="text-3xl font-black text-[#d4af37]">500</p>
                  <p className="text-[10px] uppercase font-bold tracking-tighter">
                    Santri Digital/Thn [cite: 369]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProgramPage;
