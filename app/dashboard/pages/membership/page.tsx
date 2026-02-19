import React from "react";
import Navigation from "../../components/navigasi";
import Header from "../../components/header";
import { Search, Users, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@radix-ui/themes/components/button";
import { Badge } from "@radix-ui/themes/components/badge";
import { Card } from "@radix-ui/themes/components/card";

function membership() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex min-h-screen bg-background">
          <div className="flex-1 flex flex-col">
            <main className="flex-1 p-6 space-y-6">
              {/* Page Header */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">
                  Keanggotaan
                </h1>
                <p className="text-muted-foreground">
                  Bergabung dengan organisasi dan komunitas profesional untuk
                  mengembangkan karir Anda
                </p>
              </div>

              {/* Joined Organizations Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    Organisasi yang Diikuti
                  </h2>
                  <Badge className="bg-gray-200 text-zinc-800">8</Badge>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="group hover:shadow-md transition-shadow border border-zinc-300 rounded-lg px-4 py-4">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          alt={""}
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Ikatan Akutansi Indonesia
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Akutansi
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Komunitas desainer yang fokus pada user experience
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-primary">
                          Bergabung: 12/02/2025
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-black text-white mt-2"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow border border-zinc-300 rounded-lg px-4 py-4">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          alt={""}
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Ikatan Akutansi Indonesia
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Akutansi
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Komunitas desainer yang fokus pada user experience
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-primary">
                          Bergabung: 12/02/2025
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-black text-white mt-2"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </Card>
                </div>
              </section>

              {/* Available Organizations Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    Organisasi Tersedia
                  </h2>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input placeholder="Cari organisasi..." className="pl-10" />
                  </div>
                </div>

                {/* Organizations Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                  <Card className="group hover:shadow-md transition-shadow  border border-zinc-300 py-4 px-6 rounded-lg">
                    <div className="pb-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={
                            "https://api.builder.io/api/v1/image/assets/TEMP/design-org.png?placeholderIfAbsent=true&apiKey=placeholder"
                          }
                          className="w-12 h-12 rounded-lg object-cover bg-muted"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-lg leading-tight">
                            Akutansi Syariah
                          </div>
                          <Badge variant="outline" className="mt-1">
                            Syariah
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 mt-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Organisasi Akutansi Syariah
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>1200</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button
                          variant="outline"
                          className="flex-1 bg-black rounded-sm text-white py-0.5"
                        >
                          Detail
                        </Button>
                        <Button className="flex-1">Bergabung</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default membership;
