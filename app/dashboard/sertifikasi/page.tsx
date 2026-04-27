import Link from "next/link";
import { Award, CheckCircle, Clock, Calendar, Download, ArrowRight, Star, BookOpen } from "lucide-react";

const sertifikatSaya = [
  { nama: "Unity Game Developer Professional", provider: "CozyTech Academy", tanggalLulus: "12 Feb 2025", berlaku: "12 Feb 2028", certId: "CERT-UGD-2025-001", progress: 100 },
  { nama: "Game Design Foundations", provider: "CozyTech Academy", tanggalLulus: "5 Nov 2024", berlaku: "5 Nov 2027", certId: "CERT-GDF-2024-042", progress: 100 },
];

const sertifikasiTersedia = [
  { nama: "Unreal Engine 5 Developer", provider: "CozyTech Academy", durasi: "8 Minggu", level: "Advanced", harga: 4500000, skills: ["UE5", "Blueprint", "C++", "Nanite"], peserta: 320 },
  { nama: "3D Game Artist Professional", provider: "CozyTech Academy", durasi: "6 Minggu", level: "Intermediate", harga: 3500000, skills: ["Blender", "Texturing", "Rigging", "Animation"], peserta: 180 },
  { nama: "Mobile Game Developer", provider: "CozyTech Academy", durasi: "4 Minggu", level: "Intermediate", harga: 2500000, skills: ["Unity", "Android", "iOS", "Monetisasi"], peserta: 250 },
  { nama: "Pixel Art & 2D Asset Creator", provider: "CozyTech Academy", durasi: "3 Minggu", level: "Beginner", harga: 1500000, skills: ["Pixel Art", "Aseprite", "Sprite Sheet", "Animation"], peserta: 420 },
];

const gradients = [
  "from-indigo-600 via-blue-600 to-cyan-500",
  "from-emerald-600 via-teal-500 to-cyan-500",
  "from-amber-500 via-orange-500 to-red-500",
  "from-violet-600 via-purple-600 to-fuchsia-500",
];

export default function SertifikasiPage() {
  return (
    <div className="space-y-8" data-testid="sertifikasi-page">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Sertifikasi</h1>
        <p className="text-gray-500 text-sm">Raih sertifikat profesional untuk tingkatkan karir Anda</p>
      </div>

      {/* Sertifikat Saya — Featured cards */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-gray-900">Sertifikat Saya</h2>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">{sertifikatSaya.length}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sertifikatSaya.map((s, i) => (
            <div key={i} className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-5 overflow-hidden group hover:scale-[1.01] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-amber-500/5 rounded-full translate-y-6 -translate-x-6" />
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold">{s.nama}</h3>
                    <p className="text-zinc-400 text-xs mt-0.5">{s.provider}</p>
                  </div>
                  <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full"><CheckCircle className="w-3 h-3" />Lulus</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
                  <div><p className="text-zinc-500">Tanggal Lulus</p><p className="text-zinc-200 font-medium mt-0.5">{s.tanggalLulus}</p></div>
                  <div><p className="text-zinc-500">Berlaku Hingga</p><p className="text-zinc-200 font-medium mt-0.5">{s.berlaku}</p></div>
                  <div><p className="text-zinc-500">Certificate ID</p><p className="text-zinc-200 font-mono font-medium mt-0.5">{s.certId}</p></div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-xl transition-colors">
                  <Download className="w-3.5 h-3.5" />Download Sertifikat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sertifikasi Tersedia */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-bold text-gray-900">Sertifikasi Tersedia</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sertifikasiTersedia.map((s, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden group hover:scale-[1.01] transition-all`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
              <div className="relative p-5 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold rounded-full">{s.level}</span>
                    <span className="px-2.5 py-0.5 bg-white/10 text-white/80 text-[10px] font-medium rounded-full flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{s.durasi}</span>
                  </div>
                  <h3 className="text-white text-lg font-bold leading-tight">{s.nama}</h3>
                  <p className="text-white/60 text-xs mt-1">{s.provider} &bull; {s.peserta} peserta</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {s.skills.map((sk, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/10 text-white/80 text-[10px] rounded-md">{sk}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-white text-xl font-bold">Rp {s.harga.toLocaleString("id-ID")}</p>
                  <button className="flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-xs font-semibold rounded-xl transition-colors">
                    Daftar <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
