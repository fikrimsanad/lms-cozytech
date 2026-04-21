import React from "react";
import Link from "next/link";

export default function AdminKelasPage() {
  return (
    <div className="space-y-6" data-testid="admin-kelas-page">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Daftar Kelas</h2>
          <p className="text-gray-500 mt-1">Kelola semua kelas yang tersedia</p>
        </div>
        <Link
          href="/admin/kelas/buat"
          className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800"
          data-testid="admin-kelas-create-button"
        >
          + Buat Kelas Baru
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Nama Kelas
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Kategori
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Harga
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Peserta
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Status
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="py-8 text-center text-gray-400">
                Data kelas akan dimuat dari API
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
