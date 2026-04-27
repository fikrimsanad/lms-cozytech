import Link from "next/link";
import { Search, Clock, Users, Star, Play, ArrowRight } from "lucide-react";

const kelasList = [
  { id: "1", nama: "Unity Game Development Mastery", pengajar: "Andi Wijaya", periode: "Jan - Mar 2026", harga: 3500000, peserta: 2847, video: 24, rating: 4.9, level: "Intermediate", thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { id: "2", nama: "Unreal Engine 5 Masterclass", pengajar: "Budi Santoso", periode: "Feb - May 2026", harga: 4500000, peserta: 1520, video: 32, rating: 4.8, level: "Advanced", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { id: "3", nama: "3D Modeling & Animation Blender", pengajar: "Citra Dewi", periode: "Jan - Mar 2026", harga: 2800000, peserta: 980, video: 18, rating: 4.7, level: "Beginner", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { id: "4", nama: "Game Design Fundamentals", pengajar: "Dian Pratama", periode: "Mar - Apr 2026", harga: 2000000, peserta: 750, video: 15, rating: 4.6, level: "Beginner", thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { id: "5", nama: "Mobile Game Development", pengajar: "Andi Wijaya", periode: "Feb - Apr 2026", harga: 3000000, peserta: 620, video: 20, rating: 4.8, level: "Intermediate", thumbnail: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
  { id: "6", nama: "Pixel Art & 2D Game Asset", pengajar: "Eka Sari", periode: "Jan - Feb 2026", harga: 1500000, peserta: 2100, video: 12, rating: 4.9, level: "Beginner", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=srgb&fm=jpg&q=85&w=600" },
];

const filters = ["Semua", "Beginner", "Intermediate", "Advanced"];

export default function CariKelasPage() {
  return (
    <div className="space-y-6" data-testid="cari-kelas-page">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Cari Kelas</h1>
        <p className="text-gray-500 text-sm">Temukan kelas yang sesuai dengan passion Anda</p>
      </div>

      {/* Promo Banner - PS5 style gradient */}
      <div className="relative rounded-2xl overflow-hidden h-36">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500" />
        <div className="absolute top-0 right-0 w-52 h-52 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-1/2 w-36 h-36 bg-white/5 rounded-full translate-y-12" />
        <div className="relative p-6 flex items-center justify-between h-full">
          <div>
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Promo Spesial</span>
            <h2 className="text-2xl font-bold text-white mt-2">Diskon 30% untuk Kelas Baru</h2>
            <p className="text-white/70 text-sm mt-1">Gunakan kode: GAMEDEV30</p>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="flex gap-3 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Cari kelas, pengajar, atau topik..." className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-gray-400" data-testid="cari-kelas-search" />
        </div>
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
          {filters.map(f => (
            <button key={f} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${f === "Semua" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Class Grid - PS5 Card Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kelasList.map(kelas => (
          <Link key={kelas.id} href={`/dashboard/cari-kelas/${kelas.id}`} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all" data-testid={`kelas-card-${kelas.id}`}>
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img src={kelas.thumbnail} alt={kelas.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-zinc-900/80 backdrop-blur-sm rounded-full">
                <span className="text-white text-[10px] font-semibold">{kelas.level}</span>
              </div>
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-white text-xs font-medium">{kelas.rating}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{kelas.peserta.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><Play className="w-3 h-3" />{kelas.video} video</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              <div>
                <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-violet-600 transition-colors">{kelas.nama}</h3>
                <p className="text-xs text-gray-500 mt-1">{kelas.pengajar}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{kelas.periode}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <p className="text-base font-bold text-gray-900">Rp {kelas.harga.toLocaleString("id-ID")}</p>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-600 transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
