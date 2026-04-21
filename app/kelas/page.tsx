import Link from "next/link";
import { Star, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function KelasPage() {
  const kelasData = [
    {
      nama: "Unity Game Development Mastery",
      kategori: "Unity Development",
      level: "Intermediate",
      harga: "Rp 3.500.000",
      rating: 4.9,
      siswa: "2.847 siswa",
      durasi: "12 Weeks",
      pengajar: "Andi Wijaya",
      deskripsi: "Master Unity engine dari dasar hingga advanced. Buat game 2D dan 3D dengan C# scripting, physics, dan game mechanics.",
    },
    {
      nama: "Unreal Engine 5 Masterclass",
      kategori: "Unreal Engine",
      level: "Advanced",
      harga: "Rp 4.500.000",
      rating: 4.8,
      siswa: "1.520 siswa",
      durasi: "16 Weeks",
      pengajar: "Budi Santoso",
      deskripsi: "Pelajari Unreal Engine 5 untuk membuat game AAA quality. Blueprint, C++, Nanite, Lumen.",
    },
    {
      nama: "3D Modeling & Animation Blender",
      kategori: "3D Art",
      level: "Beginner",
      harga: "Rp 2.800.000",
      rating: 4.7,
      siswa: "980 siswa",
      durasi: "10 Weeks",
      pengajar: "Citra Dewi",
      deskripsi: "Master 3D modeling, texturing, rigging, dan animation menggunakan Blender untuk game assets.",
    },
    {
      nama: "Game Design Fundamentals",
      kategori: "Game Design",
      level: "Beginner",
      harga: "Rp 2.000.000",
      rating: 4.6,
      siswa: "1.200 siswa",
      durasi: "8 Weeks",
      pengajar: "Dian Pratama",
      deskripsi: "Pelajari dasar-dasar game design, mechanics, level design, dan player psychology.",
    },
    {
      nama: "Mobile Game Development",
      kategori: "Unity Development",
      level: "Intermediate",
      harga: "Rp 3.000.000",
      rating: 4.8,
      siswa: "890 siswa",
      durasi: "10 Weeks",
      pengajar: "Andi Wijaya",
      deskripsi: "Buat mobile game untuk Android & iOS menggunakan Unity. Monetisasi dan publishing.",
    },
    {
      nama: "Pixel Art & 2D Game Asset",
      kategori: "3D Art",
      level: "Beginner",
      harga: "Rp 1.500.000",
      rating: 4.9,
      siswa: "2.100 siswa",
      durasi: "6 Weeks",
      pengajar: "Eka Sari",
      deskripsi: "Kuasai pembuatan pixel art dan 2D game assets untuk indie game development.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-20" data-testid="kelas-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Semua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kelas
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Temukan kelas yang sesuai dengan passion dan tujuan karir Anda
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Cari kelas..."
                className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
                data-testid="kelas-search-input"
              />
            </div>
          </div>

          {/* Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kelasData.map((kelas, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 rounded-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
                    alt={kelas.nama}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm font-semibold">{kelas.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-4 px-4">
                  <p className="text-cyan-500 text-sm">{kelas.kategori}</p>
                  <p className="text-white text-sm">{kelas.level}</p>
                </div>
                <div className="px-4 space-y-2">
                  <h4 className="text-white font-semibold">{kelas.nama}</h4>
                  <p className="text-gray-400 text-sm line-clamp-2">{kelas.deskripsi}</p>
                </div>
                <div className="flex justify-between py-2 px-4 mt-2">
                  <span className="text-gray-400 text-sm">{kelas.siswa}</span>
                  <span className="text-gray-400 text-sm">{kelas.durasi}</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4">
                  <p className="text-white text-xl font-bold">{kelas.harga}</p>
                  <p className="text-gray-400 text-sm">{kelas.pengajar}</p>
                </div>
                <div className="py-4 px-4">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-all text-sm"
                  >
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
