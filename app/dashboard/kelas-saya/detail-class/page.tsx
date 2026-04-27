import Link from "next/link";
import { ArrowLeft, Clock, Play, Users, Calendar, Star, CheckCircle, BookOpen } from "lucide-react";
import { Progress } from "@radix-ui/themes/components/progress";

const kelas = {
  nama: "Kelas Brevet Pajak AB",
  deskripsi: "Pendidikan perpajakan tingkat lanjut yang mencakup seluruh aspek perpajakan di Indonesia. Kelas ini mempersiapkan peserta untuk menghadapi ujian sertifikasi Brevet A dan B.",
  pengajar: "Dr. Ahmad Setiawan",
  durasi: "12 Minggu",
  totalVideo: 24,
  totalLive: 6,
  peserta: 20,
  progress: 65,
  videoSelesai: 15,
};

const syllabus = [
  { judul: "Ketentuan Umum Perpajakan (KUP A)", video: 4, selesai: true },
  { judul: "PPN A: Perhitungan PPN", video: 5, selesai: true },
  { judul: "PPh Pasal 21", video: 5, selesai: true },
  { judul: "PPh Badan", video: 5, selesai: false },
  { judul: "Ujian & Sertifikasi", video: 5, selesai: false },
];

const jadwalLive = [
  { judul: "Ketentuan Umum Perpajakan KUP A", tanggal: "22 Nov 2025", waktu: "09:00 - 12:15", status: "selesai" },
  { judul: "PPN A: Perhitungan PPN", tanggal: "29 Nov 2025", waktu: "09:00 - 12:15", status: "selesai" },
  { judul: "PPh Pasal 21", tanggal: "6 Des 2025", waktu: "09:00 - 12:15", status: "selesai" },
  { judul: "PPh Badan", tanggal: "13 Des 2025", waktu: "14:00 - 17:00", status: "akan datang" },
  { judul: "Review & Latihan Soal", tanggal: "20 Des 2025", waktu: "09:00 - 12:15", status: "akan datang" },
  { judul: "Ujian Sertifikasi", tanggal: "27 Des 2025", waktu: "09:00 - 12:00", status: "akan datang" },
];

export default function DetailClassPage() {
  return (
    <div className="space-y-6" data-testid="detail-class-page">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/kelas-saya" className="p-2 hover:bg-gray-100 rounded-lg"><ArrowLeft className="w-5 h-5 text-gray-500" /></Link>
        <div><h1 className="text-2xl font-bold text-gray-900">{kelas.nama}</h1><p className="text-sm text-gray-500">{kelas.pengajar}</p></div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center"><Play className="w-5 h-5 text-blue-600" /></div><div><p className="text-xs text-gray-500">Video</p><p className="text-lg font-bold text-gray-900">{kelas.videoSelesai}/{kelas.totalVideo}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-emerald-600" /></div><div><p className="text-xs text-gray-500">Live Session</p><p className="text-lg font-bold text-gray-900">{kelas.totalLive}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-purple-600" /></div><div><p className="text-xs text-gray-500">Peserta</p><p className="text-lg font-bold text-gray-900">{kelas.peserta}</p></div></div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3"><div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center"><Clock className="w-5 h-5 text-amber-600" /></div><div><p className="text-xs text-gray-500">Durasi</p><p className="text-lg font-bold text-gray-900">{kelas.durasi}</p></div></div>
      </div>

      {/* Progress */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3"><h3 className="text-base font-semibold text-gray-900">Progress Anda</h3><span className="text-sm font-bold text-gray-900">{kelas.progress}%</span></div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full"><div className="h-2.5 bg-emerald-500 rounded-full transition-all" style={{ width: `${kelas.progress}%` }} /></div>
      </div>

      {/* Deskripsi */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2">Tentang Kelas</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{kelas.deskripsi}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Silabus */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Silabus</h3>
          <div className="space-y-2">
            {syllabus.map((s, i) => (
              <div key={i} className={`flex items-center justify-between px-4 py-3 rounded-lg ${s.selesai ? "bg-emerald-50" : "bg-gray-50"}`}>
                <div className="flex items-center gap-3">
                  {s.selesai ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <BookOpen className="w-5 h-5 text-gray-400" />}
                  <span className={`text-sm font-medium ${s.selesai ? "text-emerald-800" : "text-gray-700"}`}>{s.judul}</span>
                </div>
                <span className="text-xs text-gray-500">{s.video} video</span>
              </div>
            ))}
          </div>
          <Link href="/dashboard/kelas-saya/video-class" className="block w-full mt-4 py-2.5 bg-zinc-900 text-white text-sm text-center rounded-lg hover:bg-zinc-800 transition-colors">Lanjut Belajar</Link>
        </div>

        {/* Jadwal Live */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Jadwal Live Session</h3>
          <div className="space-y-2">
            {jadwalLive.map((j, i) => (
              <div key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg ${j.status === "selesai" ? "bg-gray-50" : "bg-blue-50"}`}>
                <Calendar className={`w-5 h-5 shrink-0 ${j.status === "selesai" ? "text-gray-400" : "text-blue-600"}`} />
                <div className="flex-1">
                  <p className={`text-sm font-medium ${j.status === "selesai" ? "text-gray-500" : "text-gray-900"}`}>{j.judul}</p>
                  <p className="text-xs text-gray-400">{j.tanggal} | {j.waktu}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${j.status === "selesai" ? "bg-gray-200 text-gray-600" : "bg-blue-100 text-blue-700"}`}>{j.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
