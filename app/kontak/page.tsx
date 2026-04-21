import {
  Mail,
  User,
  MessageSquare,
  Target,
  Zap,
  Award,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-20" data-testid="kontak-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <span className="text-cyan-400 text-sm font-semibold">HUBUNGI KAMI</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ada Pertanyaan?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Mari Bicara!
                </span>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Tim kami siap membantu Anda menemukan kursus yang tepat dan menjawab semua pertanyaan.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg"><Target className="w-6 h-6 text-cyan-400" /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Konsultasi Karir</h3>
                    <p className="text-gray-400 text-sm">Dapatkan guidance untuk memilih learning path yang tepat</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg"><Zap className="w-6 h-6 text-emerald-400" /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Respon Cepat</h3>
                    <p className="text-gray-400 text-sm">Kami akan merespon dalam 24 jam kerja</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg"><Award className="w-6 h-6 text-amber-400" /></div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Expert Advice</h3>
                    <p className="text-gray-400 text-sm">Tim expert siap memberikan rekomendasi terbaik</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>info@cozytech.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>Senin - Jumat, 09:00 - 18:00 WIB</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl px-8 py-8">
              <div className="mb-6">
                <h2 className="text-white text-2xl font-bold">Kirim Pesan</h2>
                <p className="text-gray-400 mt-1">Isi form di bawah dan kami akan menghubungi Anda segera</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Nama Lengkap *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="bg-gray-700 border border-gray-600 text-white pl-10 pr-4 py-2.5 rounded-lg w-full focus:outline-none focus:border-cyan-500"
                      data-testid="kontak-name-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="nama@email.com"
                      className="bg-gray-700 border border-gray-600 text-white pl-10 pr-4 py-2.5 rounded-lg w-full focus:outline-none focus:border-cyan-500"
                      data-testid="kontak-email-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">Pesan *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      rows={4}
                      placeholder="Ceritakan apa yang ingin Anda ketahui..."
                      className="bg-gray-700 border border-gray-600 text-white pl-10 pr-4 py-2.5 rounded-lg w-full focus:outline-none focus:border-cyan-500"
                      data-testid="kontak-message-input"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-semibold rounded-lg hover:from-cyan-600 hover:to-emerald-600 transition-all"
                  data-testid="kontak-submit-button"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
