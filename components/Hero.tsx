"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import CartaPremium from "./CartaPremium";
import Reserva from "./Reserva";

export default function Hero() {

  const [abrirCarta, setAbrirCarta] = useState(false);
  const [abrirReserva, setAbrirReserva] = useState(false);

  useEffect(() => {

    const cerrarCarta = () => {
      setAbrirCarta(false);
    };

    window.addEventListener("cerrar-carta", cerrarCarta);

    return () => {
      window.removeEventListener("cerrar-carta", cerrarCarta);
    };

  }, []);

  return (
    <>

      <section
        id="inicio"
        className="relative min-h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d14]/90 via-[#0b1d14]/60 to-transparent"></div>

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

      </section>

      {/* Modal Carta */}

      <Modal
        abierto={abrirCarta}
        cerrar={() => setAbrirCarta(false)}
        titulo=""
      >
        <CartaPremium />
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
