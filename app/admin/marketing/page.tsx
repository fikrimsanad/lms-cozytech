"use client";

import { useState } from "react";
import { FileText, MessageSquare, Plus, Trash2, Star } from "lucide-react";

export default function MarketingPage() {
  const [tab, setTab] = useState<"blog" | "testimoni">("blog");

  const blogs = [
    { judul: "10 Tips Memulai Karir Game Developer", penulis: "Admin", tanggal: "15 Jan 2026", status: "published" },
    { judul: "Unity vs Unreal Engine 2026", penulis: "Andi Wijaya", tanggal: "10 Jan 2026", status: "published" },
    { judul: "Panduan Lengkap Belajar C#", penulis: "Budi Santoso", tanggal: "5 Jan 2026", status: "draft" },
  ];

  const testimonials = [
    { nama: "Ahmad Fadli", posisi: "Unity Developer", teks: "Dalam 8 bulan saya berhasil transition dari web dev ke game dev.", rating: 5 },
    { nama: "Siti Rahma", posisi: "3D Artist", teks: "Materi sangat terstruktur dan instruktur sangat responsif.", rating: 5 },
    { nama: "Budi Hartono", posisi: "Game Designer", teks: "Live session sangat membantu, kualitas video luar biasa.", rating: 4 },
  ];

  return (
    <div className="space-y-6" data-testid="admin-marketing-page">
      <h2 className="text-2xl font-bold text-gray-900">Data Marketing</h2>

      {/* Tab Switch */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit">
        <button onClick={() => setTab("blog")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "blog" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`} data-testid="marketing-tab-blog">
          <FileText className="w-4 h-4" />Blog
        </button>
        <button onClick={() => setTab("testimoni")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "testimoni" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`} data-testid="marketing-tab-testimoni">
          <MessageSquare className="w-4 h-4" />Testimoni
        </button>
      </div>

      {/* BLOG */}
      {tab === "blog" && (
        <div className="space-y-6">
          {/* Form Tambah Blog */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Tambah Blog Baru</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Judul Blog *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Judul artikel..." data-testid="blog-judul-input" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Penulis</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Nama penulis" data-testid="blog-penulis-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>Tutorial</option><option>Karir</option><option>Teknologi</option><option>Industri</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Konten *</label>
                <textarea rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Tulis konten blog..." data-testid="blog-konten-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gambar Thumbnail</label>
                <label className="flex items-center gap-2 px-3 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500">
                  <Plus className="w-4 h-4 text-gray-400" /><span className="text-sm text-gray-400">Upload gambar...</span>
                  <input type="file" className="hidden" accept="image/*" />
                </label>
              </div>
              <button className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800" data-testid="blog-submit">Publikasikan Blog</button>
            </div>
          </div>
          {/* Daftar Blog */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100"><h3 className="text-base font-semibold text-gray-900">Daftar Blog</h3></div>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-2.5 px-4 text-gray-500 font-medium">Judul</th>
                <th className="text-left py-2.5 px-4 text-gray-500 font-medium">Penulis</th>
                <th className="text-left py-2.5 px-4 text-gray-500 font-medium">Tanggal</th>
                <th className="text-left py-2.5 px-4 text-gray-500 font-medium">Status</th>
                <th className="text-left py-2.5 px-4 text-gray-500 font-medium">Aksi</th>
              </tr></thead>
              <tbody>{blogs.map((b, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2.5 px-4 text-gray-900">{b.judul}</td>
                  <td className="py-2.5 px-4 text-gray-600">{b.penulis}</td>
                  <td className="py-2.5 px-4 text-gray-500">{b.tanggal}</td>
                  <td className="py-2.5 px-4"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${b.status === "published" ? "bg-emerald-50 text-emerald-700" : "bg-gray-100 text-gray-600"}`}>{b.status}</span></td>
                  <td className="py-2.5 px-4"><button className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      )}

      {/* TESTIMONI */}
      {tab === "testimoni" && (
        <div className="space-y-6">
          {/* Form Tambah Testimoni */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Tambah Testimoni Baru</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama *</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Nama peserta" data-testid="testimoni-nama-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Posisi / Role</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Contoh: Unity Developer" data-testid="testimoni-posisi-input" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Testimoni *</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Tulis testimoni..." data-testid="testimoni-teks-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex gap-1">{[1,2,3,4,5].map(n => (<button key={n} className="text-amber-400 hover:scale-110 transition-transform"><Star className="w-5 h-5 fill-amber-400" /></button>))}</div>
              </div>
              <button className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800" data-testid="testimoni-submit">Simpan Testimoni</button>
            </div>
          </div>
          {/* Daftar Testimoni */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Daftar Testimoni</h3>
            <div className="space-y-3">
              {testimonials.map((t, i) => (
                <div key={i} className="flex items-start justify-between py-3 border-b border-gray-50">
                  <div>
                    <div className="flex items-center gap-2"><span className="font-medium text-gray-900">{t.nama}</span><span className="text-xs text-gray-400">{t.posisi}</span></div>
                    <p className="text-sm text-gray-600 mt-1">{t.teks}</p>
                    <div className="flex gap-0.5 mt-1">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />)}</div>
                  </div>
                  <button className="text-red-400 hover:text-red-600 shrink-0"><Trash2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
