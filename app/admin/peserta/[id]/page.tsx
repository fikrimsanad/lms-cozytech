import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Calendar, BookOpen, Play, Users, CheckCircle, Clock, XCircle } from "lucide-react";

const peserta = {
  nama: "Ahmad Fadli",
  email: "ahmad@mail.com",
  telepon: "+62 812 3456 7890",
  alamat: "Jakarta, Indonesia",
  tanggalDaftar: "10 Jan 2026",
  totalKelas: 5,
  totalVideo: 98,
  totalSertifikat: 2,
};

const kelasDiikuti = [
  { nama: "Unity Game Development Mastery", progress: 98, videoSelesai: 23, totalVideo: 24, liveHadir: 6, totalLive: 6, soalSelesai: true },
  { nama: "Unreal Engine 5 Masterclass", progress: 72, videoSelesai: 23, totalVideo: 32, liveHadir: 4, totalLive: 6, soalSelesai: false },
  { nama: "3D Modeling & Animation Blender", progress: 55, videoSelesai: 10, totalVideo: 18, liveHadir: 3, totalLive: 5, soalSelesai: false },
  { nama: "Game Design Fundamentals", progress: 100, videoSelesai: 15, totalVideo: 15, liveHadir: 4, totalLive: 4, soalSelesai: true },
  { nama: "Mobile Game Development", progress: 20, videoSelesai: 4, totalVideo: 20, liveHadir: 1, totalLive: 3, soalSelesai: false },
];

export default function DetailPesertaPage() {
  const totalLiveHadir = kelasDiikuti.reduce((a, k) => a + k.liveHadir, 0);
  const totalLive = kelasDiikuti.reduce((a, k) => a + k.totalLive, 0);
  const totalSoalSelesai = kelasDiikuti.filter(k => k.soalSelesai).length;

  return (
    <div className="space-y-6" data-testid="detail-peserta-page">
      <div className="flex items-center gap-3">
        <Link href="/admin/peserta" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-500" /></Link>
        <h2 className="text-2xl font-bold text-gray-900">Detail Peserta</h2>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-start gap-6">
        <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">{peserta.nama.charAt(0)}</div>
        <div className="flex-1 space-y-3">
          <div><h3 className="text-xl font-bold text-gray-900">{peserta.nama}</h3><p className="text-sm text-gray-500">Terdaftar sejak {peserta.tanggalDaftar}</p></div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600"><Mail className="w-4 h-4 text-gray-400" />{peserta.email}</div>
            <div className="flex items-center gap-2 text-gray-600"><Phone className="w-4 h-4 text-gray-400" />{peserta.telepon}</div>
            <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-gray-400" />{peserta.alamat}</div>
            <div className="flex items-center gap-2 text-gray-600"><Calendar className="w-4 h-4 text-gray-400" />{peserta.tanggalDaftar}</div>
          </div>
        </div>
      </div>

      {/* Keaktifan Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center"><BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" /><p className="text-2xl font-bold text-gray-900">{peserta.totalKelas}</p><p className="text-xs text-gray-500">Kelas Diikuti</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center"><Users className="w-6 h-6 text-emerald-600 mx-auto mb-2" /><p className="text-2xl font-bold text-gray-900">{totalLiveHadir}/{totalLive}</p><p className="text-xs text-gray-500">Kehadiran Live</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center"><Play className="w-6 h-6 text-purple-600 mx-auto mb-2" /><p className="text-2xl font-bold text-gray-900">{peserta.totalVideo}</p><p className="text-xs text-gray-500">Video Ditonton</p></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 text-center"><CheckCircle className="w-6 h-6 text-amber-600 mx-auto mb-2" /><p className="text-2xl font-bold text-gray-900">{totalSoalSelesai}/{peserta.totalKelas}</p><p className="text-xs text-gray-500">Soal Latihan</p></div>
      </div>

      {/* Kelas Diikuti */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100"><h3 className="text-base font-semibold text-gray-900">Kelas yang Diikuti</h3></div>
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Kelas</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Video Course</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Live Session</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Soal Latihan</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Progress</th>
          </tr></thead>
          <tbody>{kelasDiikuti.map((k, i) => (
            <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-900 font-medium">{k.nama}</td>
              <td className="py-3 px-4 text-gray-600">{k.videoSelesai}/{k.totalVideo}</td>
              <td className="py-3 px-4 text-gray-600">{k.liveHadir}/{k.totalLive} hadir</td>
              <td className="py-3 px-4">{k.soalSelesai ? <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium"><CheckCircle className="w-3.5 h-3.5" />Selesai</span> : <span className="flex items-center gap-1 text-red-500 text-xs font-medium"><XCircle className="w-3.5 h-3.5" />Belum</span>}</td>
              <td className="py-3 px-4"><div className="flex items-center gap-2"><div className="w-20 h-1.5 bg-gray-100 rounded-full"><div className={`h-1.5 rounded-full ${k.progress >= 80 ? "bg-emerald-500" : k.progress >= 50 ? "bg-amber-500" : "bg-red-400"}`} style={{ width: `${k.progress}%` }} /></div><span className="text-xs text-gray-500">{k.progress}%</span></div></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
