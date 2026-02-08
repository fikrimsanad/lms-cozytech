import { Button } from "@radix-ui/themes/components/button";
import { Card } from "@radix-ui/themes/components/card";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Facebook,
  Linkedin,
  Share2,
  Star,
  Twitter,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function BlogDetail() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        <Link href="/landingpage/pages/blog" className="">
          <Button
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-900 flex gap-2"
          >
            <ArrowLeft className="mr-2 w-4 h-4 mt-1" />
            Kembali ke Blog
          </Button>
        </Link>
      </div>
      <div className="flex items-center mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="space-y-6 mt-10">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Unity Game Development Mastery
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm py-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span className="text-white font-semibold">
                  10 Januari 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-8 bg-black max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 mt-6">
        <div className="col-span-3">
          {/* Content */}
          <section className=" space-y-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Course */}
              <Card className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-lg space-y-4">
                <div>
                  <div className="text-white text-2xl">Tentang Kursus</div>
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Instruktur berpengalaman di GameDevAcademy dengan passion
                    untuk berbagi knowledge dalam game development.
                  </p>
                </div>
              </Card>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {/* About Course */}
              <Card className="bg-gray-900 border border-gray-800 px-8 py-4 rounded-lg space-y-4">
                <div>
                  <div className="text-white text-2xl">Tentang Kursus</div>
                </div>
                <div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Perbandingan mendalam antara Unity dan Unreal Engine.
                    Pelajari kelebihan, kekurangan, dan use case terbaik untuk
                    masing-masing engine.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Memilih game engine yang tepat adalah keputusan penting
                    dalam perjalanan game development Anda. Mari kita bandingkan
                    Unity dan Unreal Engine secara detail. Unity - Versatile dan
                    Beginner Friendly Unity menggunakan C# dan memiliki learning
                    curve yang lebih landai. Sangat populer untuk mobile games,
                    2D games, dan indie projects. Unreal Engine - Power dan
                    Visual Quality Unreal Engine terkenal dengan grafis AAA
                    quality dan Blueprint system. Ideal untuk game 3D dengan
                    visual yang stunning.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <Card className="bg-gray-900 border border-gray-800 rounded-lg">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Share2 className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-bold">Share Article</h3>
              </div>
              <div className="flex flex-col space-y-2">
                <Button className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white grid grid-flow-col justify-item-center">
                  <Facebook className="w-6 h-6" />
                  Share on Facebook
                </Button>
                <Button className="w-full px-6 py-4 bg-sky-500 hover:bg-blue-700 text-white grid grid-flow-col justify-item-center">
                  <Twitter className="w-6 h-6" />
                  Share on Twitter
                </Button>
                <Button className="w-full px-6 py-4 bg-sky-400 hover:bg-blue-700 text-white grid grid-flow-col justify-item-center">
                  <Linkedin className="w-6 h-6 mr-2" />
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
