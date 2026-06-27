"use client";

import { useState } from "react";
import { useCart } from "./cart/CartContext";

interface Props {
  plato: any;
}

export default function DetallePlato({ plato }: Props) {
  const { agregarProducto } = useCart();

  const [mensaje, setMensaje] = useState(false);

  const agregar = () => {
    agregarProducto({
      id: plato.id,
      nombre: plato.nombre,
      precio:
        typeof plato.precio === "number"
          ? plato.precio
          : Number(
              String(plato.precio)
                .replace("S/.", "")
                .replace("S/", "")
                .trim()
            ),
      imagen: plato.imagen,
      cantidad: 1,
    });

    setMensaje(true);

    setTimeout(() => {
      setMensaje(false);
    }, 2500);
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Imagen */}
        <img
          src={plato.imagen}
          alt={plato.nombre}
          className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
        />

        {/* Información */}
        <div>

          <span className="bg-yellow-500 px-4 py-2 rounded-full font-bold">
            ⭐ Especialidad de la Casa
          </span>

          <h2 className="titulo text-5xl text-green-900 mt-6">
            {plato.nombre}
          </h2>

          <div className="text-yellow-500 text-2xl mt-4">
            ★★★★★
          </div>

          <p className="mt-6 text-gray-600 leading-8">
            {plato.descripcion}
          </p>

          <div className="mt-8">

            <h3 className="font-bold text-xl">
              Incluye:
            </h3>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Ensalada Fresca</li>
              <li>✔ Papas Doradas</li>
              <li>✔ Cremas de la Casa</li>
              <li>✔ Bebida Opcional</li>
            </ul>

          </div>

          <div className="mt-10 flex justify-between items-center">

            <span className="text-4xl font-bold text-yellow-600">
              {typeof plato.precio === "number"
                ? `S/. ${plato.precio.toFixed(2)}`
                : plato.precio}
            </span>

            <button
              onClick={agregar}
              className="bg-green-900 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              🛒 Agregar al Pedido
            </button>

          </div>

        </div>

      </div>

      {/* Notificación Premium */}
      {mensaje && (
        <div
          className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-green-200 p-4 w-80 z-[9999] animate-[slideIn_.4s_ease]"
        >

          <div className="flex gap-4">

            <img
              src={plato.imagen}
              alt={plato.nombre}
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div className="flex-1">

              <div className="flex items-center gap-2">

                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                  ✓
                </div>

                <span className="font-bold text-green-700">
                  Pedido agregado
                </span>

              </div>

              <h3 className="mt-2 font-bold text-lg text-gray-800">
                {plato.nombre}
              </h3>

              <p className="text-gray-500 text-sm">
                Se agregó correctamente a tu pedido.
              </p>

              <div className="flex justify-between items-center mt-4">

                <span className="font-bold text-yellow-600 text-lg">
                  {typeof plato.precio === "number"
                    ? `S/. ${plato.precio.toFixed(2)}`
                    : plato.precio}
                </span>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold transition">
                  🛒 Ver carrito
                </button>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}