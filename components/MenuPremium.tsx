"use client";

import { useCart } from "./cart/CartContext";
import { useState } from "react";

const categorias = [
  "Todos",
  "Piqueos",
  "Platos",
  "Bebidas",
];

const platos = [
  {
    id: 1,
    categoria: "Piqueos",
    nombre: "Alitas Broaster",
    precio: 28,
    imagen: "/images/platos/alitas.jpg",
    descripcion: "Crujientes alitas acompañadas de papas fritas.",
    destacado: true,
  },
  {
    id: 2,
    categoria: "Platos",
    nombre: "Chaufa Especial",
    precio: 32,
    imagen: "/images/platos/chaufa.jpg",
    descripcion: "Arroz chaufa preparado al wok.",
    destacado: false,
  },
  {
    id: 3,
    categoria: "Platos",
    nombre: "Arroz con Pato",
    precio: 48,
    imagen: "/images/platos/pato.jpg",
    descripcion: "Nuestro plato insignia.",
    destacado: true,
  },
  {
    id: 4,
    categoria: "Piqueos",
    nombre: "Salchipapa",
    precio: 20,
    imagen: "/images/platos/salchipapa.jpg",
    descripcion: "Papas crocantes con salchichas.",
    destacado: false,
  },
];

export default function MenuPremium() {
  const { agregarProducto } = useCart();

  const [categoria, setCategoria] = useState("Todos");

  const filtrados =
    categoria === "Todos"
      ? platos
      : platos.filter((p) => p.categoria === categoria);

  return (
    <section
      id="carta"
      className="py-24 bg-[#f8f5f0]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[5px] text-yellow-600">
          Nuestra Carta
        </p>

        <h2 className="titulo text-center text-5xl text-green-900 mt-4">
          Descubre Nuestros Sabores
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-6 py-3 rounded-full font-semibold duration-300 ${
                categoria === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-white shadow hover:bg-yellow-100"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {filtrados.map((plato) => (

            <div
              key={plato.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 duration-500"
            >

              <div className="relative overflow-hidden">

                <img
                  src={plato.imagen}
                  className="w-full h-64 object-cover hover:scale-110 duration-700"
                  alt={plato.nombre}
                />

                {plato.destacado && (
                  <div className="absolute top-4 left-4 bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold">
                    ⭐ Más Vendido
                  </div>
                )}

              </div>

              <div className="p-6">

                <h3 className="titulo text-2xl text-green-900">
                  {plato.nombre}
                </h3>

                <p className="text-gray-600 mt-3 h-14">
                  {plato.descripcion}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-yellow-600 text-2xl font-bold">
                    S/. {plato.precio.toFixed(2)}
                  </span>
<div className="mt-6 flex justify-center">

  <span className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">
    ⭐ Especialidad de la Casa
  </span>

</div>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}