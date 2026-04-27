import Link from "next/link";
import { BookOpen, Play, Award, CreditCard, Users, Clock, Calendar, ChevronRight, ArrowRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6" data-testid="dashboard-greeting">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hello, User</h1>
        <p className="text-gray-500 text-sm">Selamat datang kembali di dashboard Anda</p>
      </div>

      {/* Stats Row — 5 cards horizontal scroll style */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
        <Link href="/dashboard/kelas-saya" className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-4 translate-x-4" />
          <BookOpen className="w-5 h-5 text-blue-400 mb-3" />
          <p className="text-2xl font-bold text-white">2</p>
          <p className="text-xs text-zinc-400 mt-0.5">Kelas Anda</p>
        </Link>
        <Link href="/dashboard/kelas-saya" className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-y-4 translate-x-4" />
          <Play className="w-5 h-5 text-purple-400 mb-3" />
          <p className="text-2xl font-bold text-white">32</p>
          <p className="text-xs text-zinc-400 mt-0.5">Total Video</p>
        </Link>
        <Link href="/dashboard/sertifikasi" className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all">
          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full -translate-y-4 translate-x-4" />
          <Award className="w-5 h-5 text-amber-400 mb-3" />
          <p className="text-2xl font-bold text-white">1</p>
          <p className="text-xs text-zinc-400 mt-0.5">Sertifikat</p>
        </Link>
        <Link href="/dashboard/pembayaran" className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all">
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -translate-y-4 translate-x-4" />
          <CreditCard className="w-5 h-5 text-emerald-400 mb-3" />
          <p className="text-lg font-bold text-white">Rp 6.3jt</p>
          <p className="text-xs text-zinc-400 mt-0.5">Transaksi</p>
        </Link>
        <Link href="/dashboard/komunitas" className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-4 overflow-hidden hover:scale-[1.02] transition-all">
          <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full -translate-y-4 translate-x-4" />
          <Users className="w-5 h-5 text-pink-400 mb-3" />
          <p className="text-2xl font-bold text-white">3</p>
          <p className="text-xs text-zinc-400 mt-0.5">Komunitas</p>
        </Link>
      </div>

      {/* Main Cards Grid — PS5 Style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        {/* Card 1: Video Terakhir — Large featured card */}
        <Link href="/dashboard/kelas-saya/video-class" className="col-span-1 lg:col-span-7 group relative rounded-2xl overflow-hidden h-52 lg:h-64 hover:scale-[1.01] transition-all" data-testid="card-last-video">
          <img
            src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=900"
            alt="Last video"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          {/* Progress bar at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <div className="h-1 bg-cyan-400 rounded-r-full" style={{ width: "65%" }} />
          </div>
          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-full uppercase tracking-wider">Lanjut Belajar</span>
          </div>
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-cyan-400 text-xs font-semibold mb-1">Kelas Brevet Pajak AB</p>
            <h3 className="text-white text-xl font-bold leading-tight">PPN A : Perhitungan PPN Dan Ketentuan Umumnya</h3>
            <div className="flex items-center gap-4 mt-3 text-xs text-zinc-300">
              <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5" />Video 4 dari 24</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />16 Menit tersisa</span>
              <span>65% selesai</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                <Play className="w-5 h-5 text-white ml-0.5" />
              </div>
              <span className="text-white/70 text-sm group-hover:text-white transition-colors">Lanjut Menonton</span>
            </div>
          </div>
        </Link>

        {/* Card 2: Jadwal Live Session Terdekat */}
        <Link href="/dashboard/kelas-saya" className="col-span-1 lg:col-span-5 group relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-2xl overflow-hidden h-52 lg:h-64 p-5 flex flex-col justify-between hover:scale-[1.01] transition-all" data-testid="card-live-session">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Live Session Terdekat</span>
            </div>
            <h3 className="text-white text-xl font-bold mt-3 leading-tight">Ketentuan Umum Perpajakan KUP A</h3>
            <p className="text-white/60 text-sm mt-1">Kelas Brevet Pajak AB</p>
          </div>
          <div>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />22 Nov 2025</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />09:00 - 12:15</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm font-medium group-hover:bg-white/30 transition-colors">
                Lihat Detail
              </div>
              <span className="text-white/50 text-xs">3 hari lagi</span>
            </div>
          </div>
        </Link>

        {/* Card 3: Sertifikasi */}
        <Link href="/dashboard/sertifikasi" className="col-span-1 lg:col-span-4 group relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl overflow-hidden h-48 p-5 flex flex-col justify-between hover:scale-[1.01] transition-all" data-testid="card-sertifikasi">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div>
            <Award className="w-8 h-8 text-white/90 mb-2" />
            <h3 className="text-white text-lg font-bold">Sertifikasi</h3>
            <p className="text-white/70 text-sm mt-1">Raih sertifikat profesional untuk tingkatkan karir Anda</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-2xl font-bold">1</span>
              <span className="text-white/60 text-xs">sertifikat<br/>dimiliki</span>
            </div>
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </Link>

        {/* Card 4: Komunitas */}
        <Link href="/dashboard/komunitas" className="col-span-1 lg:col-span-4 group relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-2xl overflow-hidden h-48 p-5 flex flex-col justify-between hover:scale-[1.01] transition-all" data-testid="card-komunitas">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div>
            <Users className="w-8 h-8 text-white/90 mb-2" />
            <h3 className="text-white text-lg font-bold">Komunitas</h3>
            <p className="text-white/70 text-sm mt-1">Bergabung dengan komunitas dan perluas networking</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-2xl font-bold">3</span>
              <span className="text-white/60 text-xs">komunitas<br/>diikuti</span>
            </div>
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </Link>

        {/* Card 5: Cari Kelas Baru */}
        <Link href="/dashboard/cari-kelas" className="col-span-1 lg:col-span-4 group relative bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 rounded-2xl overflow-hidden h-48 p-5 flex flex-col justify-between hover:scale-[1.01] transition-all" data-testid="card-cari-kelas">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div>
            <BookOpen className="w-8 h-8 text-white/90 mb-2" />
            <h3 className="text-white text-lg font-bold">Jelajahi Kelas</h3>
            <p className="text-white/70 text-sm mt-1">Temukan kelas baru dan mulai perjalanan belajar Anda</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-xs">24+ kelas tersedia</span>
            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
