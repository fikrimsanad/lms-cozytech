"use client";

import Link from "next/link";
import { Users, MessageSquare, Gamepad2, Trophy, Zap, Globe, ArrowRight, ExternalLink, Star, CheckCircle, Sparkles, Rocket, Shield } from "lucide-react";

const komunitasList = [
  { nama: "Unity Developers Indonesia", anggota: 12500, desc: "Komunitas terbesar untuk Unity developer di Indonesia. Diskusi, sharing project, dan job opportunities.", tags: ["Unity", "C#", "2D/3D"], color: "from-blue-600 to-cyan-500" },
  { nama: "Unreal Engine ID", anggota: 8200, desc: "Komunitas Unreal Engine developer. Mulai dari Blueprint hingga C++ advanced.", tags: ["UE5", "Blueprint", "AAA"], color: "from-violet-600 to-purple-500" },
  { nama: "Indie Game Dev ID", anggota: 15000, desc: "Tempat berkumpulnya indie game developer Indonesia. Kolaborasi, game jam, dan publishing tips.", tags: ["Indie", "Game Jam", "Publishing"], color: "from-emerald-600 to-teal-500" },
  { nama: "Game Art & Design", anggota: 6800, desc: "Komunitas untuk game artist, 3D modeler, animator, dan UI/UX designer game.", tags: ["3D Art", "Pixel Art", "UI/UX"], color: "from-amber-500 to-orange-500" },
  { nama: "Mobile Game Creators", anggota: 4500, desc: "Fokus pada pengembangan mobile game untuk Android & iOS. Monetisasi dan ASO tips.", tags: ["Mobile", "Android", "iOS"], color: "from-pink-500 to-rose-500" },
  { nama: "Game Audio & Music", anggota: 2300, desc: "Komunitas sound designer dan music composer untuk game. SFX, OST, dan implementasi audio.", tags: ["Audio", "SFX", "Music"], color: "from-indigo-600 to-blue-500" },
];

const benefits = [
  { icon: MessageSquare, title: "Forum Diskusi Aktif", desc: "Tanya jawab langsung dengan expert dan sesama developer" },
  { icon: Trophy, title: "Game Jam Bulanan", desc: "Ikuti game jam eksklusif dan menangkan hadiah menarik" },
  { icon: Zap, title: "Resource & Tutorial", desc: "Akses ribuan template, asset, dan tutorial eksklusif member" },
  { icon: Globe, title: "Job Board", desc: "Temukan peluang kerja dan freelance di industri game" },
  { icon: Shield, title: "Mentoring 1-on-1", desc: "Sesi mentoring pribadi dengan senior game developer" },
  { icon: Rocket, title: "Early Access", desc: "Akses lebih awal ke kelas baru dan event spesial" },
];

export default function KomunitasPage() {
  return (
    <div className="space-y-8" data-testid="komunitas-page">
      {/* Hero Header — Eye-catching gradient */}
      <div className="relative rounded-2xl overflow-hidden h-56">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-violet-950 to-indigo-950" />
        {/* Animated dots pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl -translate-y-20 translate-x-20" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl translate-y-16" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl translate-y-8" />
        <div className="relative p-8 flex flex-col justify-center h-full">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Game Dev Community</span>
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight">
            Bergabung dengan Komunitas<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Game Developer Terbaik</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-2 max-w-xl">Terhubung dengan ribuan game developer Indonesia. Diskusi, kolaborasi, dan berkembang bersama di platform komunitas kami.</p>
          <a href="https://community.example.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold rounded-xl hover:from-violet-700 hover:to-fuchsia-600 transition-all w-fit">
            Kunjungi Web Komunitas <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Kenapa Join — Interactive benefit cards */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Kenapa Harus Bergabung?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg hover:border-violet-200 hover:scale-[1.02] transition-all cursor-default">
                <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-violet-100 transition-colors">
                  <Icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{b.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { value: "49.300+", label: "Member Aktif", color: "from-blue-600 to-cyan-500" },
          { value: "120+", label: "Game Jam", color: "from-violet-600 to-purple-500" },
          { value: "500+", label: "Tutorial", color: "from-emerald-600 to-teal-500" },
          { value: "95%", label: "Puas", color: "from-amber-500 to-orange-500" },
        ].map((s, i) => (
          <div key={i} className={`relative bg-gradient-to-br ${s.color} rounded-2xl p-4 overflow-hidden`}>
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-4 translate-x-4" />
            <p className="text-2xl font-bold text-white relative">{s.value}</p>
            <p className="text-white/70 text-xs mt-0.5 relative">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Komunitas List — PS5 style cards */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Komunitas Game Dev</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {komunitasList.map((k, i) => (
            <a key={i} href="https://community.example.com" target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl overflow-hidden hover:scale-[1.01] transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${k.color}`} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="relative p-5 min-h-[200px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-5 h-5 text-white/80" />
                    <span className="text-white/70 text-xs font-medium">{k.anggota.toLocaleString()} member</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">{k.nama}</h3>
                  <p className="text-white/60 text-xs mt-1.5 leading-relaxed line-clamp-2">{k.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {k.tags.map((t, j) => (
                      <span key={j} className="px-2 py-0.5 bg-white/15 text-white/80 text-[10px] rounded-md font-medium">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white/60 text-xs">Gratis untuk member</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative p-8 text-center">
          <Gamepad2 className="w-10 h-10 text-violet-400 mx-auto mb-3" />
          <h3 className="text-2xl font-bold text-white">Siap Bergabung?</h3>
          <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">Join sekarang dan jadilah bagian dari komunitas game developer terbesar di Indonesia</p>
          <a href="https://community.example.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-fuchsia-600 transition-all">
            Gabung Komunitas Sekarang <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
