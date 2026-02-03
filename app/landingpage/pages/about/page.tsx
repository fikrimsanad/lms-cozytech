import { Card } from "@radix-ui/themes/components/card";
import { Award, Target, TrendingUp, Users, Zap } from "lucide-react";
import React from "react";

function about() {
  const milestones = [
    {
      year: "2018",
      title: "Didirikan",
      description:
        "GameDevAcademy resmi berdiri dengan misi memberdayakan developer Indonesia",
    },
    {
      year: "2020",
      title: "5,000 Alumni",
      description: "Meluluskan 5,000+ students dengan tingkat kepuasan 4.8/5",
    },
    {
      year: "2022",
      title: "Partner Industri",
      description: "Bermitra dengan 50+ studio game dan tech companies",
    },
    {
      year: "2024",
      title: "12,500+ Members",
      description:
        "Menjadi platform pembelajaran game development #1 di Indonesia",
    },
  ];

  const team = [
    {
      name: "Andi Wijaya",
      role: "Senior Unity Instructor",
      expertise: "10+ years di game industry",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
    },
    {
      name: "Budi Santoso",
      role: "Unreal Engine Expert",
      expertise: "AAA game development",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    },
    {
      name: "Citra Dewi",
      role: "Game Design Lead",
      expertise: "Award-winning game designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Citra",
    },
    {
      name: "Dedi Kurniawan",
      role: "Mobile Dev Specialist",
      expertise: "100M+ downloads portfolio",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dedi",
    },
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5  border border-cyan-500/20  py-6 px-8 rounded-lg">
              <div className="">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-white text-3xl">Misi Kami</div>
              </div>
              <div className="mt-8">
                <p className="text-gray-500 text-lg leading-relaxed">
                  Memberdayakan developer Indonesia dengan pendidikan
                  berkualitas tinggi, memberikan akses ke teknologi terkini, dan
                  membangun komunitas yang supportive untuk menciptakan
                  game-game berkelas dunia.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 py-6 px-8 rounded-lg">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <Target className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-white text-3xl">Visi Kami</div>
              </div>
              <div className="mt-8">
                <p className="text-gray-500 text-lg leading-relaxed">
                  Menjadi platform pembelajaran game development #1 di Asia
                  Tenggara dan menghasilkan talent-talent terbaik yang mampu
                  bersaing di industri game global.
                </p>
              </div>
            </div>
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all group py-6 rounded-lg border">
              <div className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Target size={42} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Fokus pada Praktik
                </h3>
                <p className="text-gray-500">
                  Pembelajaran hands-on dengan project nyata yang relevan dengan
                  industri
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all group py-6 rounded-lg border">
              <div className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Users size={42} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Komunitas Supportive
                </h3>
                <p className="text-gray-500">
                  Bergabung dengan ribuan alumni dan instruktur yang siap
                  membantu
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all group py-6 rounded-lg border">
              <div className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Award size={42} className="text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Belajar dari Expert
                </h3>
                <p className="text-gray-500">
                  Pembelajaran dibimbing para profesional dibidangnya dan dengan
                  kasus nyata industri.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all group py-6 rounded-lg border">
              <div className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform`}
                >
                  <TrendingUp size={42} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Kurikulum Terkini
                </h3>
                <p className="text-gray-500">
                  Materi selalu diperbarui mengikuti perkembangan teknologi
                  terbaru
                </p>
              </div>
            </div>
          </div>
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

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/50 transition-all">
                      <div className="p-6">
                        <div className="text-cyan-400 font-bold text-3xl mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </Card>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-cyan-500 rounded-full border-4 border-black z-10 flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Team & Instruktur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Kami
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Prinsip yang kami pegang teguh dalam setiap aspek pembelajaran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all group"
              >
                <div className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-500 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-white font-bold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">{member.expertise}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                12,500+
              </div>
              <div className="text-gray-400">Total Students</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                24+
              </div>
              <div className="text-gray-400">Kursus Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                94%
              </div>
              <div className="text-gray-400">Tingkat Kelulusan</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 mb-2">
                50+
              </div>
              <div className="text-gray-400">Partner Industri</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
