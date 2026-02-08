import { Badge } from "@radix-ui/themes/components/badge";
import { Button } from "@radix-ui/themes/components/button";
import { Card } from "@radix-ui/themes/components/card";
import { Separator } from "@radix-ui/themes/components/separator";
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function CourseDetail() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        <Link href="/landingpage/pages/course" className="">
          <Button
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-900 flex gap-2"
          >
            <ArrowLeft className="mr-2 w-4 h-4 mt-1" />
            Kembali ke Daftar Kursus
          </Button>
        </Link>
      </div>
      <div className="flex items-center mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-cyan-500 px-3 py-1 rounded-full text-black text-sm font-bold">
                Unity Development
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-white text-sm">
                Intermediate
              </span>
            </div>
            <div className="space-y-6 mt-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Unity Game Development Mastery
                </h1>
              </div>
              <div>
                <p className="text-gray-300 text-lg mb-6">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm py-2">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-white font-semibold">4.9</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-5 h-5" />
                <span>32 siswa</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>12 Weeks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-8 bg-black max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-6">
        <div className="col-span-2">
          {/* Content */}
          <section className="">
            <div className="lg:col-span-2 space-y-8">
              {/* About Course */}
              <Card className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-lg space-y-4">
                <div>
                  <div className="text-white text-2xl">Tentang Kursus</div>
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Master Unity engine dari dasar hingga advanced. Buat game 2D
                    dan 3D dengan C# scripting, physics, dan game mechanics.
                    Kursus ini dirancang untuk memberikan pemahaman mendalam
                    tentang dengan pendekatan praktis dan hands-on. Anda akan
                    belajar dari instruktur berpengalaman dan mendapatkan akses
                    ke materi pembelajaran yang komprehensif.
                  </p>
                </div>
              </Card>
            </div>
          </section>
          {/* Syllabus */}
          <section className="py-6 bg-black">
            <div>
              <Card className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-sm">
                <div>
                  <div className="text-white text-2xl flex items-center">
                    <BookOpen className="mr-2 w-6 h-6 text-cyan-400" />
                    Silabus Kursus
                  </div>
                </div>
                <div className="mt-8">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <div className="text-white font-medium">
                          Introduction to Unity Interface
                        </div>
                        <div className="text-gray-500 text-sm">Modul 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
          {/* What we learn */}
          <section>
            <Card className="bg-gray-900 border border-gray-800 rounded-lg px-8 py-6 space-y-8">
              <div>
                <div className="text-white text-2xl">
                  Yang Akan Anda Pelajari
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Fundamental concepts dan best practices
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Hands-on project development
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Industry-standard workflows
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Portfolio-ready projects
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Problem-solving techniques
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      Career guidance & mentoring
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <Card className="bg-gray-900 border border-gray-800 rounded-lg">
            <div className="p-10">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-white mb-2">
                  Rp 3.500.000
                </div>
                <div className="text-gray-400">Harga Kursus</div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Instruktur</span>
                  <span className="text-white font-semibold">Andi Wijaya</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Durasi</span>
                  <span className="text-white font-semibold">12 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level</span>
                  <span className="text-white font-semibold">Intermediate</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Siswa</span>
                  <span className="text-white font-semibold">200</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:from-cyan-600 hover:to-emerald-600 font-semibold h-12 text-lg mb-3">
                Daftar Sekarang
              </Button>
              <Button
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </Card>

          {/* Features */}
          <Card className="bg-gray-900 border border-gray-800 rounded-sm px-6 py-8 space-y-4">
            <div>
              <div className="text-white text-lg">Keuntungan Bergabung</div>
            </div>
            <div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                    Sertifikat Digital
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-gray-300 text-sm">Akses Selamanya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span className="text-gray-300 text-sm">
                    Komunitas Alumni
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300 text-sm">Materi Lengkap</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      {/* Instructors Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4">
              <span className="text-pink-400 text-sm font-semibold">
                EXPERT INSTRUCTORS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Belajar dari{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Expert
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Instruktur berpengalaman dari industri game development terkemuka
              di Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Semua instruktur kami adalah praktisi aktif di industri game
              development
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">9,600+ Total Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-300">4.9 Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section - Success Stories */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
              <span className="text-emerald-400 text-sm font-semibold">
                SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cerita Sukses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Alumni
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transformasi karir nyata dari alumni yang telah sukses di industri
              game development
            </p>
          </div>

          {/* Video Testimonial - Featured */}
          <div className="mb-16">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video */}
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={
                      "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                    }
                    alt={"a"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-colors">
                    <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[20px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-black hover:bg-emerald-600 px-4 py-2 rounded-lg">
                      🎥 VIDEO TESTIMONI
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-sm px-4 py-1 rounded-xl">
                      Career Switch dalam 8 Bulan
                    </Badge>
                    <blockquote className="text-2xl text-white font-semibold mt-6 mb-6 leading-relaxed">
                      "Dalam 8 bulan, saya berhasil transition dari web
                      developer menjadi senior Unity developer. GameDevAcademy
                      memberikan structured learning path dan mentorship yang
                      saya butuhkan."
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="text-white font-bold text-xl">
                          Ahmad Fadli
                        </div>
                        <div className="text-cyan-400 font-medium">
                          Senior Unity Developer
                        </div>
                        <div className="text-gray-400 text-sm">Kummara</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Success Story Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 overflow-hidden group hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 rounded-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=800 "
                  alt="image-course"
                  className="w-full h-92 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                <div className="absolute bottom-2 left-1">
                  <div className="px-4 space-y-1">
                    <h4 className="text-white text-3xl">Andi Wijaya</h4>
                    <p className="text-cyan-500">Senior Unity Instructor</p>
                    <p className="text-white">
                      Unity Development & Mobile Games
                    </p>
                  </div>
                </div>
              </div>

              <div className="py-5 px-4 space-y-2">
                <p className="text-gray-400">
                  Master Unity engine dari dasar hingga advanced. Buat game 2D
                  dan 3D dengan C# scripting, physics, dan game mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CourseDetail;
