import React from "react";

export default function AdminPesertaPage() {
  return (
    <div className="space-y-6" data-testid="admin-peserta-page">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Peserta</h2>
        <p className="text-gray-500 mt-1">Kelola data peserta</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            placeholder="Cari peserta..."
            data-testid="admin-peserta-search"
          />
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Nama
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Email
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Kelas Diikuti
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Tanggal Daftar
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-400">
                Data peserta akan dimuat dari API
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
