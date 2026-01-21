import { Search } from "lucide-react";
import { Input } from "postcss";
import React from "react";

function Blog() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Blog{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kami
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Artikel, tutorial, dan insights terbaru tentang game development
              dari expert kami
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel..."
                className="bg-gray-900 border-gray-700 text-white pl-10 focus:border-cyan-500 py-2"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              <button className=""></button>
            </div>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            Menampilkan 3 dari 12 artikel
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
