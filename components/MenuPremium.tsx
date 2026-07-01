"use client";

import { menu } from "./cart/data/menu";

export default function MenuPremium() {

  const favoritos = menu
    .filter((p) => p.ventas >= 800)
    .sort((a, b) => b.ventas - a.ventas)
    .slice(0, 6);

  return (
    <section
      id="carta"
      className="py-24 bg-gradient-to-b from-[#faf8f3] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-yellow-600 font-bold">
            Especialidades
          </span>

          <h2 className="titulo text-5xl text-green-900 mt-4">
            🔥 Los Favoritos de la Casa
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {favoritos.map((plato) => (

            <div
              key={plato.id}
              className="overflow-hidden rounded-3xl shadow-xl bg-white"
            >

              <img
                src={plato.imagen}
                alt={plato.nombre}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {plato.nombre}
                </h3>

                <p className="text-gray-500 mt-3">
                  {plato.descripcion}
                </p>

                <div className="flex justify-between mt-5">

                  <span>
                    ⭐ {plato.rating}
                  </span>

                  <span>
                    🔥 {plato.ventas}
                  </span>

                </div>

                <div className="text-3xl font-bold text-yellow-600 mt-4">
                  S/. {plato.precio}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}