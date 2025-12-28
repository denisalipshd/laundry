const OrderStep = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Cara Pesan</h3>
          <p className="text-gray-600">Proses mudah & cepat hanya dalam 4 langkah</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <span className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"> 1 </span>
            <div className="text-3xl mb-4">📲</div>
            <h4 className="font-semibold text-lg mb-2">Pesan via WhatsApp</h4>
            <p className="text-sm text-gray-600">Hubungi kami melalui WhatsApp untuk melakukan pemesanan.</p>
          </div>

          <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <span className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"> 2 </span>
            <div className="text-3xl mb-4">🚚</div>
            <h4 className="font-semibold text-lg mb-2">Kami Jemput</h4>
            <p className="text-sm text-gray-600">Kurir kami akan menjemput cucian ke lokasi Anda.</p>
          </div>

          <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <span className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"> 3 </span>
            <div className="text-3xl mb-4">🧼</div>
            <h4 className="font-semibold text-lg mb-2">Cuci & Setrika</h4>
            <p className="text-sm text-gray-600">Cucian diproses secara profesional & higienis.</p>
          </div>

          <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
            <span className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"> 4 </span>
            <div className="text-3xl mb-4">📦</div>
            <h4 className="font-semibold text-lg mb-2">Kami Antar</h4>
            <p className="text-sm text-gray-600">Cucian bersih dan rapi kami antar kembali ke rumah Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderStep;
