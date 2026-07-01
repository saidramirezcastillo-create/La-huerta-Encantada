"use client";

import { useCart } from "./cart/CartContext";

interface Props {
  abierto: boolean;
  cerrar: () => void;
  plato: any;
}

export default function MenuDetalleModal({
  abierto,
  cerrar,
  plato,
}: Props) {

  const { agregarProducto } = useCart();

  if (!abierto || !plato) return null;

  return (

    <div className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl max-w-5xl w-full overflow-hidden shadow-2xl animate-[fadeIn_.25s_ease]">

        <div className="grid lg:grid-cols-2">

          <img
            src={plato.imagen}
            alt={plato.nombre}
            className="w-full h-full object-cover"
          />

          <div className="p-10">

            <button
              onClick={cerrar}
              className="float-right text-3xl"
            >
              ✖
            </button>

            <h2 className="text-4xl font-bold text-green-900">

              {plato.nombre}

            </h2>

            <div className="flex gap-3 mt-5 flex-wrap">

              <span className="bg-yellow-500 px-4 py-2 rounded-full font-bold">
                ⭐ {plato.rating}
              </span>

              {plato.chef && (
                <span className="bg-green-700 text-white px-4 py-2 rounded-full">
                  👨‍🍳 Chef recomienda
                </span>
              )}

              {plato.ventas >= 800 && (
                <span className="bg-red-600 text-white px-4 py-2 rounded-full">
                  🔥 Más vendido
                </span>
              )}

            </div>

            <p className="text-gray-600 leading-8 mt-8">

              {plato.descripcion}

            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-gray-100 rounded-2xl p-5">

                <div className="text-3xl">

                  📦

                </div>

                <h3 className="font-bold mt-3">

                  Pedidos

                </h3>

                <p>

                  {plato.ventas}

                </p>

              </div>

              <div className="bg-gray-100 rounded-2xl p-5">

                <div className="text-3xl">

                  ⏱

                </div>

                <h3 className="font-bold mt-3">

                  Tiempo

                </h3>

                <p>

                  {plato.tiempo} min

                </p>

              </div>

            </div>

            <div className="flex justify-between items-center mt-10">

              <span className="text-4xl font-bold text-yellow-600">

                S/. {plato.precio.toFixed(2)}

              </span>

              <button

                onClick={() => {

                  agregarProducto({

                    id: plato.id,

                    nombre: plato.nombre,

                    precio: plato.precio,

                    imagen: plato.imagen,

                    cantidad: 1,

                  });

                  cerrar();

                }}

                className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"

              >

                🛒 Agregar

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}