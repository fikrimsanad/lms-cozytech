import React from "react";

function header() {
  return (
    <div>
      <div className="bg-white w-full h-16 border-b-1 bg border-slate-50 sticky top-0">
        <div className="bg-[rgba(253,253,253,1)] flex justify-end items-center gap-[17px] text-lg text-[rgba(51,51,51,1)] font-bold flex-wrap grow shrink basis-auto pl-20">
          <div className="space-x-4">
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/16bc1f79067044f626c2de2ddb06af5077ec17bc?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[32px] self-stretch shrink-0 my-auto rounded-[50px]"
                alt="Notification"
              />
            </button>
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8a03b43d0ed7e325f28c4226717eb94a49ed2682?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[32px] self-stretch shrink-0 my-auto rounded-[50px]"
                alt="Messages"
              />
            </button>
          </div>
          <div className="bg-[rgba(249,249,249,1)] self-stretch flex items-stretch gap-[40px_100px] px-[30px] py-4 max-md:px-5">
            <div className="flex items-stretch gap-[17px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/835fd69a752d2769b64c8afb2e2638aa8b6e90eb?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-9 shrink-0 rounded-[50%]"
                alt="Profile"
              />
              <div className="basis-auto my-auto text-sm font-medium">
                <h4>Fikri M</h4>
              </div>
            </div>
            <button className="hover:opacity-80 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ea283bb0b874f7ce9e43e260d2e8146c6a71ca35?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 shrink-0 my-auto"
                alt="Dropdown"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default header;
