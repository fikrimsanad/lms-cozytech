import Link from "next/link";
import React from "react";
import Navigation from "./components/navigasi";
import Header from "./components/header";
function Page() {
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
                <h1 className="text-2xl font-bold text-foreground">
                  Hello - Member Name -{" "}
                </h1>
              </div>
              {/* Page Header */}
              <div className="w-full py-4 grid grid-cols-3 gap-3">
                <div className="bg-zinc-100 rounded-lg">
                  <div className="w-full flex gap-4 py-4 px-6 bg-zinc-900 rounded-t-lg">
                    <div>
                      <img
                        src={
                          "https://api.builder.io/api/v1/image/assets/TEMP/c7d72d02b409f925626f0d12e0c8f30fae2362b4?placeholderIfAbsent=true"
                        }
                      ></img>
                    </div>
                    <div>
                      <h2 className="text-2xl text-white">Kelas Anda</h2>
                    </div>
                  </div>
                  <div className=" px-8 py-4 space-y-2">
                    <p className="text-gray-400 text-lg">Total</p>
                    <p className="text-zinc-800 font-bold text-2xl">2 Kelas</p>
                  </div>
                  <div className="px-8 mb-5">
                    <Link href={"/my-class"}>Lihat Daftar Kelas</Link>
                  </div>
                </div>
                <div className="bg-zinc-100 rounded-lg">
                  <div className="w-full flex gap-4 py-4 px-6 bg-zinc-900 rounded-t-lg">
                    <div>
                      <img
                        src={
                          "https://api.builder.io/api/v1/image/assets/TEMP/4b5c2c4295242f6c85d7dc82bc0d73851f0c17e7?placeholderIfAbsent=true"
                        }
                      ></img>
                    </div>
                    <div>
                      <h2 className="text-2xl text-white">Video Kelas</h2>
                    </div>
                  </div>
                  <div className=" px-8 py-4 space-y-2">
                    <p className="text-gray-400 text-lg">Total</p>
                    <p className="text-zinc-800 font-bold text-2xl">32 Video</p>
                  </div>
                  <div className="px-8 mb-5">
                    <Link href={"/my-class"}>Lihat Daftar Kelas</Link>
                  </div>
                </div>
                <div className="bg-zinc-100 rounded-lg">
                  <div className="w-full flex gap-4 py-4 px-6 bg-zinc-900 rounded-t-lg">
                    <div>
                      <img
                        src={
                          "https://api.builder.io/api/v1/image/assets/TEMP/d99fb28c92070636c094d2b77891bc3da48b962a?placeholderIfAbsent=true"
                        }
                      ></img>
                    </div>
                    <div>
                      <h2 className="text-2xl text-white">Sertifikat</h2>
                    </div>
                  </div>
                  <div className=" px-8 py-4 space-y-2">
                    <p className="text-gray-400 text-lg">Total</p>
                    <p className="text-zinc-800 font-bold text-2xl">
                      1 Sertifikat
                    </p>
                  </div>
                  <div className="px-8 mb-5">
                    <Link href={"/certification"}>
                      Lihat Daftar Sertifikasi
                    </Link>
                  </div>
                </div>
              </div>
              <div className="gap-4 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[38%] max-md:w-full max-md:ml-0">
                  <section className="bg-[rgba(51,51,51,1)] flex w-full flex-col text-sm text-white font-bold mx-auto pl-[21px] pr-[21px] py-[31px] rounded-[10px] max-md:mt-[17px] max-md:px-5">
                    <h3 className="font-normal">Pembelajaran Terakhir</h3>
                    <div className="mt-8">
                      <span className="font-normal">Kelas</span> : Brevet AB
                    </div>
                    <h4 className="text-2xl mt-3.5">
                      PPN A : Perhitungan PPN Dan Ketentuan Umumnya
                    </h4>
                    <div className="flex w-[199px] max-w-full items-stretch gap-5 text-base font-normal justify-between  mt-[31px] max-md:ml-2.5">
                      <div className="flex items-stretch gap-[7px]">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/a5d761ed8edff2c48c007db14e6db4067fb7eaea?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-5 shrink-0"
                          alt="Duration"
                        />
                        <div>PPN A</div>
                      </div>
                      <div className="flex items-stretch gap-[7px]">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/a5d761ed8edff2c48c007db14e6db4067fb7eaea?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-5 shrink-0"
                          alt="Duration"
                        />
                        <div>16 Menit</div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Link
                        href={"/"}
                        className="rounded bg-white w-full flex items-center text-base text-[#333] text-center justify-center mt-[129px] px-4 py-2.5 max-md:mt-10 hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-[#333] self-stretch my-auto">
                          Lanjut Belajar
                        </div>
                      </Link>
                    </div>
                  </section>
                </div>
                <div className="w-[35%]  max-md:w-full max-md:ml-0 space-y-4">
                  <Link
                    href={"/certification"}
                    className="bg-[rgba(246,246,246,1)] py-3 px-3 flex"
                  >
                    <div className="bg-[rgba(51,51,51,1)] flex gap-5 overflow-hidden justify-between pl-5 pr-[62px] pt-[21px] pb-[110px] rounded-md max-md:pr-5 max-md:pb-[100px]">
                      <div className="text-[#F2F2F2] text-xl font-bold text-left">
                        Registrasi Ujian Sertifikasi
                      </div>
                      <img
                        src={
                          "https://api.builder.io/api/v1/image/assets/TEMP/f06f2f3cdc3fc5ddb37d425eaaa4b5eda9219eee?placeholderIfAbsent=true"
                        }
                        className="aspect-[1] object-contain w-[30px] shrink-0 rounded-[50%]"
                        alt="Action icon"
                      />
                    </div>
                  </Link>
                  <Link
                    href={"/browse-class"}
                    className="bg-[rgba(246,246,246,1)] py-3 px-3 flex"
                  >
                    <div className="w-full bg-[rgba(51,51,51,1)] flex gap-5 overflow-hidden justify-between pl-5 pr-[62px] pt-[21px] pb-[110px] rounded-md max-md:pr-5 max-md:pb-[100px]">
                      <div className="text-[#F2F2F2] text-xl font-bold text-left">
                        Lihat Kelas Aktif Lain
                      </div>
                      <img
                        src={
                          "https://api.builder.io/api/v1/image/assets/TEMP/f06f2f3cdc3fc5ddb37d425eaaa4b5eda9219eee?placeholderIfAbsent=true"
                        }
                        className="aspect-[1] object-contain w-[30px] shrink-0 rounded-[50%]"
                        alt="Action icon"
                      />
                    </div>
                  </Link>
                </div>
                <div className="w-[30%]  max-md:w-full max-md:ml-0">
                  <section className="bg-[rgba(246,246,246,1)] flex w-full flex-col items-stretch font-medium mx-auto px-[17px] py-8 rounded-[10px] max-md:mt-[17px] max-md:pr-5">
                    <header className="flex items-stretch gap-[7px] text-base text-black font-semibold">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/fe463d579e73d4f664a18c30b004caafc47631eb?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-6 shrink-0"
                        alt="Schedule icon"
                      />
                      <h3 className="basis-auto my-auto">
                        Jadwal Pembelajaran
                      </h3>
                    </header>
                    <div className="flex flex-col">
                      <Link
                        href={"/my-class"}
                        className="bg-[rgba(238,238,238,1)] flex items-stretch gap-5 justify-between mt-[27px] first:mt-7 pl-2.5 pr-[58px] py-3 rounded-[10px] max-md:pr-5 hover:bg-gray-300 transition-colors w-full"
                      >
                        <div className="flex flex-col items-center text-[10px] text-black whitespace-nowrap my-auto">
                          <div className="self-stretch">November</div>
                          <div className="text-lg mt-1">22</div>
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
                          <div className="text-lg mt-1">22</div>
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
                          <div className="text-lg mt-1">22</div>
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
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
