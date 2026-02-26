import HomeLayout from "./layouts/HomeLayout";

const ImpactPage = () => {
  return (
    <HomeLayout>
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#064e3b] text-4xl font-black mb-6 uppercase tracking-tighter">
              Dampak Perubahan (BPD Impact) [cite: 234]
            </h2>
            <p className="text-slate-500">
              Setiap inisiatif dirancang sebagai ekosistem yang saling terhubung
              untuk mewujudkan masjid sebagai pusat inovasi sosial[cite: 307,
              308].
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm text-center border-b-8 border-[#064e3b]">
              <p className="text-5xl font-black text-[#064e3b] mb-2">23 JT</p>
              <p className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">
                Penghafal Al-Qur'an [cite: 347]
              </p>
              <p className="text-sm text-slate-500 italic">
                Target pencetakan Huffadz melalui jejaring rumah tahfidz
                nasional.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm text-center border-b-8 border-[#d4af37]">
              <p className="text-5xl font-black text-[#d4af37] mb-2">1.000</p>
              <p className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">
                Titik Aksi Masjid [cite: 388]
              </p>
              <p className="text-sm text-slate-500 italic">
                Tersebar di seluruh Indonesia sebagai pusat layanan umat[cite:
                389].
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-12 rounded-[40px] shadow-sm text-center border-b-8 border-[#064e3b]">
              <p className="text-5xl font-black text-[#064e3b] mb-2">20.000</p>
              <p className="font-bold text-slate-400 text-xs uppercase tracking-[0.2em] mb-4">
                Relawan Digital [cite: 386]
              </p>
              <p className="text-sm text-slate-500 italic">
                Mesin penggerak dakwah digital & kemanusiaan strategis[cite:
                390].
              </p>
            </div>
          </div>

          {/* Kawasan Qur'ani Impact */}
          <div className="mt-20 p-12 bg-white rounded-[40px] border border-emerald-50">
            <h3 className="text-2xl font-black text-[#064e3b] mb-10 uppercase">
              Proyeksi Pembangunan[cite: 345]:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">114</p>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Kawasan Qur'ani [cite: 348]
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">6.236</p>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Rumah Qur'ani [cite: 349]
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">10.000</p>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Konten Edukasi/Thn [cite: 387]
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">5.000</p>
                <p className="text-xs font-bold text-slate-400 uppercase">
                  Relawan Sosial Aktif [cite: 385]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ImpactPage;
