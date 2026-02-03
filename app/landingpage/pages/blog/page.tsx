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
                className="bg-gray-900 border border-gray-700 text-white pl-10 focus:border-cyan-500 py-3 w-full rounded-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              <button className="bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Semua
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Career
              </button>
              <button className=" bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Tutorial
              </button>
              <button className=" bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Game Design
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Business
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Technical
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors text-white bg-gray-80 hover:bg-cyan-700">
                Trend
              </button>
            </div>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            Menampilkan 3 dari 12 artikel
          </div>
        </div>
      </section>
      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <h1 className="text-white font-bold text-xl">
                  10 Tips Memulai Karir Sebagai Game Developer di 2024
                </h1>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-6 px-4">
                <div className="text-gray-400 text-sm">By : Admin</div>
                <div className="text-gray-400 text-sm">12/12/2026</div>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <h1 className="text-white font-bold text-xl">
                  10 Tips Memulai Karir Sebagai Game Developer di 2024
                </h1>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-6 px-4">
                <div className="text-gray-400 text-sm">By : Admin</div>
                <div className="text-gray-400 text-sm">12/12/2026</div>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <h1 className="text-white font-bold text-xl">
                  10 Tips Memulai Karir Sebagai Game Developer di 2024
                </h1>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-6 px-4">
                <div className="text-gray-400 text-sm">By : Admin</div>
                <div className="text-gray-400 text-sm">12/12/2026</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
