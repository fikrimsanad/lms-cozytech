"use client";

import { useState } from "react";
import { ArrowUpDown, DollarSign, CheckCircle } from "lucide-react";

const transaksiData = [
  { id: "TRX-001", peserta: "Ahmad Fadli", kelas: "Unity Game Development Mastery", jumlah: 3500000, status: "sukses", tanggal: "2026-01-15" },
  { id: "TRX-002", peserta: "Siti Rahma", kelas: "Unreal Engine 5 Masterclass", jumlah: 4500000, status: "sukses", tanggal: "2026-01-14" },
  { id: "TRX-003", peserta: "Budi Hartono", kelas: "3D Modeling & Animation Blender", jumlah: 2800000, status: "pending", tanggal: "2026-01-13" },
  { id: "TRX-004", peserta: "Dewi Lestari", kelas: "Game Design Fundamentals", jumlah: 2000000, status: "sukses", tanggal: "2026-01-12" },
  { id: "TRX-005", peserta: "Eko Prasetyo", kelas: "Mobile Game Development", jumlah: 3000000, status: "gagal", tanggal: "2026-01-11" },
  { id: "TRX-006", peserta: "Fani Kusuma", kelas: "Unity Game Development Mastery", jumlah: 3500000, status: "sukses", tanggal: "2026-01-10" },
  { id: "TRX-007", peserta: "Galih Pratama", kelas: "Pixel Art & 2D Game Asset", jumlah: 1500000, status: "sukses", tanggal: "2026-01-09" },
  { id: "TRX-008", peserta: "Hana Putri", kelas: "Unreal Engine 5 Masterclass", jumlah: 4500000, status: "sukses", tanggal: "2026-01-08" },
  { id: "TRX-009", peserta: "Irfan Maulana", kelas: "3D Modeling & Animation Blender", jumlah: 2800000, status: "pending", tanggal: "2026-01-07" },
  { id: "TRX-010", peserta: "Joko Widodo", kelas: "Game Design Fundamentals", jumlah: 2000000, status: "sukses", tanggal: "2026-01-06" },
];

export default function AdminTransaksiPage() {
  const [sortCol, setSortCol] = useState<string>("tanggal");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const totalNilai = transaksiData.reduce((a, t) => a + t.jumlah, 0);
  const totalSukses = transaksiData.filter(t => t.status === "sukses").length;

  const sorted = [...transaksiData].sort((a, b) => {
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
    <th className="text-left py-3 px-4 text-gray-500 font-medium cursor-pointer select-none hover:text-gray-900" onClick={() => toggleSort(col)}>
      <span className="flex items-center gap-1">{label}<ArrowUpDown className={`w-3 h-3 ${sortCol === col ? "text-gray-900" : ""}`} /></span>
    </th>
  );

  return (
    <div className="space-y-6" data-testid="admin-transaksi-page">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Transaksi</h2>
        <p className="text-gray-500 mt-1">Kelola transaksi pembayaran peserta</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center"><DollarSign className="w-6 h-6 text-emerald-600" /></div>
          <div><p className="text-sm text-gray-500">Total Nilai</p><p className="text-xl font-bold text-gray-900">Rp {totalNilai.toLocaleString("id-ID")}</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center"><CheckCircle className="w-6 h-6 text-blue-600" /></div>
          <div><p className="text-sm text-gray-500">Transaksi Sukses</p><p className="text-xl font-bold text-gray-900">{totalSukses}</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center"><span className="text-lg font-bold text-gray-600">{transaksiData.length}</span></div>
          <div><p className="text-sm text-gray-500">Total Transaksi</p><p className="text-xl font-bold text-gray-900">{transaksiData.length}</p></div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-900">Semua Transaksi</span>
          <span className="text-xs text-gray-400">Klik header kolom untuk sorting</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <SortHeader col="id" label="ID Transaksi" />
              <SortHeader col="peserta" label="Peserta" />
              <SortHeader col="kelas" label="Kelas" />
              <SortHeader col="jumlah" label="Jumlah" />
              <SortHeader col="status" label="Status" />
              <SortHeader col="tanggal" label="Tanggal" />
            </tr>
          </thead>
          <tbody>
            {sorted.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4 font-mono text-xs text-gray-500">{t.id}</td>
                <td className="py-3 px-4 text-gray-900">{t.peserta}</td>
                <td className="py-3 px-4 text-gray-600 max-w-[200px] truncate">{t.kelas}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">Rp {t.jumlah.toLocaleString("id-ID")}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${t.status === "sukses" ? "bg-emerald-50 text-emerald-700" : t.status === "pending" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"}`}>
                    {t.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{t.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
