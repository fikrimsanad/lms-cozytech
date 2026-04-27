import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag, ChevronRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const blogMap: Record<string, {
  title: string; author: string; date: string; category: string; readTime: string;
  thumbnail: string; content: string[];
  related: { title: string; id: string; category: string }[];
}> = {
  "1": {
    title: "10 Tips Memulai Karir Sebagai Game Developer di 2026",
    author: "Admin", date: "15 Jan 2026", category: "Karir", readTime: "8 menit",
    thumbnail: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      "Industri game development terus berkembang pesat dan menjadi salah satu sektor teknologi paling menjanjikan di 2026. Dengan valuasi industri global yang mencapai lebih dari $200 miliar, peluang karir di bidang ini semakin terbuka lebar untuk siapa saja yang memiliki passion dan keterampilan yang tepat.",
      "## 1. Pilih Spesialisasi Anda",
      "Game development memiliki banyak spesialisasi — programmer, game designer, 3D artist, animator, sound designer, dan lainnya. Tentukan mana yang paling sesuai dengan minat dan keahlian Anda.",
      "## 2. Kuasai Game Engine",
      "Unity dan Unreal Engine adalah dua game engine paling populer saat ini. Unity sangat cocok untuk game 2D, mobile, dan indie games, sementara Unreal Engine lebih sering digunakan untuk game AAA dengan grafis high-end.",
      "## 3. Pelajari Bahasa Pemrograman",
      "C# untuk Unity dan C++ untuk Unreal Engine adalah bahasa yang wajib dikuasai. Selain itu, Python dan JavaScript juga bermanfaat untuk scripting dan web-based games.",
      "## 4. Bangun Portofolio",
      "Portofolio adalah kunci utama untuk mendapatkan pekerjaan di industri game. Buat minimal 2-3 project game yang menunjukkan kemampuan Anda. Publish di itch.io atau Steam.",
      "## 5. Ikuti Game Jam",
      "Game jam adalah event di mana developer membuat game dalam waktu singkat (biasanya 48-72 jam). Ini cara terbaik untuk berlatih, networking, dan menambah portofolio.",
      "## 6. Bergabung dengan Komunitas",
      "Join komunitas game developer lokal maupun internasional. Discord server, forum, dan meetup adalah tempat yang tepat untuk belajar dan mendapatkan mentor.",
      "## 7. Terus Belajar dan Update",
      "Teknologi game berubah sangat cepat. Luangkan waktu untuk belajar hal baru setiap minggu — entah itu teknik rendering baru, AI, atau tools terbaru.",
      "## 8. Jangan Takut Memulai dari Kecil",
      "Banyak studio game besar dimulai dari proyek kecil. Mulailah dengan game sederhana, lalu tingkatkan kompleksitas seiring bertambahnya pengalaman.",
      "## 9. Pahami Business Side",
      "Selain kemampuan teknis, pahami juga aspek bisnis seperti monetisasi, marketing, dan publishing. Ini akan membuat Anda lebih valuable di industri.",
      "## 10. Konsisten dan Sabar",
      "Karir di game development membutuhkan waktu dan konsistensi. Jangan menyerah jika game pertama Anda tidak sempurna — setiap project adalah pembelajaran berharga.",
    ],
    related: [
      { title: "Unity vs Unreal Engine: Mana yang Tepat?", id: "2", category: "Teknologi" },
      { title: "Cara Membuat Portofolio Game Developer", id: "6", category: "Karir" },
      { title: "Panduan Lengkap Belajar C#", id: "3", category: "Tutorial" },
    ],
  },
  "2": {
    title: "Unity vs Unreal Engine: Mana yang Tepat untuk Anda?",
    author: "Andi Wijaya", date: "10 Jan 2026", category: "Teknologi", readTime: "10 menit",
    thumbnail: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1200",
    content: [
      "Memilih game engine yang tepat adalah keputusan penting bagi setiap game developer. Dua pilihan paling populer saat ini adalah Unity dan Unreal Engine 5. Mari kita bandingkan keduanya secara mendalam.",
      "## Unity — Fleksibel dan User-Friendly",
      "Unity adalah game engine yang sangat fleksibel, mendukung 2D dan 3D game development. Dengan C# sebagai bahasa utama, Unity memiliki learning curve yang lebih landai dibanding Unreal. Unity sangat populer untuk mobile games, indie games, dan VR/AR development.",
      "## Unreal Engine 5 — Grafis AAA dan Power",
      "Unreal Engine 5 dikenal dengan kemampuan grafis yang luar biasa. Fitur seperti Nanite (virtual geometry), Lumen (global illumination), dan MetaHuman membuat UE5 menjadi pilihan utama untuk game AAA. Menggunakan C++ dan Blueprint visual scripting.",
      "## Perbandingan Langsung",
      "Untuk pemula, Unity lebih mudah dipelajari. Untuk game dengan grafis realistis, Unreal Engine lebih unggul. Dari segi biaya, Unity gratis untuk pendapatan di bawah $200K, sedangkan Unreal gratis hingga pendapatan $1M.",
      "## Kesimpulan",
      "Tidak ada engine yang \"lebih baik\" secara absolut. Pilihan tergantung pada jenis game yang ingin Anda buat, platform target, dan preferensi pribadi. Yang terpenting, pilih satu dan kuasai dengan mendalam.",
    ],
    related: [
      { title: "10 Tips Memulai Karir Game Developer", id: "1", category: "Karir" },
      { title: "Panduan Lengkap Belajar C#", id: "3", category: "Tutorial" },
    ],
  },
};

const fallback = blogMap["1"];

export default async function DetailBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogMap[id] || fallback;

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20" data-testid="detail-blog-page">
        {/* Hero */}
        <div className="relative h-72 overflow-hidden">
          <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <Link href="/blog" className="flex items-center gap-1 text-gray-400 hover:text-white text-sm mb-3">
              <ArrowLeft className="w-4 h-4" />Kembali ke Blog
            </Link>
            <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">{blog.category}</span>
            <h1 className="text-3xl font-bold text-white mt-3 leading-tight">{blog.title}</h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{blog.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{blog.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <article className="space-y-4">
            {blog.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-bold text-white mt-6">{block.replace("## ", "")}</h2>;
              }
              return <p key={i} className="text-gray-400 leading-relaxed">{block}</p>;
            })}
          </article>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-8 pt-6 border-t border-gray-800">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">{blog.category}</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">Game Development</span>
            <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">2026</span>
          </div>

          {/* Related Articles */}
          {blog.related.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-bold text-white mb-4">Artikel Terkait</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blog.related.map((r, i) => (
                  <Link key={i} href={`/blog/${r.id}`} className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition-all">
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded-full">{r.category}</span>
                    <h4 className="text-white text-sm font-semibold mt-2 group-hover:text-cyan-400 transition-colors">{r.title}</h4>
                    <span className="text-gray-500 text-xs flex items-center gap-1 mt-2">Baca selengkapnya <ChevronRight className="w-3 h-3" /></span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
