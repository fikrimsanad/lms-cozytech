import Link from "next/link";
import { Bell, MessageSquare, LogOut, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div data-testid="dashboard-header">
      <div className="bg-white w-full h-16 border-b border-slate-100 sticky top-0 z-10">
        <div className="flex justify-end items-center h-full gap-4 px-6">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-testid="header-notification-btn">
              <Bell className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" data-testid="header-message-btn">
              <MessageSquare className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 pl-4 pr-3 py-2 rounded-lg">
            <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-sm font-bold">U</div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900" data-testid="header-user-name">User</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
