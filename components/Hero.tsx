"use client";

import { useState } from "react";
import Modal from "./Modal";
import Carta from "./Carta";
import Reserva from "./Reserva";

export default function Hero() {
  const [abrirCarta, setAbrirCarta] = useState(false);
  const [abrirReserva, setAbrirReserva] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        {/* Fondo oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d14]/90 via-[#0b1d14]/60 to-transparent"></div>

        {/* Contenido */}
        <div className="relative z-10 flex items-center min-h-screen">
          <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">

            <div className="max-w-2xl">

              <span className="uppercase tracking-[6px] text-yellow-400 text-sm font-semibold">
                Restaurante Campestre
              </span>

              <h1 className="titulo text-white mt-5 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                La Huerta
                <br />
                Encantada
              </h1>

              <div className="w-28 h-1 bg-yellow-500 mt-8 rounded-full"></div>

              <p className="mt-8 text-gray-200 text-lg sm:text-xl leading-8 max-w-xl">
                Disfruta de la mejor gastronomía peruana en un ambiente rodeado
                de naturaleza, tradición y momentos inolvidables.
              </p>

              {/* Información rápida */}
              <div className="flex flex-wrap gap-6 mt-8 text-white">

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                  ⭐ <span>4.9 / 5</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                  👨‍🍳 <span>+15 años</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full">
                  🍽️ <span>+80 Platos</span>
                </div>

              </div>

              {/* Botones */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5">

                <button
                  onClick={() => setAbrirReserva(true)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition duration-300 shadow-xl"
                >
                  🍽️ Reservar Ahora
                </button>

                <button
                  onClick={() => setAbrirCarta(true)}
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition duration-300"
                >
                  📖 Ver Carta
                </button>

              </div>

            </div>

          </div>
        </div>

        {/* Tarjeta flotante */}
        <div className="hidden xl:block absolute bottom-10 right-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-80">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="titulo text-4xl text-green-900">
                ⭐ 4.9
              </h2>

              <p className="text-gray-600">
                Más de 500 clientes satisfechos
              </p>

            </div>

            <div className="text-5xl">
              🍽️
            </div>

          </div>

          <hr className="my-6" />

          <div className="space-y-4 text-gray-700">

            <p>📍 Chachapoyas - Amazonas</p>

            <p>🕘 Lunes a Domingo</p>

            <p>⏰ 10:00 AM - 10:00 PM</p>

            <p>🎉 Eventos Especiales</p>

          </div>

        </div>

        {/* Flecha */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

          <a
            href="#carta"
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white text-2xl hover:bg-white hover:text-black duration-300"
          >
            ↓
          </a>

        </div>

      </section>

      {/* Modal Carta */}
      <Modal
        abierto={abrirCarta}
        cerrar={() => setAbrirCarta(false)}
        titulo="Nuestra Carta"
      >
        <Carta />
      </Modal>

      {/* Modal Reserva */}
      <Modal
        abierto={abrirReserva}
        cerrar={() => setAbrirReserva(false)}
        titulo="Reserva tu Mesa"
      >
        <Reserva />
      </Modal>

    </>
  );
}
