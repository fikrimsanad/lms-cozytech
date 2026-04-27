"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Users, Play, Clock, Calendar, CheckCircle, BookOpen, Star, Eye, Download, Upload, FileText, UserCheck, UserX, Search } from "lucide-react";

const kelasData = {
  nama: "Unity Game Development Mastery",
  kategori: "Unity Development",
  deskripsi: "Master Unity engine dari dasar hingga advanced. Buat game 2D dan 3D dengan C# scripting, physics, dan game mechanics.",
  pengajar: "Andi Wijaya",
  durasi: "12 Weeks",
  totalPeserta: 45,
  totalVideo: 24,
  totalLive: 6,
};

const pesertaList = [
  { nama: "Ahmad Fadli", progress: 98, videoSelesai: 23, liveHadir: 6, soalSelesai: true },
  { nama: "Siti Rahma", progress: 85, videoSelesai: 20, liveHadir: 5, soalSelesai: true },
  { nama: "Budi Hartono", progress: 72, videoSelesai: 17, liveHadir: 4, soalSelesai: false },
  { nama: "Dewi Lestari", progress: 65, videoSelesai: 15, liveHadir: 5, soalSelesai: true },
  { nama: "Eko Prasetyo", progress: 50, videoSelesai: 12, liveHadir: 3, soalSelesai: false },
  { nama: "Fani Kusuma", progress: 40, videoSelesai: 9, liveHadir: 2, soalSelesai: false },
  { nama: "Galih Pratama", progress: 30, videoSelesai: 7, liveHadir: 4, soalSelesai: false },
  { nama: "Hana Putri", progress: 92, videoSelesai: 22, liveHadir: 6, soalSelesai: true },
];

export default function AdminDetailKelasPage() {
  const [tab, setTab] = useState<"peserta" | "soal">("peserta");
  const sudahKumpul = pesertaList.filter(p => p.soalSelesai);
  const belumKumpul = pesertaList.filter(p => !p.soalSelesai);

  return (
    <div className="space-y-6" data-testid="admin-detail-kelas">
      <div className="flex items-center gap-3">
        <Link href="/admin/kelas" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-500" /></Link>
        <div><h2 className="text-2xl font-bold text-gray-900">{kelasData.nama}</h2><p className="text-gray-500 text-sm">{kelasData.kategori} &bull; {kelasData.pengajar}</p></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-blue-600" /></div><div><p className="text-xs text-gray-500">Peserta</p><p className="text-xl font-bold text-gray-900">{kelasData.totalPeserta}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-purple-600" /></div><div><p className="text-xs text-gray-500">Video</p><p className="text-xl font-bold text-gray-900">{kelasData.totalVideo}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-emerald-600" /></div><div><p className="text-xs text-gray-500">Live Session</p><p className="text-xl font-bold text-gray-900">{kelasData.totalLive}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-amber-600" /></div><div><p className="text-xs text-gray-500">Durasi</p><p className="text-xl font-bold text-gray-900">{kelasData.durasi}</p></div></div>
      </div>

      {/* Deskripsi */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2">Deskripsi Kelas</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{kelasData.deskripsi}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button onClick={() => setTab("peserta")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "peserta" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`} data-testid="tab-peserta-progress"><Users className="w-4 h-4" />Data Peserta & Progres</button>
        <button onClick={() => setTab("soal")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "soal" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`} data-testid="tab-soal-latihan"><FileText className="w-4 h-4" />Pengerjaan Soal Latihan</button>
      </div>

      {/* Tab Peserta */}
      {tab === "peserta" && (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-100"><h3 className="text-base font-semibold text-gray-900">Peserta & Progres Kegiatan</h3></div>
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Peserta</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Video Course</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Live Session</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Progress</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Aksi</th>
            </tr></thead>
            <tbody>{pesertaList.map((p, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4"><div className="flex items-center gap-2"><div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{p.nama.charAt(0)}</div><span className="text-gray-900 font-medium">{p.nama}</span></div></td>
                <td className="py-3 px-4 text-gray-600">{p.videoSelesai}/{kelasData.totalVideo} video</td>
                <td className="py-3 px-4 text-gray-600">{p.liveHadir}/{kelasData.totalLive} hadir</td>
                <td className="py-3 px-4"><div className="flex items-center gap-2"><div className="w-20 h-1.5 bg-gray-100 rounded-full"><div className={`h-1.5 rounded-full ${p.progress >= 80 ? "bg-emerald-500" : p.progress >= 50 ? "bg-amber-500" : "bg-red-400"}`} style={{ width: `${p.progress}%` }} /></div><span className="text-xs text-gray-500">{p.progress}%</span></div></td>
                <td className="py-3 px-4"><Link href="/admin/peserta/1" className="p-1.5 hover:bg-gray-100 rounded-lg inline-flex"><Eye className="w-4 h-4 text-gray-500" /></Link></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}

      {/* Tab Soal */}
      {tab === "soal" && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2"><UserCheck className="w-4 h-4 text-emerald-600" /><h3 className="text-base font-semibold text-gray-900">Sudah Mengumpulkan ({sudahKumpul.length})</h3></div>
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left py-2.5 px-4 text-gray-500 font-medium">Peserta</th><th className="text-left py-2.5 px-4 text-gray-500 font-medium">Status</th><th className="text-left py-2.5 px-4 text-gray-500 font-medium">Aksi</th></tr></thead>
              <tbody>{sudahKumpul.map((p, i) => (
                <tr key={i} className="border-b border-gray-50"><td className="py-2.5 px-4 text-gray-900 font-medium">{p.nama}</td><td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">Sudah Dikumpulkan</span></td><td className="py-2.5 px-4"><button className="text-blue-600 text-xs hover:underline flex items-center gap-1"><Download className="w-3 h-3" />Download</button></td></tr>
              ))}</tbody>
            </table>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 flex items-center gap-2"><UserX className="w-4 h-4 text-red-500" /><h3 className="text-base font-semibold text-gray-900">Belum Mengumpulkan ({belumKumpul.length})</h3></div>
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200"><th className="text-left py-2.5 px-4 text-gray-500 font-medium">Peserta</th><th className="text-left py-2.5 px-4 text-gray-500 font-medium">Status</th></tr></thead>
              <tbody>{belumKumpul.map((p, i) => (
                <tr key={i} className="border-b border-gray-50"><td className="py-2.5 px-4 text-gray-900 font-medium">{p.nama}</td><td className="py-2.5 px-4"><span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs rounded-full font-medium">Belum Dikumpulkan</span></td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
