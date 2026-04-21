"use client";

import { useState } from "react";
import { CreditCard, Clock, CheckCircle, XCircle, ArrowUpDown, Download, Search, Filter } from "lucide-react";

const riwayatPembayaran = [
  { id: "INV-2026-001", kelas: "Unity Game Development Mastery", tanggal: "15 Jan 2026", jumlah: 3500000, metode: "Transfer Bank", status: "sukses" },
  { id: "INV-2026-002", kelas: "3D Modeling & Animation Blender", tanggal: "10 Jan 2026", jumlah: 2800000, metode: "E-Wallet", status: "sukses" },
  { id: "INV-2025-018", kelas: "Unreal Engine 5 Masterclass", tanggal: "22 Des 2025", jumlah: 4500000, metode: "Kartu Kredit", status: "sukses" },
  { id: "INV-2025-017", kelas: "Game Design Fundamentals", tanggal: "15 Des 2025", jumlah: 2000000, metode: "Transfer Bank", status: "pending" },
  { id: "INV-2025-012", kelas: "Mobile Game Development", tanggal: "28 Nov 2025", jumlah: 3000000, metode: "E-Wallet", status: "gagal" },
  { id: "INV-2025-009", kelas: "Pixel Art & 2D Game Asset", tanggal: "10 Nov 2025", jumlah: 1500000, metode: "Transfer Bank", status: "sukses" },
];

export default function PembayaranPage() {
  const [sortCol, setSortCol] = useState("tanggal");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [filterStatus, setFilterStatus] = useState("semua");
  const [search, setSearch] = useState("");

  const totalBayar = riwayatPembayaran.filter(t => t.status === "sukses").reduce((a, t) => a + t.jumlah, 0);
  const totalSukses = riwayatPembayaran.filter(t => t.status === "sukses").length;
  const totalPending = riwayatPembayaran.filter(t => t.status === "pending").length;

  const filtered = riwayatPembayaran
    .filter(t => filterStatus === "semua" || t.status === filterStatus)
    .filter(t => t.kelas.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()));

  const sorted = [...filtered].sort((a, b) => {
    const va = a[sortCol as keyof typeof a];
    const vb = b[sortCol as keyof typeof b];
    if (typeof va === "number" && typeof vb === "number") return sortDir === "asc" ? va - vb : vb - va;
    return sortDir === "asc" ? String(va).localeCompare(String(vb)) : String(vb).localeCompare(String(va));
  });

  const toggleSort = (col: string) => {
    if (sortCol === col) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortCol(col); setSortDir("desc"); }
  };

  const statusBadge = (status: string) => {
    if (status === "sukses") return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700"><CheckCircle className="w-3 h-3" />Sukses</span>;
    if (status === "pending") return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700"><Clock className="w-3 h-3" />Pending</span>;
    return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700"><XCircle className="w-3 h-3" />Gagal</span>;
  };

  const SortTh = ({ col, label }: { col: string; label: string }) => (
    <th onClick={() => toggleSort(col)} className="text-left py-3 px-4 text-gray-500 font-medium text-sm cursor-pointer select-none hover:text-gray-900">
      <span className="flex items-center gap-1">{label}<ArrowUpDown className={`w-3 h-3 ${sortCol === col ? "text-gray-900" : ""}`} /></span>
    </th>
  );

  return (
    <div className="space-y-6" data-testid="pembayaran-page">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pembayaran</h1>
        <p className="text-gray-500 mt-1">Riwayat transaksi pembayaran kelas Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center"><CreditCard className="w-5 h-5 text-emerald-600" /></div>
          <div><p className="text-xs text-gray-500">Total Pembayaran</p><p className="text-xl font-bold text-gray-900">Rp {totalBayar.toLocaleString("id-ID")}</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5 text-blue-600" /></div>
          <div><p className="text-xs text-gray-500">Transaksi Sukses</p><p className="text-xl font-bold text-gray-900">{totalSukses}</p></div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
          <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center"><Clock className="w-5 h-5 text-amber-600" /></div>
          <div><p className="text-xs text-gray-500">Menunggu Pembayaran</p><p className="text-xl font-bold text-gray-900">{totalPending}</p></div>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari invoice atau kelas..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
            data-testid="pembayaran-search"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {["semua", "sukses", "pending", "gagal"].map(s => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${filterStatus === s ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              data-testid={`filter-${s}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <SortTh col="id" label="Invoice" />
              <SortTh col="kelas" label="Kelas" />
              <SortTh col="tanggal" label="Tanggal" />
              <SortTh col="jumlah" label="Jumlah" />
              <th className="text-left py-3 px-4 text-gray-500 font-medium text-sm">Metode</th>
              <SortTh col="status" label="Status" />
              <th className="text-left py-3 px-4 text-gray-500 font-medium text-sm">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {sorted.length > 0 ? sorted.map(t => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-3 px-4 font-mono text-xs text-gray-500">{t.id}</td>
                <td className="py-3 px-4 text-gray-900 font-medium">{t.kelas}</td>
                <td className="py-3 px-4 text-gray-500">{t.tanggal}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">Rp {t.jumlah.toLocaleString("id-ID")}</td>
                <td className="py-3 px-4 text-gray-600">{t.metode}</td>
                <td className="py-3 px-4">{statusBadge(t.status)}</td>
                <td className="py-3 px-4">
                  {t.status === "sukses" && (
                    <button className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800" data-testid={`download-${t.id}`}>
                      <Download className="w-3.5 h-3.5" />Invoice
                    </button>
                  )}
                  {t.status === "pending" && (
                    <button className="text-xs text-amber-600 hover:text-amber-800 font-medium">Bayar Sekarang</button>
                  )}
                </td>
              </tr>
            )) : (
              <tr><td colSpan={7} className="py-12 text-center text-gray-400">Tidak ada transaksi ditemukan</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
