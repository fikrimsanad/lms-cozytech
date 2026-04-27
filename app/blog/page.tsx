import Link from "next/link";
import { Calendar, User } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogPage() {
  const articles = [
    {
      title: "10 Tips Memulai Karir Sebagai Game Developer di 2026",
      excerpt: "Panduan lengkap untuk memulai karir di industri game development, dari skill yang dibutuhkan hingga portofolio.",
      author: "Admin",
      date: "15 Jan 2026",
      category: "Karir",
    },
    {
      title: "Unity vs Unreal Engine: Mana yang Tepat untuk Anda?",
      excerpt: "Perbandingan mendalam antara dua game engine terpopuler untuk membantu Anda memilih yang sesuai.",
      author: "Andi Wijaya",
      date: "10 Jan 2026",
      category: "Teknologi",
    },
    {
      title: "Panduan Lengkap Belajar C# untuk Game Development",
      excerpt: "Dari basic syntax hingga advanced concepts, semua yang perlu Anda ketahui tentang C# untuk game dev.",
      author: "Budi Santoso",
      date: "5 Jan 2026",
      category: "Tutorial",
    },
    {
      title: "Membuat Game Pertama Anda dalam 30 Hari",
      excerpt: "Challenge 30 hari untuk membuat game sederhana dari nol hingga publish di platform game.",
      author: "Admin",
      date: "28 Des 2025",
      category: "Tutorial",
    },
    {
      title: "Tren Game Development 2026 yang Wajib Diketahui",
      excerpt: "AI-driven NPCs, VR/AR gaming, cloud gaming, dan tren lainnya yang akan mendominasi industri.",
      author: "Citra Dewi",
      date: "20 Des 2025",
      category: "Industri",
    },
    {
      title: "Cara Membuat Portofolio Game Developer yang Menarik",
      excerpt: "Tips dan trik membuat portofolio yang bisa menarik perhatian studio game ternama.",
      author: "Dian Pratama",
      date: "15 Des 2025",
      category: "Karir",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-20" data-testid="blog-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
              <span className="text-amber-400 text-sm font-semibold">BLOG</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Artikel &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Tutorial
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Insights, tips, dan tutorial terbaru tentang game development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Link
                key={i}
                href={`/blog/${i + 1}`}
                className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-xl rounded-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={article.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-4 left-4 bg-cyan-500 px-3 py-1 rounded-full text-black text-xs font-bold">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-white font-bold text-lg leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 text-gray-500 text-xs">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {article.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
