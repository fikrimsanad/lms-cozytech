import { Card } from "@radix-ui/themes/components/card";
import { Target, Zap } from "lucide-react";
import React from "react";

function about() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              GameDevAcademy
            </span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Platform pembelajaran game development terdepan di Indonesia yang
            telah membantu ribuan students mewujudkan impian berkarir di
            industri game
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </section>
      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nilai-Nilai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Prinsip yang kami pegang teguh dalam setiap aspek pembelajaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Perjalanan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestone penting dalam membangun ekosistem pembelajaran game
              development
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-emerald-500 hidden md:block"></div>

            <div className="space-y-12"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
