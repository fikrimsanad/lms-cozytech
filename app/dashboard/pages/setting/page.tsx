import React from "react";
import Navigation from "../../components/navigasi";
import Header from "../../components/header";

function setting() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex flex-col px-6 py-10">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Setting</h1>
            <p className="text-gray-600 mt-2">
              Kelola profil dan preferensi akun Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default setting;
