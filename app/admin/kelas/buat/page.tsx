"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Plus, Trash2, Upload, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, label: "Informasi Kelas" },
  { id: 2, label: "Video Kelas" },
  { id: 3, label: "File Tambahan" },
];

export default function BuatKelasPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [videos, setVideos] = useState([{ judul: "", deskripsi: "", file: "" }]);
  const [files, setFiles] = useState([{ nama: "", file: "" }]);
  const [jadwalLive, setJadwalLive] = useState([{ judul: "", tanggal: "", waktuMulai: "", waktuSelesai: "" }]);

  const addVideo = () => setVideos([...videos, { judul: "", deskripsi: "", file: "" }]);
  const removeVideo = (i: number) => setVideos(videos.filter((_, idx) => idx !== i));
  const addFile = () => setFiles([...files, { nama: "", file: "" }]);
  const removeFile = (i: number) => setFiles(files.filter((_, idx) => idx !== i));
  const addJadwal = () => setJadwalLive([...jadwalLive, { judul: "", tanggal: "", waktuMulai: "", waktuSelesai: "" }]);
  const removeJadwal = (i: number) => setJadwalLive(jadwalLive.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-6" data-testid="admin-buat-kelas-page">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Buat Kelas Baru</h2>
          <p className="text-gray-500 mt-1">Lengkapi data kelas dalam 3 tahap</p>
        </div>
        <Link href="/admin/kelas" className="text-sm text-gray-500 hover:text-gray-700">Kembali ke Daftar Kelas</Link>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-2" data-testid="stepper">
        {steps.map((step, i) => (
          <div key={step.id} className="flex items-center gap-2 flex-1">
            <div className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                currentStep > step.id ? "bg-emerald-500 text-white" : currentStep === step.id ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span className={`text-sm font-medium whitespace-nowrap ${currentStep >= step.id ? "text-gray-900" : "text-gray-400"}`}>{step.label}</span>
            </div>
            {i < steps.length - 1 && <div className={`h-px flex-1 ${currentStep > step.id ? "bg-emerald-400" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        {/* STEP 1: Informasi Kelas */}
        {currentStep === 1 && (
          <div className="space-y-5" data-testid="step-1">
            <h3 className="text-lg font-semibold text-gray-900">Informasi & Deskripsi Kelas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Kelas *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900" placeholder="Contoh: Unity Game Development" data-testid="input-nama-kelas" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Pengajar *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900" placeholder="Nama pengajar" data-testid="input-pengajar" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jangka Waktu Kelas *</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900" placeholder="Contoh: 12 Minggu" data-testid="input-durasi" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Harga (Rp) *</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900" placeholder="3500000" data-testid="input-harga" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Kelas *</label>
                <textarea rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-900" placeholder="Deskripsi lengkap kelas..." data-testid="input-deskripsi" />
              </div>
            </div>

            {/* Jadwal Live Session */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-2"><Calendar className="w-4 h-4" />Jadwal Live Session</h4>
                <button onClick={addJadwal} className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"><Plus className="w-3 h-3" />Tambah Jadwal</button>
              </div>
              <div className="space-y-3">
                {jadwalLive.map((_, i) => (
                  <div key={i} className="grid grid-cols-5 gap-2 items-end bg-gray-50 p-3 rounded-lg">
                    <div className="col-span-2">
                      <label className="block text-xs text-gray-500 mb-1">Judul Session</label>
                      <input type="text" className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm" placeholder="Live Session #1" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Tanggal</label>
                      <input type="date" className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm" />
                    </div>
                    <div className="flex gap-1">
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Mulai</label>
                        <input type="time" className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-xs text-gray-500 mb-1">Selesai</label>
                        <input type="time" className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      {jadwalLive.length > 1 && <button onClick={() => removeJadwal(i)} className="p-1.5 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Video Kelas */}
        {currentStep === 2 && (
          <div className="space-y-5" data-testid="step-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Upload Video Kelas</h3>
              <button onClick={addVideo} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg hover:bg-gray-800"><Plus className="w-3 h-3" />Tambah Video</button>
            </div>
            <div className="space-y-4">
              {videos.map((_, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">Video #{i + 1}</span>
                    {videos.length > 1 && <button onClick={() => removeVideo(i)} className="p-1 text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Judul Video *</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Contoh: Pengenalan Unity" />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Upload Video *</label>
                      <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500 bg-white">
                        <Upload className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Pilih file video...</span>
                        <input type="file" className="hidden" accept="video/*" />
                      </label>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs text-gray-500 mb-1">Deskripsi Video</label>
                      <textarea rows={2} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Deskripsi singkat video..." />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: File Tambahan */}
        {currentStep === 3 && (
          <div className="space-y-5" data-testid="step-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Upload File Tambahan</h3>
              <button onClick={addFile} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg hover:bg-gray-800"><Plus className="w-3 h-3" />Tambah File</button>
            </div>
            <p className="text-sm text-gray-500">Upload file bahan belajar tambahan seperti PDF, slides, atau dokumen lainnya.</p>
            <div className="space-y-3">
              {files.map((_, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">Nama File</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm" placeholder="Contoh: Modul Materi BAB 1" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-1">Upload File</label>
                    <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500 bg-white">
                      <Upload className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Pilih file...</span>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                  {files.length > 1 && <button onClick={() => removeFile(i)} className="p-1.5 text-red-400 hover:text-red-600 mt-5"><Trash2 className="w-4 h-4" /></button>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
          disabled={currentStep === 1}
          className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
          data-testid="stepper-prev"
        >
          <ChevronLeft className="w-4 h-4" /> Sebelumnya
        </button>
        <div className="text-sm text-gray-400">Langkah {currentStep} dari {steps.length}</div>
        {currentStep < 3 ? (
          <button
            onClick={() => setCurrentStep(s => Math.min(3, s + 1))}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800"
            data-testid="stepper-next"
          >
            Selanjutnya <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700" data-testid="stepper-submit">
            <Check className="w-4 h-4" /> Simpan Kelas
          </button>
        )}
      </div>
    </div>
  );
}
