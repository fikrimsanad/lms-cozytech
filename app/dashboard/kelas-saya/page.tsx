"use client";

import Link from "next/link";
import { Play, Clock, Calendar, Users, ArrowRight, Star, ChevronRight, BookOpen, Video, Wifi } from "lucide-react";

const lastVideo = {
  judul: "PPN A : Perhitungan PPN Dan Ketentuan Umumnya",
  kelas: "Kelas Brevet Pajak AB",
  progress: 65,
  videoKe: 4,
  totalVideo: 24,
  durasi: "16 Menit tersisa",
  thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
};

const jadwalLive = [
  { judul: "Ketentuan Umum Perpajakan KUP A", kelas: "Brevet Pajak AB", tanggal: "2026-01-27", waktu: "09:00 - 12:15", status: "live" },
  { judul: "PPN A: Perhitungan PPN", kelas: "Brevet Pajak AB", tanggal: "2026-02-03", waktu: "09:00 - 12:15", status: "upcoming" },
  { judul: "UE5 Setup & Interface", kelas: "Unreal Engine 5", tanggal: "2026-02-10", waktu: "14:00 - 17:00", status: "upcoming" },
  { judul: "Live Review: Project Peserta", kelas: "Unity Game Dev", tanggal: "2026-02-15", waktu: "09:00 - 12:00", status: "upcoming" },
];

const kelasSaya = [
  { id: "1", nama: "Kelas Brevet Pajak AB", pengajar: "Dr. Ahmad Setiawan", progress: 65, videoSelesai: 15, totalVideo: 24, peserta: 20, periode: "Okt 2025 - Feb 2026", status: "active", thumbnail: "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
  { id: "2", nama: "Unity Game Development Mastery", pengajar: "Andi Wijaya", progress: 35, videoSelesai: 8, totalVideo: 24, peserta: 2847, periode: "Jan - Mar 2026", status: "active", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=srgb&fm=jpg&q=85&w=400" },
];

function formatTanggal(dateStr: string) {
  const d = new Date(dateStr);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function isToday(dateStr: string) {
  const today = new Date();
  const d = new Date(dateStr);
  return today.toDateString() === d.toDateString();
}

export default function KelasSayaPage() {
  return (
    <div className="space-y-6" data-testid="kelas-saya-page">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Kelas Saya</h1>
        <p className="text-gray-500 text-sm">Kelola dan pantau progress pembelajaran Anda</p>
      </div>

      {/* Section 1: Kegiatan Belajar Terakhir — PS5 featured card */}
      <div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Lanjutkan Belajar</h2>
        <Link href="/dashboard/kelas-saya/video-class" className="group relative rounded-2xl overflow-hidden h-52 flex hover:scale-[1.005] transition-all" data-testid="last-video-card">
          <img src={lastVideo.thumbnail} alt={lastVideo.judul} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          {/* Progress bar top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10"><div className="h-1 bg-cyan-400 rounded-r-full" style={{ width: `${lastVideo.progress}%` }} /></div>
          <div className="relative p-6 flex flex-col justify-between flex-1">
            <div>
              <span className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold rounded-full uppercase tracking-wider">Lanjut Belajar</span>
              <p className="text-cyan-400 text-xs font-semibold mt-3">{lastVideo.kelas}</p>
              <h3 className="text-white text-xl font-bold mt-1 leading-tight max-w-lg">{lastVideo.judul}</h3>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Lanjut Menonton</p>
                  <p className="text-zinc-400 text-xs">{lastVideo.durasi}</p>
                </div>
              </div>
              <div className="text-xs text-zinc-400 flex items-center gap-3 ml-auto">
                <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />Video {lastVideo.videoKe}/{lastVideo.totalVideo}</span>
                <span>{lastVideo.progress}% selesai</span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Section 2: Jadwal Live Session */}
      <div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Jadwal Live Session</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {jadwalLive.map((j, i) => {
            const isLive = j.status === "live" || isToday(j.tanggal);
            return (
              <div key={i} className={`relative rounded-2xl overflow-hidden p-4 transition-all hover:scale-[1.01] ${isLive ? "ring-2 ring-red-500/50" : ""}`} data-testid={`live-card-${i}`}>
                {/* Background */}
                <div className={`absolute inset-0 ${isLive ? "bg-gradient-to-br from-red-600 via-rose-600 to-orange-500" : "bg-gradient-to-br from-zinc-900 to-zinc-800"}`} />
                {isLive && <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10" />}
                <div className="relative flex items-center gap-4">
                  {/* Date box */}
                  <div className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0 ${isLive ? "bg-white/20 backdrop-blur-sm" : "bg-zinc-700"}`}>
                    <span className={`text-lg font-bold ${isLive ? "text-white" : "text-zinc-200"}`}>{new Date(j.tanggal).getDate()}</span>
                    <span className={`text-[10px] ${isLive ? "text-white/80" : "text-zinc-400"}`}>{["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][new Date(j.tanggal).getMonth()]}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {isLive && (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-white/25 backdrop-blur-sm rounded-full">
                          <Wifi className="w-3 h-3 text-white animate-pulse" />
                          <span className="text-white text-[10px] font-bold uppercase">Live Now</span>
                        </span>
                      )}
                      <span className={`text-xs ${isLive ? "text-white/60" : "text-zinc-500"}`}>{j.kelas}</span>
                    </div>
                    <p className={`text-sm font-bold truncate ${isLive ? "text-white" : "text-zinc-200"}`}>{j.judul}</p>
                    <p className={`text-xs mt-0.5 flex items-center gap-1 ${isLive ? "text-white/60" : "text-zinc-500"}`}>
                      <Clock className="w-3 h-3" />{j.waktu}
                    </p>
                  </div>
                  {/* Action */}
                  {isLive ? (
                    <button className="px-4 py-2 bg-white text-red-600 text-xs font-bold rounded-xl hover:bg-white/90 transition-colors shrink-0">
                      Join Now
                    </button>
                  ) : (
                    <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-zinc-400" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Kelas yang Diikuti */}
      <div>
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Kelas yang Diikuti</h2>
        <div className="space-y-3">
          {kelasSaya.map(kelas => (
            <div key={kelas.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.005] transition-all" data-testid={`kelas-saya-card-${kelas.id}`}>
              <div className="flex flex-col sm:flex-row">
                {/* Thumbnail */}
                <div className="w-full h-40 sm:w-52 sm:h-auto shrink-0 relative overflow-hidden">
                  <img src={kelas.thumbnail} alt={kelas.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  {/* Progress overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20"><div className="h-1 bg-emerald-400" style={{ width: `${kelas.progress}%` }} /></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-violet-600 transition-colors">{kelas.nama}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{kelas.pengajar}</p>
                      </div>
                      <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase">Aktif</span>
                    </div>
                    {/* Stats */}
                    <div className="flex items-center gap-5 mt-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{kelas.periode}</span>
                      <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />{kelas.videoSelesai}/{kelas.totalVideo} video</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{kelas.peserta} peserta</span>
                    </div>
                  </div>

                  {/* Progress + Action */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 flex-1 mr-4">
                      <div className="flex-1 h-2 bg-gray-100 rounded-full"><div className="h-2 bg-emerald-500 rounded-full transition-all" style={{ width: `${kelas.progress}%` }} /></div>
                      <span className="text-xs font-bold text-gray-900">{kelas.progress}%</span>
                    </div>
                    <Link href="/dashboard/kelas-saya/detail-class" className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition-colors" data-testid={`detail-kelas-btn-${kelas.id}`}>
                      Detail Kelas <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
