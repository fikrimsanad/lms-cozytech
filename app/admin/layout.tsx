"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Users,
  LogOut,
  Settings,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const adminMenuItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/kelas", label: "Kelas", icon: BookOpen },
  { href: "/admin/transaksi", label: "Transaksi", icon: CreditCard },
  { href: "/admin/peserta", label: "Peserta", icon: Users },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const adminName = session?.user?.name || "Admin";

  return (
    <div className="grid grid-cols-5 min-h-screen" data-testid="admin-layout">
      {/* Sidebar */}
      <div className="w-full h-screen border-r border-gray-200 sticky top-0 bg-white">
        <nav className="flex flex-col h-full">
          <div className="py-6 px-6">
            <h2 className="text-xl font-bold text-gray-900">
              Admin Panel
            </h2>
            <p className="text-sm text-gray-500">LMS CozyTech</p>
          </div>
          <div className="flex-1 px-3 space-y-1">
            {adminMenuItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" &&
                  pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  data-testid={`admin-nav-${item.label.toLowerCase()}`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="px-3 pb-6 space-y-1">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              data-testid="admin-logout-button"
            >
              <LogOut className="w-5 h-5" />
              Keluar
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="col-span-4">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900" data-testid="admin-header-title">
              Admin Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {adminName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700" data-testid="admin-header-name">{adminName}</span>
              </div>
              <Link
                href="/admin/kelas/buat"
                className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                data-testid="admin-create-class-button"
              >
                + Buat Kelas Baru
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
