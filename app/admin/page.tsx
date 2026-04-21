"use client";

import { useState } from "react";
import { BookOpen, Users, Play, TrendingUp, DollarSign, CheckCircle, Megaphone, FileText, MessageSquare, ArrowUpDown } from "lucide-react";

// --- TAB 1: Kegiatan Belajar ---
function TabBelajar() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center"><BookOpen className="w-6 h-6 text-blue-600" /></div>
          <div><p className="text-sm text-gray-500">Jumlah Kelas</p><p className="text-2xl font-bold text-gray-900">24</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center"><Users className="w-6 h-6 text-emerald-600" /></div>
          <div><p className="text-sm text-gray-500">Jumlah Peserta</p><p className="text-2xl font-bold text-gray-900">12.500</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center"><Play className="w-6 h-6 text-purple-600" /></div>
          <div><p className="text-sm text-gray-500">Jumlah Video</p><p className="text-2xl font-bold text-gray-900">342</p></div>
        </div>
      </div>
      {/* Ranking Peserta */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Ranking Peserta</h3>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-gray-200">
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">#</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Nama</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Kelas Diikuti</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Progress</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Skor</th>
          </tr></thead>
          <tbody>
            {[
              { nama: "Ahmad Fadli", kelas: 5, progress: 98, skor: 950 },
              { nama: "Siti Rahma", kelas: 4, progress: 95, skor: 920 },
              { nama: "Budi Hartono", kelas: 4, progress: 92, skor: 890 },
              { nama: "Dewi Lestari", kelas: 3, progress: 88, skor: 860 },
              { nama: "Eko Prasetyo", kelas: 3, progress: 85, skor: 830 },
            ].map((p, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2.5 px-3 font-medium text-gray-900">{i + 1}</td>
                <td className="py-2.5 px-3 text-gray-900">{p.nama}</td>
                <td className="py-2.5 px-3 text-gray-600">{p.kelas}</td>
                <td className="py-2.5 px-3"><div className="flex items-center gap-2"><div className="w-20 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${p.progress}%` }} /></div><span className="text-gray-600 text-xs">{p.progress}%</span></div></td>
                <td className="py-2.5 px-3 font-semibold text-gray-900">{p.skor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Ranking Kelas Favorit */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Kelas Favorit (Paling Banyak Dibeli)</h3>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-gray-200">
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">#</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Nama Kelas</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Peserta</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Rating</th>
            <th className="text-left py-2.5 px-3 text-gray-500 font-medium">Pendapatan</th>
          </tr></thead>
          <tbody>
            {[
              { nama: "Unity Game Development Mastery", peserta: 2847, rating: 4.9, pendapatan: "Rp 9.964.500.000" },
              { nama: "Unreal Engine 5 Masterclass", peserta: 1520, rating: 4.8, pendapatan: "Rp 6.840.000.000" },
              { nama: "3D Modeling & Animation Blender", peserta: 980, rating: 4.7, pendapatan: "Rp 2.744.000.000" },
              { nama: "Game Design Fundamentals", peserta: 750, rating: 4.6, pendapatan: "Rp 1.500.000.000" },
              { nama: "Mobile Game Development", peserta: 620, rating: 4.8, pendapatan: "Rp 1.860.000.000" },
            ].map((k, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2.5 px-3 font-medium text-gray-900">{i + 1}</td>
                <td className="py-2.5 px-3 text-gray-900">{k.nama}</td>
                <td className="py-2.5 px-3 text-gray-600">{k.peserta.toLocaleString()}</td>
                <td className="py-2.5 px-3 text-amber-500 font-medium">{k.rating}</td>
                <td className="py-2.5 px-3 text-emerald-600 font-semibold">{k.pendapatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- TAB 2: Transaksi ---
function TabTransaksi() {
  const [sortCol, setSortCol] = useState<string>("tanggal");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const transaksi = [
    { id: "TRX-001", peserta: "Ahmad Fadli", kelas: "Unity Game Dev", jumlah: 3500000, status: "sukses", tanggal: "2026-01-15" },
    { id: "TRX-002", peserta: "Siti Rahma", kelas: "Unreal Engine 5", jumlah: 4500000, status: "sukses", tanggal: "2026-01-14" },
    { id: "TRX-003", peserta: "Budi Hartono", kelas: "3D Blender", jumlah: 2800000, status: "pending", tanggal: "2026-01-13" },
    { id: "TRX-004", peserta: "Dewi Lestari", kelas: "Game Design", jumlah: 2000000, status: "sukses", tanggal: "2026-01-12" },
    { id: "TRX-005", peserta: "Eko Prasetyo", kelas: "Mobile Game", jumlah: 3000000, status: "gagal", tanggal: "2026-01-11" },
    { id: "TRX-006", peserta: "Fani Kusuma", kelas: "Unity Game Dev", jumlah: 3500000, status: "sukses", tanggal: "2026-01-10" },
    { id: "TRX-007", peserta: "Galih Pratama", kelas: "Pixel Art", jumlah: 1500000, status: "sukses", tanggal: "2026-01-09" },
  ];

  const totalNilai = transaksi.reduce((a, t) => a + t.jumlah, 0);
  const totalSukses = transaksi.filter(t => t.status === "sukses").length;

  const sorted = [...transaksi].sort((a, b) => {
    const va = a[sortCol as keyof typeof a];
    const vb = b[sortCol as keyof typeof b];
    if (typeof va === "number" && typeof vb === "number") return sortDir === "asc" ? va - vb : vb - va;
    return sortDir === "asc" ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
  });

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("desc"); }
  };

  const SortHeader = ({ col, label }: { col: string; label: string }) => (
    <th className="text-left py-2.5 px-3 text-gray-500 font-medium cursor-pointer select-none hover:text-gray-900" onClick={() => toggleSort(col)}>
      <span className="flex items-center gap-1">{label}<ArrowUpDown className="w-3 h-3" /></span>
    </th>
  );

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center"><DollarSign className="w-6 h-6 text-emerald-600" /></div>
          <div><p className="text-sm text-gray-500">Total Nilai Transaksi</p><p className="text-2xl font-bold text-gray-900">Rp {totalNilai.toLocaleString("id-ID")}</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
          <div><p className="text-sm text-gray-500">Transaksi Sukses</p><p className="text-2xl font-bold text-gray-900">{totalSukses} / {transaksi.length}</p></div>
        </div>
      </div>
      {/* Grafik Transaksi */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Grafik Transaksi Bulanan</h3>
        <div className="flex items-end gap-3 h-44 px-2">
          {[
            { bulan: "Aug", val: 35 }, { bulan: "Sep", val: 52 }, { bulan: "Oct", val: 48 },
            { bulan: "Nov", val: 65 }, { bulan: "Dec", val: 72 }, { bulan: "Jan", val: 88 },
          ].map((b, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xs font-medium text-gray-700">{b.val}jt</span>
              <div className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md transition-all" style={{ height: `${b.val * 1.5}px` }} />
              <span className="text-xs text-gray-500">{b.bulan}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Tabel Transaksi */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-base font-semibold text-gray-900">Data Transaksi</h3>
          <span className="text-xs text-gray-400">Klik header kolom untuk sorting</span>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50">
            <SortHeader col="id" label="ID" />
            <SortHeader col="peserta" label="Peserta" />
            <SortHeader col="kelas" label="Kelas" />
            <SortHeader col="jumlah" label="Jumlah" />
            <SortHeader col="status" label="Status" />
            <SortHeader col="tanggal" label="Tanggal" />
          </tr></thead>
          <tbody>
            {sorted.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2.5 px-3 font-mono text-xs text-gray-500">{t.id}</td>
                <td className="py-2.5 px-3 text-gray-900">{t.peserta}</td>
                <td className="py-2.5 px-3 text-gray-600">{t.kelas}</td>
                <td className="py-2.5 px-3 font-semibold text-gray-900">Rp {t.jumlah.toLocaleString("id-ID")}</td>
                <td className="py-2.5 px-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.status === "sukses" ? "bg-emerald-50 text-emerald-700" : t.status === "pending" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"}`}>
                    {t.status}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-gray-500">{t.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// --- TAB 3: Marketing ---
function TabMarketing() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center"><FileText className="w-6 h-6 text-amber-600" /></div>
          <div><p className="text-sm text-gray-500">Jumlah Blog</p><p className="text-2xl font-bold text-gray-900">18</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center"><MessageSquare className="w-6 h-6 text-pink-600" /></div>
          <div><p className="text-sm text-gray-500">Jumlah Testimoni</p><p className="text-2xl font-bold text-gray-900">45</p></div>
        </div>
      </div>
      {/* Blog Recent */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Blog Terbaru</h3>
          <a href="/admin/marketing" className="text-sm text-blue-600 hover:underline">Kelola Blog &rarr;</a>
        </div>
        <div className="space-y-3">
          {["10 Tips Memulai Karir Game Developer", "Unity vs Unreal Engine 2026", "Panduan Lengkap Belajar C#"].map((t, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50">
              <span className="text-gray-900 text-sm">{t}</span>
              <span className="text-xs text-gray-400">15 Jan 2026</span>
            </div>
          ))}
        </div>
      </div>
      {/* Testimoni Recent */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-gray-900">Testimoni Terbaru</h3>
          <a href="/admin/marketing" className="text-sm text-blue-600 hover:underline">Kelola Testimoni &rarr;</a>
        </div>
        <div className="space-y-3">
          {[
            { nama: "Ahmad Fadli", teks: "Dalam 8 bulan berhasil transition jadi Unity developer.", rating: 5 },
            { nama: "Siti Rahma", teks: "Materi sangat terstruktur dan instruktur responsif.", rating: 5 },
            { nama: "Budi Hartono", teks: "Kualitas video dan live session luar biasa.", rating: 4 },
          ].map((t, i) => (
            <div key={i} className="py-2 border-b border-gray-50">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 text-sm">{t.nama}</span>
                <span className="text-amber-400 text-xs">{"★".repeat(t.rating)}</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">{t.teks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN DASHBOARD ---
const tabs = [
  { id: "belajar", label: "Kegiatan Belajar", icon: BookOpen },
  { id: "transaksi", label: "Transaksi", icon: TrendingUp },
  { id: "marketing", label: "Marketing", icon: Megaphone },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("belajar");

  return (
    <div className="space-y-6" data-testid="admin-dashboard-page">
      {/* Tab Nav */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit" data-testid="admin-tabs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
              data-testid={`admin-tab-${tab.id}`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === "belajar" && <TabBelajar />}
      {activeTab === "transaksi" && <TabTransaksi />}
      {activeTab === "marketing" && <TabMarketing />}
    </div>
  );
}
