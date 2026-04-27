import Link from "next/link";
import { ArrowLeft, Star, Clock, Users, Play, Calendar, CheckCircle, BookOpen, ArrowRight, Award } from "lucide-react";

const kelasMap: Record<string, {
  nama: string; kategori: string; level: string; harga: number; rating: number; peserta: number; video: number; durasi: string; pengajar: string; pengajarBio: string;
  deskripsi: string; thumbnail: string; periode: string;
  syllabus: { judul: string; video: number; durasi: string }[];
  jadwalLive: { judul: string; tanggal: string; waktu: string }[];
  reviews: { nama: string; rating: number; teks: string }[];
}> = {
  "1": {
    nama: "Unity Game Development Mastery", kategori: "Unity Development", level: "Intermediate", harga: 3500000, rating: 4.9, peserta: 2847, video: 24, durasi: "12 Weeks", pengajar: "Andi Wijaya", pengajarBio: "Senior Game Developer dengan 10+ tahun pengalaman. Pernah bekerja di Ubisoft dan EA Games.", deskripsi: "Master Unity engine dari dasar hingga advanced. Buat game 2D dan 3D lengkap dengan C# scripting, physics engine, game mechanics, UI system, dan publishing.", thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", periode: "Jan - Mar 2026",
    syllabus: [{ judul: "Pengenalan Unity Engine", video: 4, durasi: "1.5 jam" }, { judul: "C# Scripting Fundamentals", video: 6, durasi: "3 jam" }, { judul: "Physics & Collision System", video: 5, durasi: "2.5 jam" }, { judul: "UI System & Game Mechanics", video: 5, durasi: "2.5 jam" }, { judul: "Project Akhir: Build Complete Game", video: 4, durasi: "3 jam" }],
    jadwalLive: [{ judul: "Live Q&A: Unity Basics", tanggal: "15 Feb 2026", waktu: "09:00 - 12:00" }, { judul: "Live Coding: C# Deep Dive", tanggal: "22 Feb 2026", waktu: "09:00 - 12:00" }, { judul: "Live Review: Project Peserta", tanggal: "1 Mar 2026", waktu: "14:00 - 17:00" }],
    reviews: [{ nama: "Ahmad Fadli", rating: 5, teks: "Kelas terbaik untuk belajar Unity dari nol. Instruktur sangat sabar dan detail." }, { nama: "Siti Rahma", rating: 5, teks: "Materi terstruktur dan live session sangat membantu pemahaman." }, { nama: "Budi Hartono", rating: 4, teks: "Bagus tapi beberapa video agak cepat. Overall recommended." }],
  },
  "2": {
    nama: "Unreal Engine 5 Masterclass", kategori: "Unreal Engine", level: "Advanced", harga: 4500000, rating: 4.8, peserta: 1520, video: 32, durasi: "16 Weeks", pengajar: "Budi Santoso", pengajarBio: "Lead Developer di studio game AAA Indonesia. Spesialis Unreal Engine dan C++.", deskripsi: "Pelajari Unreal Engine 5 untuk membuat game berkualitas AAA. Blueprint, C++, Nanite, Lumen, MetaHuman, dan World Partition.", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", periode: "Feb - May 2026",
    syllabus: [{ judul: "UE5 Fundamentals", video: 6, durasi: "3 jam" }, { judul: "Blueprint Programming", video: 8, durasi: "4 jam" }, { judul: "C++ Game Programming", video: 6, durasi: "3.5 jam" }, { judul: "Nanite & Lumen", video: 6, durasi: "3 jam" }, { judul: "Final Project", video: 6, durasi: "4 jam" }],
    jadwalLive: [{ judul: "Live: UE5 Setup & Interface", tanggal: "1 Mar 2026", waktu: "14:00 - 17:00" }, { judul: "Live: Blueprint Deep Dive", tanggal: "15 Mar 2026", waktu: "14:00 - 17:00" }],
    reviews: [{ nama: "Dewi Lestari", rating: 5, teks: "Materi sangat mendalam dan up to date dengan UE5 terbaru." }, { nama: "Eko Prasetyo", rating: 4, teks: "C++ section challenging tapi sangat bermanfaat." }],
  },
  "3": {
    nama: "3D Modeling & Animation Blender", kategori: "3D Art", level: "Beginner", harga: 2800000, rating: 4.7, peserta: 980, video: 18, durasi: "10 Weeks", pengajar: "Citra Dewi", pengajarBio: "3D Artist freelance dengan portofolio di game indie dan studio animasi.", deskripsi: "Master 3D modeling, texturing, rigging, dan animation menggunakan Blender untuk game assets dan cinematics.", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200", periode: "Jan - Mar 2026",
    syllabus: [{ judul: "Blender Basics", video: 4, durasi: "2 jam" }, { judul: "3D Modeling", video: 5, durasi: "3 jam" }, { judul: "Texturing & Materials", video: 4, durasi: "2.5 jam" }, { judul: "Rigging & Animation", video: 5, durasi: "3 jam" }],
    jadwalLive: [{ judul: "Live: Modeling Walkthrough", tanggal: "20 Jan 2026", waktu: "09:00 - 12:00" }],
    reviews: [{ nama: "Fani Kusuma", rating: 5, teks: "Blender jadi tidak menakutkan lagi setelah ikut kelas ini!" }],
  },
};

// Fallback for IDs not in map
const fallback = kelasMap["1"];

export default async function DetailKelasUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const kelas = kelasMap[id] || fallback;

  return (
    <div className="space-y-6" data-testid="detail-kelas-user">
      {/* Back + Title */}
      <div className="flex items-center gap-3">
        <Link href="/dashboard/cari-kelas" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-500" /></Link>
        <div>
          <span className="text-xs text-violet-600 font-semibold">{kelas.kategori}</span>
          <h1 className="text-2xl font-bold text-gray-900">{kelas.nama}</h1>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden h-52">
        <img src={kelas.thumbnail} alt={kelas.nama} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-400 fill-amber-400" />{kelas.rating}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4" />{kelas.peserta.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Play className="w-4 h-4" />{kelas.video} video</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{kelas.durasi}</span>
          </div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">{kelas.level}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Left Content */}
        <div className="col-span-8 space-y-5">
          {/* Deskripsi */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h2 className="text-base font-bold text-gray-900 mb-2">Tentang Kelas</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{kelas.deskripsi}</p>
          </div>

          {/* Pengajar */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-violet-500/20 rounded-full flex items-center justify-center text-violet-400 text-xl font-bold shrink-0">{kelas.pengajar.charAt(0)}</div>
            <div>
              <p className="text-white font-bold">{kelas.pengajar}</p>
              <p className="text-zinc-400 text-xs mt-0.5">{kelas.pengajarBio}</p>
            </div>
          </div>

          {/* Silabus */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">Silabus</h2>
            <div className="space-y-2">
              {kelas.syllabus.map((s, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="text-sm font-medium text-gray-900">{s.judul}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{s.video} video</span>
                    <span>{s.durasi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Jadwal Live */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">Jadwal Live Session</h2>
            <div className="space-y-2">
              {kelas.jadwalLive.map((j, i) => (
                <div key={i} className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                  <Calendar className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{j.judul}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{j.tanggal} | {j.waktu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h2 className="text-base font-bold text-gray-900 mb-3">Review Peserta</h2>
            <div className="space-y-3">
              {kelas.reviews.map((r, i) => (
                <div key={i} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{r.nama.charAt(0)}</div>
                    <span className="text-sm font-semibold text-gray-900">{r.nama}</span>
                    <div className="flex">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />)}</div>
                  </div>
                  <p className="text-sm text-gray-600 ml-9">{r.teks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar — Sticky pricing */}
        <div className="col-span-4">
          <div className="sticky top-20 space-y-4">
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-5 space-y-4">
              <div>
                <p className="text-zinc-400 text-xs">Harga Kelas</p>
                <p className="text-3xl font-bold text-white mt-1">Rp {kelas.harga.toLocaleString("id-ID")}</p>
              </div>
              <div className="text-xs text-zinc-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />Periode: {kelas.periode}</div>
              <Link href="/dashboard/pembayaran" className="block w-full py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold rounded-xl text-center text-sm hover:from-violet-700 hover:to-fuchsia-600 transition-all">
                Daftar Kelas Ini
              </Link>
              <div className="space-y-2.5 pt-3 border-t border-zinc-700 text-xs text-zinc-400">
                <div className="flex items-center gap-2"><Play className="w-3.5 h-3.5 text-violet-400" />{kelas.video} Video Pembelajaran</div>
                <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-violet-400" />{kelas.jadwalLive.length} Live Session</div>
                <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-violet-400" />{kelas.durasi} Durasi</div>
                <div className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5 text-violet-400" />{kelas.syllabus.length} Modul</div>
                <div className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-violet-400" />Sertifikat Kelulusan</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-violet-400" />Akses Selamanya</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
