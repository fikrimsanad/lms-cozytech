import { MapPin } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Kami
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ada pertanyaan? Tim kami siap membantu Anda menemukan kursus yang
            tepat
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Additional Info */}
            <div className="space-y-6"></div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0 bg-black">
        <div className="w-full h-96 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-gray-400">
                Jl. Sudirman No. 123, Jakarta Selatan, Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
