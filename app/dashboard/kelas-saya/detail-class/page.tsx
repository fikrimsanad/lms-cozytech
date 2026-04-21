import React from "react";
import Link from "next/link";
import {
  CirclePlay,
  Clock8,
  SquarePlay,
  CircleDot,
} from "lucide-react";
import { Progress } from "@radix-ui/themes/components/progress";

export default function DetailClassPage() {
  return (
    <div data-testid="detail-class-page">
      <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
        <div className="py-8">
          <Link href={"/dashboard/kelas-saya"}>Kembali</Link>
        </div>
        <section className="flex items-stretch text-2xl font-bold mb-8">
          <div className=" space-y-3">
            <h3 className="text-black text-3xl">Kelas Brevet Pajak AB</h3>
            <p className="text-zinc-500 text-sm font-bold">
              Pendidikan perpajakan tingkat lanjut
            </p>
          </div>
        </section>
        <section className="flex">
          <div className="py-4 w-[70%] space-y-6">
            <div className="flex gap-36 py-10 px-4">
              <div><p className="text-xs text-zinc-400 font-light">Periode</p><h3>12 Okt - 12 Feb 2025</h3></div>
              <div><p className="text-xs text-zinc-400 font-light">Video Kursus</p><h3>24 Video</h3></div>
              <div><p className="text-xs text-zinc-400 font-light">Peserta</p><h3>20 Peserta</h3></div>
            </div>
            <div className="border border-zinc-200 rounded-lg w-full py-4 px-6 space-y-4">
              <h3 className="text-black font-bold text-xl">Video Terakhir Dipelajari</h3>
              <div className="w-full py-4 bg-zinc-50 flex gap-2">
                <div className="w-[20%] px-4 py-3"><div className="bg-gray-200 py-10 rounded-xl"></div></div>
                <div className="w-[53%] px-4 py-3 space-y-4">
                  <h3 className="font-bold">PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya</h3>
                  <div className="grid grid-cols-2">
                    <div className="flex gap-2"><Clock8 size={18} color="gray" /><p className="text-sm">25 menit tersisa</p></div>
                    <div className="flex gap-2"><Progress value={100} className="h-2 w-full bg-zinc-900 mt-1" /><p className="text-xs font-light text-gray-400">100%</p></div>
                  </div>
                </div>
                <div className="py-8 px-8">
                  <Link href={"/dashboard/kelas-saya/video-class"} className="bg-zinc-900 flex gap-3 text-white py-2 px-4 rounded-md">
                    Lanjutkan <CirclePlay size={22} color="white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-zinc-200 rounded-lg w-12/12 py-4 px-6 space-y-3">
              <h3 className="text-black font-bold text-xl">Daftar Video Kursus</h3>
              <div className="py-4 w-full px-4 border border-zinc-300 flex gap-12 rounded-lg">
                <div className="py-3"><p>1.</p></div>
                <div className="py-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                <div className="space-y-4">
                  <div><h3 className="font-bold text-base">PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya</h3></div>
                  <div className="flex gap-1"><Clock8 size={15} color="gray" /><p className="text-xs font-light text-gray-400">45 Menit</p></div>
                </div>
                <Link href={"/dashboard/kelas-saya/video-class"} className="mt-4 px-10"><SquarePlay size={40} /></Link>
              </div>
              <div className="py-4 w-full px-4 border border-zinc-300 flex gap-12 rounded-lg">
                <div className="py-3"><p>2.</p></div>
                <div className="py-3"><CircleDot color="gray" /></div>
                <div className="space-y-4">
                  <div><h3 className="font-bold text-base text-gray-400">PPN A : Perhitungan PPN Dan Ketentuan Umum Lainnya</h3></div>
                  <div className="flex gap-1"><Clock8 size={15} color="gray" /><p className="text-xs font-light text-gray-400">45 Menit</p></div>
                </div>
                <Link href={"/dashboard/kelas-saya/video-class"} className="mt-4 px-10"><SquarePlay size={40} color="gray" /></Link>
              </div>
            </div>
          </div>
          <div className="py-3 px-4 w-[30%] space-y-4">
            <section className="bg-gray-50 flex w-full flex-col items-stretch font-medium mx-auto px-[17px] py-4 rounded-[10px]">
              <header className="flex items-stretch gap-[7px] text-base text-black font-semibold">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/fe463d579e73d4f664a18c30b004caafc47631eb?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 shrink-0" alt="Schedule icon" />
                <h3 className="basis-auto my-auto">Jadwal Pembelajaran</h3>
              </header>
              <div className="flex flex-col">
                <Link href={"/dashboard/kelas-saya"} className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] pl-2.5 pr-[58px] py-3 rounded-[10px] hover:bg-gray-300 transition-colors w-full">
                  <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto"><div className="self-stretch">November</div><div className="text-lg mt-1 font-bold">22</div><div className="mt-1">2025</div></div>
                  <div className="flex flex-col items-stretch text-sm text-left"><div className="text-black">Ketentuan Umum Perpajakan KUP A</div><div className="text-[rgba(131,131,131,1)] mt-[11px]">09.00 - 12.15</div></div>
                </Link>
              </div>
            </section>
            <div className="border border-zinc-200 rounded-lg w-full py-4 px-4">
              <div className="rounded-full bg-gray-100 px-4 py-1 w-fit text-sm">Statistik Cepat</div>
              <div className="mt-10 space-y-4">
                <div className="flex justify-between"><p className="text-gray-400">Total Kelas</p><p className="font-bold text-sm">15</p></div>
                <div className="flex justify-between"><p className="text-gray-400">Kelas Aktif</p><p className="font-bold text-sm">15</p></div>
                <div className="flex justify-between"><p className="text-gray-400">Total Waktu</p><p className="font-bold text-sm">15 Jam</p></div>
                <div className="flex justify-between"><p className="text-gray-400">Sertifikat</p><p className="font-bold text-sm">1</p></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
