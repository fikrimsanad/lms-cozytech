"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./components/navigasi";
import Header from "./components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Mobile sidebar drawer */}
      <aside className={`fixed top-0 left-0 h-full w-64 z-50 bg-white transition-transform duration-300 lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <Navigation />
      </aside>

      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[256px_1fr]">
        <div className="h-screen sticky top-0 border-r border-gray-100">
          <Navigation />
        </div>
        <div>
          <Header />
          <main className="p-6 space-y-6">{children}</main>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg" data-testid="mobile-menu-btn">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <span className="text-sm font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">CozyTech</span>
            <span className="text-gray-400 font-light ml-1">LMS</span>
          </span>
          <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-xs font-bold">U</div>
        </div>
        <main className="p-4 space-y-6">{children}</main>
      </div>
    </div>
  );
}
