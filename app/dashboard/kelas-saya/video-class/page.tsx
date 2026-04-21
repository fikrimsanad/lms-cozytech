"use client";

import { useState } from "react";
import { Play, Pause, ChevronLeft, Clock, CheckCircle, Lock, List, Volume2 } from "lucide-react";
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

export default function VideoClassPage() {
  const [playing, setPlaying] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const activeVideo = videoList.find(v => v.active) || videoList[0];
  const completedCount = videoList.filter(v => v.selesai).length;

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]" data-testid="video-class-page">
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

      <div className="flex flex-1 overflow-hidden">
        {/* Video Player Area */}
        <div className="flex-1 flex flex-col">
          {/* Player */}
          <div className="relative bg-black flex-1 flex items-center justify-center cursor-pointer group" onClick={() => setPlaying(!playing)}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            {/* Placeholder thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
              alt="Video thumbnail"
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Play/Pause overlay */}
            <div className={`relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              {playing ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white ml-1" />}
            </div>
            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
              {/* Progress bar */}
              <div className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer">
                <div className="h-1 bg-cyan-400 rounded-full" style={{ width: "35%" }} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={(e) => { e.stopPropagation(); setPlaying(!playing); }} className="text-white hover:text-cyan-400">
                    {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button onClick={(e) => e.stopPropagation()} className="text-white hover:text-cyan-400"><Volume2 className="w-5 h-5" /></button>
                  <span className="text-white text-xs">05:52 / {activeVideo.durasi}</span>
                </div>
                <span className="text-white/60 text-xs">1080p</span>
              </div>
            </div>
          </div>
          {/* Video Info */}
          <div className="p-4 bg-white border-t border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">{activeVideo.judul}</h2>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{activeVideo.durasi}</span>
              <span>Video {activeVideo.id} dari {videoList.length}</span>
              <span>Pengajar: Andi Wijaya</span>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar */}
        {sidebarOpen && (
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto shrink-0" data-testid="video-playlist">
            <div className="px-4 py-3 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h3 className="text-sm font-semibold text-gray-900">Daftar Video</h3>
              <p className="text-xs text-gray-400 mt-0.5">{completedCount} dari {videoList.length} selesai</p>
            </div>
            <div>
              {videoList.map((video) => (
                <button
                  key={video.id}
                  className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors border-b border-gray-50 ${
                    video.active ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                  data-testid={`video-item-${video.id}`}
                >
                  <div className="mt-0.5 shrink-0">
                    {video.selesai ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : video.active ? (
                      <Play className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Lock className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm truncate ${video.active ? "text-blue-700 font-semibold" : video.selesai ? "text-gray-900" : "text-gray-500"}`}>
                      {video.id}. {video.judul}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" />{video.durasi}
                    </p>
                  </div>
                  {video.active && <div className="w-1.5 h-full bg-blue-600 rounded-full shrink-0 self-stretch" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
