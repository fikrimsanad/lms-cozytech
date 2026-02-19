import Link from "next/link";
import React from "react";
import Navigation from "../../components/navigasi";
import Header from "../../components/header";

function browseclass() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="px-6 mt-4">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            {/* Header Section */}
            <section className="flex items-stretch gap-3 text-2xl font-bold mb-8">
              <div className="text-black">Cari Kelas</div>
            </section>

            {/* Promo Section */}
            <section className="bg-gradient-to-r from-[#333333] to-[#555555] rounded-[10px] p-8 mb-8 text-white">
              <div className="flex justify-between items-center max-md:flex-col max-md:gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-4">Diskon Spesial!</h2>
                  <p className="text-lg mb-4">
                    Dapatkan diskon hingga 30% untuk kelas pilihan. Kesempatan
                    terbatas!
                  </p>
                  <button className="bg-white text-[#333333] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                    Lihat Promo
                  </button>
                </div>
                <div className="w-48 h-32 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
            </section>

            {/* Search and Filter */}
            <section className="mb-8">
              <div className="flex gap-4 mb-6 max-md:flex-col">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Cari kelas..."
                    className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#333333]"
                  />
                </div>

                <div className="border border-gray-300 rounded-md py-2 px-2">
                  <select className="px-2">
                    <option>Terbaru</option>
                    <option>Terpopular</option>
                    <option>Termurah</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Class List Section */}
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-6">Daftar Kelas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#F9F9F9] rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-[#333333] text-white px-2 py-1 rounded text-xs">
                        Pemula
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Brevet AB - Perpajakan Dasar
                    </h4>
                    <p className="text-gray-600 mb-2">By Dr. Ahmad Setiawan</p>
                    <p className="text-sm text-gray-500 mb-4">📊 30 Jam</p>
                    <div className="flex justify-between items-center">
                      <div className="grid-cols-1">
                        <div>
                          <span className="text-xs text-gray-500 line-through">
                            Rp 3.500.000
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-lg">
                            Rp 2.500.000
                          </span>
                        </div>
                      </div>
                      <button className="bg-[#333333] text-white px-4 py-2 rounded hover:bg-[#555555] transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9F9F9] rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-[#333333] text-white px-2 py-1 rounded text-xs">
                        Pemula
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Brevet AB - Perpajakan Dasar
                    </h4>
                    <p className="text-gray-600 mb-2">By Dr. Ahmad Setiawan</p>
                    <p className="text-sm text-gray-500 mb-4">📊 30 Jam</p>
                    <div className="flex justify-between items-center">
                      <div className="grid-cols-1">
                        <div>
                          <span className="text-xs text-gray-500 line-through">
                            Rp 3.500.000
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-lg">
                            Rp 2.500.000
                          </span>
                        </div>
                      </div>
                      <button className="bg-[#333333] text-white px-4 py-2 rounded hover:bg-[#555555] transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F9F9F9] rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-6xl">📖</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-[#333333] text-white px-2 py-1 rounded text-xs">
                        Pemula
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2">
                      Brevet AB - Perpajakan Dasar
                    </h4>
                    <p className="text-gray-600 mb-2">By Dr. Ahmad Setiawan</p>
                    <p className="text-sm text-gray-500 mb-4">📊 30 Jam</p>
                    <div className="flex justify-between items-center">
                      <div className="grid-cols-1">
                        <div>
                          <span className="text-xs text-gray-500 line-through">
                            Rp 3.500.000
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-lg">
                            Rp 2.500.000
                          </span>
                        </div>
                      </div>
                      <button className="bg-[#333333] text-white px-4 py-2 rounded hover:bg-[#555555] transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default browseclass;
