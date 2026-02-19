import Link from "next/link";
import React from "react";

function navigasi() {
  return (
    <div>
      <nav className="w-full max-md:w-full max-md:ml-0">
        <div className="flex grow items-stretch gap-3 text-lg text-[rgba(186,186,186,1)] font-medium">
          <div className="bg-white w-full overflow-hidden mt-[5px] pl-2 space-y-4">
            <div className=" py-8  w-full"></div>
            <Link
              href={"/dashboard/"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/8370f074bd03c4710006f2bf2e003011aa92985c?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Dashboard</div>
            </Link>
            <Link
              href={"/dashboard/pages/myclass"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/f30331b34e2f521e939f97d2fd60930437fcf09f?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Kelas Saya</div>
            </Link>
            <Link
              href={"/dashboard/pages/browse-class"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/6d81f51e56983843d1a02056035be33cf05f8c22?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Cari Kelas</div>
            </Link>
            <Link
              href={"/dashboard/pages/certification"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/fc7273fca74b0d9a8ace7594ef8473a0297ba366?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Sertifikasi</div>
            </Link>
            <Link
              href={"/dashboard/pages/membership"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/88034362f9da3bb38dd1bd04a3d3c457bdd4e1d4?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Keanggotaan</div>
            </Link>
            <Link
              href={"/dashboard/pages/payment"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/470e8fe54016c2c5d358f42e59453b9776b2fc89?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Pembayaran</div>
            </Link>
            <Link
              href={"/dashboard/pages/setting"}
              className="flex w-full items-center gap-[18px] overflow-hidden whitespace-nowrap px-6 py-3  hover:bg-gray-50 hover:text-black hover:cursor-pointer transition-colors rounded-md"
            >
              <img
                src={
                  "https://api.builder.io/api/v1/image/assets/TEMP/5bb298cba5e76159c689ee1ee677479e6d1269e2?placeholderIfAbsent=true"
                }
                className="aspect-[1] object-contain w-[30px] self-stretch shrink-0 my-auto"
                alt={""}
              />
              <div className="self-stretch my-auto text-lg">Pengaturan</div>
            </Link>
          </div>
          <div className="bg-[rgba(238,238,238,1)] flex w-px shrink-0 h-[767px]"></div>
        </div>
      </nav>
    </div>
  );
}

export default navigasi;
