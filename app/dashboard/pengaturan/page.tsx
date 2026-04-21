"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { User, Mail, Lock, Camera, Save, Eye, EyeOff } from "lucide-react";

export default function PengaturanPage() {
  const { data: session } = useSession();
  const [nama, setNama] = useState(session?.user?.name || "");
  const [email] = useState(session?.user?.email || "");
  const [telepon, setTelepon] = useState("");
  const [bio, setBio] = useState("");
  const [alamat, setAlamat] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const [savedProfile, setSavedProfile] = useState(false);
  const [savedPassword, setSavedPassword] = useState(false);

  const handleSaveProfile = () => {
    setSavedProfile(true);
    setTimeout(() => setSavedProfile(false), 2000);
  };

  const handleSavePassword = () => {
    setSavedPassword(true);
    setTimeout(() => setSavedPassword(false), 2000);
  };

  const initial = (session?.user?.name || "U").charAt(0).toUpperCase();

  return (
    <div className="space-y-6 max-w-3xl" data-testid="pengaturan-page">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pengaturan</h1>
        <p className="text-gray-500 mt-1">Kelola profil dan keamanan akun Anda</p>
      </div>

      {/* Avatar */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Foto Profil</h2>
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {initial}
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50" data-testid="change-avatar-btn">
              <Camera className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-900 font-medium">{session?.user?.name || "User"}</p>
            <p className="text-xs text-gray-500">{session?.user?.email}</p>
            <p className="text-xs text-gray-400 mt-1 capitalize">{(session?.user as {role?:string})?.role || "student"}</p>
          </div>
        </div>
      </div>

      {/* Edit Profile */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Informasi Profil</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={nama}
                  onChange={e => setNama(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  placeholder="Nama lengkap"
                  data-testid="input-nama"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  value={email}
                  readOnly
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
                  data-testid="input-email"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
            <input
              value={telepon}
              onChange={e => setTelepon(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
              placeholder="+62 812 3456 7890"
              data-testid="input-telepon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={3}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
              placeholder="Ceritakan tentang diri Anda..."
              data-testid="input-bio"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
            <input
              value={alamat}
              onChange={e => setAlamat(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
              placeholder="Kota, Provinsi"
              data-testid="input-alamat"
            />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleSaveProfile}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              data-testid="save-profile-btn"
            >
              <Save className="w-4 h-4" />Simpan Profil
            </button>
            {savedProfile && <span className="text-emerald-600 text-sm font-medium">Profil berhasil disimpan!</span>}
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">Ubah Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password Saat Ini</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={showOld ? "text" : "password"}
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                placeholder="Masukkan password saat ini"
                data-testid="input-old-password"
              />
              <button onClick={() => setShowOld(!showOld)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showOld ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password Baru</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showNew ? "text" : "password"}
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  placeholder="Minimal 6 karakter"
                  data-testid="input-new-password"
                />
                <button onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password Baru</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                  placeholder="Ulangi password baru"
                  data-testid="input-confirm-password"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleSavePassword}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              data-testid="save-password-btn"
            >
              <Lock className="w-4 h-4" />Ubah Password
            </button>
            {savedPassword && <span className="text-emerald-600 text-sm font-medium">Password berhasil diubah!</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
