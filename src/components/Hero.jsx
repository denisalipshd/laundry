const Hero = () => {
  return (
    <section id="beranda" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Laundry Bersih & Rapi
            <br className="hidden md:block" /> Tanpa Repot
          </h2>

          <p className="text-gray-600 mb-8">Solusi laundry modern dengan layanan antar jemput, proses cepat, dan standar kebersihan profesional untuk kenyamanan Anda.</p>

          <div className="flex gap-4">
            <a href="#" className="bg-blue-500 text-white text-sm md:text-base px-4 py-3 md:px-6 md:py-3 rounded-xl font-semibold hover:scale-105 transition">
              Pesan Sekarang
            </a>
            <a href="#layanan" className="border border-gray-300 text-sm md:text-base px-4 py-3 md:px-6 md:py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-primary transition">
              Lihat Layanan
            </a>
          </div>
        </div>

        <div>
          <img src="./img/hero.png" alt="Laundry Service" className="rounded-2xl shadow-lg w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
