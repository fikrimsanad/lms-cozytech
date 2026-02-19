import { Badge } from "@radix-ui/themes/components/badge";
import { Progress } from "@radix-ui/themes/components/progress";
import { CirclePlay, Clock8 } from "lucide-react";
import Link from "next/link";
import Navigation from "../../components/navigasi";
import Header from "../../components/header";

import React from "react";

function myclass() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div>
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10 px-6">
            {/* Header Section */}
            <section className="flex items-stretch text-2xl font-bold mb-8">
              <div className=" space-y-3">
                <h3 className="text-black">Daftar Kelas</h3>
                <p className="text-zinc-500 text-sm font-bold">
                  Kelola dan pantau progress pembelajaran Anda
                </p>
              </div>
            </section>
            {/* Data Class */}
            <section className="flex">
              <div className="py-4 w-[70%] space-y-6">
                <div className="border border-zinc-200 rounded-lg  w-full py-4 px-6 space-y-4">
                  <h3 className="text-black font-bold text-xl">
                    Video Terakhir Dipelajari
                  </h3>
                  <div className="w-full py-4 bg-zinc-50 flex gap-2">
                    <div className="w-[20%] px-4 py-3">
                      <div className="bg-gray-200 py-13 rounded-xl"></div>
                    </div>
                    <div className="w-[50%] px-4 py-3 space-y-4">
                      <h3 className="font-bold">
                        PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya
                      </h3>
                      <p className="font-light text-sm">
                        Kelas Brevet Pajak AB
                      </p>
                      <div className="grid grid-cols-2">
                        <div className="flex gap-2">
                          <Clock8 size={18} color="gray" />
                          <p className="text-sm">25 menit tersisa </p>
                        </div>
                        <div className="flex gap-2">
                          <Progress
                            value={100}
                            className="h-2 w-full bg-zinc-900 mt-1"
                          />
                          <p className="text-xs font-light text-gray-400">
                            100%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-14 px-8">
                      <Link
                        href={"/my-class/video-class"}
                        className="bg-zinc-900 flex gap-3 text-white py-2 px-4 rounded-md"
                      >
                        Lanjutkan
                        <CirclePlay size={22} color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="border border-zinc-200 rounded-lg  w-12/12 py-4 px-6 space-y-3">
                  <h3 className="text-black font-bold text-xl">Kelas Anda</h3>
                  <div className="py-4 w-full px-4 border border-zinc-300 rounded-lg ">
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <h3 className="text-black font-bold text-xl">
                          Kelas Brevet Pajak AB
                        </h3>
                        <p className="text-zinc-400 font-light text-sm">
                          Pendidikan perpajakan tingkat lanjut
                        </p>
                      </div>
                      <div>
                        <Badge className="bg-zinc-200">Aktif</Badge>
                      </div>
                    </div>
                    <div className="flex gap-16 mt-6">
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Periode
                        </p>
                        <h3>12 Okt - 12 Feb 2025</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Video Kursus
                        </p>
                        <h3>24 Video</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Peserta
                        </p>
                        <h3>20 Peserta</h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-10 flex justify-end">
                        <Link
                          href={"/my-class/detail-class"}
                          className="bg-zinc-900 text-white py-2 px-5 rounded-md w-full text-center"
                        >
                          Detail Kelas
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 w-full px-4 border border-zinc-300 rounded-lg ">
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <h3 className="text-black font-bold text-xl">
                          Kelas Brevet Pajak AB
                        </h3>
                        <p className="text-zinc-400 font-light text-sm">
                          Pendidikan perpajakan tingkat lanjut
                        </p>
                      </div>
                      <div>
                        <Badge className="bg-zinc-200">Aktif</Badge>
                      </div>
                    </div>
                    <div className="flex gap-16 mt-6">
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Periode
                        </p>
                        <h3>12 Okt - 12 Feb 2025</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Video Kursus
                        </p>
                        <h3>24 Video</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Peserta
                        </p>
                        <h3>20 Peserta</h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-10 flex justify-end">
                        <Link
                          href={"/my-class/detail-class"}
                          className="bg-zinc-900 text-white py-2 px-5 rounded-md w-full text-center"
                        >
                          Detail Kelas
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 w-full px-4 border border-zinc-300 rounded-lg ">
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <h3 className="text-black font-bold text-xl">
                          Kelas Brevet Pajak AB
                        </h3>
                        <p className="text-zinc-400 font-light text-sm">
                          Pendidikan perpajakan tingkat lanjut
                        </p>
                      </div>
                      <div>
                        <Badge className="bg-zinc-200">Aktif</Badge>
                      </div>
                    </div>
                    <div className="flex gap-16 mt-6">
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Periode
                        </p>
                        <h3>12 Okt - 12 Feb 2025</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Video Kursus
                        </p>
                        <h3>24 Video</h3>
                      </div>
                      <div>
                        <p className="text-xs text-zinc-400 font-light">
                          Peserta
                        </p>
                        <h3>20 Peserta</h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-10 flex justify-end">
                        <Link
                          href={"/my-class/detail-class"}
                          className="bg-zinc-900 text-white py-2 px-5 rounded-md w-full text-center"
                        >
                          Detail Kelas
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-3 px-4 w-[30%] space-y-4">
                <section className="bg-gray-50 flex w-full flex-col items-stretch font-medium mx-auto px-[17px] py-4 rounded-[10px] max-md:mt-[17px] max-md:pr-5">
                  <header className="flex items-stretch gap-[7px] text-base text-black font-semibold">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/fe463d579e73d4f664a18c30b004caafc47631eb?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-6 shrink-0"
                      alt="Schedule icon"
                    />
                    <h3 className="basis-auto my-auto">Jadwal Pembelajaran</h3>
                  </header>
                  <div className="flex flex-col">
                    <Link
                      href={"/my-class"}
                      className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] first:mt-7 pl-2.5 pr-[58px] py-3 rounded-[10px] max-md:pr-5 hover:bg-gray-300 transition-colors w-full"
                    >
                      <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto">
                        <div className="self-stretch">November</div>
                        <div className="text-lg mt-1 font-bold">22</div>
                        <div className="mt-1">2025</div>
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-left">
                        <div className="text-black">
                          Ketentuan Umum Perpajakan KUP A
                        </div>
                        <div className="text-[rgba(131,131,131,1)] mt-[11px]">
                          09.00 - 12.15
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/my-class"}
                      className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] first:mt-7 pl-2.5 pr-[58px] py-3 rounded-[10px] max-md:pr-5 hover:bg-gray-300 transition-colors w-full"
                    >
                      <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto">
                        <div className="self-stretch">November</div>
                        <div className="text-lg mt-1 font-bold">22</div>
                        <div className="mt-1">2025</div>
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-left">
                        <div className="text-black">
                          Ketentuan Umum Perpajakan KUP A
                        </div>
                        <div className="text-[rgba(131,131,131,1)] mt-[11px]">
                          09.00 - 12.15
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/my-class"}
                      className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] first:mt-7 pl-2.5 pr-[58px] py-3 rounded-[10px] max-md:pr-5 hover:bg-gray-300 transition-colors w-full"
                    >
                      <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto">
                        <div className="self-stretch">November</div>
                        <div className="text-lg mt-1 font-bold">22</div>
                        <div className="mt-1">2025</div>
                      </div>
                      <div className="flex flex-col items-stretch text-sm text-left">
                        <div className="text-black">
                          Ketentuan Umum Perpajakan KUP A
                        </div>
                        <div className="text-[rgba(131,131,131,1)] mt-[11px]">
                          09.00 - 12.15
                        </div>
                      </div>
                    </Link>
                  </div>
                </section>
                <div className="border border-zinc-200 rounded-lg  w-full py-4 px-4">
                  <div className="rounded-full bg-gray-100 px-4 py-1 w-fit text-sm">
                    Statistik Cepat
                  </div>
                  <div className="mt-10 space-y-4">
                    <div className="flex justify-between">
                      <p className="text-gray-400">Total Kelas</p>
                      <p className="font-bold text-sm">15</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-400">Kelas Aktif</p>
                      <p className="font-bold text-sm">15</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-400">Total Waktu</p>
                      <p className="font-bold text-sm">15 Jam</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-400">Sertifikat</p>
                      <p className="font-bold text-sm">1</p>
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

export default myclass;
