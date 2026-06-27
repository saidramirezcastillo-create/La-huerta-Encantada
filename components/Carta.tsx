"use client";

import { useState } from "react";
import Modal from "./Modal";
import DetallePlato from "./DetallePlato";

export default function Carta() {
  const [categoria, setCategoria] = useState("Platos");
  const [platoSeleccionado, setPlatoSeleccionado] = useState<any>(null);

  const menu = {
    Platos: [
      {
        id: 1,
        nombre: "Pato Asado",
        imagen: "/images/platos/pato.jpg",
        precio: 48,
        descripcion:
          "Nuestro plato estrella preparado con receta tradicional.",
      },
      {
        id: 2,
        nombre: "Chaufa Especial",
        imagen: "/images/platos/chaufa.jpg",
        precio: 32,
        descripcion:
          "Arroz chaufa preparado al wok con pollo y verduras.",
      },
    ],

    Piqueos: [
      {
        id: 3,
        nombre: "Alitas Broaster",
        imagen: "/images/platos/alitas.jpg",
        precio: 28,
        descripcion:
          "Crujientes alitas acompañadas de papas fritas.",
      },
      {
        id: 4,
        nombre: "Salchipapa",
        imagen: "/images/platos/salchipapa.jpg",
        precio: 20,
        descripcion:
          "Papas fritas con salchichas y cremas de la casa.",
      },
    ],

    Bebidas: [
      {
        id: 5,
        nombre: "Limonada Frozen",
        imagen: "/images/platos/lomo.jpg",
        precio: 10,
        descripcion:
          "Refrescante limonada preparada al momento.",
      },
    ],
  };

  return (
    <>
      {/* Categorías */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(menu).map((item) => (
          <button
            key={item}
            onClick={() => setCategoria(item)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              categoria === item
                ? "bg-yellow-500 text-black shadow-xl"
                : "bg-gray-200 hover:bg-yellow-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid lg:grid-cols-2 gap-10">
        {menu[categoria as keyof typeof menu].map((plato) => (
          <div
            key={plato.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <img
                src={plato.imagen}
                alt={plato.nombre}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-5 left-5 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                ⭐ Especialidad
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-center">
                <h2 className="titulo text-3xl text-green-900">
                  {plato.nombre}
                </h2>

                <span className="text-yellow-500 text-xl">
                  ★★★★★
                </span>
              </div>

              <p className="text-gray-600 mt-4">
                {plato.descripcion}
              </p>

              <div className="flex justify-between items-center mt-8">
                <span className="text-3xl font-bold text-yellow-600">
                  S/. {plato.precio.toFixed(2)}
                </span>

                <button
                  onClick={() => setPlatoSeleccionado(plato)}
                  className="bg-green-900 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal del detalle */}
      <Modal
        abierto={platoSeleccionado !== null}
        cerrar={() => setPlatoSeleccionado(null)}
        titulo={platoSeleccionado?.nombre || ""}
      >
        {platoSeleccionado && (
          <DetallePlato plato={platoSeleccionado} />
        )}
      </Modal>
    </>
  );
}