"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const imagenes = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-24 bg-[#faf8f3]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[5px] text-yellow-600 font-bold">
            Nuestra Galería
          </span>

          <h2 className="titulo text-5xl text-green-900 mt-4">
            Vive la experiencia
          </h2>

          <p className="text-gray-500 mt-4">
            Algunos momentos de La Huerta Encantada
          </p>

        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: true,
            scale: 0.9,
          }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {imagenes.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "420px" }}
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl">

                <img
                  src={img}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-[520px] object-cover hover:scale-110 duration-700"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}