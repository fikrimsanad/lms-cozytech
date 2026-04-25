"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Search,
  Award,
  Users,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/kelas-saya", label: "Kelas Saya", icon: BookOpen },
  { href: "/dashboard/cari-kelas", label: "Cari Kelas", icon: Search },
  { href: "/dashboard/sertifikasi", label: "Sertifikasi", icon: Award },
  { href: "/dashboard/komunitas", label: "Keanggotaan", icon: Users },
  { href: "/dashboard/pembayaran", label: "Pembayaran", icon: CreditCard },
  { href: "/dashboard/pengaturan", label: "Pengaturan", icon: Settings },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full bg-white flex flex-col" data-testid="dashboard-sidebar">
      <div className="py-6 px-5">
        <Link href="/" className="text-lg font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">CozyTech</span>
          <span className="text-gray-400 font-light ml-1">LMS</span>
        </Link>
      </div>
      <div className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = item.href === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-zinc-900 text-white" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
              data-testid={`sidebar-${item.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="px-3 pb-4 space-y-2 border-t border-gray-100 pt-4">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-sm font-bold">U</div>
          <div>
            <p className="text-sm font-semibold text-gray-900" data-testid="sidebar-user-name">User</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>
        <Link href="/login" className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors" data-testid="sidebar-logout-btn">
          <LogOut className="w-5 h-5" />
          Keluar
        </Link>
      </div>
    </nav>
  );
}
