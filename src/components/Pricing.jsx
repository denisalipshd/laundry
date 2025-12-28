const Pricing = () => {
  return (
    <section id="harga" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Daftar Harga</h3>
          <p className="text-gray-600">Harga transparan & mudah dipahami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition">
            <h4 className="font-semibold text-lg mb-2">Laundry Kiloan</h4>
            <p className="text-3xl font-bold text-primary mb-4">Rp 8.000 / kg</p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✔ Cuci & Setrika</li>
              <li>✔ Gratis Antar Jemput</li>
              <li>✔ Selesai 24 Jam</li>
            </ul>

            <a href="#order" className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              {" "}
              Pilih Paket{" "}
            </a>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition">
            <h4 className="font-semibold text-lg mb-2">Laundry Satuan</h4>
            <p className="text-3xl font-bold text-primary mb-4">Rp 5.000 / pcs</p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✔ Dicuci per potong</li>
              <li>✔ Setrika Lebih Rapi</li>
              <li>✔ Aman untuk Pakaian Khusus</li>
            </ul>

            <a href="#order" className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              {" "}
              Pilih Paket{" "}
            </a>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition">
            <h4 className="font-semibold text-lg mb-2">Cuci Sepatu</h4>
            <p className="text-3xl font-bold text-primary mb-4">Rp 40.000</p>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✔ Pembersihan Menyeluruh</li>
              <li>✔ Hilangkan Bau</li>
              <li>✔ Aman untuk Semua Bahan</li>
            </ul>

            <a href="#order" className="block text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              {" "}
              Pilih Paket{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
