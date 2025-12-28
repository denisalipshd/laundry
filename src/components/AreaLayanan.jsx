const AreaLayanan = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">Area Layanan</h3>
        <p className="text-gray-600 mb-12">Kami melayani antar jemput laundry di area berikut:</p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-6 py-2 border border-gray-200 rounded-full">Jakarta Selatan</span>
          <span className="px-6 py-2 border border-gray-200 rounded-full">Jakarta Barat</span>
          <span className="px-6 py-2 border border-gray-200 rounded-full">Tangerang</span>
          <span className="px-6 py-2 border border-gray-200 rounded-full">Bekasi</span>
        </div>

        <p className="text-gray-500 text-sm mt-6">*Gratis antar jemput untuk jarak ≤ 5 km</p>
      </div>
    </section>
  );
};

export default AreaLayanan;
