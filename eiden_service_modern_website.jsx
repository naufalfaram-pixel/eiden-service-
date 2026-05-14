// NEXT.JS PROJECT STRUCTURE
// ======================================
// app/page.jsx
// app/layout.jsx
// app/globals.css
// package.json
// tailwind.config.js
// postcss.config.js
// next.config.js
// ======================================

// package.json
/*
{
  "name": "eiden-service",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "tailwindcss": "latest",
    "postcss": "latest",
    "autoprefixer": "latest"
  }
}
*/

// next.config.js
/*
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/

// postcss.config.js
/*
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
*/

// tailwind.config.js
/*
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/

// app/layout.jsx
/*
import './globals.css'

export const metadata = {
  title: 'Bengkel Mobil Eiden Service',
  description: 'Bengkel mobil profesional di Ponorogo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
*/

// app/globals.css
/*
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: black;
  color: white;
  font-family: Arial, sans-serif;
}
*/

// app/page.jsx

export default function EidenServiceWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide text-red-500">
            Eiden Service
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-red-500 transition">Tentang</a>
            <a href="#services" className="hover:text-red-500 transition">Layanan</a>
            <a href="#testimonials" className="hover:text-red-500 transition">Testimoni</a>
            <a href="#contact" className="hover:text-red-500 transition">Kontak</a>
          </div>

          <a
            href="https://wa.me/6281259015100"
            className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-xl font-medium"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1600&auto=format&fit=crop"
            alt="Workshop"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-sm mb-6">
            ⭐ 4.7 Rating • 27+ Ulasan Pelanggan
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Bengkel Mobil
            <span className="text-red-500"> Profesional </span>
            di Ponorogo
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Bengkel Mobil Eiden Service siap melayani servis mobil, truk,
            hingga alat berat dengan mekanik berpengalaman, pelayanan ramah,
            jujur, dan harga terjangkau.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6281259015100"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl text-lg font-semibold transition shadow-lg shadow-red-600/30"
            >
              Booking Servis
            </a>

            <a
              href="#services"
              className="border border-white/20 hover:border-red-500 hover:text-red-500 px-8 py-4 rounded-2xl text-lg transition"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1400&auto=format&fit=crop"
              alt="Mechanic"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-red-500 font-semibold mb-4 uppercase tracking-widest">
              Tentang Kami
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bengkel Andalan untuk Semua Kendaraan
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Bengkel Mobil Eiden Service dikenal sebagai bengkel terpercaya di
              Ponorogo dengan pelayanan profesional, mekanik berpengalaman,
              dan pengerjaan cepat serta tepat. Kami melayani berbagai jenis
              kendaraan mulai dari mobil pribadi, truk, hingga alat berat.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-red-500">27+</h3>
                <p className="text-gray-400 mt-2">Ulasan Positif</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="text-3xl font-bold text-red-500">4.7★</h3>
                <p className="text-gray-400 mt-2">Rating Google</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-widest font-semibold mb-3">
              Layanan Kami
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Solusi Lengkap Kendaraan Anda
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Servis Mesin',
              'Ganti Oli',
              'Servis Rem',
              'Diagnosa Kelistrikan',
              'Servis Truk',
              'Perawatan Berkala',
              'Servis Alat Berat',
              'Emergency Repair',
              'Servis Transmisi',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 transition hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-600/20 flex items-center justify-center text-2xl mb-6">
                  🔧
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service}</h3>

                <p className="text-gray-400 leading-relaxed">
                  Pelayanan profesional dengan teknisi berpengalaman dan
                  pengerjaan cepat serta akurat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-widest font-semibold mb-3">
              Testimoni
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Apa Kata Pelanggan?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Bengkelnya jos, ramah, jujur, murah, tapi gak murahan.',
              'Pelayanan ramah, tempat luas, melayani mobil, truk, dan alat berat.',
              'Siap melayani antar kota dan antar provinsi dengan pelayanan terbaik.',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 rounded-3xl p-8"
              >
                <div className="text-yellow-400 text-xl mb-5">★★★★★</div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  “{review}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-500 uppercase tracking-widest font-semibold mb-3">
              Kontak
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Hubungi Kami Sekarang
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <div>
                <p className="font-semibold text-white mb-1">Alamat</p>
                <p>
                  Timur SPBU, Jl. Ponorogo - Solo, Badegan, Karang Waluh,
                  Kidul, Ponorogo, Jawa Timur 63454
                </p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Telepon</p>
                <p>0812-5901-5100</p>
              </div>

              <div>
                <p className="font-semibold text-white mb-1">Jam Operasional</p>
                <p>Buka hingga pukul 17.00 WIB</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://wa.me/6281259015100"
                className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl font-semibold"
              >
                Chat WhatsApp
              </a>

              <a
                href="https://maps.google.com"
                className="border border-white/20 hover:border-red-500 hover:text-red-500 px-8 py-4 rounded-2xl transition"
              >
                Lihat Lokasi
              </a>
            </div>
          </div>

          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0"
              className="w-full h-[450px] rounded-3xl border border-white/10"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-red-500">
              Bengkel Mobil Eiden Service
            </h3>
            <p className="text-gray-500 mt-2">
              Bengkel profesional terpercaya di Ponorogo.
            </p>
          </div>

          <div className="text-gray-500 text-sm text-center md:text-right">
            © 2026 Bengkel Mobil Eiden Service. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281259015100"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50"
      >
        💬
      </a>
    </div>
  )
}
