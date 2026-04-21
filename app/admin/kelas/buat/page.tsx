import React from "react";

export default function BuatKelasPage() {
  return (
    <div className="space-y-6" data-testid="admin-buat-kelas-page">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Buat Kelas Baru</h2>
        <p className="text-gray-500 mt-1">
          Isi informasi kelas, silabus, dan materi
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6">
        {/* Informasi Kelas */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Informasi Kelas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Kelas *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Nama kelas"
                data-testid="kelas-nama-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Harga (Rp) *
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="0"
                data-testid="kelas-harga-input"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi *
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Deskripsi kelas"
                data-testid="kelas-deskripsi-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                data-testid="kelas-kategori-select"
              >
                <option value="Unity Development">Unity Development</option>
                <option value="Unreal Engine">Unreal Engine</option>
                <option value="3D Art">3D Art</option>
                <option value="Game Design">Game Design</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                data-testid="kelas-level-select"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durasi
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="12 Weeks"
                data-testid="kelas-durasi-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pengajar
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                placeholder="Nama pengajar (pisahkan dengan koma)"
                data-testid="kelas-pengajar-input"
              />
            </div>
          </div>
        </div>

        {/* Silabus */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Silabus Kelas
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm">
                Silabus akan dapat ditambahkan setelah kelas dibuat
              </p>
            </div>
          </div>
        </div>

        {/* Jadwal Live */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Jadwal Live Session
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">
              Jadwal live session akan dapat ditambahkan setelah kelas dibuat
            </p>
          </div>
        </div>

        {/* Video */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Video Kelas
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">
              Video kelas akan dapat ditambahkan setelah kelas dibuat
            </p>
          </div>
        </div>

        {/* File */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            File Bahan Belajar
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-500 text-sm">
              File bahan belajar akan dapat ditambahkan setelah kelas dibuat
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            data-testid="kelas-submit-button"
          >
            Simpan Kelas
          </button>
          <button
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            data-testid="kelas-cancel-button"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}
