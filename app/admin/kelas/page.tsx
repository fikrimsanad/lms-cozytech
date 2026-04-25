import Link from "next/link";
import { Users, Play, Star, Clock, Edit, Trash2, Search } from "lucide-react";

const kelasList = [
  { id: "1", nama: "Unity Game Development Mastery", kategori: "Unity Development", level: "Intermediate", harga: 3500000, peserta: 2847, video: 24, rating: 4.9, durasi: "12 Weeks", pengajar: "Andi Wijaya", status: "published", thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85&w=400" },
  { id: "2", nama: "Unreal Engine 5 Masterclass", kategori: "Unreal Engine", level: "Advanced", harga: 4500000, peserta: 1520, video: 32, rating: 4.8, durasi: "16 Weeks", pengajar: "Budi Santoso", status: "published", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  { id: "3", nama: "3D Modeling & Animation Blender", kategori: "3D Art", level: "Beginner", harga: 2800000, peserta: 980, video: 18, rating: 4.7, durasi: "10 Weeks", pengajar: "Citra Dewi", status: "published", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  { id: "4", nama: "Game Design Fundamentals", kategori: "Game Design", level: "Beginner", harga: 2000000, peserta: 750, video: 15, rating: 4.6, durasi: "8 Weeks", pengajar: "Dian Pratama", status: "published", thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  { id: "5", nama: "Mobile Game Development", kategori: "Unity Development", level: "Intermediate", harga: 3000000, peserta: 620, video: 20, rating: 4.8, durasi: "10 Weeks", pengajar: "Andi Wijaya", status: "draft", thumbnail: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  { id: "6", nama: "Pixel Art & 2D Game Asset", kategori: "3D Art", level: "Beginner", harga: 1500000, peserta: 2100, video: 12, rating: 4.9, durasi: "6 Weeks", pengajar: "Eka Sari", status: "published", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
];

export default function AdminKelasPage() {
  return (
    <div className="space-y-6" data-testid="admin-kelas-page">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Daftar Kelas</h2>
          <p className="text-gray-500 mt-1">Kelola semua kelas yang tersedia</p>
        </div>
        <Link href="/admin/kelas/buat" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800" data-testid="admin-kelas-create-button">
          + Buat Kelas Baru
        </Link>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Cari kelas..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400" data-testid="admin-kelas-search" />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {kelasList.map((kelas) => (
          <div key={kelas.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group" data-testid={`kelas-card-${kelas.id}`}>
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden">
              <img src={kelas.thumbnail} alt={kelas.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${kelas.status === "published" ? "bg-emerald-500 text-white" : "bg-amber-400 text-black"}`}>
                  {kelas.status === "published" ? "Published" : "Draft"}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span className="text-white text-xs font-medium">{kelas.rating}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-3">
              <div>
                <span className="text-xs text-blue-600 font-medium">{kelas.kategori}</span>
                <h3 className="text-sm font-bold text-gray-900 mt-1 line-clamp-2">{kelas.nama}</h3>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{kelas.peserta.toLocaleString()} peserta</span>
                <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5" />{kelas.video} video</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{kelas.durasi}</span>
                <span>{kelas.level}</span>
              </div>

              {/* Price + Pengajar */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="text-sm font-bold text-gray-900">Rp {kelas.harga.toLocaleString("id-ID")}</p>
                  <p className="text-xs text-gray-400">{kelas.pengajar}</p>
                </div>
                <div className="flex gap-1.5">
                  <Link href={`/admin/kelas/${kelas.id}`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" data-testid={`edit-kelas-${kelas.id}`}>
                    <Edit className="w-4 h-4 text-gray-600" />
                  </Link>
                  <button className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors" data-testid={`delete-kelas-${kelas.id}`}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
