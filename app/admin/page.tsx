import React from "react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8" data-testid="admin-dashboard-page">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Peserta</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          <p className="text-xs text-green-600 mt-1">Data akan dimuat dari API</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Kelas</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          <p className="text-xs text-blue-600 mt-1">Data akan dimuat dari API</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Pembayaran</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">Rp 0</p>
          <p className="text-xs text-purple-600 mt-1">Data akan dimuat dari API</p>
        </div>
      </div>

      {/* Charts & Tables Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Grafik Transaksi Keuangan
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-400">Chart akan ditampilkan di sini</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Kelas Favorit
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600 text-sm">Memuat data...</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Students */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Ranking Peserta
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">
                  Rank
                </th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">
                  Nama
                </th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">
                  Kelas
                </th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-400">
                  Data peserta akan dimuat dari API
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
