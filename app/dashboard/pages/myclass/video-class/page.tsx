import React from "react";
import Navigation from "../../../components/navigasi";
import Header from "../../../components/header";

function VideoClass() {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
      </div>
    </div>
  );
}

export default VideoClass;
