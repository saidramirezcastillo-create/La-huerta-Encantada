"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

import MenuDetalleModal from "./MenuDetalleModal";
import { useCart } from "./cart/CartContext";
import { useToast } from "./ToastContext";

interface Props {
  plato: any;
}

export default function MenuCard({ plato }: Props) {

  const { agregarProducto } = useCart();
  const { mostrarToast } = useToast();

  const [favorito, setFavorito] = useState(false);
  const [detalleAbierto, setDetalleAbierto] = useState(false);

  return (
    <>
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

        {/* Imagen */}

        <div className="relative overflow-hidden">

          <img
            src={plato.imagen}
            alt={plato.nombre}
            className="w-full h-64 object-cover group-hover:scale-110 duration-700"
          />

          {/* Ver detalles */}

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">

            <button
              onClick={() => setDetalleAbierto(true)}
              className="bg-white text-green-800 font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
            >
              👁 Ver detalles
            </button>

          </div>

          {/* Favorito */}

          <button
            onClick={() => setFavorito(!favorito)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 shadow-lg hover:scale-110 transition"
          >

            <Heart
              size={22}
              className={
                favorito
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500"
              }
            />

          </button>

          {/* Chef */}

          {plato.chef && (

            <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold shadow-lg">

              👨‍🍳 Chef Recomienda

            </div>

          )}

          {/* Más vendido */}

          {plato.ventas >= 800 && (

            <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-bold animate-pulse">

              🔥 Más vendido

            </div>

          )}

        </div>

        {/* Información */}

        <div className="p-6">

          <div className="flex justify-between items-start">

            <h2 className="text-2xl font-bold text-green-900">

              {plato.nombre}

            </h2>

            <span className="text-yellow-600 text-2xl font-bold">

              S/. {plato.precio.toFixed(2)}

            </span>

          </div>

          <p className="text-gray-500 mt-3 min-h-[50px] leading-7">

            {plato.descripcion}

          </p>

          {/* Etiquetas */}

          <div className="flex flex-wrap gap-2 mt-5">

            {plato.chef && (

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">

                👨‍🍳 Chef

              </span>

            )}

            {plato.rating >= 4.8 && (

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">

                ⭐ Premium

              </span>

            )}

            {plato.ventas >= 300 && (

              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">

                🔥 Popular

              </span>

            )}

          </div>

          <div className="flex justify-between items-center mt-6">

            <div>

              <div className="flex items-center gap-2">

                <span className="text-yellow-500 text-xl">

                  ⭐

                </span>

                <span className="font-bold text-gray-700">

                  {plato.rating}

                </span>

              </div>

              <p className="text-gray-500 text-sm mt-1">

                🔥 {plato.ventas} pedidos

              </p>

            </div>

            <div className="bg-green-50 px-3 py-2 rounded-xl text-green-800 font-semibold">

              ⏱ {plato.tiempo} min

            </div>

          </div>

          {/* Botón */}

          <button
            onClick={() => {

              agregarProducto({
                id: plato.id,
                nombre: plato.nombre,
                precio: plato.precio,
                imagen: plato.imagen,
                cantidad: 1,
              });

              mostrarToast(
                "Producto agregado",
                `${plato.nombre} fue agregado al carrito.`,
                () => {

                  window.dispatchEvent(
                    new Event("abrir-carrito")
                  );

                }
              );

            }}
            className="mt-6 w-full rounded-2xl py-4 font-bold text-lg text-white bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 hover:shadow-2xl hover:scale-105 duration-500 transition-all"
          >

            🛒 Agregar al carrito

          </button>

        </div>

      </div>

      <MenuDetalleModal
        abierto={detalleAbierto}
        cerrar={() => setDetalleAbierto(false)}
        plato={plato}
      />

    </>
  );

}