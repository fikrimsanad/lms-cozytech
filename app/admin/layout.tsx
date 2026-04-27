"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, CreditCard, Users, LogOut, Megaphone, Menu, X } from "lucide-react";

const adminMenuItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/kelas", label: "Kelas", icon: BookOpen },
  { href: "/admin/transaksi", label: "Transaksi", icon: CreditCard },
  { href: "/admin/peserta", label: "Peserta", icon: Users },
  { href: "/admin/marketing", label: "Marketing", icon: Megaphone },
];

function AdminSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col h-full bg-white">
      <div className="py-6 px-6 flex items-center justify-between">
        <div><h2 className="text-xl font-bold text-gray-900">Admin Panel</h2><p className="text-sm text-gray-500">LMS CozyTech</p></div>
        {onClose && <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 lg:hidden"><X className="w-5 h-5" /></button>}
      </div>
      <div className="flex-1 px-3 space-y-1">
        {adminMenuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} onClick={onClose} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`} data-testid={`admin-nav-${item.label.toLowerCase()}`}>
              <Icon className="w-5 h-5" />{item.label}
            </Link>
          );
        })}
      </div>
      <div className="px-3 pb-6"><Link href="/login" className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors" data-testid="admin-logout-button"><LogOut className="w-5 h-5" />Keluar</Link></div>
    </nav>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" data-testid="admin-layout">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Mobile sidebar drawer */}
      <aside className={`fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 lg:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[256px_1fr]">
        <div className="h-screen sticky top-0 border-r border-gray-200">
          <AdminSidebar />
        </div>
        <div>
          <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-900" data-testid="admin-header-title">Admin Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg"><div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div><span className="text-sm font-medium text-gray-700" data-testid="admin-header-name">Admin</span></div>
                <Link href="/admin/kelas/buat" className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors" data-testid="admin-create-class-button">+ Buat Kelas Baru</Link>
              </div>
            </div>
          </div>
          <main className="p-8">{children}</main>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded-lg" data-testid="admin-mobile-menu"><Menu className="w-5 h-5 text-gray-700" /></button>
          <span className="text-sm font-bold text-gray-900">Admin Dashboard</span>
          <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
        </div>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
