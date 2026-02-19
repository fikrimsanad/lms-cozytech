import React from "react";
import Navigation from "../../components/navigasi";
import Header from "../../components/header";
import { Award, Calendar, CheckCircle, Clock } from "lucide-react";
import { Card } from "@radix-ui/themes/components/card";
import { Badge } from "@radix-ui/themes/components/badge";
import { Progress } from "@radix-ui/themes/components/progress";
import { Button } from "@radix-ui/themes/components/button";

function certification() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Sertifikasi
            </h1>
            <p className="text-muted-foreground">
              Tingkatkan karir Anda dengan sertifikasi profesional
            </p>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Sertifikat Saya
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-10">
            <Card className=" border border-zinc-300 py-4 px-6 rounded-lg">
              <div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="text-lg">React Developer Professional</div>
                    <div>Tech Academy</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 flex px-2 py-1 rounded-sm">
                    <CheckCircle className="h-4 w-4 mr-1 mt-1" />
                    Active
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-zinc-900" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Tanggal Lulus</p>
                    <p className="font-medium">12-Feb-2025</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Berlaku Hingga</p>
                    <p className="font-medium">12-Feb-2028</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">
                    Certificate ID
                  </p>
                  <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                    JS2024001
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border border-zinc-800 rounded-lg py-1 hover:bg-black hover:text-white"
                >
                  Download Sertifikat
                </Button>
              </div>
            </Card>
            <Card className=" border border-zinc-300 py-4 px-6 rounded-lg">
              <div>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="text-lg">React Developer Professional</div>
                    <div>Tech Academy</div>
                  </div>
                  <Badge className="bg-green-100 text-green-800 flex px-2 py-1 rounded-sm">
                    <CheckCircle className="h-4 w-4 mr-1 mt-1" />
                    Active
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <Progress value={100} className="h-2 bg-zinc-900" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Tanggal Lulus</p>
                    <p className="font-medium">12-Feb-2025</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">Berlaku Hingga</p>
                    <p className="font-medium">12-Feb-2028</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-sm">
                    Certificate ID
                  </p>
                  <p className="font-mono text-sm bg-muted px-2 py-1 rounded">
                    JS2024001
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border border-zinc-800 rounded-lg py-1 hover:bg-black hover:text-white"
                >
                  Download Sertifikat
                </Button>
              </div>
            </Card>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Sertifikasi Tersedia
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg space-y-4">
              <div>
                <div className="space-y-2">
                  <div className="text-lg">Full Stack JavaScript</div>
                  <div className="text-zinc-500">Tech Academy</div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Intermediate</Badge>
                  <Badge className="bg-blue-100 text-blue-800 flex px-2 py-1 rounded-sm">
                    <Clock className="h-3 w-3 mr-2 mt-0.5" />
                    <p className="text-xs">4 Minggu</p>
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-zinc-500">
                  Sertifikasi pengembangan aplikasi React untuk level
                  profesional
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Skills yang dipelajari:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Intermediate
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Redux
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">
                      Rp 2.500.000
                    </span>
                  </div>
                  <Button className="w-full bg-zinc-900 text-white">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="hover:shadow-lg transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg space-y-4">
              <div>
                <div className="space-y-2">
                  <div className="text-lg">Full Stack JavaScript</div>
                  <div className="text-zinc-500">Tech Academy</div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Intermediate</Badge>
                  <Badge className="bg-blue-100 text-blue-800 flex px-2 py-1 rounded-sm">
                    <Clock className="h-3 w-3 mr-2 mt-0.5" />
                    <p className="text-xs">4 Minggu</p>
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-zinc-500">
                  Sertifikasi pengembangan aplikasi React untuk level
                  profesional
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Skills yang dipelajari:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Intermediate
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Redux
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">
                      Rp 2.500.000
                    </span>
                  </div>
                  <Button className="w-full bg-zinc-900 text-white">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="hover:shadow-lg transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg space-y-4">
              <div>
                <div className="space-y-2">
                  <div className="text-lg">Full Stack JavaScript</div>
                  <div className="text-zinc-500">Tech Academy</div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Intermediate</Badge>
                  <Badge className="bg-blue-100 text-blue-800 flex px-2 py-1 rounded-sm">
                    <Clock className="h-3 w-3 mr-2 mt-0.5" />
                    <p className="text-xs">4 Minggu</p>
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-zinc-500">
                  Sertifikasi pengembangan aplikasi React untuk level
                  profesional
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Skills yang dipelajari:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Intermediate
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs border-zinc-300"
                    >
                      Redux
                    </Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">
                      Rp 2.500.000
                    </span>
                  </div>
                  <Button className="w-full bg-zinc-900 text-white">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default certification;
