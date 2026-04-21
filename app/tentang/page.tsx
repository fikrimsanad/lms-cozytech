import { Award, Users, BookOpen, Star, Target, Zap } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-20" data-testid="tentang-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tentang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                CozyTech LMS
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              CozyTech LMS adalah platform pembelajaran game development terkemuka di Indonesia.
              Kami menggabungkan pembelajaran mandiri via video dengan live session interaktif
              bersama instruktur berpengalaman dari industri.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white text-xl font-bold">Misi Kami</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Menyediakan pendidikan game development berkualitas tinggi yang dapat diakses
                oleh siapa saja di Indonesia. Kami percaya setiap orang berhak memiliki kesempatan
                untuk mewujudkan impian menjadi game developer profesional.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white text-xl font-bold">Visi Kami</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Menjadi platform pembelajaran game development #1 di Asia Tenggara dan
                menghasilkan ribuan game developer profesional yang mampu bersaing
                di industri game global.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-6">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">12.500+</p>
              <p className="text-gray-400 text-sm mt-1">Member</p>
            </div>
            <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-6">
              <BookOpen className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">24+</p>
              <p className="text-gray-400 text-sm mt-1">Kursus</p>
            </div>
            <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-6">
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">94%</p>
              <p className="text-gray-400 text-sm mt-1">Kelulusan</p>
            </div>
            <div className="text-center bg-gray-900 border border-gray-800 rounded-xl p-6">
              <Star className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white">4.8/5</p>
              <p className="text-gray-400 text-sm mt-1">Rating</p>
            </div>
          </div>

          {/* Why Us */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Kenapa CozyTech?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="bg-cyan-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-cyan-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Kurikulum Industry-Standard</h4>
              <p className="text-gray-400 text-sm">
                Materi disusun berdasarkan kebutuhan industri game development terkini.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="bg-emerald-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-emerald-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Instruktur Berpengalaman</h4>
              <p className="text-gray-400 text-sm">
                Belajar langsung dari praktisi aktif di industri game development.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <div className="bg-amber-500/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-amber-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Sertifikasi Profesional</h4>
              <p className="text-gray-400 text-sm">
                Dapatkan sertifikat yang diakui oleh industri setelah menyelesaikan program.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
