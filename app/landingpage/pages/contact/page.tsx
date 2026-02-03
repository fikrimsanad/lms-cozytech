import { Button } from "@radix-ui/themes/components/button";
import { Card } from "@radix-ui/themes/components/card";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
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
            <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all rounded-lg">
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                <p className="text-gray-400 mb-2">Kirim email ke:</p>
                <a
                  href="mailto:info@gamedevacademy.com"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  info@gamedevacademy.com
                </a>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all rounded-lg">
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Telepon</h3>
                <p className="text-gray-400 mb-2">Hubungi kami:</p>
                <a
                  href="tel:+6281234567890"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  +62 812 3456 7890
                </a>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 transition-all rounded-lg">
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Lokasi</h3>
                <p className="text-gray-400 mb-2">Kunjungi kami:</p>
                <p className="text-amber-400 font-semibold">
                  Jl. Sudirman No. 123
                  <br />
                  Jakarta Selatan
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border border-gray-800 px-8 py-6 rounded-lg">
              <div>
                <div className="text-white text-2xl">Kirim Pesan</div>
                <div className="text-gray-400">
                  Isi form di bawah dan tim kami akan menghubungi Anda dalam 24
                  jam
                </div>
              </div>
              <div>
                <form className="space-y-4 py-8">
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 w-full py-2 px-4 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="nama@email.com"
                      className="bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 w-full py-2 px-4 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+62 812 3456 7890"
                      className="bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 w-full py-2 px-4 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subjek pesan"
                      className="bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 w-full py-2 px-4 rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm font-medium mb-2 block">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={5}
                      className="bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 w-full py-2 px-4 rounded-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex gap-2 justify-center  bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:from-cyan-600 hover:to-emerald-600 font-semibold py-2 rounded-sm"
                  >
                    <Send className="w-5 h-5 mt-1" />
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              <Card className="bg-gray-900 border border-gray-800 px-8 py-6 rounded-lg">
                <div className="mb-8">
                  <div className="text-white text-xl">Jam Operasional</div>
                </div>
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                      <span className="text-gray-400">Senin - Jumat</span>
                      <span className="text-white font-semibold">
                        09:00 - 18:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                      <span className="text-gray-400">Sabtu</span>
                      <span className="text-white font-semibold">
                        09:00 - 15:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Minggu</span>
                      <span className="text-white font-semibold">Tutup</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-900 border border-gray-800 px-8 py-6 rounded-lg">
                <div className="mb-8">
                  <div className="text-white text-xl">Frequently Asked</div>
                </div>
                <div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Berapa lama respon time?
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Kami akan merespon dalam maksimal 24 jam kerja
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Apakah bisa konsultasi gratis?
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Ya, kami menyediakan konsultasi gratis untuk membantu
                        Anda memilih kursus
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Apakah ada trial class?
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Beberapa kursus menyediakan trial class gratis. Hubungi
                        kami untuk info lebih lanjut
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/20">
                <div className="p-6 text-center">
                  <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">
                    Butuh Bantuan Segera?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Hubungi WhatsApp kami untuk respon lebih cepat
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-8 rounded-lg">
                    Chat WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
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
