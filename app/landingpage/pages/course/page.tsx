import { Button } from "@radix-ui/themes";
import { ArrowRight, Filter, Search, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

function CourseList() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Jelajahi Kursus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kami
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Temukan kursus yang tepat untuk memulai atau mengembangkan karir
              Anda di industri game development
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
                placeholder="Cari Kelas..."
                className="bg-gray-900 border  border-gray-700 text-white pl-10 focus:border-cyan-500 py-3 w-full rounded-sm"
              />
            </div>
            <div className=" overflow-x-auto bg-gray-900 border border-gray-700 text-white rounded-sm px-4 py-2">
              <select className="w-full px-2 py-1">
                <option value="">Semua Kategori</option>
                <option value="nextjs">Next.js</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </select>
            </div>
            <div className=" overflow-x-auto bg-gray-900 border border-gray-700 text-white rounded-sm px-4 py-2">
              <select className="w-full px-2 py-1">
                <option value="">Semua Level</option>
                <option value="nextjs">Next.js</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
              </select>
            </div>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            Menampilkan 3 dari 12 artikel
          </div>
        </div>
      </section>
      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
                  alt="image-course"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-semibold">
                      4.9
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-cyan-500 px-3 py-1 rounded-full">
                  <span className="text-black text-xs font-bold">POPULER</span>
                </div>
              </div>
              <div className="flex justify-between py-5 px-4">
                <p className="text-cyan-500">Unity Development</p>
                <p className="text-white">Intermediate</p>
              </div>
              <div className="py-5 px-4 space-y-2">
                <h4 className="text-cyan-500">
                  Unity Game Development Mastery
                </h4>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-2 px-4">
                <div className="text-gray-400">2.847 siswa</div>
                <div className="text-gray-400">12 Weeks</div>
              </div>
              <div className="flex justify-between py-2 px-4">
                <p className="text-white text-2xl font-bold">Rp 3.500.000</p>
                <p className="text-white">Instruktur: Andi Wijaya</p>
              </div>
              <div className="py-6 px-5">
                <Link href="/" className="w-full">
                  <Button className="text-black bg-amber-500 rounded-lg px-28 py-3 flex hover:bg-amber-400 ">
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
                  alt="image-course"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-semibold">
                      4.9
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-cyan-500 px-3 py-1 rounded-full">
                  <span className="text-black text-xs font-bold">POPULER</span>
                </div>
              </div>
              <div className="flex justify-between py-5 px-4">
                <p className="text-cyan-500">Unity Development</p>
                <p className="text-white">Intermediate</p>
              </div>
              <div className="py-5 px-4 space-y-2">
                <h4 className="text-cyan-500">
                  Unity Game Development Mastery
                </h4>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-2 px-4">
                <div className="text-gray-400">2.847 siswa</div>
                <div className="text-gray-400">12 Weeks</div>
              </div>
              <div className="flex justify-between py-2 px-4">
                <p className="text-white text-2xl font-bold">Rp 3.500.000</p>
                <p className="text-white">Instruktur: Andi Wijaya</p>
              </div>
              <div className="py-6 px-5">
                <Link href="/" className="w-full">
                  <Button className="text-black bg-amber-500 rounded-lg px-28 py-3 flex hover:bg-amber-400 ">
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
                  alt="image-course"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white text-sm font-semibold">
                      4.9
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-cyan-500 px-3 py-1 rounded-full">
                  <span className="text-black text-xs font-bold">POPULER</span>
                </div>
              </div>
              <div className="flex justify-between py-5 px-4">
                <p className="text-cyan-500">Unity Development</p>
                <p className="text-white">Intermediate</p>
              </div>
              <div className="py-5 px-4 space-y-2">
                <h4 className="text-cyan-500">
                  Unity Game Development Mastery
                </h4>
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
              <div className="flex justify-between py-2 px-4">
                <div className="text-gray-400">2.847 siswa</div>
                <div className="text-gray-400">12 Weeks</div>
              </div>
              <div className="flex justify-between py-2 px-4">
                <p className="text-white text-2xl font-bold">Rp 3.500.000</p>
                <p className="text-white">Instruktur: Andi Wijaya</p>
              </div>
              <div className="py-6 px-5">
                <Link href="/" className="w-full">
                  <Button className="text-black bg-amber-500 rounded-lg px-28 py-3 flex hover:bg-amber-400 ">
                    Lihat Detail
                    <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseList;
