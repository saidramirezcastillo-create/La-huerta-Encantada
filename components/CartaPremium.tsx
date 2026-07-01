"use client";

import { useState } from "react";

import { menu } from "./cart/data/menu";

import MenuCategorias from "./MenuCategorias";

import BuscadorCarta from "./BuscadorCarta";

import MenuCard from "./MenuCard";

import FiltrosCarta from "./FiltrosCarta";

export default function CartaPremium() {

  const [categoria, setCategoria] = useState("menu");

  const [buscar, setBuscar] = useState("");

  const [filtro, setFiltro] = useState("todos");

  const productos = menu.filter((plato) => {

  const coincideCategoria = plato.categoria === categoria;

  const coincideBusqueda = plato.nombre
    .toLowerCase()
    .includes(buscar.toLowerCase());

  let coincideFiltro = true;

  switch (filtro) {

    case "vendidos":
  coincideFiltro = (plato.ventas ?? 0) >= 300;
  break;

    case "chef":
      coincideFiltro = plato.chef === true;
      break;

    case "premium":
      coincideFiltro = (plato.rating ?? 0) >= 4.8;
      break;

    default:
      coincideFiltro = true;
  }

  return (
    coincideCategoria &&
    coincideBusqueda &&
    coincideFiltro
  );

});

  return (

    <section
      id="carta"
      className="py-24 bg-gradient-to-b from-[#f8f7f2] to-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}

        <div className="text-center mb-16">

          <span className="text-green-700 font-bold tracking-[4px] uppercase">

            Nuestra Carta

          </span>

          <h2 className="titulo text-5xl text-green-900 mt-4">

            Descubre nuestros sabores

          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">

            Elige la categoría que deseas explorar y agrega tus platos
            favoritos al pedido.

          </p>

        </div>

        {/* Categorías */}

        <MenuCategorias
          categoria={categoria}
          cambiarCategoria={setCategoria}
        />

        {/* Buscador */}

        <BuscadorCarta
          buscar={buscar}
          setBuscar={setBuscar}
        />

        {/* Filtros Cartas */}
          <FiltrosCarta
          filtro={filtro}
          cambiarFiltro={setFiltro}
          />

         {/* Productos */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-14">

          {productos.length > 0 ? (

            productos.map((plato) => (

              <MenuCard
                key={plato.id}
                plato={plato}
              />

            ))

          ) : (

            <div className="col-span-full">

              <div className="bg-white rounded-3xl shadow-xl p-16 text-center">

                <div className="text-7xl mb-6">

                  🍽️

                </div>

                <h2 className="text-3xl font-bold text-green-900">

                  No encontramos resultados

                </h2>

                <p className="text-gray-500 mt-4 text-lg">

                  Prueba buscando otro plato o cambia de categoría.

                </p>

              </div>

            </div>

          )}

        </div>
        {/* Favoritos de la Casa */}

<div className="mt-24">

  <div className="text-center mb-12">

    <span className="text-red-600 font-bold tracking-[4px] uppercase">
      Los Más Pedidos
    </span>

    <h2 className="titulo text-5xl text-green-900 mt-4">
      🔥 Favoritos de Nuestros Clientes
    </h2>

    <p className="text-gray-500 mt-3">
      Los platos estrella de La Huerta Encantada.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {menu
      .filter((plato) => plato.categoria === "menu")
      .slice(0, 3)
      .map((plato) => (

        <div
          key={plato.id}
          className="group relative rounded-3xl overflow-hidden shadow-2xl"
        >

          <img
            src={plato.imagen}
            alt={plato.nombre}
            className="w-full h-96 object-cover group-hover:scale-110 duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">

            <span className="bg-red-600 text-white px-4 py-2 rounded-full font-bold">
              🔥 Más Vendido
            </span>

            <h3 className="text-white text-3xl font-bold mt-4">
              {plato.nombre}
            </h3>

            <p className="text-yellow-300 mt-2 text-lg">
              ⭐ {plato.rating}
            </p>

            <p className="text-white">
              {plato.ventas} pedidos
            </p>

            <p className="text-3xl font-bold text-yellow-400 mt-4">
              S/. {plato.precio.toFixed(2)}
            </p>

          </div>

        </div>

      ))}

  </div>

</div>

      </div>

    </section>

  );

}