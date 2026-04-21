import React from "react";

export default function EditKelasPage() {
  return (
    <div className="space-y-6" data-testid="admin-edit-kelas-page">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Edit Kelas</h2>
        <p className="text-gray-500 mt-1">
          Edit informasi kelas
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <p className="text-gray-400">Detail kelas akan dimuat dari API</p>
      </div>
    </div>
  );
}
