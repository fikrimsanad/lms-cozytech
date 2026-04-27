import Link from "next/link";
import { Star, Clock, Users, Play, CheckCircle, Calendar, BookOpen, ArrowLeft } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const kelas = {
  nama: "Unity Game Development Mastery",
  kategori: "Unity Development",
  level: "Intermediate",
  harga: 3500000,
  rating: 4.9,
  peserta: 2847,
  video: 24,
  durasi: "12 Weeks",
  pengajar: { nama: "Andi Wijaya", bio: "Senior Game Developer dengan 10+ tahun pengalaman di industri game. Pernah bekerja di Ubisoft dan EA Games." },
  deskripsi: "Master Unity engine dari dasar hingga advanced. Kelas ini dirancang untuk Anda yang ingin serius berkarir sebagai game developer. Anda akan belajar membuat game 2D dan 3D lengkap dengan C# scripting, physics engine, game mechanics, UI system, dan publishing ke berbagai platform.",
  thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  syllabus: [
    { judul: "Pengenalan Unity Engine", video: 4, durasi: "1.5 jam" },
    { judul: "C# Scripting Fundamentals", video: 6, durasi: "3 jam" },
    { judul: "Physics & Collision System", video: 5, durasi: "2.5 jam" },
    { judul: "UI System & Game Mechanics", video: 5, durasi: "2.5 jam" },
    { judul: "Project Akhir: Build Complete Game", video: 4, durasi: "3 jam" },
  ],
  jadwalLive: [
    { judul: "Live Q&A: Unity Basics", tanggal: "15 Feb 2026", waktu: "09:00 - 12:00" },
    { judul: "Live Coding: C# Deep Dive", tanggal: "22 Feb 2026", waktu: "09:00 - 12:00" },
    { judul: "Live Review: Project Peserta", tanggal: "1 Mar 2026", waktu: "14:00 - 17:00" },
  ],
  reviews: [
    { nama: "Ahmad Fadli", rating: 5, teks: "Kelas terbaik untuk belajar Unity! Instruktur sangat sabar." },
    { nama: "Siti Rahma", rating: 5, teks: "Materi terstruktur dan live session sangat membantu." },
    { nama: "Budi Hartono", rating: 4, teks: "Bagus tapi beberapa video agak cepat. Overall recommended." },
  ],
};

export default function DetailKelasLandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20" data-testid="detail-kelas-landing">
        {/* Hero */}
        <div className="relative h-80 overflow-hidden">
          <img src={kelas.thumbnail} alt={kelas.nama} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link href="/kelas" className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-3"><ArrowLeft className="w-4 h-4" />Kembali ke Daftar Kelas</Link>
            <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">{kelas.kategori}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3">{kelas.nama}</h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-300">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" />{kelas.rating}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{kelas.peserta.toLocaleString()} peserta</span>
              <span className="flex items-center gap-1"><Play className="w-4 h-4" />{kelas.video} video</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{kelas.durasi}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div><h2 className="text-xl font-bold text-white mb-3">Tentang Kelas</h2><p className="text-gray-400 leading-relaxed">{kelas.deskripsi}</p></div>

              {/* Pengajar */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-lg">{kelas.pengajar.nama.charAt(0)}</div>
                <div><p className="text-white font-semibold">{kelas.pengajar.nama}</p><p className="text-gray-400 text-sm mt-0.5">{kelas.pengajar.bio}</p></div>
              </div>

              {/* Silabus */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Silabus</h2>
                <div className="space-y-2">
                  {kelas.syllabus.map((s, i) => (
                    <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3"><span className="w-7 h-7 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span><span className="text-white text-sm font-medium">{s.judul}</span></div>
                      <div className="flex items-center gap-4 text-xs text-gray-500"><span>{s.video} video</span><span>{s.durasi}</span></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jadwal Live */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Jadwal Live Session</h2>
                <div className="space-y-2">
                  {kelas.jadwalLive.map((j, i) => (
                    <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg px-5 py-4 flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div className="flex-1"><p className="text-white text-sm font-medium">{j.judul}</p><p className="text-gray-500 text-xs mt-0.5">{j.tanggal} | {j.waktu}</p></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Review Peserta</h2>
                <div className="space-y-3">
                  {kelas.reviews.map((r, i) => (
                    <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                      <div className="flex items-center gap-2 mb-2"><span className="text-white font-medium text-sm">{r.nama}</span><div className="flex">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />)}</div></div>
                      <p className="text-gray-400 text-sm">{r.teks}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Pricing Card */}
            <div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sticky top-24 space-y-5">
                <div><p className="text-gray-400 text-sm">Harga Kelas</p><p className="text-3xl font-bold text-white mt-1">Rp {kelas.harga.toLocaleString("id-ID")}</p></div>
                <Link href="/login" className="block w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg text-center hover:from-cyan-600 hover:to-emerald-600 transition-all">Daftar Sekarang</Link>
                <div className="space-y-3 pt-3 border-t border-gray-800 text-sm text-gray-400">
                  <div className="flex items-center gap-2"><Play className="w-4 h-4 text-cyan-400" />{kelas.video} Video Pembelajaran</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-cyan-400" />{kelas.jadwalLive.length} Live Session</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-400" />{kelas.durasi} Durasi</div>
                  <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-cyan-400" />{kelas.syllabus.length} Modul</div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-400" />Sertifikat Kelulusan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
