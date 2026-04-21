import React from "react";

export default function AdminTransaksiPage() {
  return (
    <div className="space-y-6" data-testid="admin-transaksi-page">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Transaksi</h2>
        <p className="text-gray-500 mt-1">
          Kelola transaksi pembayaran peserta
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                ID Transaksi
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Peserta
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Kelas
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Jumlah
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Status
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Tanggal
              </th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="py-8 text-center text-gray-400">
                Data transaksi akan dimuat dari API
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
