"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOut, Bell, MessageSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const userName = session?.user?.name || "User";
  const userEmail = session?.user?.email || "";
  const userRole = (session?.user as { role?: string })?.role || "student";

  return (
    <div data-testid="dashboard-header">
      <div className="bg-white w-full h-16 border-b border-slate-100 sticky top-0 z-10">
        <div className="flex justify-end items-center h-full gap-4 px-6">
          {/* Notifications */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-testid="header-notification-btn">
              <Bell className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-testid="header-message-btn">
              <MessageSquare className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 pl-4 pr-3 py-2 rounded-lg transition-colors"
              data-testid="header-profile-btn"
            >
              <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900" data-testid="header-user-name">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">{userName}</p>
                  <p className="text-xs text-gray-500">{userEmail}</p>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  data-testid="header-logout-btn"
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
