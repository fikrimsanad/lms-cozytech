import Link from "next/link";
import {
  Users,
  BookOpen,
  Star,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10" data-testid="landing-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                CozyTech
              </span>
              <span className="text-white/60 font-light ml-1">LMS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform pembelajaran game development terbaik di Indonesia. Wujudkan impian menjadi game developer profesional.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>12.500+ Member</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Beranda</Link></li>
              <li><Link href="/kelas" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Daftar Kelas</Link></li>
              <li><Link href="/blog" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link href="/tentang" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/kontak" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Program</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Game Designer</span></li>
              <li><span className="text-gray-400 text-sm">Game Developer</span></li>
              <li><span className="text-gray-400 text-sm">3D Animation</span></li>
              <li><span className="text-gray-400 text-sm">Sertifikasi</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                info@cozytech.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                +62 812 3456 7890
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CozyTech LMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
