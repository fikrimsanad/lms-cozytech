"use client";

import { useState } from "react";
import { Play, Pause, ChevronLeft, Clock, CheckCircle, Lock, List, Volume2, Star, Send, ThumbsUp } from "lucide-react";
import Link from "next/link";

const videoList = [
  { id: 1, judul: "Pengenalan Unity Engine", durasi: "16:42", selesai: true },
  { id: 2, judul: "Instalasi dan Setup Environment", durasi: "12:30", selesai: true },
  { id: 3, judul: "Unity Interface Tour", durasi: "22:15", selesai: true },
  { id: 4, judul: "GameObject & Components", durasi: "18:50", selesai: false, active: true },
  { id: 5, judul: "C# Scripting Basics", durasi: "25:10", selesai: false },
  { id: 6, judul: "Variables & Data Types", durasi: "20:35", selesai: false },
  { id: 7, judul: "Physics & Rigidbody", durasi: "28:45", selesai: false },
  { id: 8, judul: "Collision Detection", durasi: "19:20", selesai: false },
  { id: 9, judul: "UI System Basics", durasi: "15:55", selesai: false },
  { id: 10, judul: "Audio & Sound Effects", durasi: "14:10", selesai: false },
];

const komentarList = [
  { nama: "Ahmad Fadli", waktu: "2 jam lalu", teks: "Penjelasan tentang GameObject sangat jelas, terima kasih pak!", likes: 5 },
  { nama: "Siti Rahma", waktu: "5 jam lalu", teks: "Bisa minta contoh project yang lebih kompleks pak?", likes: 3 },
  { nama: "Budi Hartono", waktu: "1 hari lalu", teks: "Mantap materinya, langsung praktek!", likes: 8 },
];

const reviewList = [
  { nama: "Dewi Lestari", rating: 5, teks: "Kelas terbaik untuk belajar Unity dari nol. Instruktur sangat sabar dan detail.", tanggal: "10 Jan 2026" },
  { nama: "Eko Prasetyo", rating: 4, teks: "Materi bagus, tapi beberapa video agak terlalu cepat. Overall recommended.", tanggal: "8 Jan 2026" },
  { nama: "Fani Kusuma", rating: 5, teks: "Setelah ikut kelas ini saya berhasil bikin game pertama saya. Luar biasa!", tanggal: "5 Jan 2026" },
];

export default function VideoClassPage() {
  const [playing, setPlaying] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"deskripsi" | "komentar" | "review">("deskripsi");
  const [komentar, setKomentar] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const activeVideo = videoList.find(v => v.active) || videoList[0];
  const completedCount = videoList.filter(v => v.selesai).length;

  return (
    <div className="flex flex-col" data-testid="video-class-page">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 rounded-t-lg">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/kelas-saya" className="flex items-center gap-1 text-gray-400 hover:text-white text-sm">
            <ChevronLeft className="w-4 h-4" /> Kembali
          </Link>
          <div className="w-px h-5 bg-gray-700" />
          <span className="text-white text-sm font-medium">Unity Game Development Mastery</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs">{completedCount}/{videoList.length} video selesai</span>
          <div className="w-24 h-1.5 bg-gray-700 rounded-full"><div className="h-1.5 bg-emerald-500 rounded-full" style={{ width: `${(completedCount / videoList.length) * 100}%` }} /></div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 text-gray-400 hover:text-white" data-testid="toggle-playlist">
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden" style={{ height: "420px" }}>
        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          <div className="relative bg-black flex-1 flex items-center justify-center cursor-pointer group" onClick={() => setPlaying(!playing)}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            <img src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85" alt="Video" className="w-full h-full object-cover absolute inset-0" />
            <div className={`relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              {playing ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white ml-1" />}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              <div className="w-full h-1 bg-white/20 rounded-full mb-3"><div className="h-1 bg-cyan-400 rounded-full" style={{ width: "35%" }} /></div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={e => { e.stopPropagation(); setPlaying(!playing); }} className="text-white hover:text-cyan-400">{playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}</button>
                  <button onClick={e => e.stopPropagation()} className="text-white hover:text-cyan-400"><Volume2 className="w-5 h-5" /></button>
                  <span className="text-white text-xs">05:52 / {activeVideo.durasi}</span>
                </div>
                <span className="text-white/60 text-xs">1080p</span>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        {sidebarOpen && (
          <div className="w-72 bg-white border-l border-gray-200 overflow-y-auto shrink-0" data-testid="video-playlist">
            <div className="px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="text-sm font-semibold text-gray-900">Daftar Video</h3>
              <p className="text-xs text-gray-400 mt-0.5">{completedCount} dari {videoList.length} selesai</p>
            </div>
            {videoList.map((video) => (
              <button key={video.id} className={`w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors border-b border-gray-50 ${video.active ? "bg-blue-50" : "hover:bg-gray-50"}`} data-testid={`video-item-${video.id}`}>
                <div className="mt-0.5 shrink-0">
                  {video.selesai ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : video.active ? <Play className="w-4 h-4 text-blue-600" /> : <Lock className="w-4 h-4 text-gray-300" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs truncate ${video.active ? "text-blue-700 font-semibold" : video.selesai ? "text-gray-900" : "text-gray-500"}`}>{video.id}. {video.judul}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{video.durasi}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Video Title */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">{activeVideo.judul}</h2>
        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{activeVideo.durasi}</span>
          <span>Video {activeVideo.id} dari {videoList.length}</span>
          <span>Pengajar: Andi Wijaya</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex border-b border-gray-200" data-testid="video-tabs">
          {(["deskripsi", "komentar", "review"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium capitalize transition-colors relative ${activeTab === tab ? "text-gray-900" : "text-gray-400 hover:text-gray-600"}`}
              data-testid={`tab-${tab}`}
            >
              {tab}
              {tab === "komentar" && <span className="ml-1 text-xs text-gray-400">({komentarList.length})</span>}
              {tab === "review" && <span className="ml-1 text-xs text-gray-400">({reviewList.length})</span>}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
            </button>
          ))}
        </div>

        <div className="p-5">
          {/* Tab Deskripsi */}
          {activeTab === "deskripsi" && (
            <div className="space-y-4" data-testid="tab-content-deskripsi">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Tentang Video Ini</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pada video ini kita akan mempelajari konsep dasar GameObject dan Components di Unity Engine.
                  GameObject adalah objek dasar di Unity yang bisa berupa karakter, prop, environment, atau bahkan
                  manager yang tidak terlihat. Setiap GameObject terdiri dari beberapa Components yang menentukan
                  perilaku dan tampilannya.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Yang Akan Dipelajari:</h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Memahami hierarki GameObject di Unity</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Menambah dan mengatur Components</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Transform, Renderer, dan Collider components</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />Membuat custom component dengan C# script</li>
                </ul>
              </div>
              <div className="flex items-center gap-6 pt-3 border-t border-gray-100 text-sm text-gray-500">
                <span>Durasi: {activeVideo.durasi}</span>
                <span>Level: Intermediate</span>
                <span>Bahasa: Indonesia</span>
              </div>
            </div>
          )}

          {/* Tab Komentar */}
          {activeTab === "komentar" && (
            <div className="space-y-5" data-testid="tab-content-komentar">
              {/* Form Komentar */}
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">U</div>
                <div className="flex-1 flex gap-2">
                  <input
                    value={komentar}
                    onChange={e => setKomentar(e.target.value)}
                    placeholder="Tulis komentar..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    data-testid="komentar-input"
                  />
                  <button className="px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors" data-testid="komentar-submit">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Daftar Komentar */}
              <div className="space-y-4">
                {komentarList.map((k, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold shrink-0">
                      {k.nama.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-900">{k.nama}</span>
                        <span className="text-xs text-gray-400">{k.waktu}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{k.teks}</p>
                      <button className="flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-gray-600">
                        <ThumbsUp className="w-3.5 h-3.5" />{k.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Review */}
          {activeTab === "review" && (
            <div className="space-y-6" data-testid="tab-content-review">
              {/* Form Review */}
              <div className="bg-gray-50 rounded-xl p-5 space-y-3">
                <h3 className="text-sm font-semibold text-gray-900">Tulis Review untuk Kelas Ini</h3>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Rating</label>
                  <div className="flex gap-1" data-testid="review-stars">
                    {[1, 2, 3, 4, 5].map(n => (
                      <button
                        key={n}
                        onMouseEnter={() => setHoverRating(n)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setReviewRating(n)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star className={`w-6 h-6 ${n <= (hoverRating || reviewRating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`} />
                      </button>
                    ))}
                    {reviewRating > 0 && <span className="text-sm text-gray-500 ml-2">{reviewRating}/5</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">Review</label>
                  <textarea
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    rows={3}
                    placeholder="Bagikan pengalaman belajar Anda di kelas ini..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
                    data-testid="review-text-input"
                  />
                </div>
                <button className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" data-testid="review-submit">
                  Kirim Review
                </button>
              </div>
              {/* Daftar Review */}
              <div className="space-y-4">
                {reviewList.map((r, i) => (
                  <div key={i} className="border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold">{r.nama.charAt(0)}</div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900">{r.nama}</span>
                          <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />)}</div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">{r.tanggal}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 ml-10">{r.teks}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
