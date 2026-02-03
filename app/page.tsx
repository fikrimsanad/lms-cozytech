import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@radix-ui/themes/components/button";
import {
  Users,
  BookOpen,
  Star,
  Clock,
  TrendingUp,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Award,
  Target,
  Zap,
  Code,
  Palette,
  Box,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@radix-ui/themes/components/card";
import { Badge } from "@radix-ui/themes/components/badge";
import { Input } from "postcss";
import { url } from "inspector";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85"
            alt="Game Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold">
                🎮 Platform Pembelajaran #1 di Indonesia
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Wujudkan Impian Jadi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Game Developer
              </span>
              Profesional
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Belajar game development dari instruktur berpengalaman. Mulai dari
              Unity, Unreal Engine, hingga Game Design dengan kurikulum
              industry-standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r py-4 px-8 flex gap-2 rounded-md from-cyan-500 to-emerald-500 text-black hover:from-cyan-600 hover:to-emerald-600 font-semibold text-lg">
                Mulai Belajar
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold text-lg py-3 px-12 flex gap-3 rounded-md"
              >
                Lihat Kursus
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">12.500+</div>
              <div className="text-gray-400">Member Bergabung</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">24+</div>
              <div className="text-gray-400">Kursus Tersedia</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <div className="text-gray-400">Tingkat Kelulusan</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">4.8/5</div>
              <div className="text-gray-400">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </section>
      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
              <span className="text-purple-400 text-sm font-semibold">
                LEARNING PATHS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pilih{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Jalur Karir
              </span>{" "}
              Anda
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Temukan learning path yang sesuai dengan passion dan career goals
              Anda di industri game development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="px-8 py-8 text-center  border border-amber-500/30 bg-gradient-to-b from-amber-500/20 to-amber-500/5 rounded-lg">
              <div className="inline-flex items-center justify-center bg-amber-500/10 px-6 py-5 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Palette className="w-10 h-10" color="orange" size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-xl font-semibold">
                  Game Designer
                </h4>
                <p className="text-gray-200 text-sm font-light">
                  Kuasai seni merancang game yang engaging dan fun. Pelajari
                  game mechanics, level design, game balancing, dan user
                  experience untuk menciptakan game yang memorable.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-white font-semibold mb-3 flex gap-2 items-center">
                  <Target className="w-4 h-4" color="orange" />
                  Skills yang Dipelajari:
                </h4>
                <div className="space-y-3 mb-6">
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Game Mechanics Design
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Level Design & Layout
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Game Balancing
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Player Psychology
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Prototyping & Testing
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="orange" />
                    <span className="text-gray-300 text-sm">
                      Narrative Design
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700 space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Durasi:</span>
                    <span className="text-white font-semibold">6-8 Bulan</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Career Path:</span>
                    <span className="text-orange-400">Game Designer</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Avg. Salary:</span>
                    <span className="text-emerald-400 font-bold">
                      Rp 8-15 Juta/bulan
                    </span>
                  </div>
                </div>
                <div className="py-4">
                  <Link href="/" className="w-full">
                    <Button className="text-black bg-amber-500 rounded-lg px-18 py-3 flex hover:bg-amber-400 ">
                      Mulai Learning Path
                      <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-8 py-8 text-center border border-cyan-500/30 bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 rounded-lg">
              <div className="inline-flex items-center justify-center bg-cyan-500/10 px-6 py-5 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Code className="w-10 h-10" color="cyan" size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-xl font-semibold">
                  Game Developer
                </h4>
                <p className="text-gray-200 text-sm font-light">
                  Menjadi programmer handal yang dapat mewujudkan game concept
                  menjadi reality. Dari scripting, physics, AI programming
                  hingga optimization dan debugging.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-white font-semibold mb-3 flex gap-2 items-center">
                  <Target className="w-4 h-4" color="cyan" />
                  Skills yang Dipelajari:
                </h4>
                <div className="space-y-3 mb-6">
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      C# / C++ Programming
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      Unity / Unreal Engine
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      Game Physics & Math
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      AI Programming
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      Network Programming
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2 className="w-4 h-4" color="cyan" />
                    <span className="text-gray-300 text-sm">
                      Performance Optimization
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700 space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Durasi:</span>
                    <span className="text-white font-semibold">6-8 Bulan</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Career Path:</span>
                    <span className="text-cyan-400">Game Developer</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Avg. Salary:</span>
                    <span className="text-emerald-400 font-bold">
                      Rp 8-15 Juta/bulan
                    </span>
                  </div>
                </div>
                <div className="py-4">
                  <Link href="/" className="w-full">
                    <Button className="text-black bg-cyan-600 rounded-lg px-18 py-3 flex hover:bg-cyan-400 ">
                      Mulai Learning Path
                      <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-8 py-8 text-center border border-emerald-500/30 bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 rounded-lg">
              <div className="inline-flex items-center justify-center bg-emerald-500/10 px-6 py-5 rounded-2xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Box className="w-10 h-10" color="mediumaquamarine" size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-xl font-semibold">
                  3D Animation
                </h4>
                <p className="text-gray-200 text-sm font-light">
                  Master dalam menciptakan aset 3D yang stunning untuk game.
                  Mulai dari character modeling, texturing, rigging, animation
                  hingga integration ke game engine.
                </p>
              </div>
              <div className="py-6">
                <h4 className="text-white font-semibold mb-3 flex gap-2 items-center">
                  <Target className="w-4 h-4" color="mediumaquamarine" />
                  Skills yang Dipelajari:
                </h4>
                <div className="space-y-3 mb-6">
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">
                      3D Modeling (Blender/Maya)
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">
                      UV Mapping & Texturing
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">
                      Character Rigging
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">
                      Animation Principles
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">
                      Game-ready Asset Creation
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      color="mediumaquamarine"
                    />
                    <span className="text-gray-300 text-sm">PBR Materials</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-700 space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Durasi:</span>
                    <span className="text-white font-semibold">6-8 Bulan</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Career Path:</span>
                    <span className="text-orange-400">Game Designer</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Avg. Salary:</span>
                    <span className="text-emerald-400 font-bold">
                      Rp 8-15 Juta/bulan
                    </span>
                  </div>
                </div>
                <div className="py-4">
                  <Link href="/" className="w-full">
                    <Button className="text-black bg-emerald-500 rounded-lg px-18 py-3 flex hover:bg-emerald-400">
                      Mulai Learning Path
                      <ArrowRight className="ml-2 w-4 h-4 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Belum yakin jalur mana yang tepat untuk Anda?
            </p>
            <Button
              variant="outline"
              className="border border-cyan-400 rounded-sm text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-2"
            >
              Konsultasi Gratis dengan Career Advisor
            </Button>
          </div>
        </div>
      </section>
      {/* Popular Courses Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <span className="text-cyan-400 text-sm font-semibold">
                POPULER
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kursus Paling{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Diminati
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Bergabung dengan ribuan students yang telah memulai karir mereka
              di industri game development
            </p>
          </div>

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

          <div className="text-center mt-12 flex justify-center">
            <Link href="/">
              <Button
                variant="outline"
                className="border-2 flex gap-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-2 rounded-sm"
              >
                Lihat Semua Kursus
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
          </div>
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
      {/* Blog Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
              <span className="text-amber-400 text-sm font-semibold">BLOG</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Artikel &{" "}
              <span className="bg-clip-text bg-gradient-to-r text-cyan-400">
                Tutorial
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Insights, tips, dan tutorial terbaru tentang game development dari
              expert kami
            </p>
          </div>
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
        </div>
      </section>
      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 to-emerald-600 p-12 md:p-16">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Siap Memulai Perjalanan Anda?
              </h2>
              <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
                Bergabung dengan ribuan students yang telah mengubah passion
                mereka menjadi karir impian di industri game development
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/">
                  <Button className="bg-black flex gap-2 text-white hover:bg-gray-900 font-semibold text-lg px-6 py-4 rounded-lg group">
                    Jelajahi Semua Kursus
                    <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button className="text-black hover:border-2 hover:border-black font-bold text-lg px-8 py-3.5 rounded-lg">
                    Konsultasi Gratis
                  </Button>
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <span className="text-cyan-400 text-sm font-semibold">
                  HUBUNGI KAMI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ada Pertanyaan?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Mari Bicara!
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Tim kami siap membantu Anda menemukan kursus yang tepat dan
                menjawab semua pertanyaan Anda tentang program kami.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Konsultasi Karir
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Dapatkan guidance untuk memilih learning path yang tepat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/10 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Respon Cepat
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Kami akan merespon dalam 24 jam kerja
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Expert Advice
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Tim expert siap memberikan rekomendasi terbaik
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-gray-800 border-gray-700 px-8 rounded-lg">
              <div className="py-8">
                <h1 className="text-white text-2xl">Kirim Pesan</h1>
                <p className="text-gray-400">
                  Isi form di bawah dan kami akan menghubungi Anda segera
                </p>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Nama Lengkap *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Masukkan nama Anda"
                        className="bg-gray-700 border-gray-600 text-white pl-10 focus:border-cyan-500 w-full py-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        placeholder="nama@email.com"
                        className="bg-gray-700 border-gray-600 text-white pl-10 focus:border-cyan-500 w-full py-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Pesan *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        placeholder="Ceritakan apa yang ingin Anda ketahui..."
                        className="bg-gray-700 border-gray-600 text-white pl-10 focus:border-cyan-500 w-full py-2 rounded-lg"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:from-cyan-600 hover:to-emerald-600 font-semibold h-12"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
