"use client";

import { useRouter } from "next/navigation";
import { User, Shield } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black" data-testid="login-page">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-xl border border-gray-800">
        {/* Logo */}
        <div className="text-center">
          <a href="/" className="inline-block text-xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">CozyTech</span>
            <span className="text-white/60 font-light ml-1">LMS</span>
          </a>
          <h1 className="text-3xl font-bold text-white" data-testid="login-title">Masuk</h1>
          <p className="mt-2 text-gray-400">Pilih akun untuk melanjutkan</p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => router.push("/admin")}
            className="w-full flex items-center gap-4 px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-left hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all group"
            data-testid="login-admin-btn"
          >
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Admin Dashboard</p>
              <p className="text-gray-500 text-sm">Kelola kelas, transaksi, peserta</p>
            </div>
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="w-full flex items-center gap-4 px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-left hover:border-emerald-500/50 hover:bg-gray-800/80 transition-all group"
            data-testid="login-user-btn"
          >
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <User className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-semibold">User Dashboard</p>
              <p className="text-gray-500 text-sm">Belajar, kelas saya, sertifikasi</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
