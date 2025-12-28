const Features = () => {
  return (
    <section id="layanan" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Kenapa Pilih Kami?</h3>
          <p className="text-gray-600">Pelayanan terbaik untuk kebutuhan laundry Anda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-4">🚚</div>
            <h4 className="font-semibold text-lg mb-2">Antar Jemput Gratis</h4>
            <p className="text-gray-600 text-sm">Kami jemput dan antar cucian Anda tanpa biaya tambahan.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="font-semibold text-lg mb-2">6 Jam Selesai</h4>
            <p className="text-gray-600 text-sm">Proses cepat, pakaian bersih dan rapi di hari yang sama.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-3xl mb-4">🌱</div>
            <h4 className="font-semibold text-lg mb-2">Ramah Lingkungan</h4>
            <p className="text-gray-600 text-sm">Menggunakan detergen aman dan tidak merusak pakaian.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
