"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email atau password salah");
      } else {
        // Fetch session to determine role-based redirect
        const res = await fetch("/api/auth/session");
        const session = await res.json();
        const role = session?.user?.role;

        if (role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
        router.refresh();
      }
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black"
      data-testid="login-page"
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-xl border border-gray-800">
        {/* Logo */}
        <div className="text-center">
          <a href="/" className="inline-block text-xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              CozyTech
            </span>
            <span className="text-white/60 font-light ml-1">LMS</span>
          </a>
          <h1
            className="text-3xl font-bold text-white"
            data-testid="login-title"
          >
            Masuk
          </h1>
          <p className="mt-2 text-gray-400">
            Masuk ke akun LMS CozyTech Anda
          </p>
        </div>

        {error && (
          <div
            className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm"
            data-testid="login-error"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              required
              data-testid="login-email-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              required
              data-testid="login-password-input"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 disabled:opacity-50 transition-all"
            data-testid="login-submit-button"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Demo Accounts */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-xs text-center mb-3">Demo Accounts</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => { setEmail("admin@mail.com"); setPassword("123456"); }}
              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-xs hover:border-cyan-500/50 transition-colors"
              data-testid="login-fill-admin"
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => { setEmail("user@mail.com"); setPassword("123456"); }}
              className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-xs hover:border-cyan-500/50 transition-colors"
              data-testid="login-fill-user"
            >
              Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
