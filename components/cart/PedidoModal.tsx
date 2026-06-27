"use client";

interface Props {
  abierto: boolean;
  cerrar: () => void;
  paraMesa: () => void;
  paraLlevar: () => void;
}

export default function PedidoModal({
  abierto,
  cerrar,
  paraMesa,
  paraLlevar,
}: Props) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center">

      <div className="bg-white rounded-3xl p-8 w-[95%] max-w-md shadow-2xl animate-[fadeIn_.3s_ease]">

        <div className="text-center">

          <div className="text-6xl mb-5">
            🍽️
          </div>

          <h2 className="titulo text-3xl text-green-900">
            ¿Cómo deseas tu pedido?
          </h2>

          <p className="text-gray-500 mt-3">
            Elige una opción para continuar.
          </p>

        </div>

        <div className="mt-8 space-y-4">

          <button
            onClick={paraMesa}
            className="w-full bg-green-800 hover:bg-green-700 text-white rounded-2xl py-4 text-lg font-bold transition hover:scale-105"
          >
            🍽️ Consumir en Mesa
          </button>

          <button
            onClick={paraLlevar}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl py-4 text-lg font-bold transition hover:scale-105"
          >
            🛍️ Para Llevar
          </button>

          <button
            onClick={cerrar}
            className="w-full mt-2 border border-gray-300 rounded-2xl py-3 hover:bg-gray-100"
          >
            Cancelar
          </button>

        </div>

      </div>

    </div>
  );
}