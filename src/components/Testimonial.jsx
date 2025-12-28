import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { dataTesti } from "../data";

const CardTesti = ({ komentar, nama, alamat }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition">
      <p className="text-gray-600 mb-6">“{komentar}”</p>
      <div className="font-semibold">⭐ ⭐ ⭐ ⭐ ⭐</div>
      <p className="text-sm text-gray-500">
        — {nama}, {alamat}
      </p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Apa Kata Pelanggan</h3>
          <p className="text-gray-600">Kepercayaan pelanggan adalah prioritas kami</p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: "50px" }}
        >
          {dataTesti.map((item) => (
            <SwiperSlide>
              <CardTesti key={item.id} komentar={item.komentar} nama={item.nama} alamat={item.alamat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
